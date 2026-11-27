// 加密／解密付費解讀內容。內容只以加密形式放在網站上，沒有解鎖碼就讀不到。
//
// 加密：node tools/lock.mjs encrypt 你的解讀.json 解鎖碼
//       → 產生 reading.lock（網站讀這個檔）
// 解密：node tools/lock.mjs decrypt 解鎖碼 輸出.json
//       → 把目前的內容還原成可編輯的 JSON（改完再 encrypt 一次）
// 換碼：先用舊碼 decrypt，再用新碼 encrypt。
//
// 注意：不要把解密後的 JSON 放進這個儲存庫，GitHub Pages 會把它公開。

import { readFileSync, writeFileSync } from "node:fs";
import { webcrypto as crypto } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const LOCK = join(dirname(fileURLToPath(import.meta.url)), "..", "reading.lock");
const ITER = 200000;
const norm = (c) => String(c).toUpperCase().replace(/[^A-Z0-9]/g, "");
const b64 = (u8) => Buffer.from(u8).toString("base64");
const unb64 = (s) => new Uint8Array(Buffer.from(s, "base64"));

async function key(code, salt) {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(norm(code)), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
}

const [cmd, a, b] = process.argv.slice(2);
if (cmd === "encrypt" && a && b) {
  const plain = JSON.stringify(JSON.parse(readFileSync(a, "utf8")));
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await key(b, salt), new TextEncoder().encode(plain));
  writeFileSync(LOCK, JSON.stringify({ v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(ct)) }) + "\n");
  console.log("已寫入 reading.lock");
} else if (cmd === "decrypt" && a && b) {
  const l = JSON.parse(readFileSync(LOCK, "utf8"));
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(l.iv) }, await key(a, unb64(l.salt)), unb64(l.data));
  writeFileSync(b, JSON.stringify(JSON.parse(new TextDecoder().decode(pt)), null, 2) + "\n");
  console.log("已解密到 " + b);
} else {
  console.log("用法：\n  node tools/lock.mjs encrypt 解讀.json 解鎖碼\n  node tools/lock.mjs decrypt 解鎖碼 輸出.json");
  process.exit(1);
}

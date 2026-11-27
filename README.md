# 數字基因密碼職場解讀網站

輸入生日，算出數字基因密碼（職場天賦）與流年（職場策略），放在 IG 自介連結使用。

## 修改你的資料
打開 `index.html`，找到最下方的 `CONFIG`：

```js
const CONFIG = {
  igHandle: "your_ig_id",       // 你的 IG 帳號（不含 @）
  brandName: "懂職場的靈數老師",  // 你的品牌名稱
  defaultYear: 2027              // 預設顯示哪一年的流年
};
```

預約按鈕會開啟 IG 私訊，數字的解讀留在一對一諮詢中說明。

## 上線（GitHub Pages，免費）
1. GitHub 儲存庫 → Settings → Pages
2. Source 選「Deploy from a branch」，選這個分支與 `/ (root)`，按 Save
3. 約 1 分鐘後網址會顯示在同一頁，例如 `https://shulibook.github.io/shulibook/`
4. 把網址貼到 IG 自介的連結欄位

## 付費完整解讀（自動解讀）
算出數字後，訪客會看到免費的稱號預告（例如「8 號｜成就型掌權者」），付費取得**解鎖碼**後，就能立即看到完整的職場解讀與流年策略。

- 解讀內容加密存放在 `reading.lock`，沒有解鎖碼的人就算查看網頁原始碼也讀不到。
- 價格與付款方式在 `index.html` 的 `CONFIG` 裡設定：`price`、`priceOrig`、`payUrl`。
- `payUrl` 留空：按鈕會開啟 IG 私訊，收款後你再把解鎖碼傳給對方。
- `payUrl` 填付款連結（綠界、LINE Pay、Portaly 等）：如果金流後台可以設定「付款完成後導回網址」，填
  `https://shulibook.github.io/shulibook/#unlock=你的解鎖碼`，付款後就會自動解鎖，完全不用你手動處理。
- 解鎖過的手機會記住，下次打開不用再輸入。

### 修改內容或更換解鎖碼（需要 Node.js）
```bash
node tools/lock.mjs decrypt 目前的解鎖碼 解讀.json   # 還原成可編輯的檔案
# 編輯 解讀.json
node tools/lock.mjs encrypt 解讀.json 新的或原本的解鎖碼
```
**不要**把 `解讀.json` 上傳到這個儲存庫，GitHub Pages 會把它公開。所有買家共用同一組解鎖碼，如果發現碼被外流，換一組新碼即可。

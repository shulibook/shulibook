# 數字基因密碼職場解讀網站

輸入生日，算出數字基因密碼（職場天賦）與流年（職場策略），放在 IG 自介連結使用。

## 修改你的資料
打開 `index.html`，找到最下方的 `CONFIG`：

```js
const CONFIG = {
  igHandle: "your_ig_id",       // 你的 IG 帳號（不含 @）
  brandName: "懂職場的靈數老師",  // 你的品牌名稱
  defaultYear: 2027,             // 預設顯示哪一年的流年
  lineId: "@123abcde"            // LINE 官方帳號 ID（含 @），留空就不顯示 LINE 按鈕
};
```

填入 `lineId` 後會出現：
- 右下角常駐的「LINE 管家」按鈕：點了直接加入你的 LINE 官方帳號
- 結果頁的「用 LINE 問惠姐」按鈕：自動帶入對方的數字基因密碼與流年訊息，方便你接續諮詢

LINE ID 可在 LINE Official Account Manager 的「帳號設定」找到（@ 開頭那串）。

預約按鈕會開啟 IG 私訊，數字的解讀留在一對一諮詢中說明。

## 上線（GitHub Pages，免費）
1. GitHub 儲存庫 → Settings → Pages
2. Source 選「Deploy from a branch」，選這個分支與 `/ (root)`，按 Save
3. 約 1 分鐘後網址會顯示在同一頁，例如 `https://shulibook.github.io/shulibook/`
4. 把網址貼到 IG 自介的連結欄位

# 生命靈數職場解讀網站

輸入生日，算出生命靈數（職場天賦）與流年（職場策略），放在 IG 自介連結使用。

## 修改你的資料
打開 `index.html`，找到最下方的 `CONFIG`：

```js
const CONFIG = {
  igHandle: "your_ig_id",       // 你的 IG 帳號（不含 @）
  brandName: "懂職場的靈數老師",  // 你的品牌名稱
  defaultYear: 2027              // 預設顯示哪一年的流年
};
```

各數字的解讀文字在 `LIFE`（生命靈數）與 `YEAR`（流年）裡，可直接改成你自己的說法。

## 上線（GitHub Pages，免費）
1. GitHub 儲存庫 → Settings → Pages
2. Source 選「Deploy from a branch」，選這個分支與 `/ (root)`，按 Save
3. 約 1 分鐘後網址會顯示在同一頁，例如 `https://shulibook.github.io/shulibook/`
4. 把網址貼到 IG 自介的連結欄位

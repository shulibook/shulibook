# 數字基因密碼職場解讀網站

輸入生日，算出數字基因密碼（職場天賦）與流年（職場策略），放在 IG 自介連結使用。

## 修改你的資料
打開 `index.html`，找到最下方的 `CONFIG`：

```js
const CONFIG = {
  igHandle: "your_ig_id",       // 你的 IG 帳號（不含 @）
  brandName: "懂職場的靈數老師",  // 你的品牌名稱
  defaultYear: 2027,             // 預設顯示哪一年的流年
  gaId: ""                       // Google Analytics 4 評估 ID（G- 開頭）
};
```

預約按鈕會開啟 IG 私訊，數字的解讀留在一對一諮詢中說明。

## 上線（GitHub Pages，免費）
1. GitHub 儲存庫 → Settings → Pages
2. Source 選「Deploy from a branch」，選這個分支與 `/ (root)`，按 Save
3. 約 1 分鐘後網址會顯示在同一頁，例如 `https://shulibook.github.io/shulibook/`
4. 把網址貼到 IG 自介的連結欄位

## 數據分析（Google Analytics 4）
1. 到 https://analytics.google.com 建立「資源」→ 選「網站」，填入你的網站網址
2. 複製「評估 ID」（`G-` 開頭），貼到 `CONFIG.gaId`，例如 `gaId: "G-ABC123XYZ"`
3. 存檔上傳後，在 GA 的「即時」報表就能看到訪客

除了瀏覽量，網站會記錄這些事件（在 GA →「報表」→「互動」→「事件」查看）：

| 事件名稱 | 意思 |
| --- | --- |
| `calculate` | 有人按了「開始解讀」（附帶算出的數字基因密碼 `life_path`、流年 `personal_year`） |
| `book_consult` | 有人按了「私訊我預約諮詢」 |
| `share` | 有人按了「分享給同事朋友」 |
| `visit_ig` | 有人點了你的 IG 連結 |
| `select_year` | 有人切換流年年份 |

想看「算完的人有多少比例來預約」，用 `book_consult ÷ calculate` 就是轉換率。生日本身不會被傳送。

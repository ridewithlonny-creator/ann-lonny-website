# Ann&Lonny 網站專案結構

這份文件記錄目前網站的主要檔案與用途。`node_modules`、`dist`、`.vinext`、`.wrangler`、`.pnpm-store`、`work` 等套件、建置及本機暫存目錄不列入。

```text
網站/
├─ .openai/
│  └─ hosting.json                    # OpenAI Sites 專案與託管設定
├─ app/
│  ├─ chatgpt-auth.ts                 # OpenAI Sites 身分驗證輔助程式，目前網站未使用登入
│  ├─ content.ts                      # 品牌、雙語文字、課程、教練、FAQ 與聯絡設定
│  ├─ globals.css                     # 全站版面、色彩、響應式設計與互動樣式
│  ├─ layout.tsx                      # 頁面外框、SEO 與社群分享 metadata
│  └─ page.tsx                        # 單頁網站結構、語言切換、選單與 FAQ 互動
├─ build/
│  └─ sites-vite-plugin.ts            # OpenAI Sites 的 Vite 建置整合
├─ db/
│  ├─ index.ts                        # Cloudflare D1 資料庫連線工具，目前網站未使用
│  └─ schema.ts                       # Drizzle 資料表定義，目前保持空白
├─ drizzle/
│  └─ meta/
│     └─ _journal.json                # Drizzle migration 紀錄
├─ examples/
│  └─ d1/
│     ├─ app/
│     │  └─ api/
│     │     └─ notes/
│     │        └─ route.ts             # D1 API 範例，目前網站未使用
│     └─ db/
│        └─ schema.ts                 # D1 資料表範例，目前網站未使用
├─ public/
│  ├─ assets/
│  │  └─ images/
│  │     ├─ ann-lonny-about.webp      # About 區塊合照
│  │     ├─ ann-lonny-hero-mobile.webp# 手機版 Hero 合照
│  │     ├─ ann-lonny-hero.webp       # 桌面版 Hero 合照
│  │     ├─ ann-profile.webp          # Ann 教練照片
│  │     ├─ hero-ski-placeholder.webp # 雙板課程示意圖
│  │     ├─ lonny-profile.webp        # Lonny 教練照片
│  │     ├─ snow-lesson-placeholder.webp
│  │     ├─ snowboard-adventure.webp
│  │     ├─ snowboard-placeholder.webp
│  │     ├─ snowboard-profile-one.webp
│  │     └─ snowboard-profile-two.webp
│  ├─ favicon.svg                     # 網站頁籤圖示
│  ├─ file.svg                        # Starter 圖示資源
│  ├─ globe.svg                       # Starter 圖示資源
│  ├─ og.png                          # 社群分享預覽圖片
│  └─ window.svg                      # Starter 圖示資源
├─ tests/
│  └─ rendered-html.test.mjs          # HTML 輸出測試檔
├─ worker/
│  └─ index.ts                        # Cloudflare Worker 與圖片最佳化入口
├─ .gitignore                         # Git 忽略規則
├─ drizzle.config.ts                  # Drizzle 設定
├─ eslint.config.mjs                  # ESLint 程式碼檢查設定
├─ next.config.ts                     # Next.js 設定
├─ package.json                       # 專案指令與套件清單
├─ pnpm-lock.yaml                     # 套件版本鎖定檔
├─ pnpm-workspace.yaml                # pnpm workspace 設定
├─ postcss.config.mjs                 # PostCSS 設定
├─ project-tree.md                    # 本文件
├─ README.md                          # 內容修改、圖片更換與部署說明
├─ tsconfig.json                      # TypeScript 設定
└─ vite.config.ts                     # Vite、vinext 與 Cloudflare 建置設定
```

## 日常最常修改的檔案

- `app/content.ts`：修改品牌名稱、中英文內容、課程、教練、FAQ、學生評價及聯絡方式。
- `public/assets/images/`：新增或更換網站照片。
- `app/globals.css`：調整顏色、字體、間距及手機版排版。
- `app/page.tsx`：調整區塊順序、按鈕、選單或互動功能。
- `app/layout.tsx`：修改 SEO、網站標題及社群分享資訊。

## 目前不需要修改的部分

`build`、`worker`、`db`、`drizzle`、`examples` 與大部分根目錄設定檔屬於建置或未來擴充基礎。一般更新網站文字與照片時，不需要修改這些檔案。

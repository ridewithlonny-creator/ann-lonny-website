# Ann&Lonny 滑雪與單板課程網站

Ann&Lonny 的中英文單頁品牌網站，用來介紹 Lonny 與 Ann、課程內容、日本與澳洲訂課流程，以及 WhatsApp、LINE、WeChat、Instagram 聯絡方式。

網站不包含線上付款、即時預約、會員系統或資料庫。

## 專案技術與重要設定

- Next.js App Router、React、TypeScript
- Vite、vinext 與 Cloudflare Vite Plugin
- OpenAI Sites 設定：`.openai/hosting.json`
- 套件管理：pnpm `11.9.0`
- Node.js：`22.13.0` 以上

請保留 `.openai/hosting.json`、`vite.config.ts`、`worker/` 與 `build/sites-vite-plugin.ts`。這些是 OpenAI Sites／Cloudflare 建置流程的一部分，不是一般的暫存檔。

## 檔案結構

- `app/page.tsx`：網站版面與互動。
- `app/content.ts`：品牌內容、雙語文字、課程、教練、FAQ 與聯絡方式。
- `app/globals.css`：顏色、字體、間距與響應式排版。
- `app/layout.tsx`：SEO、Open Graph、Twitter Card 與 favicon 設定。
- `public/assets/images/`：網站照片與聯絡 QR Code。
- `public/og.png`：社群分享預覽圖，尺寸為 `1200 × 630`。
- `public/favicon.svg`：瀏覽器頁籤圖示。
- `tests/rendered-html.test.mjs`：正式網站、圖片與 SEO 自動檢查。
- `.openai/hosting.json`：OpenAI Sites 專案設定，請勿刪除或更換。

## 本機安裝與預覽

第一次下載專案後，在 PowerShell 進入專案資料夾並執行：

```powershell
corepack enable
corepack prepare pnpm@11.9.0 --activate
pnpm install --frozen-lockfile
pnpm run dev
```

瀏覽器開啟終端機顯示的網址，通常是 `http://localhost:3000`。

## 發布前檢查指令

```powershell
pnpm run lint
pnpm run test
pnpm run build
pnpm run build:vercel
```

- `pnpm run build`：OpenAI Sites、Vite、vinext、Cloudflare 建置，輸出至 `dist/`。
- `pnpm run build:vercel`：Vercel 專用 Next.js 建置，輸出至 `.next/`。
- `pnpm run test`：先執行 vinext production build，再檢查正式 HTML、網站圖片、OG 圖與 favicon。

`dist/`、`.next/`、`.vinext/`、`node_modules/` 與本機快取都已由 `.gitignore` 排除，不應提交到 GitHub。

## 修改網站內容

### 品牌名稱與中英文文字

主要內容集中在 `app/content.ts`：

- `content.en`：英文。
- `content.zh`：繁體中文。
- `siteConfig.brandName`：品牌名稱。

若修改品牌名稱，也要同步更新 `app/layout.tsx` 的 SEO 標題與說明。

### 新增或刪除教練

在 `app/content.ts` 找到 `instructors`：

- 新增：複製一整個教練 `{ ... }` 區塊並修改內容。
- 刪除：刪除該教練完整區塊。
- 每個 `id` 必須不同。
- 照片放在 `public/assets/images/`，再修改 `image` 路徑。

### 新增或刪除課程

在 `app/content.ts` 找到 `lessons`：

- 新增：複製一整個課程 `{ ... }` 區塊。
- 刪除：刪除整個課程區塊。
- 修改 `title`、`description`、`image`、`alt`。
- `objectPosition` 可調整圖片在卡片中的裁切位置。

### 更換照片

1. 建議使用 WebP；QR Code 可使用清楚的 PNG 或 JPG。
2. Hero 建議寬度約 `2000 px`；卡片照片約 `1000–1600 px`。
3. 把照片放入 `public/assets/images/`。
4. 在 `app/content.ts` 或 `app/globals.css` 更新圖片路徑。
5. 保留一般內容圖片的 `loading="lazy"`。

公開學生或兒童照片前，請先取得本人或監護人的公開使用同意。

### 修改 Lonny 與 Ann 的聯絡方式

在 `app/content.ts` 找到 `siteConfig.contact`。Lonny 與 Ann 的 WhatsApp、LINE、WeChat、Instagram 分開管理：

```ts
contact: {
  lonny: {
    whatsapp: { href: "+61 ...", detail: { en: "...", zh: "..." } },
    line: { href: "/assets/images/contact/qr.jpg", detail: { en: "...", zh: "..." } },
    wechat: { href: "/assets/images/contact/qr.jpg", detail: { en: "...", zh: "..." } },
    instagram: { href: "https://www.instagram.com/.../", detail: { en: "...", zh: "..." } },
  },
  ann: {
    whatsapp: { href: "+61 459 495 550", detail: { en: "+61 459 495 550", zh: "+61 459 495 550" } },
    line: { href: "/assets/images/contact/ann-line-qr.jpg", detail: { en: "ID: 830309000", zh: "ID：830309000" } },
    wechat: { href: "/assets/images/contact/ann-wechat-qr.jpg", detail: { en: "ID: Annsnowsport", zh: "ID：Annsnowsport" } },
    instagram: { href: "https://www.instagram.com/ann_yu0309/", detail: { en: "@ann_yu0309", zh: "@ann_yu0309" } },
  },
}
```

- WhatsApp 可填國際電話號碼，網站會產生帶有預填訊息的對話連結。
- LINE、WeChat 可填完整網址或本機 QR Code 路徑。
- Instagram 填完整個人頁面網址。
- `href` 留空時，網站會顯示「加入連結」，不會產生失效網址。

預填訊息位於同一檔案的 `prefilledMessage.en` 與 `prefilledMessage.zh`。

### 修改中英文隱私權聲明

頁尾的隱私權聲明位於 `app/content.ts` 的 `footer.privacy`：

- `title`：頁尾展開按鈕文字。
- `updated`：最後更新日期。
- `intro`：聲明適用範圍與品牌資料。
- `sections`：各段標題與內容。

網站的資料處理方式、聯絡平台、訂課流程或第三方服務若有改變，應同步更新中英文版本與最後更新日期。涉及正式法律義務時，建議由熟悉實際營運地區的專業人士再次審閱。

## 第一次建立 GitHub Repository

以下步驟不會由網站自動執行，需要你登入 GitHub 並確認。

### 1. 在 GitHub 建立空白 Repository

1. 登入 [GitHub](https://github.com/)。
2. 點擊右上角 `+` → `New repository`。
3. Repository name 建議使用 `ann-lonny-website`。
4. 選擇 `Private` 或 `Public`。
5. 不要勾選自動建立 README、`.gitignore` 或 License，避免與本機檔案衝突。
6. 點擊 `Create repository`。

這一步需要：GitHub 登入，以及建立 Repository 的確認。

### 2. 檢查並建立本機提交

專案目前已經初始化 Git。進入專案資料夾後執行：

```powershell
git status
git add .
git commit -m "Prepare Ann&Lonny website for first deployment"
```

若 Git 第一次要求身份資料，先執行：

```powershell
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

再重新執行 `git commit`。

### 3. 連接 GitHub Repository

把下方帳號與 Repository 名稱替換成你的資料：

```powershell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ann-lonny-website.git
git branch -M main
git push -u origin main
```

如果出現 `remote origin already exists`，改用：

```powershell
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/ann-lonny-website.git
git push -u origin main
```

使用 HTTPS 第一次推送時，Windows Credential Manager 或瀏覽器可能要求登入 GitHub；請由你本人完成登入並批准 Git 權限。

## 從 GitHub 匯入 Vercel

### 1. 登入並授權 GitHub

1. 登入 [Vercel](https://vercel.com/)。
2. 點擊 `Add New...` → `Project`。
3. 選擇 GitHub，並依畫面安裝或授權 Vercel GitHub App。
4. 只授權 `ann-lonny-website`，或依你自己的需求選擇 Repository 範圍。
5. 找到剛推送的 Repository，點擊 `Import`。

這一步需要：Vercel 登入、GitHub 登入，以及批准 Vercel 讀取指定 Repository。

### 2. Vercel Build Settings

匯入畫面請使用以下設定：

| 設定 | 值 |
| --- | --- |
| Framework Preset | `Next.js` |
| Root Directory | `./` |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm run build:vercel` |
| Output Directory | 保持空白／使用 Next.js 預設 `.next` |
| Node.js Version | `22.x` |

不要把 Vercel Output Directory 設為 `dist`。`dist` 是 OpenAI Sites／Cloudflare 的輸出；Vercel 使用 `.next`。

目前網站沒有部署所需的秘密環境變數，因此 Vercel Environment Variables 可保持空白。未來若加入 API Key，請在 Vercel 設定中新增，不要把 `.env` 上傳 GitHub。

### 3. 部署

1. 確認上述設定。
2. 點擊 `Deploy`。
3. 等待 Build 與 Deployment 完成。
4. 開啟 Vercel 提供的網址，檢查中英文切換、FAQ、聯絡按鈕、OG 圖與手機排版。

點擊 `Deploy` 會建立公開部署，必須由你本人確認後才能執行。

## 未來更新網站

每次修改後先在本機檢查：

```powershell
pnpm run lint
pnpm run test
pnpm run build:vercel
```

確認通過後提交並推送：

```powershell
git status
git add .
git commit -m "Update website content"
git push
```

- 推送到 `main`：Vercel 會自動更新正式網站。
- 推送到其他分支或 Pull Request：Vercel 通常會建立 Preview Deployment。
- 若不希望立即更新正式網站，先建立新分支再推送。

## 自訂網域

1. 打開 Vercel 專案。
2. 前往 `Settings` → `Domains`。
3. 輸入已購買的網域。
4. 到網域供應商新增 Vercel 顯示的 DNS 記錄。
5. 等待 DNS 與 HTTPS 憑證生效。

新增網域與修改 DNS 都需要你登入相對應的平台並確認。

## 未來增加照片教學或 YouTube

不需要重做網站：

- 照片教學：在 `app/content.ts` 新增教學資料，再於 `app/page.tsx` 顯示卡片。
- YouTube：加入標題、短說明與影片網址，建議點擊後才載入影片，避免拖慢首頁。
- 內容累積到約 `6–10` 篇後，再考慮建立獨立 Resources 頁面。

網站不會自動播放音樂或影片。

## 正式發布前仍需確認

- 只公開已取得使用同意的學生評價與照片。
- 確認日本與澳洲最新價格、付款、取消、天氣與保險政策。

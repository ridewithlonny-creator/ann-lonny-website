# Ann&Lonny Website — Project Summary

> 本文件是未來對話的專案脈絡來源。每次網站功能、內容、架構、訂課流程或部署方式有實際變更後，都應同步更新本文件。

## 核對基準

- 最後核對日期：2026 年 9 月 19 日。
- 本次 working tree changes：中英文 FAQ 改為價格價值第一、Hanazono 第二，第一題預設展開；本次排序修改尚未提交或發布。
- 中文 FAQ 與價目表的起點標示為 Hirafu（比羅夫）及 Annupuri（安努普利），英文介面維持英文名稱；此項亦為尚未發布的本機修改。
- 本次發布：北海道 ACCENT 地區標示、Hanazono 與澳洲人數 FAQ、共同 Instagram 區塊已以 `5f08139` 發布，Vercel 回報 success；正式網站的瀏覽器檢查受自動審核限制，尚未完成，不能視為已驗證線上畫面。
- 核對範圍：目前儲存庫內的程式碼、設定、文件、測試與 `public/` 圖片資產。
- 核對時的正式程式版本：遠端 `main` 的 `5f08139`（`Update Hokkaido FAQs and add shared Instagram section`）；透過 GitHub 連線發布。本機 HEAD 仍為 `61e8efa`，工作目錄保留已發布修改，下次 Git 操作前須先同步遠端，避免覆蓋新提交。
- 本摘要只記錄儲存庫中已存在或既有文件已明確列出的內容，不代表尚未寫入儲存庫的口頭決定。

## 1. Project overview

Ann&Lonny 是一個繁體中文／英文雙語的單頁式個人品牌網站，用來：

- 介紹 Ann 與 Lonny 的背景、教學方式、證照與服務地點。
- 說明雙板、單板、兒童、成人、家庭，以及雪山探索與滑行紀錄課程。
- 分別說明日本北海道 ACCENT 與澳洲新州 Perisher 的訂課流程。
- 讓客人透過 WhatsApp、LINE、WeChat 或 Instagram 聯絡 Ann 或 Lonny。

網站本身不是線上訂課平台。目前沒有網站表單、會員系統、登入、資料庫、線上付款、即時預約或 Booking Calendar。詢問、正式表單、付款與課表確認都在網站外完成。

## 2. Tech stack

- Next.js `16.2.6` App Router。
- React／React DOM `19.2.6`。
- TypeScript `5.9.3`，開啟 strict mode。
- Vite `8.0.13` 與 vinext `0.0.50`。
- Cloudflare Vite Plugin、Wrangler 與 Cloudflare Worker 入口。
- OpenAI Sites 專案設定：`.openai/hosting.json`。
- pnpm `11.9.0`；Node.js 要求 `22.13.0` 以上。
- 頁面樣式實際集中在 `app/globals.css` 的手寫 CSS；專案同時保留 Tailwind／PostCSS 套件設定。
- ESLint `9` 與 Next.js Core Web Vitals／TypeScript 規則。
- Node 內建測試執行器，用於正式輸出 HTML、SEO 與資產檢查。
- Drizzle ORM 與 D1 基礎檔案仍保留，但目前 schema 為空、OpenAI Sites 設定的 D1／R2 均為 `null`，網站沒有使用資料庫。

### 建置路徑

- `pnpm run dev`：vinext 本機開發環境。
- `pnpm run build`：OpenAI Sites／Vite／vinext／Cloudflare 建置，輸出至 `dist/`。
- `pnpm run build:vercel`：先執行 TypeScript 檢查，再使用 Next.js 建置，輸出至 `.next/`。
- `pnpm run test`：先執行 vinext production build，再執行 `tests/rendered-html.test.mjs`。
- `pnpm run lint`：ESLint。
- `pnpm run typecheck`：`tsc --noEmit`。

### 部署狀態

- 對外使用的 Vercel 正式網站：<https://ann-lonny-website.vercel.app/>；此網址必須保留，既有學生不需要更換連結。
- 2026 年 8 月 16 日已將提交 `61e8efa` 成功發布至同一個 Vercel 正式網址，包含 Ann 的親子滑雪簡介更新。
- OpenAI Sites 專案只保留作內部用途，已恢復為僅限擁有者存取，不作為對外網站。
- 2026 年 9 月 19 日已將價格表、澳洲訂課流程、兒童年齡說明、區塊排序與 About 合照發布至原 Vercel 網址；提交 `70cf0a1` 的 Vercel 狀態為 success，且已在正式網站驗證內容與中英文切換。

## 3. Brand identity

- 品牌名稱：Ann&Lonny。
- 品牌形式：由兩位教練本人經營的個人教學品牌，不是大型旅行社或網站型訂課平台。
- 服務地點：南半球雪季的澳洲新州 Perisher；北半球雪季的日本北海道 ACCENT，不限於二世谷。
- 語言：中文與英文。
- 共同背景：兩位都是屏東科技大學休閒運動系校友，畢業後曾在台灣一起擔任健身教練，也共同喜歡衝浪。
- 現有品牌主張：依學生的程度、目標、信心、學習狀態、地形、雪況與雪道人流隨時調整課程；重視清楚說明、科學理解、耐心鼓勵、安全與樂趣。
- 兩位教練目前都列有相同證照：APSI 單板三級、CASI 單板二級、APSI 雙板二級、Avalanche Skills Training 2（AST 2）。
- 現有經驗敘述：兩位都有 5 季以上官方雪校經驗，每季約 300–400 小時；教學文案說明這項經驗有助於更快找出動作問題的原因，並清楚說明調整方法。

## 4. Target users

目前網站內容明確涵蓋：

- 想以中文或英文上課的學生。
- 兒童與家庭。
- 成人與小團體：日本每位教練最多 4 人，澳洲私人課每位教練最多 5 人；成人課程卡片仍建議 4 人以內。
- 第一次接觸雙板或單板的初學者。
- 想改善動作、進行影片分析或提升滑行效率的學生。
- 想探索更多雪道、全山地形，或拍攝滑行照片與影片的學生。
- 從兒童競速學員，到年長成人初次學習單板等不同年齡與程度的學生。

## 5. Current completed features

### 內容與版面

- 單頁式 Landing Page，依序為 Header、Hero、About、Lessons、Instructors、Why Learn With Us、Testimonials、Booking Process、Pricing、FAQ、Contact、Instagram 與 Footer；既有導覽項目同步排序。
- 閱讀順序先呈現背景、教學專業與學生回饋，再呈現訂課流程與價格，讓客人先理解教學價值；保留課程區的價格捷徑供已有需求的客人直達。
- 6 種課程卡片：雙板、單板、兒童、成人、家庭、雪山探索與滑行紀錄。
- 訂課流程後設有中英文課程價格區，導覽列與課程區皆可直達；日本為預設第一選項，澳洲為第二選項，且不影響訂課流程的地區選擇。
- 日本選項保留全日價目表與詢問空檔入口；澳洲選項不列固定金額，簡要提醒先至 Perisher 官網查價，再聯絡確認上課時間與指定教練姓名後訂課；完整流程放在訂課流程區。
- 日本課程從 Hirafu／Annupuri 開始為每組 110,000 日圓，留壽都 Rusutsu 開始為每組 130,000 日圓；皆含稅、旺季同價，每位教練帶一組最多 4 人，6 歲以下建議一對一而非強制限制。
- FAQ 明確說明雙板從 4 歲、單板從 7 歲開始；6 歲以下建議 1 對 1 教學，中英文及價目表提醒保持一致。
- 日本全日課包含 5 小時教學＋1 小時用餐，目前無半日課；雪票、雪具租借、餐飲與交通另計，FAQ 的人數與價格說明已同步更新。
- 2 張教練卡片，包含照片、主教項目、語言、證照與簡介。
- Ann 的中英文簡介說明滑雪雖屬極限運動，但掌握合適的安全範圍與速度後，也能成為全家共同體驗的活動，並強調以安全、簡單的方式帶領家庭享受滑雪。
- 「我們是誰」中英文文案說明兩位都持有 APSI 單板三級與雙板二級資格，並能清楚解釋動作、技術與背後理論；補充雙板資格的修改尚未發布。
- 日本／澳洲訂課流程切換器，各自顯示 5 個步驟與確認提醒。
- 8 個 FAQ，使用原生 `<details>`／`<summary>` 收合元件；第 1 題預設展開，說明兩位三級教練在日本的課程價格與教學效率價值，並避免保證固定學習成果；其餘題目預設收合，第 8 題說明天候不佳時的教學安排。
- Ann 與 Lonny 分開顯示 4 種聯絡方式，共 8 個聯絡入口。
- Contact 下方新增共同經營的 Instagram `@alcouplelife` 區塊，介紹澳洲 Perisher 教學日常及未來日本雪季生活；使用一般外部連結、不嵌入動態，保留個人聯絡入口。
- FAQ 第 2 題依 Lonny 提供的資訊說明 Hanazono 暫定從 Hirafu／Annupuri 開始、視程度與開放情況滑行前往，官方規定待 2026 年 10 月再次確認；第 6 題明列日本最多 4 人、澳洲私人課最多 5 人，中英文一致。
- 頁尾包含中英文正式隱私權聲明，最後更新日期為 2026 年 7 月 31 日。
- 學生評價區已啟用並顯示 4 筆取得公開同意的真實評價；評價保留原始語言，課程與地點標示會隨網站語言切換。
- 評價卡片在手機版使用單欄，`680px` 以上使用雙欄網格；未來可直接在資料陣列追加更多評價。

### 語言與互動

- 預設語言為繁體中文。
- Header 中的繁中／EN 切換按鈕在手機與桌面版都獨立顯示。
- 語言偏好儲存在瀏覽器 `localStorage` 的 `site-locale`。
- 切換語言時會同步更新 `<html lang>` 為 `zh-Hant` 或 `en`。
- 手機版選單可用 Escape 鍵關閉，開啟時會鎖定背景捲動。
- WhatsApp 連結會自動帶入目前語言的預填訊息。
- LINE 與 WeChat 目前連到本機 QR Code 圖片；Instagram 連到公開帳號。

### 響應式、可用性與視覺

- Mobile-first CSS；主要斷點為 `680px`、`960px` 與 `1240px`。
- Header 為固定式深色導覽列；手機版使用漢堡選單，桌面版顯示完整導覽。
- 手機與桌面 Hero 使用不同 WebP 圖片與裁切位置。
- 課程圖片、教練圖片與 About 圖片都有固定比例、`object-fit: cover` 與個別裁切設定。
- 非 Hero 圖片使用 `loading="lazy"`。
- 具備 skip link、`:focus-visible`、ARIA 標籤、按鈕狀態、語意化區塊與鍵盤操作支援。
- 支援 `prefers-reduced-motion`，並只使用短暫的 hover／狀態 transition；沒有動畫套件、carousel、slider 或自動播放媒體。

### SEO、社群分享與測試

- 預設 HTML 語言為 `zh-Hant`。
- Next.js metadata 包含 title、description、keywords、canonical、robots、Open Graph 與 Twitter Card。
- Open Graph locale 為 `zh_TW`，alternate locale 為 `en_AU`。
- `public/og.png` 為有效的 `1200 × 630` PNG。
- `public/favicon.svg` 已由 metadata 引用。
- 自動測試會檢查 HTML 狀態、主要區塊、中文 metadata、OG／Twitter metadata、favicon、聯絡連結、隱私權聲明，以及程式碼引用的本機資產是否存在。

## 6. Current project structure

```text
.
├─ .openai/
│  └─ hosting.json              # OpenAI Sites 專案設定；D1、R2 目前未啟用
├─ app/
│  ├─ chatgpt-auth.ts           # Sites header-based auth helper；目前頁面未使用
│  ├─ content.ts                # 品牌、雙語內容、課程、教練、FAQ、聯絡與隱私聲明
│  ├─ globals.css               # 全站設計 token、版面與 responsive CSS
│  ├─ layout.tsx                # SEO、Open Graph、Twitter Card、favicon
│  └─ page.tsx                  # 單頁版面、語言切換、選單與訂課地區互動
├─ build/
│  └─ sites-vite-plugin.ts      # 把 Sites 設定與 migrations 包進 dist
├─ db/
│  ├─ index.ts                  # D1／Drizzle connector；目前未使用
│  └─ schema.ts                 # 空 schema
├─ drizzle/
│  └─ meta/_journal.json        # 空 migration journal
├─ examples/d1/                 # 未接入正式網站的 D1 notes 範例
├─ public/
│  ├─ assets/images/            # Hero、About、課程、教練與聯絡 QR 圖片
│  ├─ favicon.svg
│  ├─ og.png
│  └─ file.svg／globe.svg／window.svg
├─ tests/
│  └─ rendered-html.test.mjs    # Production HTML／SEO／資產檢查
├─ worker/
│  └─ index.ts                  # vinext Cloudflare Worker 與圖片處理入口
├─ .gitignore
├─ CHANGELOG.md                 # 依完成日期記錄功能、修正、內容、設計、重構與文件變更
├─ README.md                    # 維護、GitHub、Vercel、自訂網域與未來擴充說明
├─ WORKFLOW.md                  # 開發、驗證、文件維護與 Git 協作規則
├─ PROJECT_SUMMARY.md           # 專案目前狀態、架構、流程、待辦與已知問題
├─ project-tree.md              # 舊版結構說明；目前圖片清單已不完整
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ postcss.config.mjs
├─ drizzle.config.ts
├─ tsconfig.json
└─ vite.config.ts
```

### 正式頁面目前引用的圖片

- Hero：`ann-lonny-hero-mobile.webp`、`ann-lonny-hero.webp`。
- About：`ann-lonny-about-2026.jpg`，使用 Lonny 提供的 APSI 背心雙人合照，以靠下的顯示位置與輕微放大減少天空留白；原始照片與舊圖均保留。
- 課程：`course-ski.webp`、`course-snowboard.webp`、`course-kids.webp`、`course-adults.webp`、`course-family.webp`、`snowboard-adventure.webp`。
- 教練：`lonny-profile-2026.webp`、`ann-profile-2026.webp`。
- 聯絡：Lonny／Ann 的 LINE 與 WeChat QR Code。
- SEO：`og.png`、`favicon.svg`。

## 7. Booking workflow

### 日本｜北海道 ACCENT

1. 客人先查看依上課起點區分的價格表，再聯絡詢問日期、上課起點、人數與雙板／單板需求。
2. Ann／Lonny 確認價格與教練時間。
3. 確認基本安排後，傳送 Google Form 訂課表單。
4. Accent 依確認內容寄送 Invoice，客人透過學校完成付款。
5. 完成付款並收到確認後，課程正式成立。

網站提醒：送出詢問或表單並不代表完成訂課；完成付款後才正式成立。

### 澳洲｜新州 Perisher

1. 客人先到 Perisher 官網查看當時價格。
2. 客人與 Ann／Lonny 確認上課日期及時間，並取得指定教練姓名。
3. 客人在 Perisher 官網訂課，並在指定教練欄位填入 Ann／Lonny 提供的姓名。
4. 完成官網付款後，把收據截圖傳給 Ann／Lonny。
5. Ann／Lonny 向主管確認課程已排入官方工作課表，再私訊通知客人訂課成功。

網站提醒：訂課前先確認時間並取得教練姓名；付款後回傳收據，等待 Ann／Lonny 私訊確認訂課成功。

## 8. Design principles

以下是目前程式碼實際呈現的設計規則：

- 以深海軍藍、雪白、冰藍與低彩度灰藍為主色。
- 最大內容寬度為 `1200px`，桌面版避免文字與卡片無限制拉寬。
- 使用系統無襯線字體堆疊，包含 `Noto Sans TC` 與 `PingFang TC` fallback，沒有外部字型下載。
- 以大尺寸攝影、留白、清楚標題階層與低密度版面建立戶外品牌感。
- 卡片使用一致的 `16px`／`24px` 圓角、細邊框與克制陰影。
- Hero 使用深色半透明漸層提高文字對比；其餘區塊以純色背景建立節奏。
- CTA 分為實心主要按鈕與描邊次要按鈕。
- Hover 只使用輕微位移、陰影、底線或圖片縮放；尊重 reduced-motion 設定。
- 手機版不是單純縮小桌面版：導覽、按鈕、卡片、聯絡方式與訂課切換器都有專用排列。

## 9. Pending tasks

以下項目已由目前儲存庫內容明確指出尚待處理或確認：

- 只應公開已取得同意的學生照片與影片。
- 2026 年 10 月再次確認 Hanazono 官方規定並更新 FAQ；目前文案為 Lonny 提供的暫定安排，並非已核准的官方政策。
- 日本課程價格與費用範圍已於 2026 年 9 月 18 日由 Lonny 確認；澳洲價格依 Perisher 官網，付款、取消、天氣與保險政策仍需隨營運情況核對。
- 隱私權聲明應隨聯絡平台、表單、付款或第三方服務變更而同步更新；README 建議依實際營運地區交由專業人士再次審閱。

## 10. Known issues

- `project-tree.md` 的圖片清單已落後於目前儲存庫：它沒有列出現行的 `course-*`、`*-profile-2026.webp` 與 contact QR Code 等檔案，且仍把數個舊 placeholder 圖片描述為主要資產。
- `package.json` 的 package name 仍是 `site-creator-vinext-starter`，`worker/index.ts` 的檔頭也仍保留 starter template 名稱；這不影響功能，但不是品牌化命名。
- 儲存庫仍保留多個未被正式頁面引用的舊／starter 資產：`ann-profile.webp`、`lonny-profile.webp`、`hero-ski-placeholder.webp`、`snow-lesson-placeholder.webp`、`snowboard-placeholder.webp`、`snowboard-profile-one.webp`、`snowboard-profile-two.webp`、Ann 的 Instagram／WhatsApp QR、Lonny 的 WhatsApp QR，以及 `file.svg`、`globe.svg`、`window.svg`。
- `public/favicon.svg` 目前是藍色幾何圖示，而 Header／Footer 使用的是圓框菱形文字標記；儲存庫內沒有獨立的 Ann&Lonny Logo 檔案。
- 網站預設顯示中文，但 `og.png` 圖面文字目前只有英文；metadata 本身仍以中文為預設。
- D1、Drizzle、ChatGPT auth 與 D1 notes example 都保留在專案內，但目前正式頁面沒有使用它們。這些檔案屬於保留的 Sites／Cloudflare 基礎架構或範例，不應在未確認用途前直接刪除。

## 11. Future roadmap

目前 README 已明確記錄以下未來方向，但尚未實作：

- 增加照片教學內容：在 `app/content.ts` 新增資料，再於 `app/page.tsx` 顯示卡片。
- 增加 YouTube 內容：加入標題、短說明與影片網址，並採點擊後才載入的方式，避免拖慢首頁。
- 當教學內容累積約 `6–10` 篇後，再考慮建立獨立 Resources 頁面。
- 透過 Vercel 專案設定連接自訂網域；目前儲存庫只包含操作說明，沒有版本控制中的自訂網域設定。

## 12. Maintenance rules for future chats

未來修改完成後，至少檢查並更新以下相關區塊：

- 內容、課程、教練、FAQ、聯絡或政策改動：更新第 3、5、7、9 節。
- 新增、刪除或重新命名檔案：更新第 6、10 節。
- 設計系統或 responsive 行為改動：更新第 8 節。
- 新功能完成：從第 9 或 11 節移到第 5 節。
- 部署、框架或建置設定改動：更新第 2 節與「核對基準」。
- 每次更新本文件時，重新填寫核對日期與對應 commit；尚未提交的內容應明確標示為 working tree changes。
- 每項完成的程式或文件任務都應在 `CHANGELOG.md` 新增當日紀錄，包含已完成的功能、修正、內容、設計、重構與文件變更。
- `CHANGELOG.md` 只記錄實際完成且保留在專案中的結果，不記錄未實作構想、失敗實驗或未影響程式碼的暫時測試。

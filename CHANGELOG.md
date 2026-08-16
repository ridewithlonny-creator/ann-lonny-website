# Changelog

本檔案記錄 Ann&Lonny 網站已完成的功能、修正、內容、設計、重構與文件變更。格式參考 [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)，依完成日期整理，最新日期置頂。

初始歷史只根據目前儲存庫、Git 提交紀錄與現有文件整理；未實作的構想、失敗實驗及未影響程式碼的暫時測試不列入。

## [2026-08-16]

### Added

- 新增 Ingrid、Anthony、Dan Lee 與 Neko 共 4 筆已取得公開同意的學生評價。
- 新增評價正式輸出與 placeholder 防漏的回歸測試。

### Changed

- 啟用學生評價區，並讓評價原文固定顯示、課程與地點標示隨網站語言切換。
- 將評價卡片調整為手機單欄及 `680px` 以上雙欄的可擴充網格。
- 移除評價 placeholder 內容、畫面標籤與相關樣式。
- 更新「我們是誰」中英文文案，說明兩位皆為 APSI 單板三級教練，能更清楚解釋動作、技術與背後理論。
- 更新「清楚易懂的教學」中英文文案，說明 5 季以上教學經驗有助於更快找出問題原因並清楚說明調整方式。
- 更新「我們如何教學」中英文文案，加入依地形、雪況與雪道人流隨時調整課程內容的說明。
- 擴充 Ann 的中英文教練簡介，加入親子滑雪、安全範圍、速度控制與簡單學習方式的說明。
- 將 FAQ 第 7 題改為日本課程價格說明，解釋三級教練的專業價值、教學效率及實際進度差異。
- 擴充 FAQ 第 8 題，說明天候不佳時仍會依開放地形、纜車與雪況安排合適練習。

### Documentation

- 更新 `PROJECT_SUMMARY.md`，記錄 4 筆評價、啟用狀態、響應式排版與後續擴充方式。
- 更新 `PROJECT_SUMMARY.md`，記錄「我們是誰」新增的教練資格與教學優勢。
- 更新 `PROJECT_SUMMARY.md`，確認既有 Vercel 網址為唯一對外正式網站，OpenAI Sites 專案僅供內部使用。
- 更新 `CHANGELOG.md`，記錄本次內容、測試、文件與正式部署。

### Deployment

- 將誤設為公開的 OpenAI Sites 專案恢復為僅限擁有者存取，對外網站繼續使用原本的 Vercel 網址。

## [2026-08-04]

### Added

- 新增 `PROJECT_SUMMARY.md`，記錄網站目前功能、架構、訂課流程、待辦事項與已知問題。
- 新增 `WORKFLOW.md`，定義開發、驗證、文件維護及 Git 協作規則。
- 新增 `CHANGELOG.md`，建立按完成日期維護專案歷史的規範。

### Changed

- 將網站預設語言、HTML 語言與 SEO metadata 改為繁體中文，英文保留為切換選項。
- 擴充雙板、單板及教學方式的中英文內容，補充入門差異、學生類型與教學經驗。
- 更新雙板、單板與兒童課程圖片、裁切位置及替代文字。
- 將語言切換器移至導覽列獨立位置，並調整手機與桌面版的膠囊按鈕樣式。
- 更新正式 HTML 測試，以驗證繁體中文預設輸出、SEO metadata 與語言切換器。

### Documentation

- 更新 `PROJECT_SUMMARY.md`，加入 `CHANGELOG.md`、working tree 狀態及變更紀錄維護規則。
- 更新 `WORKFLOW.md`，把 `CHANGELOG.md` 納入每項任務的完成流程與完成定義。

## [2026-07-31]

### Added

- 新增日本二世谷 Accent 與澳洲 Perisher 各自獨立的五步驟訂課流程及確認提醒。
- 新增六種正式課程內容、課程圖片、教練照片、Ann 的雙語簡介與完整教練證照資訊。
- 新增 Ann 與 Lonny 分開管理的 WhatsApp、LINE、WeChat 與 Instagram 聯絡入口及 QR Code 資產。
- 新增八題雙語 FAQ、正式雙語隱私權聲明與可停用的學生評價功能旗標。
- 新增 skip link、主要內容 landmark、焦點樣式及其他鍵盤與無障礙支援。
- 新增 Vercel 專用建置、獨立 typecheck 指令及 pnpm 版本設定。
- 新增正式 HTML、SEO、聯絡連結、隱私權內容及本機圖片資產測試。

### Changed

- 重新設計訂課地區切換器、聯絡卡片、隱私權區塊及相關響應式版面。
- 更新課程、教練、品牌主張、價格、天氣、兒童與團體規則等中英文內容。
- 擴充 `README.md` 的本機開發、內容維護、GitHub、Vercel、自訂網域及未來擴充說明。
- 新增 `project-tree.md`，記錄當時的專案結構與主要檔案用途。

## [2026-07-30]

### Added

- 建立 Ann&Lonny 繁體中文／英文單頁式品牌網站及完整響應式版面。
- 新增 Header、Hero、About、Lessons、Instructors、Why Learn With Us、Booking、FAQ、Contact 與 Footer 區塊。
- 新增中英文切換、語言偏好保存、手機版選單、聯絡連結及 FAQ 收合互動。
- 新增 Next.js、React、TypeScript、Vite、vinext、Cloudflare Worker 與 OpenAI Sites 專案架構。
- 新增 SEO、Open Graph、Twitter Card、favicon、社群分享圖片及正式輸出測試。
- 新增 Hero、About、課程與教練圖片資產，以及初始維護與部署說明。

### Changed

- 補充品牌背景、兒童課程、家庭課程、技術分析、Lonny 簡介及中英文頁尾標語。
- 統一全站色彩、字體、間距、卡片、按鈕、焦點狀態與手機／桌面響應式設計。
- 改善手機選單的開啟狀態與 Escape 鍵關閉行為，並移除捲動顯示動畫。

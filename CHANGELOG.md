# Changelog

本檔案記錄 Ann&Lonny 網站已完成的功能、修正、內容、設計、重構與文件變更。格式參考 [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)，依完成日期整理，最新日期置頂。

初始歷史只根據目前儲存庫、Git 提交紀錄與現有文件整理；未實作的構想、失敗實驗及未影響程式碼的暫時測試不列入。

## [2026-09-21]

### Deployment

- 經使用者明確同意上傳既有 GitHub 儲存庫，以 `b66fa3d` 發布日本訂課流程至原 Vercel 網址；平台回報 success，正式中英文內容及語言切換已驗證，瀏覽器無錯誤。
- 同步 `PROJECT_SUMMARY.md` 與本紀錄的正式發布版本；不變更價格、照片、版面、澳洲流程或表單條款。

### Changed

- 依核准草稿更新日本中英文訂課五步驟與確認提醒，統一為 Accent 寄送 Invoice、核實全額入帳後私訊確認完成訂課，並已正式發布。
- 同步更新外部 Google Form 的中英文開頭與送出後提示，保留分組與 Email 副本提醒；不變更題目、選項、條款與管理表。

### Verification

- 新增日本訂課步驟順序、寄件方、付款核實與私訊確認回歸測試；通過型別檢查、修改檔案 ESLint、Next.js／vinext 建置及 7 項測試。
- 本機瀏覽器核對中英文流程與桌面顯示，無瀏覽器錯誤；本次未測手機／平板尺寸。
- Google Form 重新載入後確認 93 個文字輸入欄位中只有表單說明改變，另確認送出提示已保存、學生預覽顯示新版說明，未送出測試回覆。

### Documentation

- 更新 `PROJECT_SUMMARY.md` 的核對日期、日本訂課流程、驗證結果及表單與網站已發布狀態。

## [2026-09-19]

### Deployment

- 經使用者同意，以 `f2c4208` 將 FAQ 排序與預設展開、Hanazono 大小寫、雪場中文名稱及教練資格說明發布至原 Vercel 網址，平台回報 success。
- 更新 `PROJECT_SUMMARY.md` 的最新發布版本與狀態；正式畫面尚未完成瀏覽器驗證。
- 經使用者同意，以 `5f08139` 將北海道標示、FAQ 與共同 Instagram 區塊發布至原 Vercel 網址，平台回報 success；線上瀏覽器驗證受自動審核限制尚未完成。
- 更新 `PROJECT_SUMMARY.md` 的最新發布版本及線上驗證限制，並同步本紀錄。
- 經使用者同意將原始碼與照片上傳指定公開 GitHub 儲存庫，以提交 `70cf0a1` 成功發布至原 Vercel 網址，並確認正式內容及中英文切換。
- 更新 `PROJECT_SUMMARY.md` 的正式部署狀態、發布版本與本機 Git 尚待同步的提醒。

### Changed

- 「我們是誰」補充兩位都持有 APSI 單板三級與雙板二級資格，同步英文並保留其餘教學背景說明。
- 中文 FAQ 與價目表的 Hirafu、Annupuri 加上比羅夫、安努普利中文名稱，英文介面不變。
- 將 FAQ 中的雪場名稱大小寫統一為 `Hanazono`，同步中英文及回歸測試。
- 將中英文 FAQ 的價格價值說明排第一並預設展開，HANAZONO 排第二，其餘問題保留原文及相對順序；本次修改僅在本機預覽。
- 將中英文主要日本地區標示改為北海道 ACCENT，保留 Hirafu／Annupuri 與 Rusutsu 價格起點。
- 將 FAQ 第 3 題改為 HANAZONO 暫定上課安排及 2026 年 10 月再次確認提醒，第 5 題明列澳洲私人課每位教練最多 5 人、日本維持 4 人。
- 將「關於我們」照片換為使用者提供的 APSI 背心合照，更新中英文替代文字並調整顯示位置，保留原始照片與舊圖。
- 修正中英文澳洲流程為官網查價、確認時間及取得教練姓名、填寫指定教練訂課、回傳收據，再由教練向主管確認後私訊通知成功。
- 簡化澳洲價格區說明，移除完整訂課確認提醒，並將官網查價入口排在聯絡入口前。
- 更新 FAQ 為雙板 4 歲、單板 7 歲起，並將 FAQ 與價目表的 6 歲以下一對一限制改為建議。
- 將區塊依序調整為關於我們、課程介紹、教練介紹、為什麼選擇我們、學生分享、訂課流程、價目表、常見問題與聯絡我們，並同步既有導覽順序。
- 將課程價格改為日本與澳洲切換，日本預設顯示，澳洲不列固定價格並提供 Perisher 官方私人課程價格入口。
- 同步中英文澳洲浮動價格、先確認教練時間與指定教練確認提醒，並將課程區價格連結改為通用標示。

### Added

- 在聯絡區與頁尾之間新增中英文 `@alcouplelife` Instagram 區塊，保留個人聯絡方式且不嵌入社群動態。
- 新增北海道、HANAZONO FAQ、人數上限、共同帳號連結與區塊順序回歸檢查。
- 新增區塊順序與預設日本價格選項的正式輸出回歸測試。

### Verification

- 更新 FAQ 排序及僅第一題預設展開的回歸檢查，通過 lint、typecheck、兩種正式建置及 6 項測試。
- 本次本機修改通過 lint、typecheck、Next.js／vinext 建置及 6 項測試，並確認中英文 FAQ、390／820／1440px 排版與無瀏覽器錯誤。
- 補充最低年齡、一對一建議及新合照路徑回歸檢查，並確認中英文澳洲流程與手機、桌面照片顯示。
- 通過 lint、typecheck、Next.js 與 vinext 正式建置、5 項測試，以及中英文價格切換、獨立訂課狀態、手機導覽與響應式畫面檢查。

### Documentation

- 更新 `PROJECT_SUMMARY.md` 的「我們是誰」資格說明與未發布狀態，並同步本紀錄。
- 同步 `PROJECT_SUMMARY.md` 的雪場中文名稱及未發布狀態，並更新本紀錄。
- 同步 `PROJECT_SUMMARY.md` 的 FAQ 題序、預設展開與未發布狀態，並記錄於 `CHANGELOG.md`。
- 更新 `PROJECT_SUMMARY.md` 的地區、FAQ、Instagram 與 HANAZONO 待確認事項，明列本次修改尚未發布，並同步 `CHANGELOG.md`。
- 同步 `PROJECT_SUMMARY.md` 的澳洲訂課流程與兒童年齡建議，並記錄於 `CHANGELOG.md`。
- 更新 `PROJECT_SUMMARY.md` 的核對日期、先呈現教學價值的頁面順序、價格切換與未部署狀態，並同步 `CHANGELOG.md`。

## [2026-09-18]

### Added

- 在課程介紹後新增中英文日本價格表，列出 Hirafu／Annupuri 每組 110,000 日圓及留壽都每組 130,000 日圓。
- 新增價格導覽、課程區直達連結與詢問日期及教練空檔按鈕。

### Changed

- 明確標示價格含稅、每位教練最多 4 人、全日教學與用餐時間、旺季同價、無半日課及另付費項目。
- 同步更新中英文 FAQ 的人數及價格規則，移除日本旺季可能加價的舊敘述。

### Verification

- 通過 lint、typecheck、Next.js 與 vinext 正式建置、4 項既有測試，以及中英文手機、平板、桌面排版與主要互動檢查。

### Documentation

- 更新 `PROJECT_SUMMARY.md` 的核對日期、價格規則、詢問流程與本機修改狀態，並在 `CHANGELOG.md` 記錄已完成變更。

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
- 更新 `PROJECT_SUMMARY.md`，記錄 Ann 簡介版本已發布至原本的 Vercel 正式網址。
- 更新 `CHANGELOG.md`，記錄本次內容、測試、文件與正式部署。

### Deployment

- 將誤設為公開的 OpenAI Sites 專案恢復為僅限擁有者存取，對外網站繼續使用原本的 Vercel 網址。
- 將 Ann 的親子滑雪簡介更新發布至既有的 `https://ann-lonny-website.vercel.app/`，網址維持不變。

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

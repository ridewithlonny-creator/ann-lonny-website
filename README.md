# Ann&Lonny 滑雪與單板課程網站

這是一個中英文單頁式品牌介紹網站。用途是讓新客人認識 Lonny 與 Ann、了解課程與訂課流程，再透過 WhatsApp、LINE、WeChat、Instagram 或 Email 私下詢問。

網站不包含線上付款、即時預約、會員系統或資料庫。

## 檔案結構

- `app/page.tsx`：網站各區塊的版面與互動。
- `app/content.ts`：所有經常修改的品牌內容、雙語文字、課程、教練、FAQ、評價與聯絡方式。
- `app/globals.css`：網站顏色、字體、間距與手機／平板／電腦版排版。
- `app/layout.tsx`：SEO、Open Graph 與社群分享預覽設定。
- `public/assets/images/`：網站照片。
- `public/og.png`：分享到 LINE、WhatsApp、Facebook 等平台時使用的預覽圖。
- `.openai/hosting.json`：Sites 發布設定，請勿隨意刪除。

## 1. 如何在本機開啟網站

若只是快速查看，可以直接開啟部署網址。

若要在本機編輯與預覽：

1. 安裝 Node.js 22 或更新版本。
2. 啟用 pnpm（可執行 `corepack enable`）。
3. 在專案資料夾執行 `pnpm install`。
4. 執行 `pnpm run dev`。
5. 在瀏覽器開啟終端機顯示的本機網址，通常是 `http://localhost:3000`。

## 2. 如何修改品牌名稱

開啟 `app/content.ts`，修改：

```ts
brandName: "Ann&Lonny"
```

如果品牌名稱改變，接著開啟 `app/layout.tsx`，把 SEO 與分享預覽中的 `Ann&Lonny` 一併替換。

## 3. 如何修改中英文文字

所有主要文字都在 `app/content.ts` 的 `content.en` 與 `content.zh`。

- `en` 是英文。
- `zh` 是繁體中文。

請保留引號、逗號與括號等程式碼格式，只修改引號裡的文字。

## 4. 如何新增或刪除教練

在 `app/content.ts` 找到 `instructors`。

- 新增：複製一整個 `{ ... }` 教練區塊，修改 `id`、姓名與內容。
- 刪除：刪除該教練完整的 `{ ... }` 區塊。
- 每個 `id` 必須不同，建議使用英文小寫名字。

教練照片目前使用清楚標示的 placeholder。收到真實照片後，可將教練卡的 placeholder 改為圖片欄位。

## 5. 如何新增或刪除課程

在 `app/content.ts` 找到 `lessons`。

- 新增：複製一整個課程 `{ ... }` 區塊。
- 刪除：刪除整個課程區塊。
- 修改 `title.en`、`title.zh`、`description.en`、`description.zh` 和 `image`。

不要在網站中加入尚未確認的價格。

## 6. 如何更換照片

1. 建議先把照片裁切並轉成 WebP。
2. Hero 建議寬度約 2000px；卡片照片約 1000～1400px。
3. 把照片放入 `public/assets/images/`。
4. 在 `app/content.ts` 修改課程圖片路徑，例如：

```ts
image: "/assets/images/your-photo.webp"
```

5. Hero 照片在 `app/globals.css` 的 `.hero` 背景設定中更換。
6. 保留所有 `<img>` 的 `loading="lazy"`，Hero 背景除外。

使用有學生入鏡的照片前，請確認已取得公開使用同意；兒童照片尤其需要監護人同意。

## 7. 如何修改 WhatsApp、LINE、WeChat、Instagram 和 Email

在 `app/content.ts` 找到 `siteConfig.contact`：

```ts
contact: {
  whatsapp: "",
  line: "",
  wechat: "",
  instagram: "",
  email: "",
}
```

- WhatsApp 填國際格式電話號碼，只填數字，例如 `61412345678`。
- LINE 填完整的官方或個人聯絡網址。
- WeChat 建議使用可公開的完整連結；如果主要使用 QR Code，可在聯絡區改放 QR 圖片。
- Instagram 填完整網址，例如 `https://instagram.com/yourname`。
- Email 只填信箱地址，例如 `hello@example.com`。

空白欄位會顯示為 `[ADD LINK]`，不會產生失效連結。

## 8. 如何修改預填聯絡訊息

在 `app/content.ts` 找到 `prefilledMessage`：

```ts
prefilledMessage: {
  en: "English message",
  zh: "中文訊息",
}
```

網站會自動把訊息放入 WhatsApp 或 Email。

## 9. 如何部署到 GitHub

1. 在 GitHub 建立一個新的 repository。
2. 不要勾選自動新增 README，以免與現有檔案衝突。
3. 在本機專案資料夾依照 GitHub 顯示的指令加入遠端 repository。
4. 提交檔案並推送至 `main` 分支。

這個專案已包含 `.gitignore`，不會上傳本機建置資料夾。

## 10. 如何部署到 Vercel

1. 登入 Vercel。
2. 選擇 Add New Project。
3. 匯入剛才的 GitHub repository。
4. Framework Preset 選擇 Next.js。
5. 使用預設 Build Command，然後按 Deploy。

每次推送到 GitHub 的 `main` 分支，Vercel 會自動重新部署。

## 11. 如何連接自訂網域

以 Vercel 為例：

1. 打開 Vercel 專案。
2. 進入 Settings → Domains。
3. 輸入已購買的網域。
4. 依照畫面指示，到網域供應商新增 DNS 記錄。
5. 等待 DNS 生效與 HTTPS 憑證完成。

若使用 Sites 發布，也可以在 Sites 專案的網域設定中連接網域。

## 12. 未來如何增加照片教學或 YouTube 影片

不需要重做網站：

- 照片教學：在 `app/content.ts` 建立新的教學資料陣列，再於 `app/page.tsx` 新增一個卡片區塊。
- YouTube：加入影片標題、短說明與 YouTube 網址，使用點擊後才載入的嵌入方式，避免拖慢首頁。
- 多篇教學：內容增加到大約 6～10 篇後，再考慮建立獨立 Resources 頁面。

網站不會自動播放影片或音樂。

## 發布前檢查清單

- 替換 `[RESORT]`、所有照片與 placeholder。
- 補上 Lonny 與 Ann 的教學項目、語言、證照與簡介。
- 確認課程內容與價格說明方式。
- 確認兒童、多人、雪票、裝備、天氣、取消、付款、保險與隱私政策。
- 加入真實聯絡方式。
- 只使用已取得同意的學生評價與照片。
- 重新製作包含正式品牌名稱的 `public/og.png`。

## Placeholder 照片來源

第一版使用 Unsplash 的滑雪／單板照片作為暫時素材。正式發布前建議換成 Lonny 與 Ann 的真實照片。

- karokrasinska：`https://unsplash.com/photos/7SZkBbFw_gk`
- Tino Rischawy：`https://unsplash.com/photos/JiKZHeONHOA`
- Patrick Hodskins：`https://unsplash.com/photos/YKikzmEOJXM`

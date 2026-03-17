# InsightPod - Podcast Landing Page

這是一個基於 [Figma 設計稿](https://www.figma.com/design/QXMBKnCpp8qvBWqUXbOgfL/InsightPod---Podcast-Landing-page---Paperpillar--Community-?node-id=2-2750) 實作的 React 切版練習專案。專注於練習現代化前端開發流程、組件化架構設計，以及高度重視 Web 無障礙性 (Accessibility, A11y) 的實作。

---

## 🌐 線上展示

🔗 [Live Demo](https://yourusername.github.io/insightpod-stream-platform/)

## 📸 專案截圖

![screenshot](./public/screenshot.png)

## 🚀 專案特點

- **Pixel-perfect**: 完整還原 Figma 設計稿的字體、間距與配色。

- **Responsive (RWD)**: 支援桌機、平板與手機版面切換。

- **Component-based**: 使用 React 拆解頁面，確保程式碼可維護與可複用。

- **Accessibility (A11y)**:

  - 使用語意化 HTML5 標籤 (`<header>`、`<main>`、`<footer>`、`<nav>`)。
  - 實作完整 ARIA 屬性（`aria-label`、`aria-expanded`、`aria-pressed`）。
  - 支援鍵盤操作與螢幕閱讀器友善互動。

- **Routing**: 使用 `HashRouter` 確保在 GitHub Pages 環境下，不會出現 404 錯誤。

---

## 🛠 使用技術

- **前端框架**：React 19.2
- **路由管理**：React Router v7
- **樣式處理**：SCSS (採用 BEM 命名規範)
- **圖示庫**：React Icons 5.6
- **建置工具**: Vite 7

---

## 📂 專案結構

```text
src/
├── assets/          # 靜態資源 (圖片、字體)
├── components/
│   ├── common/      # 通用組件 (Button, Logo)
│   ├── features/    # 功能性組件 (Hero, WeeklyPodcast, About)
│   └── layout/      # 佈局組件 (Header, Footer)
├── data/            # 模擬資料 (Mock data)
├── pages/            # 頁面級組件
└── styles/          # 全域樣式與變數 (Global settings)
```

## 🚀 快速開始

### 安裝與執行

```bash
git clone ...
npm install
npm run dev
```

## 📄 授權

此專案僅供學習與展示用途。設計稿版權歸原作者所有。

---

## 🙏 致謝

- 設計稿來源：[Paperpillar Community](https://www.figma.com/design/QXMBKnCpp8qvBWqUXbOgfL/)
- 圖示來源：React Icons

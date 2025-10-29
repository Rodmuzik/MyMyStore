# My Store - 簡易電商網站

使用 Next.js + Google OAuth 建立的簡易電商網站，支援銀行轉帳付款。

## 🚀 快速開始

### 1. 安裝依賴
```bash
# 如果遇到 npm 權限問題，請先修復權限或使用其他套件管理器
npm install --legacy-peer-deps

# 或者使用 yarn (如果有安裝)
yarn install
```

### 2. 設定 Google OAuth 憑證

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案或選擇現有專案
3. 啟用 Google+ API
4. 建立 OAuth 2.0 憑證
5. 設定授權重導向 URI: `http://localhost:3000/api/auth/callback/google`

### 3. 配置環境變數

編輯 `.env.local` 檔案：
```env
GOOGLE_CLIENT_ID=你的_Google_Client_ID
GOOGLE_CLIENT_SECRET=你的_Google_Client_Secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=請更改為隨機字串
```

### 4. 啟動開發伺服器
```bash
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000) 查看網站。

## 📁 專案結構

```
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/route.ts  # NextAuth 路由
│   │   ├── layout.tsx                       # 根佈局
│   │   └── page.tsx                         # 首頁
│   ├── components/
│   │   ├── LoginButton.tsx                 # Google 登入按鈕
│   │   ├── UserProfile.tsx                 # 用戶資料顯示
│   │   ├── ProtectedRoute.tsx              # 路由保護元件
│   │   └── Providers.tsx                   # Session Provider
│   └── lib/
│       └── auth.ts                         # NextAuth 配置
├── middleware.ts                           # 路由中間件
└── .env.local                             # 環境變數
```

## 🔧 主要功能

- ✅ Google OAuth 登入
- ✅ 用戶身份驗證
- ✅ 路由保護機制
- ✅ 響應式設計 (手機/桌機適配)
- 🚧 商品展示 (待開發)
- 🚧 購物車功能 (待開發)
- 🚧 訂單系統 (待開發)
- 🚧 銀行轉帳付款 (待開發)

## 🔒 安全性

- Google OAuth 提供可靠的身份驗證
- NextAuth.js 處理 Session 管理
- 中間件保護敏感路由
- 環境變數保護敏感資訊

## 📱 響應式設計

使用 Tailwind CSS 確保在各種設備上都有良好的使用體驗：
- 手機 (Mobile)
- 平板 (Tablet)
- 桌機 (Desktop)

## 🚧 下一步開發計劃

1. 建立商品資料庫模型
2. 實作商品展示頁面
3. 開發購物車功能
4. 建立訂單管理系統
5. 整合銀行轉帳付款流程
6. 建立管理後台

## 🤝 技術支援

如需協助，請檢查：
1. Google Cloud Console 設定是否正確
2. 環境變數是否正確配置
3. 網路連線是否正常

## 📄 授權

MIT License
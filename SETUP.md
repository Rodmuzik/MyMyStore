# 設定指南

## npm 權限問題解決方案

如果遇到 npm 權限錯誤，有幾種解決方法：

### 方法 1: 修復 npm 權限 (需要管理員權限)
```bash
sudo chown -R $(whoami) ~/.npm
```

### 方法 2: 使用不同的套件管理器

#### 安裝 yarn
```bash
npm install -g yarn
yarn install
yarn dev
```

#### 使用 pnpm
```bash
npm install -g pnpm
pnpm install
pnpm dev
```

### 方法 3: 使用 npx 直接運行
```bash
npx next dev
```

## Google OAuth 詳細設定步驟

### 1. Google Cloud Console 設定

1. 前往 https://console.cloud.google.com/
2. 點擊「選取專案」→「新增專案」
3. 輸入專案名稱（例如：my-store-oauth）
4. 點擊「建立」

### 2. 啟用 APIs

1. 左側選單 → 「APIs & Services」 → 「Library」
2. 搜尋「Google+ API」或「Google People API」
3. 點擊「啟用」

### 3. 建立 OAuth 憑證

1. 左側選單 → 「APIs & Services」 → 「Credentials」
2. 點擊「+ CREATE CREDENTIALS」 → 「OAuth 2.0 Client ID」
3. 如果是第一次，需要先配置 OAuth 同意畫面：
   - User Type: External
   - App name: My Store
   - User support email: 您的 email
   - Developer contact information: 您的 email
4. 建立 OAuth 2.0 Client ID：
   - Application type: Web application
   - Name: My Store Web Client
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google` (生產環境)

### 4. 複製憑證

1. 建立完成後，會顯示 Client ID 和 Client Secret
2. 複製這兩個值到 `.env.local` 檔案

### 5. 環境變數範例

```env
# .env.local
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-please-change-this-to-something-random
```

生成隨機 secret：
```bash
openssl rand -base64 32
```

## 測試登入功能

1. 啟動開發伺服器：`npm run dev`
2. 開啟 http://localhost:3000
3. 點擊「使用 Google 登入」
4. 完成 Google 授權流程
5. 確認能看到用戶資料和登出功能

## 常見問題

### Q: Google 登入時出現「redirect_uri_mismatch」錯誤
A: 檢查 Google Cloud Console 中的 Authorized redirect URIs 是否包含正確的網址

### Q: 「invalid_client」錯誤
A: 檢查 GOOGLE_CLIENT_ID 和 GOOGLE_CLIENT_SECRET 是否正確

### Q: Session 無法保持
A: 確認 NEXTAUTH_SECRET 已設定且不為空

### Q: 開發環境無法載入
A: 檢查 3000 port 是否被其他應用程式佔用
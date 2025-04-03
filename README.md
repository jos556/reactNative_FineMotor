# Fine Motor Control App

一個專注於幫助使用者提升精細動作控制能力的移動應用程式。

## 專案概述

這個應用程式旨在通過各種互動練習和遊戲，幫助使用者提升手部精細動作控制能力。適用於：
- 兒童早期發展訓練
- 康復訓練
- 手部技能提升
- 書寫能力訓練

## 主要功能

### 1. 精確觸控訓練
- 點擊精度訓練
- 軌跡追蹤練習
- 壓力感應控制

### 2. 手勢控制練習
- 縮放操作
- 旋轉動作
- 多點觸控協調

### 3. 遊戲化練習
- 繪畫練習
- 拼圖遊戲
- 節奏控制
- 手寫練習

### 4. 進度追蹤
- 個人訓練數據記錄
- 進步曲線分析
- 訓練建議生成

## 技術棧

- React Native
- TypeScript
- 手勢識別庫
- 數據可視化工具

## 開發環境設置

1. 確保已安裝所需工具：
```bash
node -v  # 需要 Node.js >= 18
npm -v   # 或使用 yarn
```

2. 安裝專案依賴：
```bash
npm install
# 或
yarn install
```

3. 啟動開發伺服器：
```bash
npm start
# 或
yarn start
```

4. 運行應用：
```bash
# Android
npm run android
# 或
yarn android

# iOS
npm run ios
# 或
yarn ios
```

## 專案結構

```
src/
├── components/     # UI元件
├── screens/        # 頁面
├── hooks/          # 自定義鉤子
├── utils/          # 工具函數
├── assets/         # 靜態資源
└── types/         # TypeScript類型定義
```

## 開發規範

- 使用 TypeScript 進行類型檢查
- 遵循 ESLint 規則
- 使用 Prettier 進行程式碼格式化
- 編寫單元測試

## 效能優化

- 使用 React Native 手勢處理系統
- 實現平滑的動畫效果
- 優化觸控回應速度
- 減少不必要的重新渲染

## 貢獻指南

1. Fork 專案
2. 創建特性分支
3. 提交更改
4. 發起 Pull Request

## 授權條款

MIT License

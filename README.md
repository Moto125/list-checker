# list-checker
ローカルで動作するチェックリストの作成・管理・実行を行うデスクトップアプリケーションです。


## 💡 開発の背景 / 目的
自分自身が業務や開発において「レビュー観点を網羅できているか」を効率的に確認するために開発した個人プロジェクトです。
単なるレビュー用のチェックツールにとどまらず、汎用的なチェックリストの作成から実行までをスムーズに行える設計にしています。

※本アプリはポートフォリオとしての公開および個人利用を主目的としており、不特定多数への配布を目的としたパッケージ公開は行っておりません。

## ✨ 主な機能
- チェックリストの作成・編集: 用途に応じたチェックリストを自由に作成・更新
- チェックリストの実行: 直感的なインターフェースでの進捗確認・チェック実行

## ⚠️ 注意事項（免責事項）
- 本アプリは個人開発のプロトタイプ段階のプロダクトです。
- 第三者機関等によるセキュリティ監査は受けていません。
- ビルドおよびご利用はすべて自己責任でお願いいたします。 本アプリの使用によって生じたデータ損失やその他のトラブルについて、制作者は一切の責任を負いかねます。

## 🛠️ 使用技術 (Tech Stack)
- Framework: [Tauri](https://tauri.app/) (v2)
- Frontend: React + TypeScript
- Backend: Rust


## 🚀 ローカルでのビルド・実行手順

### 前提条件 (Prerequisites)
- [Node.js](https://nodejs.org/) (v18以上推奨)
- [Rust](https://www.rust-lang.org/) (cargo)
- Tauriのビルドに必要なシステム依存関係（[Tauri公式ドキュメント](https://tauri.app/v1/guides/getting-started/prerequisites)を参照）

### 手順
1. リポジトリのクローン
   ```bash
   git clone https://github.com/Moto125/list-checker.git
   cd list-checker
   ```
1. 依存関係のインストール
   ```bash
   npm install
   ```
1. 開発モードでの起動
   ```bash
   npm run tauri dev
   ```
1. アプリ（.exe / .app）のビルド
   ```bash
   npm run tauri build
   ```
ビルド完了後、src-tauri/target/release/bundle/ 配下に実行ファイル（.exe等）が生成されます。

## 📝 今後の展望・ロードマップ (Optional)
- UI/UXの改善
- チェックリストのカテゴリ別管理・実行機能の追加
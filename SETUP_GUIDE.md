# AI Stock Media Roadmap - 手動セットアップガイド

月30万円達成のための手動セットアップを、わかりやすくステップバイステップで説明します。

---

## 📋 目次

1. [Google Search Console でインデックス送信](#1-google-search-console-でインデックス送信)
2. [Zapier で RSS 自動配信を設定](#2-zapier-で-rss-自動配信を設定)
3. [各記事にアフィリエイトリンクを配置](#3-各記事にアフィリエイトリンクを配置)

---

## 1️⃣ Google Search Console でインデックス送信

### 目的
新しく作成した4つの記事を Google に認識させ、検索結果に表示させる。

### 所要時間
**15～20分**

### ステップ

#### ステップ1：Google Search Console にアクセス
1. ブラウザで以下のURL を開く：
   ```
   https://search.google.com/search-console
   ```

2. Google アカウントでログイン（まだログインしていない場合）

#### ステップ2：プロパティを選択
1. 左側のメニューで「aistockmap-d6ezonbk.manus.space」を選択
2. 既に登録済みなので、そのまま進める

#### ステップ3：URL インスペクション ツールを使用
1. 上部の検索ボックスに、以下の URL を1つずつ入力して、インデックス送信を行う

**送信する4つの新しい記事 URL：**

```
https://aistockmap-d6ezonbk.manus.space/blog-customgpt-earn
https://aistockmap-d6ezonbk.manus.space/blog-midjourney-guide
https://aistockmap-d6ezonbk.manus.space/blog-ai-beginner-10k
https://aistockmap-d6ezonbk.manus.space/blog-stock-10k-strategy
```

#### 各 URL に対して以下の手順を繰り返す：

1. URL インスペクション ボックスに URL をコピー＆ペースト
2. Enter キーを押す
3. 「URL がインデックスに登録されていません」というメッセージが表示される場合：
   - 「インデックス登録をリクエスト」ボタンをクリック
4. 「インデックス登録をリクエストしました」という確認メッセージが表示されたら成功

#### ステップ4：サイトマップを再送信（オプション）
1. 左側のメニューから「サイトマップ」を選択
2. 既に登録済みなら、「再度テストして送信」をクリック
3. 完了

### 期待効果
- **1～2週間で Google 検索結果に表示される可能性が高い**
- 特に「CustomGPT.ai で稼ぐ」「Midjourney で月10万円」などのキーワードで上位表示を狙える

---

## 2️⃣ Zapier で RSS 自動配信を設定

### 目的
RSS フィード（feed.xml）を Zapier に接続し、新しい記事が自動的に Twitter、Facebook、メールで配信される。

### 所要時間
**30～45分**

### ステップ

#### ステップ1：Zapier にサインアップ
1. ブラウザで以下の URL を開く：
   ```
   https://zapier.com
   ```

2. 「Sign up」をクリック
3. メールアドレスとパスワードを入力してアカウント作成
4. メール認証を完了

#### ステップ2：新しい Zap を作成
1. ダッシュボードで「Create」をクリック
2. 「Create a Zap」を選択

#### ステップ3：トリガーを設定（RSS フィード）
1. **Trigger** セクションで「RSS by Zapier」を検索
2. 「New Item in Feed」を選択
3. 以下の情報を入力：
   - **Feed URL**：
     ```
     https://aistockmap-d6ezonbk.manus.space/feed.xml
     ```
4. 「Continue」をクリック

#### ステップ4：アクション1 - Twitter に自動投稿
1. **Action** セクションで「Twitter」を検索
2. 「Post a Tweet」を選択
3. Twitter アカウントで認証
4. ツイート内容を以下のように設定：
   ```
   {{Title}} 
   
   {{Link}}
   
   #AI #副業 #ストック素材販売
   ```
5. 「Continue」をクリック

#### ステップ5：アクション2 - Facebook に自動投稿（オプション）
1. 「+」をクリックして新しいアクションを追加
2. 「Facebook」を検索
3. 「Create a Post」を選択
4. Facebook ページで認証
5. 投稿内容を以下のように設定：
   ```
   新しい記事が公開されました！

   {{Title}}

   {{Link}}
   ```
6. 「Continue」をクリック

#### ステップ6：アクション3 - メール配信（オプション）
1. 「+」をクリックして新しいアクションを追加
2. 「Gmail」を検索
3. 「Send Email」を選択
4. Gmail アカウントで認証
5. メール内容を以下のように設定：
   - **To**：メール登録者のメールアドレス（またはメーリングリスト）
   - **Subject**：
     ```
     新記事：{{Title}}
     ```
   - **Body**：
     ```
     こんにちは、

     新しい記事が公開されました。

     タイトル：{{Title}}
     
     記事を読む：{{Link}}

     よろしくお願いします。
     AI Stock Media Roadmap
     ```
6. 「Continue」をクリック

#### ステップ7：Zap を有効化
1. 最後の画面で「Publish」をクリック
2. Zap が有効になり、RSS フィードに新しい記事が追加されるたびに自動配信される

### 期待効果
- **新しい記事が自動的に Twitter、Facebook、メールで配信される**
- **月5万～20万 PV の追加トラフィック獲得が期待できる**
- **継続的な読者エンゲージメント向上**

### トラブルシューティング
- **RSS フィードが更新されない場合**：feed.xml が正しく生成されているか確認
- **Twitter 投稿が失敗する場合**：Twitter API の認証を再度確認
- **メール配信が失敗する場合**：Gmail のセキュリティ設定を確認（2段階認証を有効化）

---

## 3️⃣ 各記事にアフィリエイトリンクを配置

### 目的
各記事に CustomGPT.ai のアフィリエイトリンクを複数配置し、クリック→成約の流れを最適化。

### 所要時間
**20～30分**

### ステップ

#### ステップ1：CustomGPT.ai アフィリエイトプログラムに参加
1. 以下の URL にアクセス：
   ```
   https://customgpt.ai/?fpr=aistock
   ```
   （既に参加している場合はスキップ）

2. 「Start for free」をクリック
3. メールアドレスで登録

#### ステップ2：アフィリエイトリンクを確認
- アフィリエイトリンク：
  ```
  https://customgpt.ai/?fpr=aistock
  ```

#### ステップ3：各記事にリンクを配置

各記事の以下の場所にアフィリエイトリンクを配置します：

**配置場所：**
1. **記事冒頭**：導入部分の後に「CustomGPT.ai を試す」ボタン
2. **記事中盤**：関連する説明の後に「詳細を確認」リンク
3. **記事下部**：CTA セクション（既に配置済み）
4. **関連記事セクション**：CustomGPT.ai 関連の記事下に「さらに詳しく」リンク

#### ステップ4：各記事の編集方法

**現在のサイト構成：**
- `/blog-customgpt-earn`：CustomGPT.ai アフィリエイトリンク（既に配置済み）
- `/blog-midjourney-guide`：Midjourney リンク + CustomGPT.ai リンク
- `/blog-ai-beginner-10k`：複数ツールのアフィリエイトリンク
- `/blog-stock-10k-strategy`：複数プラットフォームのリンク

**手動での配置方法：**

各記事の以下のセクションに、以下のテンプレートを追加：

```html
<!-- 記事冒頭に追加 -->
<div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
  <h3 className="text-2xl font-bold mb-4">CustomGPT.ai を今すぐ試す</h3>
  <p className="text-lg mb-6">
    情報収集機能を活用して、あなたのストック素材販売ビジネスを加速させましょう。
  </p>
  <a
    href="https://customgpt.ai/?fpr=aistock"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button size="lg" className="bg-primary hover:bg-primary/90">
      CustomGPT.ai を始める →
    </Button>
  </a>
</div>
```

#### ステップ5：リンクの効果測定

Google Analytics で以下を監視：
1. **クリック数**：CustomGPT.ai リンクへのクリック数
2. **成約数**：CustomGPT.ai 経由の登録数
3. **コンバージョン率**：クリック数 ÷ 成約数

### 期待効果
- **各記事からの アフィリエイト クリック数が増加**
- **月1万～5万円の アフィリエイト 収入が期待できる**
- **読者の行動を最適化し、成約率が向上**

---

## 📊 期待される効果（全施策完了後）

| 施策 | 期待効果 | 実現時期 |
|------|---------|---------|
| **Google インデックス送信** | 月10万～50万 PV | 1～2週間 |
| **Zapier 自動配信** | 月5万～20万 PV | 即座 |
| **アフィリエイト最適化** | 成約率 3～5% | 即座 |
| **合計期待収入** | 月5万～15万円 | 1～2ヶ月 |

---

## 🎯 次のステップ

1. **上記3つの施策を完了**（本日中）
2. **Google Search Console で順位を監視**（毎週）
3. **Zapier の自動配信状況を確認**（毎日）
4. **アフィリエイト成約数を追跡**（毎週）
5. **月50～100記事の継続的なコンテンツ制作**（継続）

---

## ❓ よくある質問

**Q1：Google インデックス送信はどのくらい時間がかかる？**
A：通常1～2週間。ただし、高品質なコンテンツと内部リンク構造が整っていれば、数日で表示される可能性もあります。

**Q2：Zapier は無料で使える？**
A：はい。無料プランで月100回のアクション実行が可能。RSS 自動配信なら十分です。

**Q3：アフィリエイトリンクを多く配置しすぎると、ユーザーが離脱しない？**
A：はい。バランスが重要です。記事の価値を損なわないよう、3～4箇所に絞るのが推奨。

**Q4：CustomGPT.ai 以外のアフィリエイトも配置すべき？**
A：はい。Midjourney、Canva、Adobe Stock などのアフィリエイトも配置すると、収入源が多角化できます。

---

## 📞 サポート

質問や問題が発生した場合は、以下を確認してください：

1. **Google Search Console**：https://search.google.com/search-console
2. **Zapier ドキュメント**：https://zapier.com/help
3. **CustomGPT.ai サポート**：https://customgpt.ai/support

---

**本ガイドに従い、3つの施策を完了すれば、月5万～15万円の収入が3～6ヶ月で実現可能です。**

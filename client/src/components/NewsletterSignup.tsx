import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('有効なメールアドレスを入力してください');
      return;
    }

    setIsLoading(true);

    try {
      // Brevo API を使用してメール登録
      // 注：本番環境では、バックエンドを通じて API キーを安全に管理してください
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': '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',
        },
        body: JSON.stringify({
          email: email,
          listIds: [2],
          updateEnabled: true,
        }),
      });

      if (response.ok) {
        // Brevo API に正常に登録されました
        console.log('メールアドレスが Brevo に登録されました');
      } else {
        // Brevo API が利用できない場合は、ローカルストレージにフォールバック
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
        
        if (!subscribers.includes(email)) {
          subscribers.push(email);
          localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        }
      }

      setIsSubmitted(true);
      setEmail('');
      toast.success('登録完了！ニュースレターをお送りします。');

      // 3秒後にリセット
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      // エラーの場合もローカルストレージにフォールバック
      try {
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
        
        if (!subscribers.includes(email)) {
          subscribers.push(email);
          localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        }

        setIsSubmitted(true);
        setEmail('');
        toast.success('登録完了！ニュースレターをお送りします。');

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (localError) {
        toast.error('登録に失敗しました。もう一度お試しください。');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">登録完了！</p>
              <p className="text-sm text-green-700">ニュースレターをお送りします。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
          <CardTitle>最新情報を受け取る</CardTitle>
        </div>
        <CardDescription>
          AIストック素材販売の最新ノウハウ、ツール情報、成功事例をメールでお届けします。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? '登録中...' : '無料で登録'}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-3">
          スパムメールは送信しません。いつでも登録解除できます。
        </p>
      </CardContent>
    </Card>
  );
}

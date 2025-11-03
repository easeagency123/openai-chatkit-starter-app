'use client';

import { ChatKit, useChatKit } from '@openai/chatkit-react';

export default function Home() {
  const { control } = useChatKit({
    api: {
      async getClientSecret(existing) {
        const res = await fetch('/api/chatkit/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const { client_secret } = await res.json();
        return client_secret;
      },
    },
  });

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '400px',
      height: '600px',
      zIndex: 9999,
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      <ChatKit control={control} />
    </div>
  );
}

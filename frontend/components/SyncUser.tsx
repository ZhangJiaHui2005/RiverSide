// frontend/components/SyncUser.tsx
'use client';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import axios from 'axios';

export default function SyncUser() {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const sync = async () => {
      if (isLoaded && isSignedIn) {
        // 1. Lấy token từ Clerk (đây là token ngắn hạn để xác thực với BE)
        const token = await getToken();

        try {
          // 2. Gửi sang NestJS
          const response = await axios.post(
            'http://localhost:8000/api/auth/clerk-sync', 
            { token },
            { withCredentials: true } // Quan trọng để BE set được Cookie
          );
          console.log('Backend Sync Response:', response.data);
        } catch (error) {
          console.error('Sync failed:', error);
        }
      }
    };

    sync();
  }, [isLoaded, isSignedIn, getToken]);

  return null; // Component này chỉ chạy ngầm
}
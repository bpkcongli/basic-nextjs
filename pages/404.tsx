import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oopppss...</h1>
      <h1>Halaman yang Anda cari tidak ditemukan</h1>
    </div>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { HyveHeader } from '@/components/HyveHeader';
import { PaymentSummary } from '@/components/PaymentSummary';
import { QRPaymentSection } from '@/components/QRPaymentSection';
import { HyveFooter } from '@/components/HyveFooter';
import { WHATSAPP_URL, MESSAGES } from '@/lib/constants';

function PaymentContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  // Get parameters from URL
  const idNumber = searchParams.get('id') || '';
  const email = searchParams.get('email') || '';
  const coins = parseInt(searchParams.get('coins') || '0', 10);
  const price = parseInt(searchParams.get('price') || '0', 10);

  useEffect(() => {
    // Simulate loading
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
          <p>Mempersiapkan halaman pembayaran...</p>
        </div>
      </div>
    );
  }

  // Validate data
  if (!idNumber || !email || !coins || !price) {
    return (
      <div className="min-h-screen bg-navy flex flex-col">
        <HyveHeader />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Data Tidak Ditemukan</h2>
            <p className="text-gray-400 mb-6">Silakan kembali ke halaman awal</p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Kembali ke Home
            </a>
          </div>
        </div>
        <HyveFooter />
      </div>
    );
  }

  const handleSendProof = () => {
    const message = MESSAGES.paymentProof();
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `${WHATSAPP_URL}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <HyveHeader />

      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Pesanan Siap Dibayar
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Lanjutkan pembayaran untuk menyelesaikan top up Anda
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Left Column - Summary & QR */}
            <div className="space-y-8 order-2 md:order-1">
              <PaymentSummary
                idNumber={idNumber}
                email={email}
                coins={coins}
                price={price}
              />

              {/* Send Proof Button */}
              <button
                onClick={handleSendProof}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Kirim Bukti Pembayaran ke Admin
              </button>
            </div>

            {/* Right Column - QR Payment */}
            <div className="order-1 md:order-2">
              <QRPaymentSection />
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-5xl mx-auto mt-12 p-6 md:p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Info Penting</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>✓ Scan QR Code di atas menggunakan aplikasi pembayaran favorit Anda</li>
              <li>✓ Setelah melakukan pembayaran, klik tombol "Kirim Bukti Pembayaran"</li>
              <li>✓ Admin akan memproses top up Anda dalam 5-30 menit</li>
              <li>✓ Pastikan ID Number dan Gmail sesuai untuk mempercepat proses</li>
            </ul>
          </div>
        </div>
      </main>

      <HyveFooter />
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-navy flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
            <p>Loading...</p>
          </div>
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}

'use client';

import Image from 'next/image';

export function QRPaymentSection() {
  return (
    <div className="bg-gradient-to-br from-[#1a3a52] to-navy border border-gold/30 rounded-2xl p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Metode Pembayaran
      </h2>

      {/* QR Code Display */}
      <div className="flex flex-col items-center space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/qris-gopay-merchat-Wviqr8dnJckUB2hr5HPYwQhyHKjn8j.png"
            alt="QR Code QRIS Payment"
            width={300}
            height={300}
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </div>

        <div className="text-center space-y-3 w-full">
          <p className="text-gold text-lg md:text-xl font-semibold">
            Scan QR untuk pembayaran
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            QRIS / Transfer Bank / E-Wallet
          </p>
        </div>
      </div>

      {/* Warning Box */}
      <div className="mt-8 p-4 md:p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-yellow-400 font-semibold mb-2">Penting!</p>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Harap mengirimkan bukti pembayaran ke admin melalui WhatsApp untuk mempercepat proses top up Anda.
        </p>
      </div>
    </div>
  );
}

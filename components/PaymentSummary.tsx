'use client';

import { formatPrice, formatCoins } from '@/lib/constants';

interface PaymentSummaryProps {
  idNumber: string;
  email: string;
  coins: number;
  price: number;
}

export function PaymentSummary({
  idNumber,
  email,
  coins,
  price,
}: PaymentSummaryProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a3a52] to-navy border border-gold/30 rounded-2xl p-6 md:p-8 shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Ringkasan Pesanan
      </h2>

      <div className="space-y-4">
        {/* ID Number */}
        <div className="flex justify-between items-center pb-4 border-b border-gold/20">
          <span className="text-gray-400">ID Number eFootball</span>
          <span className="text-white font-semibold">{idNumber}</span>
        </div>

        {/* Email */}
        <div className="flex justify-between items-center pb-4 border-b border-gold/20">
          <span className="text-gray-400">Gmail</span>
          <span className="text-white font-semibold truncate ml-2">{email}</span>
        </div>

        {/* Coins */}
        <div className="flex justify-between items-center pb-4 border-b border-gold/20">
          <span className="text-gray-400">Paket</span>
          <span className="text-gold font-bold">{formatCoins(coins)} Coins</span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center pt-4">
          <span className="text-lg font-semibold text-gray-300">Total Pembayaran</span>
          <span className="text-3xl font-bold text-gold">{formatPrice(price)}</span>
        </div>
      </div>
    </div>
  );
}

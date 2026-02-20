'use client';

import { formatPrice, formatCoins } from '@/lib/constants';

interface PackageCardProps {
  id: number;
  coins: number;
  price: number;
  label: string | null;
  onSelect: (id: number, coins: number, price: number) => void;
}

export function PackageCard({
  id,
  coins,
  price,
  label,
  onSelect,
}: PackageCardProps) {
  return (
    <div className="card-hover relative group">
      <div className="bg-gradient-to-br from-[#1a3a52] to-navy border border-gold/20 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Label Badge */}
        {label && (
          <div className="absolute -top-3 -right-3">
            <span className="bg-gold text-navy px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
              {label}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col flex-grow justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-gray-400 text-sm uppercase tracking-wider">eFootball Coins</p>
            <p className="text-4xl md:text-5xl font-bold text-gold">
              {formatCoins(coins)}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm">Harga</p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              {formatPrice(price)}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onSelect(id, coins, price)}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Pilih Paket
        </button>
      </div>
    </div>
  );
}

'use client';

import { PackageCard } from './PackageCard';
import { PACKAGES } from '@/lib/constants';

interface PackageGridProps {
  onPackageSelect: (id: number, coins: number, price: number) => void;
}

export function PackageGrid({ onPackageSelect }: PackageGridProps) {
  return (
    <section id="packages" className="py-12 md:py-20 bg-gradient-to-b from-navy to-[#1a3a52]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Paket Top Up
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              coins={pkg.coins}
              price={pkg.price}
              label={pkg.label}
              onSelect={onPackageSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { HyveHeader } from '@/components/HyveHeader';
import { HeroSection } from '@/components/HeroSection';
import { PackageGrid } from '@/components/PackageGrid';
import { TopUpForm } from '@/components/TopUpForm';
import { HyveFooter } from '@/components/HyveFooter';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<{
    id: number;
    coins: number;
    price: number;
  } | null>(null);

  const handlePackageSelect = (id: number, coins: number, price: number) => {
    setSelectedPackage({ id, coins, price });
  };

  const handleCloseForm = () => {
    setSelectedPackage(null);
  };

  const handleHeroClick = () => {
    // Scroll to packages section
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy text-white flex flex-col">
      <HyveHeader />
      <main className="flex-grow">
        <HeroSection onSelectClick={handleHeroClick} />
        <PackageGrid onPackageSelect={handlePackageSelect} />
      </main>
      <HyveFooter />

      {/* Form Modal */}
      {selectedPackage && (
        <TopUpForm
          packageId={selectedPackage.id}
          coins={selectedPackage.coins}
          price={selectedPackage.price}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}

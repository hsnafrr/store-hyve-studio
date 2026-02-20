'use client';

import Image from 'next/image';
import { BRAND } from '@/lib/constants';

interface HeroSectionProps {
  onSelectClick: () => void;
}

export function HeroSection({ onSelectClick }: HeroSectionProps) {
  return (
    <section className="stars-background relative min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/50 to-navy pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-12 md:py-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {BRAND.name}
              </h1>
              <p className="text-xl md:text-2xl text-gold font-semibold">
                {BRAND.subtitle}
              </p>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-md">
              {BRAND.description}
            </p>

            <div>
              <button
                onClick={onSelectClick}
                className="px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Mulai Top Up Sekarang
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-[500px] flex items-center justify-center order-first md:order-last">
            <div className="relative w-full h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/football-action.png-oe6O0qF83pjzBMKmyMdZ7euX7DFzsb.jpeg"
                alt="Lionel Messi - eFootball"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

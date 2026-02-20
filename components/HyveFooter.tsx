import { FOOTER_TEXT } from '@/lib/constants';

export function HyveFooter() {
  return (
    <footer className="bg-gradient-to-r from-navy to-[#1a3a52] border-t border-gold/20 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-400 text-sm">
            {FOOTER_TEXT.copyright}
          </p>
          <p className="text-gold font-semibold text-sm">
            {FOOTER_TEXT.tagline}
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-gold/10">
          <p className="text-gray-500 text-xs text-center">
            {FOOTER_TEXT.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

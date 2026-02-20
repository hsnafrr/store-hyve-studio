export function HyveHeader() {
  return (
    <header className="bg-gradient-to-r from-navy to-[#1a3a52] border-b border-gold/20 py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl md:text-3xl font-bold text-gold tracking-wider">
            HYVE
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white">
            STORE
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#packages" className="text-white hover:text-gold transition-colors">
            Paket
          </a>
          <a href="#faq" className="text-white hover:text-gold transition-colors">
            Bantuan
          </a>
        </nav>
      </div>
    </header>
  )
}

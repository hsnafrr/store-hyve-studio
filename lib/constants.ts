// Package Data
export const PACKAGES = [
  {
    id: 1,
    coins: 130,
    price: 20200,
    label: null,
  },
  {
    id: 2,
    coins: 1050,
    price: 155000,
    label: null,
  },
  {
    id: 3,
    coins: 3250,
    price: 466000,
    label: 'POPULAR',
  },
  {
    id: 4,
    coins: 12800,
    price: 1650000,
    label: 'BEST VALUE',
  },
];

// Color Palette
export const COLORS = {
  navy: '#0A1128',
  darkBlue: '#001F3F',
  gold: '#D4AF37',
  white: '#FFFFFF',
  lightGray: '#E5E7EB',
  darkGray: '#1F3A52',
  gradientStart: '#0A1128',
  gradientEnd: '#1a3a52',
};

// WhatsApp Config
export const WHATSAPP_NUMBER = '6289620928296';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Messages
export const MESSAGES = {
  topUp: (idNumber: string, gmail: string, coins: number, price: number) => {
    return `Halo Admin Hyve Store 👋

Saya ingin top up eFootball dengan detail berikut:

📌 ID Number: ${idNumber}
📧 Gmail: ${gmail}
📦 Paket: ${coins} Coins
💰 Harga: Rp ${price.toLocaleString('id-ID')}

Mohon segera diproses. Terima kasih 🙏`;
  },
  paymentProof: () => {
    return `Halo, saya sudah melakukan pembayaran untuk top up. Mohon segera diproses. Terima kasih 🙏`;
  },
};

// Footer
export const FOOTER_TEXT = {
  copyright: '© 2024 Hyve Store',
  tagline: 'Official eFootball Top Up Partner',
  disclaimer: 'eFootball™ adalah merek dagang milik Konami Digital Entertainment',
};

// Brand
export const BRAND = {
  name: 'HYVE STORE',
  subtitle: 'Official Top Up Partner',
  description: 'Top Up eFootball Coins dengan harga terbaik dan proses tercepat',
};

// Format currency to IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

// Format coin amount
export const formatCoins = (coins: number) => {
  return coins.toLocaleString('id-ID');
};

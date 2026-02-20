'use client';

import { useState } from 'react';
import { WHATSAPP_URL, MESSAGES, PACKAGES, formatPrice } from '@/lib/constants';
import { topUpFormSchema, type TopUpFormData } from '@/lib/validation';

interface TopUpFormProps {
  packageId: number;
  coins: number;
  price: number;
  onClose: () => void;
}

export function TopUpForm({ packageId, coins, price, onClose }: TopUpFormProps) {
  const [formData, setFormData] = useState<Partial<TopUpFormData>>({
    idNumber: '',
    email: '',
    packageId,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      const result = topUpFormSchema.safeParse({
        idNumber: formData.idNumber,
        email: formData.email,
        packageId,
      });

      if (!result.success) {
        const newErrors: Record<string, string> = {};
        result.error.errors.forEach((error) => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
        setIsSubmitting(false);
        return;
      }

      // Create WhatsApp message
      const message = MESSAGES.topUp(
        formData.idNumber!,
        formData.email!,
        coins,
        price
      );

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `${WHATSAPP_URL}?text=${encodedMessage}`;

      // Store data for payment page
      sessionStorage.setItem(
        'paymentData',
        JSON.stringify({
          idNumber: formData.idNumber,
          email: formData.email,
          coins,
          price,
          packageId,
        })
      );

      // Open WhatsApp in new tab
      window.open(whatsappLink, '_blank');

      // Redirect to payment page
      setTimeout(() => {
        window.location.href = `/payment?id=${formData.idNumber}&email=${formData.email}&coins=${coins}&price=${price}`;
      }, 500);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Terjadi kesalahan. Silakan coba lagi.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-[#1a3a52] to-navy border border-gold/30 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Top Up Sekarang</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ID Number Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              ID Number eFootball <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber || ''}
              onChange={handleChange}
              placeholder="Masukkan ID Anda"
              className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all"
            />
            {errors.idNumber && (
              <p className="text-red-400 text-sm mt-1">{errors.idNumber}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Gmail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="contoh@gmail.com"
              className="w-full px-4 py-3 bg-navy border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Package Display (Read-only) */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Paket <span className="text-red-500">*</span>
            </label>
            <div className="px-4 py-3 bg-navy border border-gold/20 rounded-lg text-white">
              <p className="font-semibold text-gold">{coins.toLocaleString('id-ID')} Coins</p>
              <p className="text-sm text-gray-400">{formatPrice(price)}</p>
            </div>
          </div>

          {/* Error Message */}
          {errors.submit && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold py-3 md:py-4 rounded-lg transition-all duration-300 mt-6"
          >
            {isSubmitting ? 'Memproses...' : 'Kirim & Top Up Sekarang'}
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full text-gray-300 hover:text-white font-semibold py-2 transition-colors"
          >
            Batal
          </button>
        </form>

        {/* Info Text */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Anda akan diarahkan ke WhatsApp untuk menyelesaikan proses
        </p>
      </div>
    </div>
  );
}

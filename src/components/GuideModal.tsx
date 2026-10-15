import React, { useState } from 'react';
import { X, Copy, Check, FileText, Globe, Image, Phone, BookOpen, ExternalLink } from 'lucide-react';
import { PESANTREN_INFO } from '../config/pesantrenConfig';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'images' | 'hosting' | 'local'>('content');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden text-[#202923] border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#063D32] text-white flex items-center justify-between border-b border-[#075B46]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#075B46] rounded-lg text-[#C6A15B]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-editorial text-lg font-bold">
                Panduan Kustomisasi & Publikasi Website
              </h3>
              <p className="text-xs text-white/80">
                Pondok Pesantren Semi Modern — Panduan Pengembang & Administrator
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-[#F8F6EF] px-6 text-sm font-medium">
          <button
            onClick={() => setActiveTab('content')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'content'
                ? 'border-[#075B46] text-[#075B46] font-semibold bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileText className="w-4 h-4 text-[#C6A15B]" />
            <span>1. Edit Data & Teks</span>
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'images'
                ? 'border-[#075B46] text-[#075B46] font-semibold bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Image className="w-4 h-4 text-[#C6A15B]" />
            <span>2. Ganti Foto & Logo</span>
          </button>
          <button
            onClick={() => setActiveTab('local')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'local'
                ? 'border-[#075B46] text-[#075B46] font-semibold bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Globe className="w-4 h-4 text-[#C6A15B]" />
            <span>3. Menjalankan Lokal</span>
          </button>
          <button
            onClick={() => setActiveTab('hosting')}
            className={`py-3 px-4 border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'hosting'
                ? 'border-[#075B46] text-[#075B46] font-semibold bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <ExternalLink className="w-4 h-4 text-[#C6A15B]" />
            <span>4. Publikasi Hosting</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed">
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-[#075B46] mb-1">
                  Pusat Konfigurasi Tunggal (Single Source of Truth)
                </h4>
                <p className="text-stone-700 text-xs">
                  Seluruh data pesantren tersentralisasi di dalam satu berkas berkode bersih:{' '}
                  <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-300 text-[#063D32]">
                    src/config/pesantrenConfig.ts
                  </code>
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-stone-900 mb-2">Item yang dapat langsung diganti:</h5>
                <ul className="space-y-2 text-stone-700">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">PESANTREN_INFO.namaResmi</span>
                    <span>: Mengubah nama pondok pesantren (saat ini: <em>{PESANTREN_INFO.namaResmi}</em>)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">PESANTREN_INFO.pimpinan</span>
                    <span>: Mengubah nama Kyai / Mudir, jabatan, foto, dan teks sambutan resmi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">PESANTREN_INFO.kontak</span>
                    <span>: Nomor WhatsApp (format: 628xxx tanpa tanda plus), alamat, email, telepon, dan jam pelayanan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">PROGRAM_LIST</span>
                    <span>: Menambah, mengubah, atau menyelaraskan 7 program pendidikan unggulan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded">PSB_TIMELINE & FAQS</span>
                    <span>: Mengubah tanggal gelombang pendaftaran santri baru serta daftar tanya-jawab</span>
                  </li>
                </ul>
              </div>

              <div className="relative mt-4">
                <div className="flex justify-between items-center bg-stone-800 text-stone-200 px-3 py-1.5 text-xs rounded-t-lg">
                  <span className="font-mono">Cuplikan berkas: src/config/pesantrenConfig.ts</span>
                  <button
                    onClick={() =>
                      handleCopy(
                        `export const PESANTREN_INFO = {
  namaResmi: 'Pondok Pesantren Darul Hikmah',
  pimpinan: {
    nama: 'K.H. Ahmad Dahlan, Lc., M.A.',
    jabatan: 'Pimpinan & Pengasuh',
    ...
  },
  kontak: {
    whatsapp: '6281234567890',
    alamat: 'Jl. Raya Pesantren No. 10...',
  }
};`,
                        'code-config'
                      )
                    }
                    className="flex items-center gap-1 hover:text-white"
                  >
                    {copiedText === 'code-config' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText === 'code-config' ? 'Tersalin' : 'Salin Contoh'}</span>
                  </button>
                </div>
                <pre className="bg-stone-900 text-emerald-300 p-3 rounded-b-lg font-mono text-xs overflow-x-auto">
{`export const PESANTREN_INFO = {
  namaResmi: 'Pondok Pesantren [Nama Pondok]',
  pimpinan: {
    nama: 'K.H. [Nama Pimpinan], Lc., M.A.',
    ...
  },
  kontak: {
    whatsapp: '6281234567890', // Nomor WA resmi aktif
    email: 'sekretariat@pesantren.sch.id',
  }
};`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="space-y-4">
              <p className="text-stone-700">
                Sesuai prinsip etika foto kelembagaan, foto dokumentasi asli lingkungan pesantren Anda dapat diletakkan di dalam direktori:
              </p>
              <div className="p-3 bg-stone-100 rounded-lg font-mono text-xs text-[#063D32]">
                src/assets/images/
              </div>
              <ul className="space-y-2.5 text-stone-700">
                <li>
                  <strong>1. Foto Hero / Kampus:</strong> Ganti gambar masjid/halaman utama dengan format 16:9 (disarankan resolusi 1920x1080 piksel, format WebP atau JPG teroptimasi).
                </li>
                <li>
                  <strong>2. Foto Pimpinan / Kyai:</strong> Gunakan foto resmi bertaraf formal (rasio 3:4 atau 4:3) dengan resolusi minimal 800x1000 piksel.
                </li>
                <li>
                  <strong>3. Logo Pesantren:</strong> Ganti emblem SVG di <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">Navbar.tsx</code> dan <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-xs">Footer.tsx</code> dengan file logo PNG transparan Anda.
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'local' && (
            <div className="space-y-4">
              <p className="text-stone-700">
                Website ini dibangun menggunakan stack modern: <strong>React 19, TypeScript, Tailwind CSS, dan Vite</strong>.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-stone-900 text-stone-100 rounded-lg font-mono text-xs space-y-2">
                  <p className="text-stone-400"># 1. Pasang dependensi:</p>
                  <p className="text-emerald-400">npm install</p>
                  <p className="text-stone-400"># 2. Jalankan server pengembangan lokal:</p>
                  <p className="text-emerald-400">npm run dev</p>
                  <p className="text-stone-400"># 3. Buka di browser pada alamat:</p>
                  <p className="text-emerald-400">http://localhost:3000</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hosting' && (
            <div className="space-y-4">
              <p className="text-stone-700">
                Website ini adalah <strong>static profile website</strong> tanpa database rumit dan tanpa sistem login yang rentan, sehingga sangat aman, cepat, dan hemat biaya hosting.
              </p>

              <div className="space-y-3">
                <div className="p-4 border border-stone-200 rounded-lg">
                  <h5 className="font-semibold text-stone-900 mb-1">Langkah 1: Build berkas produksi</h5>
                  <p className="text-stone-600 text-xs mb-2">Jalankan perintah ini di terminal komputer Anda:</p>
                  <div className="p-2.5 bg-stone-900 text-emerald-400 font-mono text-xs rounded">
                    npm run build
                  </div>
                  <p className="text-stone-500 text-xs mt-2">
                    Hasil build akan otomatis berada di dalam folder <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">dist/</code>.
                  </p>
                </div>

                <div className="p-4 border border-stone-200 rounded-lg">
                  <h5 className="font-semibold text-stone-900 mb-1">Langkah 2: Unggah ke Hosting</h5>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                    <li><strong>cPanel / Web Hosting Biasa:</strong> Upload seluruh isi folder <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">dist/</code> ke direktori <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">public_html</code>.</li>
                    <li><strong>Vercel / Netlify / GitHub Pages:</strong> Cukup hubungkan repository Git Anda, sistem akan otomatis mendeteksi konfigurasi build Vite.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#075B46] hover:bg-[#063D32] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronLeft, Mail } from "lucide-react";

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Umum
  {
    id: 1,
    category: "Umum",
    question: "Apa itu GasTransact Pro?",
    answer:
      "GasTransact Pro adalah sistem manajemen transaksi LPG berbasis web yang dirancang untuk distributor dan pengelola multi gudang. Sistem ini membantu mencatat transaksi, memantau stok tabung, dan menghasilkan laporan margin secara real-time — semua dalam satu platform.",
  },
  {
    id: 2,
    category: "Umum",
    question: "Siapa yang cocok menggunakan GasTransact Pro?",
    answer:
      "Sistem ini cocok untuk distributor LPG, admin gudang, staf operasional, dan pemilik usaha yang mengelola penjualan tabung gas LPG skala UMKM hingga menengah.",
  },
  {
    id: 3,
    category: "Umum",
    question: "Apakah GasTransact Pro gratis?",
    answer:
      "Ya, saat ini GasTransact Pro tersedia secara gratis. Anda bisa langsung mencoba sistem tanpa biaya apapun.",
  },
  {
    id: 4,
    category: "Umum",
    question: "Bagaimana cara mulai menggunakannya?",
    answer:
      "Langsung kunjungi tautan demo di halaman ini, buat akun, dan sistem siap digunakan. Tidak perlu instalasi atau konfigurasi teknis yang rumit.",
  },
  // Fitur Utama
  {
    id: 5,
    category: "Fitur Utama",
    question: "Apakah mendukung multi gudang?",
    answer:
      "Ya. Anda bisa mengelola beberapa gudang sekaligus dalam satu akun. Setiap gudang memiliki data stok dan transaksi masing-masing yang bisa dipantau secara terpisah maupun keseluruhan.",
  },
  {
    id: 6,
    category: "Fitur Utama",
    question: "Bagaimana laporan margin real-time bekerja?",
    answer:
      "Setiap transaksi yang dicatat langsung dihitung marginnya secara otomatis berdasarkan harga beli dan harga jual yang Anda input. Laporan margin bisa dilihat kapan saja tanpa perlu rekap manual.",
  },
  {
    id: 7,
    category: "Fitur Utama",
    question: "Apakah ada fitur tracking stok tabung LPG?",
    answer:
      "Ya. Sistem mencatat keluar masuk tabung secara otomatis setiap kali transaksi diinput, sehingga stok gudang selalu up-to-date dan akurat.",
  },
  {
    id: 8,
    category: "Fitur Utama",
    question: "Bagaimana integrasi Google Sheets bekerja?",
    answer:
      "Data transaksi dapat disinkronisasi ke Google Sheets secara otomatis. Cocok untuk tim yang sudah terbiasa bekerja dengan spreadsheet atau membutuhkan laporan dalam format yang familiar.",
  },
  {
    id: 9,
    category: "Fitur Utama",
    question: "Apakah bisa melihat riwayat transaksi?",
    answer:
      "Ya. Semua transaksi tersimpan dan bisa diakses kapan saja. Anda bisa memfilter berdasarkan tanggal, gudang, atau jenis transaksi.",
  },
  {
    id: 10,
    category: "Fitur Utama",
    question: "Seberapa cepat proses input transaksi?",
    answer:
      "Alur input dirancang agar bisa diselesaikan dalam waktu kurang dari 3 detik per transaksi, sehingga tidak memperlambat proses operasional harian.",
  },
  // Teknis & Akses
  {
    id: 11,
    category: "Teknis & Akses",
    question: "Apakah bisa diakses dari HP atau tablet?",
    answer:
      "Ya. GasTransact Pro responsif dan bisa diakses dari smartphone, tablet, maupun komputer desktop melalui browser.",
  },
  {
    id: 12,
    category: "Teknis & Akses",
    question: "Browser apa yang didukung?",
    answer:
      "Sistem berjalan optimal di Chrome, Firefox, Edge, dan Safari versi terbaru. Disarankan menggunakan browser yang selalu diperbarui untuk performa terbaik.",
  },
  {
    id: 13,
    category: "Teknis & Akses",
    question: "Perlu instalasi aplikasi tidak?",
    answer:
      "Tidak. GasTransact Pro adalah aplikasi berbasis web — cukup buka browser dan akses tautannya. Tidak perlu download atau install apapun.",
  },
  {
    id: 14,
    category: "Teknis & Akses",
    question: "Apakah sistem bisa digunakan offline?",
    answer:
      "Tidak. GasTransact Pro membutuhkan koneksi internet untuk memastikan data selalu sinkron dan akurat di semua perangkat.",
  },
  {
    id: 15,
    category: "Teknis & Akses",
    question: "Data disimpan di mana?",
    answer:
      "Data disimpan di server cloud yang aman. Anda tidak perlu khawatir kehilangan data meskipun berganti perangkat.",
  },
  // Keamanan Data
  {
    id: 16,
    category: "Keamanan Data",
    question: "Apakah data bisnis saya aman?",
    answer:
      "Ya. Data Anda disimpan di infrastruktur cloud yang terenkripsi dan tidak dapat diakses oleh pihak lain selain akun Anda sendiri.",
  },
  {
    id: 17,
    category: "Keamanan Data",
    question: "Siapa saja yang bisa mengakses data saya?",
    answer:
      "Hanya pengguna yang memiliki akun dan izin akses yang bisa melihat data Anda. Tidak ada pihak ketiga yang memiliki akses ke data operasional bisnis Anda.",
  },
  {
    id: 18,
    category: "Keamanan Data",
    question: "Apakah ada backup data otomatis?",
    answer:
      "Data disimpan di cloud sehingga tidak bergantung pada perangkat lokal. Backup dilakukan di sisi infrastruktur server.",
  },
  // Operasional
  {
    id: 19,
    category: "Operasional",
    question: "Bisakah lebih dari satu pengguna login bersamaan?",
    answer:
      "Ya. Sistem mendukung penggunaan multi-user, sehingga staf dari gudang berbeda bisa input transaksi secara bersamaan tanpa konflik data.",
  },
  {
    id: 20,
    category: "Operasional",
    question: "Bagaimana cara menambah gudang baru?",
    answer:
      "Penambahan gudang bisa dilakukan langsung dari panel manajemen di dalam sistem tanpa perlu konfigurasi teknis.",
  },
  // Support & Bantuan
  {
    id: 21,
    category: "Support & Bantuan",
    question: "Bagaimana cara menghubungi tim support?",
    answer:
      "Anda bisa menghubungi kami melalui email di ardli.firdaus@gmail.com untuk pertanyaan teknis maupun operasional.",
  },
  {
    id: 22,
    category: "Support & Bantuan",
    question: "Apakah ada panduan atau dokumentasi penggunaan?",
    answer:
      "Panduan penggunaan sedang dalam pengembangan. Untuk sementara, tim kami siap membantu langsung via email jika ada pertanyaan.",
  },
  {
    id: 23,
    category: "Support & Bantuan",
    question: "Apakah ada onboarding untuk pengguna baru?",
    answer:
      "Antarmuka sistem dirancang agar mudah dipahami tanpa pelatihan khusus. Jika dibutuhkan, tim kami bisa membantu proses onboarding awal via email.",
  },
];

const CATEGORIES = [...new Set(FAQ_DATA.map((item) => item.category))];
const CONTACT_EMAIL = "ardli.firdaus@gmail.com";

type Screen = "list" | "answer" | "contact";

export default function FAQChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("list");
  const [selected, setSelected] = useState<FAQItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelect = (faq: FAQItem) => {
    setSelected(faq);
    setScreen("answer");
  };

  const handleBack = () => {
    setSelected(null);
    setScreen("list");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setScreen("list");
      setSelected(null);
      setActiveCategory(null);
    }, 200);
  };

  const visibleFAQs = activeCategory
    ? FAQ_DATA.filter((f) => f.category === activeCategory)
    : FAQ_DATA;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <>
        <style>{`
          @keyframes chatOpen {
            from { opacity: 0; transform: translateY(14px) scale(0.95); }
            to   { opacity: 1; transform: translateY(0)    scale(1);    }
          }
        `}</style>
        <div
          style={{ animation: "chatOpen 0.22s ease-out forwards", transformOrigin: "bottom right" }}
          className="w-80 sm:w-96 bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden max-h-[520px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-emerald-600 flex-shrink-0">
            <div className="flex items-center gap-2">
              {screen !== "list" && (
                <button
                  onClick={handleBack}
                  className="p-1 rounded-full hover:bg-emerald-700 transition-colors text-white"
                  aria-label="Kembali"
                >
                  <ChevronLeft size={16} />
                </button>
              )}
              <div>
                <p className="font-semibold text-sm text-white leading-tight">
                  GasTransact Pro
                </p>
                <p className="text-xs text-emerald-100">Pusat Bantuan</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-full hover:bg-emerald-700 transition-colors text-white"
              aria-label="Tutup"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {screen === "list" && (
              <>
                {/* Greeting */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-white" />
                  </div>
                  <div className="bg-[#1E293B] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-slate-200 max-w-[85%] leading-relaxed">
                    Halo! Ada yang bisa kami bantu? Pilih pertanyaan di bawah
                    ini.
                  </div>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                      activeCategory === null
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-[#1E293B] text-slate-400 hover:border-emerald-600 hover:text-emerald-400"
                    }`}
                  >
                    Semua
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        activeCategory === cat
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "border-[#1E293B] text-slate-400 hover:border-emerald-600 hover:text-emerald-400"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* FAQ list */}
                <div className="space-y-1.5">
                  {visibleFAQs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => handleSelect(faq)}
                      className="w-full text-left text-sm text-slate-300 bg-[#081120] hover:bg-emerald-900/30 hover:text-emerald-300 border border-[#1E293B] hover:border-emerald-700/60 rounded-xl px-3 py-2.5 transition-all"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </>
            )}

            {screen === "answer" && selected && (
              <>
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="bg-emerald-600 rounded-2xl rounded-tr-none px-3 py-2 text-sm text-white max-w-[85%]">
                    {selected.question}
                  </div>
                </div>

                {/* Answer bubble */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-white" />
                  </div>
                  <div className="bg-[#1E293B] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-slate-200 max-w-[85%] leading-relaxed">
                    {selected.answer}
                  </div>
                </div>

                {/* Follow-up */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-white" />
                  </div>
                  <div className="bg-[#1E293B] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-slate-200 max-w-[85%]">
                    Apakah jawaban ini membantu?
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pl-9">
                  <button
                    onClick={handleBack}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#1E293B] text-slate-400 hover:border-emerald-600 hover:text-emerald-400 transition-colors"
                  >
                    Pertanyaan lain
                  </button>
                  <button
                    onClick={() => setScreen("contact")}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#1E293B] text-slate-400 hover:border-red-500/60 hover:text-red-400 transition-colors"
                  >
                    Masih bingung
                  </button>
                </div>
              </>
            )}

            {screen === "contact" && (
              <>
                {/* User bubble */}
                <div className="flex justify-end">
                  <div className="bg-emerald-600 rounded-2xl rounded-tr-none px-3 py-2 text-sm text-white max-w-[85%]">
                    Masih bingung
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-white" />
                  </div>
                  <div className="bg-[#1E293B] rounded-2xl rounded-tl-none px-3 py-2 text-sm text-slate-200 max-w-[85%] leading-relaxed">
                    Tidak masalah! Tim kami siap membantu Anda secara langsung.
                    Silakan kirim pertanyaan ke:
                  </div>
                </div>

                {/* Email card */}
                <div className="pl-9">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/60 rounded-xl px-3 py-2.5 text-sm text-emerald-400 hover:bg-emerald-900/50 transition-colors group"
                  >
                    <Mail size={14} className="flex-shrink-0" />
                    <span className="group-hover:underline break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </div>

                {/* Back link */}
                <div className="pl-9">
                  <button
                    onClick={() => {
                      setSelected(null);
                      setScreen("list");
                    }}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    ← Kembali ke daftar pertanyaan
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        </>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95"
        aria-label={isOpen ? "Tutup bantuan" : "Buka pusat bantuan"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}

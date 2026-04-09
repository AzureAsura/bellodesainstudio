import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    title: "Tentang Kami",
    links: ["Overview", "History", "Pencapaian", "Hubungan Investor", "Program CSR"],
  },
  {
    title: "Untuk Pasien",
    links: ["Pusat Unggulan", "Telekonsultasi", "FAQ"],
  },
  {
    title: "Untuk Perusahaan",
    links: ["Laporan Keuangan", "Laporan Tahunan", "Corporate Governance"],
  },
  {
    title: "Untuk Profesional",
    links: ["Pusat Pelatihan", "Pusat Unggulan", "Karir"],
  },
];

export default function Footer() {
  return (
    <div>
      
      <footer className="w-full bg-black text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

            {footerLinks.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-lg font-bold">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 lg:col-span-1 space-y-6">
              <h4 className="text-lg font-bold">Ayo Terhubung dengan Kami</h4>
              <div className="flex gap-5">
                <Link href="#" className="hover:text-[#1A365D] transition-colors">
                  <MessageCircle size={24} />
                </Link>
                <Link href="#" className="hover:text-[#1A365D] transition-colors">
                  <FaInstagram size={24} />
                </Link>
                <Link href="#" className="hover:text-[#1A365D] transition-colors">
                  <FaFacebook size={24} />
                </Link>
                <Link href="#" className="hover:text-[#1A365D] transition-colors">
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm opacity-90">
            <p>© Copyright 2026, Bello Desain.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:underline">Syarat dan Ketentuan</Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="hover:underline">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>

      </footer>


    </div>
  );
}
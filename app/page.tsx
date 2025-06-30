"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HospitalWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [counters, setCounters] = useState({
    doctors: 2,
    consultations: 1,
    medicines: 0,
    patients: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href")
      if (href?.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerHeight = 80 // Account for fixed header
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
        // Close mobile menu if open
        setIsMenuOpen(false)
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-500">PT CIPTA HOSPITAL</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Home
              </a>
              <a href="#form-konsultasi" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Konsultasi
              </a>
              <a href="#dokter" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Dokter
              </a>
              <a href="#layanan" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Layanan
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Kontak
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-500 transition-colors">
                Berita
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white bg-transparent"
              >
                LOGIN
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600">DAFTAR</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-emerald-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
                ></span>
                <span
                  className={`bg-emerald-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                  className={`bg-emerald-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#hero" className="text-gray-700 hover:text-emerald-500">
                  Home
                </a>
                <a href="#form-konsultasi" className="text-gray-700 hover:text-emerald-500">
                  Konsultasi
                </a>
                <a href="#dokter" className="text-gray-700 hover:text-emerald-500">
                  Dokter
                </a>
                <a href="#layanan" className="text-gray-700 hover:text-emerald-500">
                  Layanan
                </a>
                <a href="#kontak" className="text-gray-700 hover:text-emerald-500">
                  Kontak
                </a>
                <a href="#about" className="text-gray-700 hover:text-emerald-500">
                  Berita
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    PILIH JADWAL
                    <br />
                    UNTUK KONSULTASI
                  </h1>
                  <p className="text-xl mb-6 opacity-90">
                    Dapatkan konsultasi kesehatan terbaik dengan dokter profesional kami
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-emerald-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    KONSULTASI
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/images/doctor-aisyah.png"
                  alt="dr. Aisyah - Dokter Professional"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 object-cover aspect-[3/4] md:aspect-[4/5]"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-10 h-10 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-500 mb-2">{counters.doctors}</h3>
              <p className="text-gray-600 font-semibold">DOKTER</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-10 h-10 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-500 mb-2">{counters.consultations.toLocaleString()}</h3>
              <p className="text-gray-600 font-semibold">KONSULTASI</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-10 h-10 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-500 mb-2">{counters.medicines.toLocaleString()}</h3>
              <p className="text-gray-600 font-semibold">OBAT</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-10 h-10 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-emerald-500 mb-2">{counters.patients.toLocaleString()}</h3>
              <p className="text-gray-600 font-semibold">PASIEN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div id="about" className="mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  Tentang PT CIPTA HOSPITAL INDONESIA
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                  Kami adalah rumah sakit terpercaya yang menyediakan layanan kesehatan berkualitas tinggi dengan
                  teknologi modern dan tim medis profesional.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent>
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 0a1 1 0 100 2h.01a1 1 0 100-2H9zm2 0a1 1 0 100 2h.01a1 1 0 100-2H11z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Fasilitas Modern</h3>
                      <p className="text-gray-600">Dilengkapi dengan peralatan medis terkini</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent>
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Dokter Berpengalaman</h3>
                      <p className="text-gray-600">Tim medis profesional dan berpengalaman</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <CardContent>
                      <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
                      <p className="text-gray-600">Siap melayani Anda kapan saja</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Consultation Form */}
              <Card className="p-6" id="form-konsultasi">
                <h3 className="text-xl font-semibold text-emerald-500 mb-4">Form Konsultasi</h3>
                <form className="space-y-4">
                  <Input placeholder="Nama Lengkap" />
                  <Input type="email" placeholder="Email Lengkap" />
                  <Input type="tel" placeholder="Nomor Telepon" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Spesialis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="umum">Dokter Umum</SelectItem>
                      <SelectItem value="jantung">Spesialis Jantung</SelectItem>
                      <SelectItem value="anak">Spesialis Anak</SelectItem>
                      <SelectItem value="mata">Spesialis Mata</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Keluhan Anda" rows={3} />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">KONSULTASI</Button>
                </form>
              </Card>

              {/* Featured Doctors */}
              <Card className="p-6" id="dokter">
                <h3 className="text-xl font-semibold text-emerald-500 mb-4">DOKTER</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                    <img
                      src="/images/doctor-aisyah.png"
                      alt="Dr. Aisyah"
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">dr. Aisyah</h4>
                      <p className="text-sm text-gray-600">Spesialis Jantung</p>
                      <span className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                        ONLINE
                      </span>
                    </div>
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      Hubungi
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                    <img
                      src="/images/doctor-aisyah.png"
                      alt="Dr. Aisyah"
                      className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">dr. Aisyah</h4>
                      <p className="text-sm text-gray-600">Dokter Umum</p>
                      <span className="inline-block bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                        ONLINE
                      </span>
                    </div>
                    <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                      Hubungi
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Services */}
              <Card className="p-6" id="layanan">
                <h3 className="text-xl font-semibold text-emerald-500 mb-4">LAYANAN</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <svg className="w-8 h-8 text-emerald-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">Kesehatan Jantung</span>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <svg className="w-8 h-8 text-emerald-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Neurologi</span>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <svg className="w-8 h-8 text-emerald-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">Pediatri</span>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <svg className="w-8 h-8 text-emerald-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">Oftalmologi</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12" id="kontak">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">PT CIPTA HOSPITAL INDONESIA</h3>
              <p className="text-gray-300">Memberikan layanan kesehatan bagi yang mau mau aja</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 (021) 123-4567</p>
                <p>✉️ info@ciptahospital.co.id</p>
                <p>📍 Makassar Kece, Indonesia</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-emerald-400 mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Konsultasi Online</li>
                <li>Rawat Jalan</li>
                <li>Rawat Inap</li>
                <li>Gawat Darurat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT CIPTA HOSPITAL INDONESIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

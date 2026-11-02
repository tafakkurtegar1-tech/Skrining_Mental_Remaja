# 🧠 Sistem Informasi Deteksi Dini Kesehatan Mental Remaja (PHQ-9)
**Studi Kasus: Desa Sukarame**

Repositori ini berisi kode sumber (*source code*) aplikasi web berbasis *client-side* yang dikembangkan untuk membantu remaja di Desa Sukarame melakukan skrining kesehatan mental secara mandiri, cepat, privat, dan terukur menggunakan instrumen *Patient Health Questionnaire-9* (PHQ-9).

---

## 📌 Tentang Proyek
Aplikasi ini dikembangkan sebagai bagian dari pelaksanaan Praktek Kerja Lapangan (PKL) program studi **Sistem Informasi**. Tujuan utamanya adalah menyediakan ruang aman (*safe space*) bagi remaja dalam mengenali kondisi kesehatan mental tanpa rasa takut terhadap stigma sosial di masyarakat.

---

## ✨ Fitur Utama
1. **Dashboard Utama (`index.html`):** Halaman awal yang menyambut pengguna dengan dua tombol navigasi utama:
   * **Tombol Registrasi:** Mengarahkan pengguna langsung menuju halaman pengisian data diri dan kuesioner.
   * **Tombol Tentang Skrining:** Menampilkan informasi edukasi kesehatan mental, penjelasan instrumen PHQ-9, serta penekanan jaminan privasi data.
2. **Formulir & Kuesioner (`add.html`):** Pengisian identitas singkat (nama/inisial, usia, dusun) serta 9 butir pertanyaan kuesioner PHQ-9.
3. **Kalkulasi Otomatis:** Perhitungan total skor secara instan menggunakan JavaScript di sisi klien.
4. **Jaminan Privasi (*Local Storage*):** Penyimpanan data dilakukan secara lokal di peramban pengguna untuk menjaga kerahasiaan penuh tanpa memerlukan database terpusat pada tahap awal.
5. **Ekspor Laporan PDF:** Fitur untuk mengunduh hasil skrining dalam format dokumen PDF formal yang siap disimpan atau dibawa ke tenaga profesional.
 
---

## 🛠️ Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Logika & Penyimpanan:** Browser *Local Storage*, DOM Manipulation
* **Pustaka Pendukung:** Pustaka render PDF (jsPDF / html2pdf)

---

## 📂 Struktur Proyek & Hubungan Antarfile
Berikut adalah struktur direktori file di dalam repositori proyek:

```text
📦 Aplikasi_Skrining_Mental_Remaja
 ┣ 📂 assets/
 ┃ ┣ 📜 cipengan.jpeg     # Gambar dokumentasi / ilustrasi lokasi studi kasus Desa Sukarame
 ┃ ┗ 📜 cover.jpg         # Gambar sampul / banner aplikasi web
 ┣ 📂 scripts/
 ┃ ┣ 📜 result.js         # Logika untuk memproses dan merender hasil akhir skor skrining
 ┃ ┗ 📜 survey.js         # Logika untuk mengatur pengisian kuesioner dan validasi data form
 ┣ 📜 about.html          # Halaman informasi / tentang aplikasi
 ┣ 📜 add.html            # Halaman formulir data diri pasien
 ┣ 📜 index.html          # Dashboard utama (Tombol "Registrasi" & "Tentang Skrining")
 ┣ 📜 result.html         # Halaman untuk menampilkan hasil kalkulasi skor
 ┣ 📜 style.css           # File stylesheet untuk desain antarmuka
 ┣ 📜 survey.html         # Halaman utama modul kuesioner skrining PHQ-9
 ┗ 📜 README.md           # Dokumentasi penjelasan proyek

```text
## 🚀 Cara Menjalankan Aplikasi


## 👨‍💻 Repositori dan proyek aplikasi web ini dikembangkan oleh:
* **Nama:** Tegar Tali Tafakur
* **NIM:** 2012231051[cite: 1]
* **Program Studi:** Sistem Informasi[cite: 1]
* **Universitas M. H. Thamrin**[cite: 1]

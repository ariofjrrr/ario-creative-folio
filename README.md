# Ario Creative Folio

Buat sebuah personal portfolio website profesional untuk Ario Fajar Dharmawan, seorang kreator digital yang memiliki minat dan karya di bidang penulisan, desain grafis, pengembangan website, dokumentasi kegiatan, serta pengembangan proyek kreatif dan akademik.

Website ini berfungsi sebagai pusat portofolio digital untuk melamar pekerjaan, mendapatkan klien freelance, membangun personal branding, dan mendokumentasikan perjalanan berkarya.

1. Konsep dan Identitas Visual

Buat desain website dengan karakter:

Modern, minimalis, profesional, maskulin, dan berkarakter.

Mengutamakan tipografi, whitespace, grid yang rapi, dan komposisi editorial.

Warna utama hitam, putih, dan abu-abu, dengan aksen biru tua atau biru elektrik yang digunakan secara terbatas.

Gunakan tipografi sans-serif modern seperti Inter, Plus Jakarta Sans, atau Geist.

Hindari tampilan template AI yang generik, gradient berlebihan, glassmorphism, elemen dekoratif tidak perlu, ikon berlebihan, dan animasi yang mengganggu.

Desain harus terasa seperti website personal milik kreator profesional, bukan landing page produk SaaS.

Responsif dan optimal untuk desktop, tablet, dan smartphone.

2. Struktur Halaman

Buat website dengan navigasi:

Home

About

Portfolio

Certificates

Writing

Contact

Gunakan navigasi yang ringkas dengan logo teks “AFD” sebagai identitas personal.

3. Hero Section

Buat hero section yang kuat dan tidak berlebihan.

Tampilkan:
“Ario Fajar Dharmawan”

Headline:
“Turning Ideas Into Meaningful Works.”

Deskripsi:
“Writing, visual design, digital experiences, and creative projects — collected in one place.”

Tambahkan dua tombol:

Explore My Works

Get in Touch

Sediakan ruang untuk foto profil profesional berbentuk portrait atau foto hitam-putih. Foto harus mudah diganti melalui aset yang bisa diperbarui.

Tambahkan informasi kecil seperti “Personal Portfolio · 2026” dengan tata letak editorial yang elegan.

4. About Me

Buat bagian profil yang memperkenalkan saya sebagai individu yang tertarik pada penulisan, komunikasi visual, teknologi, dan pengembangan proyek digital.

Gunakan narasi yang profesional, autentik, tidak berlebihan, dan tidak mengklaim keahlian atau pengalaman yang belum terverifikasi.

Tampilkan area ringkas untuk:

Creative Writing

Graphic Design

Web Development

Digital Communication

Research & Documentation

Jangan menampilkan persentase kemampuan atau progress bar skill yang tidak memiliki dasar.

5. Portfolio / Selected Works

Ini adalah bagian terpenting dari website.

Buat galeri karya berbasis grid dengan kartu visual yang bersih, konsisten, dan memiliki thumbnail yang bisa diklik.

Sediakan kategori filter:

All Works

Writing

Graphic Design

Web Development

Projects

Publications

Setiap kartu karya menampilkan:

Thumbnail atau cover.

Judul karya.

Kategori.

Tahun.

Deskripsi singkat.

Tombol “View Project”.

Buat halaman detail atau modal untuk setiap karya dengan ruang bagi:

Latar belakang proyek.

Tujuan.

Peran dan kontribusi pribadi.

Proses pengerjaan.

Hasil atau luaran.

Dokumentasi visual.

Tautan eksternal jika tersedia.

Siapkan contoh entri awal yang dapat diedit:

“Wanita Kehilangan Kendali” — proyek penulisan buku.

“Pos PAUD Cempaka” — proyek pengembangan website profil.

“BEM Berdampak” — dokumentasi kegiatan dan luaran proyek.

“Selected Graphic Designs” — kumpulan desain grafis.

“IoT-Based Rice Dryer Module” — luaran modul alat pengering padi berbasis IoT yang memiliki HAKI.

Jangan mengarang deskripsi hasil, status publikasi, tautan, atau detail proyek. Semua konten harus mudah diedit dan dapat dikosongkan apabila informasi belum tersedia.

6. Writing & Publications

Buat bagian khusus untuk karya tulis, artikel, naskah, esai, dan publikasi.

Setiap karya dapat ditampilkan dalam format editorial yang menyerupai halaman majalah digital atau katalog buku.

Tampilkan:

Cover atau ilustrasi.

Judul.

Jenis tulisan.

Tahun.

Sinopsis singkat.

Status karya, misalnya Draft, In Progress, atau Published, jika relevan.

Tombol membaca atau melihat detail.

Sediakan kemampuan menambahkan file PDF atau tautan publikasi. Untuk naskah yang belum diterbitkan, tampilkan hanya sinopsis atau cuplikan yang memang diizinkan untuk dipublikasikan.

7. Certificates & Achievements

Buat halaman khusus untuk sertifikat, penghargaan, HAKI, dan pencapaian.

Tampilkan dalam grid yang rapi dengan thumbnail dokumen.

Sediakan filter:

Certificates

Awards

Intellectual Property

Training & Workshops

Academic & Organizational

Saat item diklik, buka tampilan detail dengan gambar atau PDF yang dapat diperbesar.

Sediakan kolom metadata:

Nama sertifikat atau pencapaian.

Penerbit.

Tahun.

Deskripsi.

Nomor atau tautan verifikasi jika memang tersedia dan aman untuk dipublikasikan.

Jangan membuat sertifikat, nomor, maupun pencapaian fiktif.

8. Contact Section

Buat bagian kontak dengan headline:
“Have a project in mind?”

Deskripsi:
“Open to creative collaborations, freelance opportunities, and meaningful projects.”

Sediakan:

Email.

LinkedIn.

Instagram.

GitHub.

Tombol WhatsApp jika ingin digunakan.

Gunakan tautan yang dapat diganti melalui satu konfigurasi agar mudah diperbarui. Jangan mengarang alamat kontak atau akun media sosial.

9. Footer

Tampilkan:
“© 2026 Ario Fajar Dharmawan. Built with intention.”

Sertakan navigasi ringkas dan tautan media sosial yang sudah dikonfigurasi.

10. Fitur dan Interaksi

Implementasikan:

Navigasi responsif.

Filter kategori portofolio yang berfungsi.

Halaman atau modal detail karya.

Preview gambar dan dokumen.

Animasi transisi ringan.

Hover states yang elegan.

SEO metadata dan Open Graph.

Accessibility yang baik, termasuk navigasi keyboard dan kontras warna.

Loading state dan empty state yang rapi.

Struktur komponen yang reusable dan mudah dikembangkan.

Gunakan React, TypeScript, Tailwind CSS, dan komponen yang sesuai dengan ekosistem Lovable.

11. Pengelolaan Konten

Rancang struktur data yang konsisten agar karya, sertifikat, dan pencapaian mudah ditambahkan tanpa membangun ulang layout.

Pisahkan data konten dari komponen tampilan.

Untuk versi awal, gunakan data contoh yang jelas ditandai sebagai placeholder dan sediakan mekanisme yang mudah untuk menggantinya dengan data asli.

Jika memungkinkan, siapkan integrasi backend menggunakan Supabase untuk:

Mengunggah gambar dan PDF.

Mengelola metadata karya.

Menambah, mengedit, dan menghapus portofolio melalui halaman admin yang terlindungi.

Menyimpan file pada storage.

Mengatur autentikasi admin dan kebijakan akses yang aman.

Jangan menampilkan dashboard admin pada navigasi publik. Jangan mengklaim fitur unggah atau penyimpanan sudah aktif sebelum backend benar-benar dikonfigurasi dan diuji.

12. Arahan Akhir

Prioritaskan kualitas desain, kejelasan informasi, dan pengalaman pengguna.

Jangan memenuhi halaman dengan semua elemen sekaligus. Gunakan hierarki visual yang kuat, ruang kosong yang cukup, serta thumbnail karya yang menjadi fokus utama.

Hasil akhir harus terlihat seperti personal portfolio yang dirancang secara sengaja oleh desainer profesional, bukan template portofolio otomatis.

Mulai dengan membangun seluruh tampilan frontend yang responsif dan fungsional menggunakan data placeholder yang mudah diganti. Pastikan semua tombol dan navigasi bekerja sesuai fungsinya. Setelah tampilan utama selesai, siapkan arsitektur untuk integrasi backend dan pengelolaan konten.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/87e0cd1a-4b0e-57e3-88b7-fea2dba6a86e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

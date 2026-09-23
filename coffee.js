/* =========================================================
   script.js
   Semua interaksi di halaman ini ada 4 saja, sengaja dibuat
   simpel supaya gampang dijelaskan:

   1. Toggle menu mobile (buka/tutup hamburger)
   2. Tutup menu otomatis saat salah satu link menu diklik
   3. FAQ accordion (klik pertanyaan -> jawaban buka/tutup)
   4. Efek bayangan navbar saat halaman di-scroll
   ========================================================= */


/* ---------------------------------------------------------
   1. TOGGLE MENU MOBILE
   Cara kerja:
   - Ambil tombol hamburger (navToggle) dan menu (navMenu)
   - Saat tombol diklik, tambah/lepas class "navbar__menu--open"
     pada menu. Class inilah yang diatur di CSS untuk
     menampilkan/menyembunyikan menu.
   - Atribut aria-expanded diubah juga, ini penting untuk
     aksesibilitas (pembaca layar tahu menu sedang terbuka
     atau tertutup), dan CSS pakai ini untuk animasi ikon
     hamburger jadi tanda silang (X).
   --------------------------------------------------------- */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  // Cek dulu kondisi sekarang: menu lagi terbuka atau tertutup
  const isOpen = navMenu.classList.contains('navbar__menu--open');

  // Balik kondisinya
  navMenu.classList.toggle('navbar__menu--open');
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});


/* ---------------------------------------------------------
   2. TUTUP MENU SAAT LINK DIKLIK
   Supaya saat pengguna di mobile klik salah satu menu
   (misalnya "FAQ"), menu langsung tertutup lagi dan halaman
   scroll ke section yang dituju (scroll otomatis sebenarnya
   sudah ditangani CSS lewat "scroll-behavior: smooth", jadi
   di sini JS cuma perlu menutup menunya saja).
   --------------------------------------------------------- */
const navLinks = document.querySelectorAll('.navbar__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('navbar__menu--open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});


/* ---------------------------------------------------------
   3. FAQ ACCORDION
   Cara kerja:
   - Ambil semua elemen dengan class "faq-item"
   - Tiap item punya tombol pertanyaan (.faq-item__question)
     dan jawaban (.faq-item__answer)
   - Saat tombol pertanyaan diklik:
       a. Tambah/lepas class "faq-item--open" pada item itu
       b. Kalau class itu ada, atur max-height jawaban sesuai
          tinggi asli kontennya (scrollHeight), supaya CSS
          transition bisa "membuka" jawabannya secara halus.
       c. Kalau class itu dilepas, kembalikan max-height ke 0
          supaya jawaban tertutup lagi.
   - Item lain sengaja TIDAK ditutup otomatis, jadi pengguna
     bisa membuka beberapa pertanyaan sekaligus.
   --------------------------------------------------------- */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-item__question');
  const answer = item.querySelector('.faq-item__answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.toggle('faq-item--open');

    if (isOpen) {
      // scrollHeight = tinggi asli konten, dipakai sebagai target animasi
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});


/* ---------------------------------------------------------
   4. EFEK BAYANGAN NAVBAR SAAT SCROLL
   Cara kerja:
   - "scroll" event terpasang di window, jadi fungsi di
     dalamnya berjalan tiap kali pengguna scroll halaman.
   - Kalau posisi scroll (window.scrollY) sudah lewat 10px
     dari atas, tambahkan class "navbar--scrolled" supaya
     navbar dapat bayangan tipis (diatur di CSS).
   - Kalau kembali ke paling atas, class itu dilepas lagi.
   --------------------------------------------------------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

# Laporan Praktikum Pemrograman Web - Pertemuan 3: React Basics

## Identitas Mahasiswa
* **Nama** : Dela Puspita Sari
* **NIM**  : 123140080
* **Kelas**: Praktikum Pemrograman Web (RB)

---

## 📌 Rangkaian Materi Praktikum
Pada praktikum Pertemuan 3 ini, telah dipelajari dan diimplementasikan konsep-konsep dasar pengembangan aplikasi web berbasis **React** sebagai berikut:

1. **Setup Project React**: Inisialisasi dan konfigurasi proyek React modern menggunakan bundler **Vite**.
2. **Components & Props**: Pembuatan komponen reusable serta pengiriman data antar komponen menggunakan `props` dan `children props`.
3. **State Management & Hooks**: Pengelolaan state lokal komponen dengan `useState` serta penanganan side-effects dengan `useEffect`.
4. **Routing dengan React Router**: Navigasi halaman SPA (*Single Page Application*) menggunakan `BrowserRouter`, `Routes`, `Route`, dan penanganan error 404.
5. **Pembuatan Custom Hook**: Abstraksi logika komponen yang berulang menjadi custom hook reusable (`useLocalStorage` dan `useWindowSize`).
6. **Global State Context API**: Pengelolaan state global menggunakan React `Context API` (`TaskContext`, `TaskProvider`, dan `useTasks`).
7. **Testing (Jest / Vitest & RTL)**: Penulisan unit test untuk memastikan fungsi komponen berjalan dengan baik menggunakan React Testing Library.

---

## 📁 Struktur Folder Proyek

```text
my-react-app/
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   └── Card.jsx
│   │   └── TaskItem/
│   │       ├── TaskItem.jsx
│   │       └── TaskItem.test.jsx
│   ├── context/
│   │   └── TaskContext.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useWindowSize.js
│   ├── pages/
│   │   ├── About/
│   │   │   ├── About.css
│   │   │   └── About.jsx
│   │   ├── Home/
│   │   │   ├── Home.css
│   │   │   └── Home.jsx
│   │   └── NotFound/
│   │       ├── NotFound.css
│   │       └── NotFound.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
├── index.html
├── package.json
└── vite.config.js

```

## 🚀 Cara Menjalankan Proyek

1. **Masuk ke Directory Proyek**:
```bash
cd Pertemuan3_PrakPemweb/my-react-app

```

2. **Install Dependensi:**
   
```bash
npm install

```


3. **Jalankan Development Server:**

```bash
npm run dev

```

Buka URL lokal yang muncul di terminal (biasanya http://localhost:5173/).


4. **Menjalankan Pengujian (Testing):**
 ```bash
npm run test

```


## 📝 Latihan Mandiri

### 1. Latihan Mandiri: Eksplorasi HMR (Hot Module Replacement)
Ganti nilai background-color pada .App-header di App.css menjadi #0d9488. Simpan file dan lihat perubahan warna di browser yang terjadi seketika tanpa perlu me-reload halaman.

#### Jawaban :
File src/App.css:
 ```bash
.App-header {
  background-color: #0d9488;
}
 ```
Fitur Hot Module Replacement (HMR) dari Vite memungkinkan perubahan gaya CSS langsung diterapkan di browser secara real-time tanpa melakukan refresh/reload halaman secara keseluruhan, sehingga state aplikasi tetap terjaga.

Bukti SS implementasi Eksplorasi HMR:
![Eksplorasi HMR](./screenshoot/Eksplorasi%20HMR%20.png)


### 2. Latihan Mandiri: Children Props
Buat komponen src/components/Card/Card.jsx yang merender wadah berbingkai dengan props.children. Gunakan komponen Card untuk membungkus form TaskForm.

#### Jawaban :
File src/components/Card/Card.jsx:
 ```bash
import React from 'react';
import './Card.css';

const Card = ({ children }) => {
  return (
    <div className="card-wrapper">
      {children}
    </div>
  );
};

export default Card;
 ```

Penggunaan pada src/pages/Home/Home.jsx:
 ```bash
import Card from '../../components/Card/Card';
import TaskForm from '../../components/TaskForm/TaskForm';

// Pembungkusan komponen TaskForm dengan Card
<Card>
  <TaskForm onAddTask="{handleAddTask}"/>
</Card>
 ```

Bukti SS implementasi Children Props:
![Children Props](./screenshoot/Children%20Props.png)


### 3. Latihan Mandiri: Tombol Bersihkan Semua
Buka file src/pages/Home/Home.jsx, lalu tambahkan tombol "Hapus Semua Tugas" di samping panel statistik. Ketika tombol diklik, panggil setTasks([]) setelah memunculkan dialog konfirmasi window.confirm().

#### Jawaban :
File src/pages/Home/Home.jsx:
 ```bash
const handleClearAll = () => {
  const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus semua tugas?");
  if (isConfirmed) {
    setTasks([]);
  }
};

return (
  <div className="home-container">
    <div className="stats-panel">
      {/* Panel statistik */}
      <button className="btn-clear-all" onClick={handleClearAll}>
        Hapus Semua Tugas
      </button>
    </div>
  </div>
);
 ```

Bukti SS implementasi Tombol Bersihkan Semua:
![Tombol Bersihkan Semua](./screenshoot/Tombol%20Bersihkan%20Semua.png)


### 4. Latihan Mandiri: Halaman 404 (Not Found)
Buat komponen src/pages/NotFound/NotFound.jsx. Tambahkan rute penangkap fallback <Route path="*" element={<NotFound />} /> di App.jsx sehingga saat pengguna mengetik URL acak (misal /halaman-salah), muncul pesan 404 yang rapi.

#### Jawaban :
File src/pages/NotFound/NotFound.jsx:
 ```bash
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.</p>
      <Link className="btn-home" to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default NotFound;
 ```

File src/App.jsx:
 ```bash
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

<Routes>
  {/* Rute lainnya */}
  <Route element="{<NotFound" path="*"/>} />
</Routes>
 ```

Bukti SS implementasi Halaman 404 (Not Found):
![Halaman 404](./screenshoot/Halaman%20404%20%28Not%20Found%29.png)


### 5. Latihan Mandiri: Terapkan useWindowSize
Gunakan hook useWindowSize() pada komponen Home untuk menampilkan label status: jika width < 768px tampilkan badge "Mode Layar Mobile", jika tidak tampilkan "Mode Layar Desktop".

#### Jawaban :
File src/pages/Home/Home.jsx:
 ```bash
import useWindowSize from '../../hooks/useWindowSize';

const Home = () => {
  const { width } = useWindowSize();

  return (
    <div className="home-header">
      <div className="screen-status-badge">
        {width < 768 ? (
          <span className="badge mobile">Mode Layar Mobile</span>
        ) : (
          <span className="badge desktop">Mode Layar Desktop</span>
        )}
      </div>
    </div>
  );
};
 ```

Bukti SS implementasi : Terapkan useWindowSize
- ss mobile
  ![SS Mobile](./screenshoot/ss%20mobile.png)
  
- ss dekstop
  ![SS Desktop](./screenshoot/ss%20dekstop.png)


### 6. Latihan Mandiri: Tampilkan Statistik di Halaman About
Buka file src/pages/About/About.jsx, impor useTasks(), dan tampilkan kalimat: "Saat ini Anda memiliki total [stats.total] tugas yang tersimpan di sistem.".

#### Jawaban :
File src/pages/About/About.jsx:
 ```bash
import React from 'react';
import { useTasks } from '../../context/TaskContext';

const About = () => {
  const { stats } = useTasks();

  return (
    <div className="about-page">
      <h2>Tentang Aplikasi</h2>
      <p>Saat ini Anda memiliki total {stats?.total || 0} tugas yang tersimpan di sistem.</p>
    </div>
  );
};

export default About;
 ```

Bukti SS implementasi Tampilkan Statistik di Halaman About:
![Tampilkan Statistik di Halaman About](./screenshoot/Tampilkan%20Statistik%20di%20Halaman%20About.png)

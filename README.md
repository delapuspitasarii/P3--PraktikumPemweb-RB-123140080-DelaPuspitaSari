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

Bukti SS implementasi :


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

Bukti SS implementasi :

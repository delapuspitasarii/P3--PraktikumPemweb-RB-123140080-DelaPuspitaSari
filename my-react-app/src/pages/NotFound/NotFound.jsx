import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Halaman Tidak Ditemukan</h2>
      <p>Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.</p>
      <Link to="/" className="home-link">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
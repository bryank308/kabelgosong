import { Link, Routes, Route } from "react-router-dom"; // Mengimpor komponen yang diperlukan dari react-router-dom untuk menangani routing dalam aplikasi.
import "./App.css"; // Mengimpor file CSS untuk styling aplikasi.
import Home from ".//Home"; // Mengimpor komponen Home dari file "./pages/Home".
import Profile from ".//Profile"; // Mengimpor komponen Profile dari file "./pages/Profile".
import Blog from "./Blog"; // Mengimpor komponen Blog dari file "./pages/Blog".
import Contact from ".//Contact"; // Mengimpor komponen Contact dari file "./pages/Contact".
import BlogDetail from ".//BlogDetail"; // Mengimpor komponen BlogDetail dari file "./pages/BlogDetail".

function App() {
  return (
    <div className="App">
      {" "}
      {/* Menggunakan class "App" untuk styling komponen utama aplikasi. */}
      <div className="brand">Website Blog</div>{" "}
      {/* Menampilkan nama merek atau judul situs. */}
      <nav className="nav">
        {" "}
        {/* Menampilkan navigasi situs dengan menggunakan class "nav". */}
        <Link to="/" className="nav-item">
          {" "}
          {/* Menampilkan link untuk menuju halaman Home dengan menggunakan class "nav-item". */}
          Home
        </Link>
        <Link to="/profile" className="nav-item">
          {" "}
          {/* Menampilkan link untuk menuju halaman Profile dengan menggunakan class "nav-item". */}
          Profile
        </Link>
        <Link to="/blog" className="nav-item">
          {" "}
          {/* Menampilkan link untuk menuju halaman Blog dengan menggunakan class "nav-item". */}
          Blog
        </Link>
        <Link to="/contact" className="nav-item">
          {" "}
          {/* Menampilkan link untuk menuju halaman Contact dengan menggunakan class "nav-item". */}
          Contact
        </Link>
      </nav>
      <Routes>
        {" "}
        {/* Menentukan rute-rute dalam aplikasi menggunakan komponen Routes dari react-router-dom. */}
        <Route path="/" element={<Home />} />{" "}
        {/* Menentukan rute untuk halaman Home. */}
        <Route path="profile" element={<Profile />} />{" "}
        {/* Menentukan rute untuk halaman Profile. */}
        <Route path="blog" element={<Blog />} />{" "}
        {/* Menentukan rute untuk halaman Blog. */}
        <Route path="blog/:id" element={<BlogDetail />} />{" "}
        {/* Menentukan rute untuk halaman detail blog dengan mengambil parameter ID. */}
        <Route path="contact" element={<Contact />} />{" "}
        {/* Menentukan rute untuk halaman Contact. */}
      </Routes>
    </div>
  );
}

export default App; // Mengekspor komponen App agar dapat digunakan pada file lain dalam proyek.

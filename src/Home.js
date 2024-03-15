import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = `Home`;
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Selamat Datang</h1>
      <p className="section-description">
        Halo semua, ini website baru aku. Kamu bisa mendapatkan informasi
        seputar profileku disini. Salam kenal.
      </p>
    </section>
  );
}

import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = `Profile`;
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Halo namaku Bryan, aku adalah seorang mahasiswa yang mengambil program
        studi Teknik Informatika{" "}
      </p>
    </section>
  );
}

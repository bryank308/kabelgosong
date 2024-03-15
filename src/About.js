import { Link, Outlet } from "react-router-dom";
//import AboutTeam from "./AboutTeam";

export default function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Hai, ini adalah halaman about, untuk tentang kami lainnya klik link di
        bawah:
      </p>
      <ul>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
      </ul>
      {/* agar about team nya muncul di bawah team */}
      <Outlet />
    </>
  );
}

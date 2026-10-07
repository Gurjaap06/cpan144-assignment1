import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Dashboard</h2>

      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/counter">Counter</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}
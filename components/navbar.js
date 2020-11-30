import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Loruki</h1>
        <nav>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/features">
              <a>Features</a>
            </Link>
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

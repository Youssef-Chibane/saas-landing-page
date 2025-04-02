import Container from "../shared/Container";
import logo from "/assets/icon.svg";

const navLinks = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#about-us", text: "About us" },
  { href: "#features", text: "Features" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 py-6">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative">
          {/* logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="EdgAi Logo" className="h-10 w-10" />
              <div className="inline-flex text-lg font-semibold text-heading-1">
                EdgAI
              </div>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

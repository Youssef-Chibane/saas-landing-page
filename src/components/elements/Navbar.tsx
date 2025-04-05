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
    <header className="absolute inset-x-0 top-0 z-50 py-6">
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

          {/* nav links */}
          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent b
                      order-x border-x-box-border lg:border-x-0 lg:h-auto"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0
                        pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3
                        text-lg text-heading-2  w-full lg:justify-center lg:items-center"
            >
              {navLinks.map((item, key) => (
                <NavItem />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

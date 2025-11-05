import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold tracking-tight text-gray-900 text-lg">
          <span className="text-blue-600">Backend</span> Portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-64}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

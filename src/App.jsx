import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Backend Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

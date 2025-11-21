import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "首頁", href: "#hero" },
  { name: "相簿", href: "#gallery" },
  { name: "日誌", href: "#diary" },
  { name: "作品", href: "#portfolio" },
  { name: "留言", href: "#guestbook" },
];

export default function Navigation() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    console.log('主題切換:', !isDark ? '深色' : '淺色');
  };

  const scrollToSection = (href: string) => {
    const target = href === '#hero' ? document.body : document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('#hero')}
              className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              data-testid="nav-logo"
            >
              林小明
            </button>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  data-testid={`nav-link-${link.name}`}
                >
                  {link.name}
                </Button>
              ))}
              
              <div className="w-px h-6 bg-border mx-2" />
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle-mobile"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-background/95 backdrop-blur-lg pt-20" data-testid="mobile-menu">
          <div className="flex flex-col items-center gap-4 p-6">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="lg"
                className="w-full text-lg"
                onClick={() => scrollToSection(link.href)}
                data-testid={`mobile-nav-link-${link.name}`}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "certificates",
        "services",
        "portfolio",
        "blog",
        "special-thanks",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 100;

          if (window.scrollY >= top) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Certificates", id: "certificates" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Blog", id: "blog" },
    { name: "Special Thanks", id: "special-thanks" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>Salem</div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              className={active === link.id ? styles.activeLink : ""}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          className={styles.themeButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
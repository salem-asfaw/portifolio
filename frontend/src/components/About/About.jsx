import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaXTwitter
} from "react-icons/fa6";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* IMAGE */}
        <div className={styles.imageBox}>
          <img
            src="../../../dist/img/image.png"
            alt="Salem Asfaw"
          />
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <h2>
            About Me
          </h2>
          <h3>
            Software Engineering Student
          </h3>

          <p>
           Hi, I’m Salem Asfaw, a software engineering student passionate about web development and technology. I enjoy turning ideas into modern, responsive, and user-friendly websites while continuously improving my skills.
My journey in technology has taught me the importance of learning, problem-solving, and persistence. My goal is to become a skilled software engineer and create meaningful applications that help people and make a positive impact.
          </p>

          {/* BUTTONS */}
          <div className={styles.buttons}>
            <a
              href="#contact"
              className={styles.hire}
            >
              Hire Me
            </a>
<a
  href="/cv/Salem_Asfaw_Professional_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.cv}
  title="View My CV"
>
  <span>CV</span>
  <span className={styles.cvArrow}>
    ↗
  </span>
</a>
          </div>

          {/* SOCIAL MEDIA */}
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/profile.php?id=61587378899087"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/SalemAsfawM"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/salem-asfaw-8b1988421/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/Salem Asfaw"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://t.me/Salemasfaw1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
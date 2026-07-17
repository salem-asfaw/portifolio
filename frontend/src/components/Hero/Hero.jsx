import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {

  const roles = [
    "Full Stack Developer",
    "Website Developer",
    "Software Engineering Student",
    "Future Computer Scientist"
  ];

  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id="home" className={styles.hero}>

      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.text}>

          <p className={styles.greeting}>
            BUILDING MODERN WEB EXPERIENCES
          </p>


          <h1>
            Hi, I'm <span>Salem Asfaw</span>
          </h1>


          <h2>
            I am a{" "}
            <span key={role} className={styles.role}>
              {roles[role]}
            </span>
          </h2>


          <p className={styles.description}>
           I build modern, responsive websites and applications by combining creativity, technology, and clean code. I enjoy solving problems, learning new technologies, and creating projects that turn ideas into real solutions.
          </p>


          <div className={styles.buttons}>

            <a href="#portfolio" className={styles.primaryBtn}>
              View Projects
            </a>


            <a href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </a>

          </div>


        </div>



        {/* RIGHT SIDE */}
        <div className={styles.imageBox}>

          <div className={styles.imageFrame}>

            {/* Put your image later here */}
   
              <img
  src="/img/salem.png"
  alt="Salem Asfaw"
/>

          </div>


        </div>


      </div>


    </section>
  );
}
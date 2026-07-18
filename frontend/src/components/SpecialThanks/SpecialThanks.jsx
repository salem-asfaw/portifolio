import styles from "./SpecialThanks.module.css";

export default function SpecialThanks() {
  return (
    <section id="special-thanks" className={styles.specialThanks}>
      <div className={styles.container}>

        <h2>
          Special Thanks
        </h2>

        <div className={styles.content}>

          {/* IMAGE */}
          <div className={styles.imageBox}>
            <img
              src="/img/yosef.png"
              alt="Yosef"
            />

            <h3>
              Yosef
            </h3>

            <p>
              My Uncle & Biggest Supporter
            </p>
          </div>


          {/* TEXT */}
          <div className={styles.card}>

            <p>
              I would like to express my sincere gratitude to my uncle,
              <strong> Yosef</strong>, for believing in me and supporting my journey.
              Thank you for your time, encouragement, dedication, and the
              opportunities you've given me to learn and grow.
            </p>

            <p>
              Your unwavering support has inspired me to keep learning,
              overcome challenges, and become a better developer.
              I truly appreciate everything you've done for me.
            </p>


            <blockquote>
              "Behind every successful journey is someone who believed
              in you before you believed in yourself."
            </blockquote>

          </div>

        </div>

      </div>
    </section>
  );
}
import styles from "./Certificates.module.css";

export default function Certificates() {
  const certificates = [
    {
      title: "Full Stack Development",
      place: "Evangadi Tech",
      year: "2026"
    },
  ];
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <h2>
          Certificates
        </h2>
        <div className={styles.timeline}>
          {
            certificates.map((item,index)=>(
              <div 
                className={styles.card}
                key={index}
              >
                <div className={styles.year}>
                  {item.year}
                </div>
                <div>
                  <h3>
                    {item.title}
                  </h3>
                  <p>
                    {item.place}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
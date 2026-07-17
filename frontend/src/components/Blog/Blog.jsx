import { blog } from '../../data/content.js'
import styles from './Blog.module.css'

export default function Blog() {
  return (
    <section id="blog" className={styles.journey}>
      <div className={styles.container}>
        <h2>
          My Journey
        </h2>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3>
              My 6 Months Development Journey
            </h3>
            <p>
              {blog.journey}
            </p>
          </div>
          <div className={styles.imageBox}>
   <img
  src="/img/image.png"
  alt="Salem Asfaw"
/>
          </div>
        </div>
      </div>
    </section>
  );
}
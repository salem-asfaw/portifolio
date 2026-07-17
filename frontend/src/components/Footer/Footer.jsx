import { footer } from '../../data/content.js'
import styles from './Footer.module.css'


export default function Footer() {

  return (

    <footer className={styles.footer}>


      <div className={styles.container}>


        <div className={styles.content}>


          <h2>
            Salem Asfaw
          </h2>


          <p>
            Thank you for visiting my portfolio.
            I appreciate your time and hope you enjoyed exploring my work.
          </p>


        </div>




        <div className={styles.line}></div>




        <p className={styles.copyright}>

          {footer.copyright}

        </p>




      </div>


    </footer>

  );

}
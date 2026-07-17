import { portfolio } from '../../data/content.js'
import styles from './Portfolio.module.css'

// Small inline icons keep the section dependency-free.
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
)

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className={styles.head}>
          <h2 className="sectionTitle">{portfolio.heading}</h2>
          <p className={styles.subheading}>{portfolio.subheading}</p>
        </div>

        <div className={styles.grid}>
          {portfolio.items.map((item) => (
            <article
              key={item.id}
              className={`${styles.card} ${item.aiPowered ? styles.aiCard : ''}`}
            >
              {item.aiPowered && <span className={styles.aiBadge}>⚡ AI Powered</span>}

              <div className={styles.imageWrap} style={{ background: item.color }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className={styles.overlay}>
                  <a href={item.liveDemo} className={styles.iconLink} title="Live Demo">
                    <LinkIcon />
                  </a>
                  <a href={item.github} className={styles.iconLink} title="GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>

                {item.keyFeatures?.length > 0 && (
                  <div className={styles.keyFeatures}>
                    <h4 className={styles.keyFeaturesTitle}>Key Features:</h4>
                    <ul>
                      {item.keyFeatures.slice(0, 5).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className={styles.techBadges}>
                  {item.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a
                    href={item.liveDemo}
                    className={styles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo <LinkIcon />
                  </a>
                  <a
                    href={item.github}
                    className={styles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Code <GithubIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link";
import Image from "next/image";
import styles from "./service-detail.module.css";

function normalizeVideos(videos = []) {
  return videos.map((video) => {
    if (video.embedUrl) return video;
    const query = encodeURIComponent(video.query || "");
    return {
      title: video.title || "Related guidance video",
      embedUrl: `https://www.youtube.com/embed?listType=search&list=${query}`,
    };
  });
}

export default function ServiceDetailPage({
  badge,
  title,
  description,
  image,
  highlights = [],
  benefits = [],
  process = [],
  videoSectionTitle = "Related YouTube Videos",
  videos = [],
}) {
  const videoItems = normalizeVideos(videos);

  return (
    <main>
      <section
        className={`hero visible ${styles.hero}`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${image}')`,
        }}
      >
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>{badge}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn">
              Book This Session
            </Link>
            <Link href="/services" className={styles.secondaryLink}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} visible`}>
        <div className="container">
          <div className={styles.panel}>
            <div>
              <h2 className={styles.sectionTitle}>Session Highlights</h2>
              <p className={styles.sectionText}>
                This session is personalized for your emotional, energetic, and practical goals so
                you leave with grounded clarity and gentle next steps.
              </p>
              <ul className={styles.bulletList}>
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <Image src={image} alt={title} className={styles.panelImage} width={900} height={640} />
          </div>

          <div className={styles.cardsGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sectionAlt} visible`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How the Session Flows</h2>
          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <article key={step.title} className={styles.processCard}>
                <span className={styles.stepNum}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} visible`}>
        <div className="container">
          <div className={styles.videoHeader}>
            <h2 className={styles.sectionTitle}>{videoSectionTitle}</h2>
            <p className={styles.sectionText}>
              Watch these videos to understand the modality before your booking.
            </p>
          </div>
          <div className={styles.videoGrid}>
            {videoItems.map((video) => (
              <article key={video.title} className={styles.videoCard}>
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <h3>{video.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.cta} visible`}>
        <div className="container">
          <h2>Ready to begin your {title.toLowerCase()} journey?</h2>
          <p>
            Book your private online session and receive personalized support in a compassionate and
            confidential space.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn">
              Book Now
            </Link>
            <Link href="/services" className={styles.secondaryLink}>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

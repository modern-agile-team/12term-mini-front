import styles from "./VideoSection.module.css";

interface VideoSectionProps {
  title: string;
  description: string;
}

function VideoSection({ title, description }: VideoSectionProps) {
  return (
    <section className={styles.videoSection}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <button className={styles.moreButton}>
          더보기
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default VideoSection;

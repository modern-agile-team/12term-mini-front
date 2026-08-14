import styles from "../NewVideos/NewVideos.module.css";

function TrandingVideos() {
  return (
    <section className={styles.newVideos}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>오늘의 급상승</h2>

          <p className={styles.description}>24시간 동안 가장 많이 본 영상</p>
        </div>

        <button className={styles.moreButton}>
          전체 순위
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default TrandingVideos;

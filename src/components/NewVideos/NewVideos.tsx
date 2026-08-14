import styles from "./NewVideos.module.css";

function NewVideos() {
  return (
    <section className={styles.newVideos}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>새로 올라온 영상</h2>

          <p className={styles.description}>오늘 올라온 따끈한 영상들</p>
        </div>

        <button className={styles.moreButton}>
          더보기
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default NewVideos;

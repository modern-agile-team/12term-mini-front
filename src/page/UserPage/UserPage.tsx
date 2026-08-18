import { videos } from "../../data/videos";
import styles from "./UserPage.module.css";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

function UserPage() {
  return (
    <main className={styles.userPage}>
      <section className={styles.channelInfo}>
        <div className={styles.channelAvatar}>U</div>

        <div className={styles.channelText}>
          <h1>사용자 채널</h1>
          <p>@user</p>
          <p>구독자 1.2만명 · 동영상 24개</p>
          <p className={styles.channelDescription}>
            다양한 영상을 업로드하는 채널입니다.
          </p>
        </div>

        <button className={styles.subscribeButton}>구독</button>
      </section>

      <nav className={styles.channelNav}>
        <button>홈</button>
        <button>동영상</button>
        <button>재생목록</button>
      </nav>

      <section className={styles.videoSection}>
        <h2>동영상</h2>
        <div>
          <VideoGrid videos={videos} />
        </div>
      </section>
    </main>
  );
}

export default UserPage;

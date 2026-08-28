import styles from "./VideoCard.module.css";
import type { Video } from "../../data/videos.ts";
import { Link } from "react-router";

export interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <Link to={`/detail/${video.id}`}>
      <article className={styles.videoCard}>
        <div className={styles.thumbnailWrapper}>
          <img
            src={video.thumbnail}
            alt={video.title}
            className={styles.thumbnail}
          />
        </div>

        <div className={styles.videoInfo}>
          <div className={styles.profileWrapper}>
            <img
              src={video.channelImage}
              alt={video.channel}
              className={styles.profileImage}
            />
          </div>

          <div className={styles.textWrapper}>
            <h3 className={styles.title}>{video.title}</h3>

            <p className={styles.channel}>{video.channel}</p>

            <p className={styles.meta}>
              조회수 {video.views}회 · {video.createdAt}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default VideoCard;

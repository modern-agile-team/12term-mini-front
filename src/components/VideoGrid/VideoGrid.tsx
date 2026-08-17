import { videos } from "../../data/videos";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoGrid.module.css";

function VideoGrid() {
  return (
    <div className={styles.videoGrid}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;

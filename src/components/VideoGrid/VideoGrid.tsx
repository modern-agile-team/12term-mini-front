import type { Video } from "../../data/videos";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoGrid.module.css";

interface VideoGridProps {
  videos: Video[];
}

function VideoGrid({ videos }: VideoGridProps) {
  return (
    <span className={styles.videoGrid}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </span>
  );
}

export default VideoGrid;

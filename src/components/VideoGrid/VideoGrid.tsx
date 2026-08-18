import { type Video } from "../../data/videos";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoGrid.module.css";
import { Link } from "react-router";

interface VideoGridProps {
  videos: Video[];
}

function VideoGrid({ videos }: VideoGridProps) {
  return (
    <Link to="/detail" className={styles.videoGrid}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Link>
  );
}

export default VideoGrid;

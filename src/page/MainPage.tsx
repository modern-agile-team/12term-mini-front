import CategoryBar from "../components/CategoryBar/CategoryBar";
import NewVideos from "../components/NewVideos/NewVideos";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import TrendingVideos from "../components/TrendingVideos/TrendingVideos";
import { videos } from "../data/videos";

function MainPage() {
  return (
    <main>
      <CategoryBar />
      <NewVideos />
      <VideoGrid videos={videos} />
      <TrendingVideos />
      <VideoGrid videos={videos} />
    </main>
  );
}

export default MainPage;

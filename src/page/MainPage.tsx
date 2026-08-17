import Header from "../components/Header/Header";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import Footer from "../components/Footer/Footer.tsx";
import NewVideos from "../components/NewVideos/NewVideos";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import TrendingVideos from "../components/TrendingVideos/TrendingVideos";

function MainPage() {
  return (
    <main>
      <Header />
      <CategoryBar />
      <NewVideos />
      <VideoGrid />
      <TrendingVideos />
      <VideoGrid />
      <Footer />
    </main>
  );
}

export default MainPage;

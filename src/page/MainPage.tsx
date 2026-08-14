import Header from "../components/Header/Header.tsx";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import Footer from "../components/Footer/Footer.tsx";
import NewVideos from "../components/NewVideos/NewVideos";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import TrandingVideos from "../components/TrendingVideos/TrendingVideos.tsx";

function MainPage() {
  return (
    <main>
      <Header />
      <CategoryBar />
      <NewVideos />
      <VideoGrid />
      <TrandingVideos />
      <VideoGrid />
      <Footer />
    </main>
  );
}

export default MainPage;

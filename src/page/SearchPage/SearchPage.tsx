import { videos } from "../../data/videos";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import styles from "./SearchPage.module.css";
import { useSearchParams } from "react-router";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(query.toLowerCase()) ||
      video.channel.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className={styles.searchPage}>
      <section className={styles.searchSection}>
        <h1>검색 결과</h1>
        {filteredVideos.length === 0 && null ? (
          <p>검색 결과가 없습니다.</p>
        ) : (
          <VideoGrid videos={filteredVideos} />
        )}{" "}
      </section>
    </main>
  );
}

export default SearchPage;

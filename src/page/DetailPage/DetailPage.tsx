import styles from "./DetailPage.module.css";
import { useParams, useNavigate } from "react-router";
import { videos } from "../../data/videos";
import { useState } from "react";
import { Link } from "react-router";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoList, setVideoList] = useState(videos);

  const video = videoList.find((video) => video.id === Number(id));
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    "좋은 영상이네요!",
    "잘 보고 갑니다.",
  ]);
  const handleComment = () => {
    if (!comment.trim()) return;

    setComments((prev) => [...prev, comment]);
    setComment("");
  };

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video?.likes ?? 0);

  if (!video) {
    return <p>영상을 찾을 수 없습니다.</p>;
  }
  const handleDelete = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");

    if (!confirmDelete) return;

    setVideoList((prev) => prev.filter((video) => video.id !== Number(id)));
  };
  navigate("/");
  return (
    <main className={styles.detailPage}>
      <div className={styles.content}>
        <section className={styles.mainContent}>
          <div className={styles.videoPlayer}>
            <img src={video.thumbnail} alt={video.title} />
            <button className={styles.playButton}>▶</button>
          </div>

          <section className={styles.videoInfo}>
            <h1>{video.title}</h1>

            <div className={styles.videoMeta}>
              <span>조회수 {video.views.toLocaleString()}회</span>
              <span>·</span>
              <span>{video.createdAt}</span>
            </div>

            <div className={styles.actions}>
              <button
                className={isLiked ? styles.likedButton : ""}
                onClick={() => {
                  if (isLiked) {
                    setLikeCount((prev) => prev - 1);
                    setIsLiked(false);
                  } else {
                    setLikeCount((prev) => prev + 1);
                    setIsLiked(true);
                  }
                }}
              >
                👍 {likeCount}
              </button>
              <button>↗ 공유</button>
              <button onClick={handleDelete}>🗑 삭제</button>
            </div>
          </section>

          <section className={styles.channelInfo}>
            <img
              className={styles.channelAvatar}
              src={video.channelImage}
              alt={video.channel}
            />

            <div className={styles.channelText}>
              <h2>{video.channel}</h2>
            </div>

            <button className={styles.subscribeButton}>구독</button>
          </section>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
          />
          <button onClick={handleComment}>작성</button>
        </section>

        <aside className={styles.relatedVideos}>
          <h2>관련 영상</h2>

          {videos
            .filter((relatedVideo) => relatedVideo.id !== video.id)
            .map((relatedVideo) => (
              <Link
                to={`/detail/${relatedVideo.id}`}
                className={styles.relatedVideo}
                key={relatedVideo.id}
              >
                <img
                  className={styles.relatedThumbnail}
                  src={relatedVideo.thumbnail}
                  alt={relatedVideo.title}
                />

                <div className={styles.relatedInfo}>
                  <h3>{relatedVideo.title}</h3>
                  <p>{relatedVideo.channel}</p>
                  <p>{relatedVideo.views.toLocaleString()}회</p>
                </div>
              </Link>
            ))}
        </aside>
        <section>
          {comments.map((comment, index) => (
            <div className={styles.comment} key={index}>
              <div className={styles.commentAvatar}>U</div>

              <div>
                <strong>사용자</strong>
                <p>{comment}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default DetailPage;

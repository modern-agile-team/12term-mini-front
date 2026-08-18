import styles from "./DetailPage.module.css";

function DetailPage() {
  return (
    <main className={styles.detailPage}>
      <div className={styles.content}>
        <section className={styles.mainContent}>
          <div className={styles.videoPlayer}>
            <button className={styles.playButton}>▶</button>
          </div>

          <section className={styles.videoInfo}>
            <h1>영상 제목이 들어갑니다</h1>

            <div className={styles.videoMeta}>
              <span>조회수 1.2만회</span>
              <span>·</span>
              <span>3일 전</span>
            </div>

            <div className={styles.actions}>
              <button>👍 좋아요</button>
              <button>↗ 공유</button>
            </div>
          </section>

          <section className={styles.channelInfo}>
            <div className={styles.channelAvatar}>U</div>

            <div className={styles.channelText}>
              <h2>사용자 채널</h2>
              <p>@user</p>
            </div>

            <button className={styles.subscribeButton}>구독</button>
          </section>

          <section className={styles.description}>
            <p>
              영상에 대한 설명이 들어가는 공간입니다. 영상의 내용이나 관련
              정보를 표시할 수 있습니다.
            </p>
          </section>

          <section className={styles.comments}>
            <h2>댓글</h2>

            <div className={styles.commentInput}>
              <input type="text" placeholder="댓글을 입력하세요" />
              <button>작성</button>
            </div>

            <div className={styles.comment}>
              <div className={styles.commentAvatar}>U</div>

              <div>
                <strong>사용자</strong>
                <p>좋은 영상이네요!</p>
              </div>
            </div>

            <div className={styles.comment}>
              <div className={styles.commentAvatar}>U</div>

              <div>
                <strong>사용자</strong>
                <p>잘 보고 갑니다.</p>
              </div>
            </div>
          </section>
        </section>

        <aside className={styles.relatedVideos}>
          <h2>관련 영상</h2>

          <article className={styles.relatedVideo}>
            <div className={styles.relatedThumbnail}>
              <span>THUMBNAIL</span>
            </div>

            <div className={styles.relatedInfo}>
              <h3>관련 영상 제목입니다</h3>
              <p>조회수 5,231회</p>
              <p>2일 전</p>
            </div>
          </article>

          <article className={styles.relatedVideo}>
            <div className={styles.relatedThumbnail}>
              <span>THUMBNAIL</span>
            </div>

            <div className={styles.relatedInfo}>
              <h3>또 다른 관련 영상 제목</h3>
              <p>조회수 3,421회</p>
              <p>1주 전</p>
            </div>
          </article>

          <article className={styles.relatedVideo}>
            <div className={styles.relatedThumbnail}>
              <span>THUMBNAIL</span>
            </div>

            <div className={styles.relatedInfo}>
              <h3>새로운 영상 제목입니다</h3>
              <p>조회수 2,102회</p>
              <p>2주 전</p>
            </div>
          </article>
        </aside>
      </div>
    </main>
  );
}

export default DetailPage;

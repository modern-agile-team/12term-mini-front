import styles from "./UploadPage.module.css";

function UploadPage() {
  return (
    <main className={styles.uploadPage}>
      <div className={styles.container}>
        <h1>동영상 업로드</h1>

        <form className={styles.uploadForm}>
          <section className={styles.fileSection}>
            <label className={styles.sectionTitle}>동영상</label>

            <label className={styles.videoUpload}>
              <span className={styles.uploadIcon}>＋</span>
              <span>동영상 파일을 선택하세요</span>
              <span className={styles.uploadInfo}>
                MP4, WebM 등의 동영상 파일
              </span>

              <input type="file" accept="video/*" />
            </label>
          </section>

          <section className={styles.thumbnailSection}>
            <label className={styles.sectionTitle}>썸네일</label>

            <label className={styles.thumbnailUpload}>
              <span>썸네일 선택</span>

              <input type="file" accept="image/*" />
            </label>
          </section>

          <section className={styles.infoSection}>
            <label className={styles.sectionTitle}>동영상 정보</label>

            <div className={styles.inputGroup}>
              <label htmlFor="title">제목</label>

              <input
                id="title"
                type="text"
                placeholder="동영상 제목을 입력하세요"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="description">설명</label>

              <textarea
                id="description"
                placeholder="동영상에 대한 설명을 입력하세요"
              />
            </div>
          </section>

          <section className={styles.visibilitySection}>
            <label className={styles.sectionTitle}>공개 설정</label>

            <select defaultValue="public">
              <option value="public">전체 공개</option>
              <option value="unlisted">일부 공개</option>
              <option value="private">비공개</option>
            </select>
          </section>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton}>
              취소
            </button>

            <button type="submit" className={styles.uploadButton}>
              업로드
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UploadPage;

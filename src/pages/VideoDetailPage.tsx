type VideoDetailPageProps = {
  onNavigate: (
    page: 'home' | 'webinar' | 'video-detail' | 'resources' | 'seminar' | 'notice'
  ) => void
}

function VideoDetailPage({ onNavigate }: VideoDetailPageProps) {
  return (
    <div className="portal">
      <header className="header">
        <div className="header-inner">
          <button
            type="button"
            className="brand brand-button"
            onClick={() => onNavigate('home')}
          >
            <span className="brand-mark">M</span>
            <span>
              <strong>MEDICAL INSIGHT</strong>
              <small>PROFESSIONAL PORTAL</small>
            </span>
          </button>

          <nav className="nav">
            <button
              type="button"
              className="nav-button"
              onClick={() => onNavigate('home')}
            >
              Home
            </button>

            <button
              type="button"
              className="nav-button active"
              onClick={() => onNavigate('webinar')}
            >
              Webinar
            </button>

            <button
  type="button"
  className="nav-button"
  onClick={() => onNavigate('resources')}
>
  Resources
</button>

            <button
  type="button"
  className="nav-button"
  onClick={() => onNavigate('seminar')}
>
  Seminar
</button>

            <button
  type="button"
  className="nav-button"
  onClick={() => onNavigate('notice')}
>
  Notice
</button>
          </nav>

          <div className="user-menu">
            <span className="doctor-badge">DR</span>
            <span className="doctor-name">김OO 원장님</span>
            <button type="button" className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="video-detail-page">
        <section className="video-detail-header">
          <div className="video-detail-header-inner">
            <button
              type="button"
              className="back-button"
              onClick={() => onNavigate('webinar')}
            >
              ← Webinar Archive
            </button>

            <div className="video-detail-meta">
              <span>WEBINAR</span>
              <span>2026.09.18</span>
              <span>42:18</span>
            </div>

            <h1>
              Lower Face Contouring:
              <br />
              새로운 리프팅 접근
            </h1>

            <p>김OO 원장 · Dermatology</p>
          </div>
        </section>

        <section className="video-detail-content">
          <div className="video-player">
            <div className="video-player-inner">
              <span className="video-player-label">MEDICAL WEBINAR</span>

              <button
                type="button"
                className="detail-play-button"
                aria-label="영상 재생"
              >
                ▶
              </button>

              <div className="video-player-footer">
                <span>00:00</span>
                <div className="video-progress">
                  <span />
                </div>
                <span>42:18</span>
              </div>
            </div>
          </div>

          <div className="video-info-grid">
            <article className="video-summary">
              <p className="section-kicker">SESSION OVERVIEW</p>
              <h2>강의 소개</h2>

              <p>
                하안면 리프팅 시술의 최신 접근과 실제 임상에서 고려해야 할
                디자인 포인트를 살펴봅니다.
              </p>

              <p>
                환자 상태에 따른 시술 계획 수립과 Energy Based Device 활용 시
                주의해야 할 주요 임상 포인트를 중심으로 구성된 의료진 전용
                교육 콘텐츠입니다.
              </p>

              <div className="video-tags">
                <span>Lower Face</span>
                <span>Lifting</span>
                <span>Clinical Insight</span>
              </div>
            </article>

            <aside className="video-side-info">
              <div className="speaker-card">
                <span className="speaker-label">SPEAKER</span>
                <div className="speaker-avatar">DR</div>
                <h3>김OO 원장</h3>
                <p>Dermatology</p>
              </div>

              <div className="member-access-card">
                <span className="member-access-icon">●</span>
                <div>
                  <strong>의료진 회원 전용 콘텐츠</strong>
                  <p>
                    본 영상은 인증된 의료진 회원에게만 제공됩니다.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <section className="related-materials">
            <div className="section-heading">
              <div>
                <p className="section-kicker">RELATED MATERIALS</p>
                <h2>관련 자료</h2>
              </div>
            </div>

            <div className="related-material-list">
              <article className="related-material-card">
                <div className="resource-icon">
                  <span>PDF</span>
                </div>

                <div>
                  <span className="resource-type">LECTURE NOTE</span>
                  <h3>Lower Face Contouring 강의 자료</h3>
                  <p>강의 주요 내용과 시술 포인트 요약</p>
                </div>

                <button type="button">
                  열람
                  <span>→</span>
                </button>
              </article>

              <article className="related-material-card">
                <div className="resource-icon">
                  <span>PDF</span>
                </div>

                <div>
                  <span className="resource-type">CLINICAL MATERIAL</span>
                  <h3>Clinical Case Reference</h3>
                  <p>의료진 전용 임상 참고 자료</p>
                </div>

                <button type="button">
                  열람
                  <span>→</span>
                </button>
              </article>
            </div>
          </section>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <strong>MEDICAL INSIGHT</strong>
            <p>Healthcare Professional Education Portal</p>
          </div>

          <p className="footer-note">
            본 사이트의 콘텐츠는 의료전문가를 위한 교육 목적으로 제공되는 DEMO입니다.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default VideoDetailPage
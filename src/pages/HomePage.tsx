type HomePageProps = {
  onNavigate: (page: 'home' | 'webinar') => void
}
const webinars = [
  {
    category: 'WEBINAR',
    date: '2026.09.18',
    title: 'Lower Face Contouring: 새로운 리프팅 접근',
    speaker: '김OO 원장 · Dermatology',
    tone: 'navy',
  },
  {
    category: 'SEMINAR',
    date: '2026.09.05',
    title: '환자 만족도를 높이는 복합 시술 전략',
    speaker: '박OO 원장 · Plastic Surgery',
    tone: 'sand',
  },
  {
    category: 'LECTURE',
    date: '2026.08.27',
    title: 'Clinical Insight: Energy Based Device 활용',
    speaker: 'Medical Education Team',
    tone: 'gray',
  },
]

const resources = [
  {
    type: 'PRODUCT GUIDE',
    title: 'Lifting Device Product Guide 2026',
    description: '제품 주요 사양 및 시술 프로토콜',
  },
  {
    type: 'CLINICAL MATERIAL',
    title: 'Before & After Clinical Cases',
    description: '의료진 전용 임상 Before & After 자료',
  },
  {
    type: 'PROTOCOL',
    title: 'Recommended Treatment Protocol',
    description: '부위별 권장 시술 가이드',
  },
]

function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="portal">
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#">
            <span className="brand-mark">M</span>
            <span>
              <strong>MEDICAL INSIGHT</strong>
              <small>PROFESSIONAL PORTAL</small>
            </span>
          </a>

          <nav className="nav">
            <a className="active" href="#">Home</a>
            <button
  type="button"
  className="nav-button"
  onClick={() => onNavigate('webinar')}
>
  Webinar
</button>
            <a href="#">Resources</a>
            <a href="#">Seminar</a>
            <a href="#">Notice</a>
          </nav>

          <div className="user-menu">
            <span className="doctor-badge">DR</span>
            <span className="doctor-name">김OO 원장님</span>
            <button type="button" className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">MEDICAL PROFESSIONALS ONLY</p>
              <h1>
                더 나은 임상을 위한
                <br />
                <span>Medical Insight.</span>
              </h1>
              <p className="hero-description">
                최신 웨비나와 임상 자료, 제품 정보를
                <br />
                의료진 전용 공간에서 확인하세요.
              </p>

              <div className="hero-actions">
                <button type="button" className="primary-button">
                  최신 웨비나 보기
                  <span>→</span>
                </button>
                <button type="button" className="secondary-button">
                  제품 자료실
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-ring visual-ring-one" />
              <div className="visual-ring visual-ring-two" />
              <div className="visual-core">
                <span>MEDICAL</span>
                <strong>INSIGHT</strong>
                <small>Professional Education</small>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section upcoming-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">UPCOMING SEMINAR</p>
              <h2>다가오는 세미나</h2>
            </div>

            <a className="view-all" href="#">
              전체 일정 보기 <span>→</span>
            </a>
          </div>

          <article className="seminar-card">
            <div className="seminar-date">
              <strong>24</strong>
              <span>SEP</span>
            </div>

            <div className="seminar-content">
              <div className="seminar-meta">
                <span>LIVE SEMINAR</span>
                <span>2026.09.24 · THU</span>
                <span>19:30</span>
              </div>
              <h3>Expert Talk: 리프팅 시술의 최신 트렌드와 임상 적용</h3>
              <p>온라인 라이브 · 사전 등록 후 참여하실 수 있습니다.</p>
            </div>

            <button type="button" className="register-button">
              사전 등록
              <span>↗</span>
            </button>
          </article>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">LATEST CONTENT</p>
              <h2>최근 웨비나 다시보기</h2>
            </div>

            <a className="view-all" href="#">
              전체 영상 보기 <span>→</span>
            </a>
          </div>

          <div className="webinar-grid">
            {webinars.map((webinar) => (
              <article className="webinar-card" key={webinar.title}>
                <div className={`webinar-thumbnail ${webinar.tone}`}>
                  <span className="video-category">{webinar.category}</span>
                  <button className="play-button" type="button" aria-label="영상 재생">
                    ▶
                  </button>
                  <span className="video-duration">42:18</span>
                </div>

                <div className="webinar-body">
                  <span className="content-date">{webinar.date}</span>
                  <h3>{webinar.title}</h3>
                  <p>{webinar.speaker}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resources-wrapper">
          <div className="content-section resources-section">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PROFESSIONAL RESOURCES</p>
                <h2>새로운 의료진 자료</h2>
              </div>

              <a className="view-all" href="#">
                자료실 전체 보기 <span>→</span>
              </a>
            </div>

            <div className="resource-grid">
              {resources.map((resource) => (
                <article className="resource-card" key={resource.title}>
                  <div className="resource-icon">
                    <span>PDF</span>
                  </div>
                  <div className="resource-info">
                    <span className="resource-type">{resource.type}</span>
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                  </div>
                  <span className="lock-mark">🔒</span>
                </article>
              ))}
            </div>

            <div className="member-notice">
              <span className="member-lock">●</span>
              <div>
                <strong>의료진 회원 전용 콘텐츠입니다.</strong>
                <p>본 자료는 인증된 의료진에게만 제공되며 무단 배포를 금합니다.</p>
              </div>
            </div>
          </div>
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

export default HomePage
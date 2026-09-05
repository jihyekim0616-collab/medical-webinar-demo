import { useMemo, useState } from 'react'

type NoticePageProps = {
  onNavigate: (
    page:
      | 'home'
      | 'webinar'
      | 'video-detail'
      | 'resources'
      | 'seminar'
      | 'notice'
  ) => void
  onLogout: () => void
}

type NoticeItem = {
  id: number
  important: boolean
  category: string
  title: string
  date: string
}

const notices: NoticeItem[] = [
  {
    id: 1,
    important: true,
    category: '안내',
    title: 'Medical Insight 의료진 회원 이용 안내',
    date: '2026.09.20',
  },
  {
    id: 2,
    important: true,
    category: '세미나',
    title: '9월 Expert Talk 온라인 세미나 사전 등록 안내',
    date: '2026.09.15',
  },
  {
    id: 3,
    important: false,
    category: '자료실',
    title: 'Lifting Device Product Guide 2026 자료 업데이트',
    date: '2026.09.10',
  },
  {
    id: 4,
    important: false,
    category: '웨비나',
    title: 'Lower Face Contouring 웨비나 다시보기 등록',
    date: '2026.09.06',
  },
  {
    id: 5,
    important: false,
    category: '안내',
    title: '의료진 회원 인증 절차 안내',
    date: '2026.08.29',
  },
  {
    id: 6,
    important: false,
    category: '서비스',
    title: '포털 서비스 이용 정책 안내',
    date: '2026.08.20',
  },
]

function NoticePage({ onNavigate, onLogout }: NoticePageProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotices = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase()

    if (!keyword) {
      return notices
    }

    return notices.filter(
      (notice) =>
        notice.title.toLowerCase().includes(keyword) ||
        notice.category.toLowerCase().includes(keyword)
    )
  }, [searchTerm])

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
              className="nav-button"
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
              className="nav-button active"
            >
              Notice
            </button>
          </nav>

          <div className="user-menu">
  <span className="doctor-badge">DR</span>
  <span className="doctor-name">김OO 원장님</span>

  <button
    type="button"
    className="logout-button"
    onClick={onLogout}
  >
    Logout
  </button>
</div>
        </div>
      </header>

      <main className="notice-page"><button
  type="button"
  className="logout-button"
  onClick={onLogout}
>
  Logout
</button>
        <section className="notice-hero">
          <div className="notice-hero-inner">
            <p className="section-kicker">NOTICE & UPDATE</p>

            <h1>
              새로운 소식을
              <br />
              <span>확인하세요.</span>
            </h1>

            <p>
              서비스 이용 안내와 웨비나, 세미나, 자료 업데이트 소식을
              확인할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="notice-content">
          <div className="notice-toolbar">
            <div>
              <span>NOTICE BOARD</span>
              <h2>공지사항</h2>
            </div>

            <label className="notice-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="공지사항을 검색하세요"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="notice-count">
            총 <strong>{filteredNotices.length}</strong>개의 공지사항
          </div>

          {filteredNotices.length > 0 ? (
            <div className="notice-list">
              {filteredNotices.map((notice) => (
                <article
                  className={
                    notice.important
                      ? 'notice-row important'
                      : 'notice-row'
                  }
                  key={notice.id}
                >
                  <div className="notice-number">
                    {notice.important ? (
                      <span className="important-badge">NOTICE</span>
                    ) : (
                      <span>{String(notice.id).padStart(2, '0')}</span>
                    )}
                  </div>

                  <div className="notice-main">
                    <div className="notice-meta">
                      <span>{notice.category}</span>

                      {notice.important && (
                        <span className="notice-important-text">
                          중요공지
                        </span>
                      )}
                    </div>

                    <h3>{notice.title}</h3>
                  </div>

                  <time>{notice.date}</time>

                  <button
                    type="button"
                    className="notice-arrow"
                    aria-label={`${notice.title} 보기`}
                  >
                    →
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="archive-empty">
              <strong>검색 결과가 없습니다.</strong>
              <p>다른 검색어를 입력해 주세요.</p>
            </div>
          )}
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

export default NoticePage
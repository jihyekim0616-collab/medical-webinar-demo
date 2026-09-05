import { useMemo, useState } from 'react'

type WebinarPageProps = {
  onNavigate: (
    page: 'home' | 'webinar' | 'video-detail' | 'resources'
  ) => void
}

type Category = '전체' | '웨비나' | '세미나' | '사내강의'

type VideoItem = {
  id: number
  category: Exclude<Category, '전체'>
  label: string
  date: string
  title: string
  speaker: string
  description: string
  duration: string
  tone: string
}

const categories: Category[] = ['전체', '웨비나', '세미나', '사내강의']

const videos: VideoItem[] = [
  {
    id: 1,
    category: '웨비나',
    label: 'WEBINAR',
    date: '2026.09.18',
    title: 'Lower Face Contouring: 새로운 리프팅 접근',
    speaker: '김OO 원장 · Dermatology',
    description: '하안면 리프팅 시술의 최신 접근과 실제 임상 포인트를 살펴봅니다.',
    duration: '42:18',
    tone: 'archive-navy',
  },
  {
    id: 2,
    category: '세미나',
    label: 'SEMINAR',
    date: '2026.09.05',
    title: '환자 만족도를 높이는 복합 시술 전략',
    speaker: '박OO 원장 · Plastic Surgery',
    description: '환자 유형에 따른 시술 조합과 상담 시 고려해야 할 사항을 다룹니다.',
    duration: '51:24',
    tone: 'archive-sand',
  },
  {
    id: 3,
    category: '사내강의',
    label: 'LECTURE',
    date: '2026.08.27',
    title: 'Clinical Insight: Energy Based Device 활용',
    speaker: 'Medical Education Team',
    description: 'Energy Based Device의 기본 원리와 임상 활용 포인트를 정리합니다.',
    duration: '36:40',
    tone: 'archive-slate',
  },
  {
    id: 4,
    category: '웨비나',
    label: 'WEBINAR',
    date: '2026.08.14',
    title: 'Mid Face Lifting: 자연스러운 결과를 위한 디자인',
    speaker: '이OO 원장 · Dermatology',
    description: '중안면 시술 디자인과 환자별 접근 전략을 실제 사례 중심으로 확인합니다.',
    duration: '47:12',
    tone: 'archive-blue',
  },
  {
    id: 5,
    category: '세미나',
    label: 'SEMINAR',
    date: '2026.07.30',
    title: 'Treatment Planning for Combination Therapy',
    speaker: '최OO 원장 · Dermatology',
    description: '복합 시술 계획 수립 시 우선순위와 시술 간격 설정 방법을 다룹니다.',
    duration: '58:05',
    tone: 'archive-stone',
  },
  {
    id: 6,
    category: '사내강의',
    label: 'LECTURE',
    date: '2026.07.11',
    title: 'Medical Device Safety & Clinical Protocol',
    speaker: 'Clinical Affairs Team',
    description: '의료기기 사용 시 기본 안전사항과 권장 임상 프로토콜을 안내합니다.',
    duration: '31:46',
    tone: 'archive-gray',
  },
]

function WebinarPage({ onNavigate }: WebinarPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVideos = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase()

    return videos.filter((video) => {
      const categoryMatch =
        selectedCategory === '전체' || video.category === selectedCategory

      const searchMatch =
        keyword.length === 0 ||
        video.title.toLowerCase().includes(keyword) ||
        video.speaker.toLowerCase().includes(keyword) ||
        video.description.toLowerCase().includes(keyword)

      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchTerm])

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

            <button type="button" className="nav-button">
              Seminar
            </button>

            <button type="button" className="nav-button">
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

      <main className="archive-page">
        <section className="archive-hero">
          <div className="archive-hero-inner">
            <p className="section-kicker">WEBINAR ARCHIVE</p>

            <h1>
              의료진을 위한
              <br />
              <span>Clinical Education.</span>
            </h1>

            <p>
              지난 웨비나와 세미나, 교육 강의를 한곳에서 확인하세요.
              <br />
              인증된 의료진 회원에게만 제공되는 전문 콘텐츠입니다.
            </p>
          </div>
        </section>

        <section className="archive-content">
          <div className="archive-toolbar">
            <div className="archive-tabs">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category
                      ? 'archive-tab active'
                      : 'archive-tab'
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="archive-search">
              <span>⌕</span>
              <input
                type="search"
                placeholder="영상 제목 또는 연자를 검색하세요"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="archive-list-heading">
            <div>
              <span>VIDEO LIBRARY</span>
              <h2>
                {selectedCategory === '전체'
                  ? '전체 다시보기'
                  : `${selectedCategory} 다시보기`}
              </h2>
            </div>

            <p>
              총 <strong>{filteredVideos.length}</strong>개의 콘텐츠
            </p>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="archive-grid">
              {filteredVideos.map((video) => (
                <article className="archive-card" key={video.id}>
                  <div className={`archive-thumbnail ${video.tone}`}>
                    <span className="archive-category">{video.label}</span>

                    <button
                      type="button"
                      className="archive-play"
                      aria-label={`${video.title} 영상 보기`}
                    >
                      ▶
                    </button>

                    <span className="archive-duration">{video.duration}</span>
                  </div>

                  <div className="archive-card-body">
                    <div className="archive-meta">
                      <span>{video.date}</span>
                      <span>{video.category}</span>
                    </div>

                    <h3>{video.title}</h3>
                    <p className="archive-speaker">{video.speaker}</p>
                    <p className="archive-description">{video.description}</p>

                    <div className="archive-card-footer">
                      <span className="professional-only">
                        <span>●</span>
                        의료진 전용
                      </span>

                      <button
  type="button"
  className="watch-link"
  onClick={() => onNavigate('video-detail')}
>
  다시보기 <span>→</span>
</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="archive-empty">
              <strong>검색 결과가 없습니다.</strong>
              <p>다른 검색어나 카테고리를 선택해 주세요.</p>
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

export default WebinarPage
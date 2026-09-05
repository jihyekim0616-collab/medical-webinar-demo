import { useState } from 'react'

type SeminarPageProps = {
  onNavigate: (
    page: 'home' | 'webinar' | 'video-detail' | 'resources' | 'seminar'
  ) => void
}

type SeminarItem = {
  id: number
  date: string
  month: string
  year: string
  type: string
  title: string
  description: string
  format: string
  time: string
  speaker: string
  status: '신청 가능' | '마감 임박' | '예정'
}

const seminars: SeminarItem[] = [
  {
    id: 1,
    date: '24',
    month: 'SEP',
    year: '2026',
    type: 'EXPERT TALK',
    title: '리프팅 시술의 최신 트렌드와 임상 적용',
    description:
      '최근 리프팅 시술 트렌드와 실제 임상 적용 포인트를 의료진과 함께 살펴보는 온라인 세미나입니다.',
    format: 'Online Live',
    time: '19:30 - 20:40',
    speaker: '김OO 원장 · Dermatology',
    status: '신청 가능',
  },
  {
    id: 2,
    date: '08',
    month: 'OCT',
    year: '2026',
    type: 'CLINICAL SEMINAR',
    title: 'Combination Therapy: 환자별 시술 계획',
    description:
      '환자 상태와 목표에 따른 복합 시술 계획 수립 방법을 실제 사례 중심으로 다룹니다.',
    format: 'Offline Seminar',
    time: '14:00 - 17:00',
    speaker: '박OO 원장 · Plastic Surgery',
    status: '마감 임박',
  },
  {
    id: 3,
    date: '22',
    month: 'OCT',
    year: '2026',
    type: 'WEB SEMINAR',
    title: 'Energy Based Device Clinical Insight',
    description:
      'Energy Based Device의 기본 원리와 실제 임상 활용 시 고려해야 할 핵심 내용을 소개합니다.',
    format: 'Online Live',
    time: '20:00 - 21:00',
    speaker: '이OO 원장 · Dermatology',
    status: '신청 가능',
  },
  {
    id: 4,
    date: '12',
    month: 'NOV',
    year: '2026',
    type: 'MASTER CLASS',
    title: 'Lower Face Contouring Advanced Session',
    description:
      '하안면 윤곽과 리프팅 설계에 대한 심화 임상 세션으로 구성된 의료진 대상 프로그램입니다.',
    format: 'Offline Seminar',
    time: '13:30 - 16:30',
    speaker: '최OO 원장 · Dermatology',
    status: '예정',
  },
]

function SeminarPage({ onNavigate }: SeminarPageProps) {
  const [notice, setNotice] = useState<string | null>(null)

  const handleApply = (seminar: SeminarItem) => {
    setNotice(
      `"${seminar.title}" 신청 버튼입니다. 실제 운영 시 외부 세미나 신청 페이지로 연결됩니다.`
    )

    window.setTimeout(() => {
      setNotice(null)
    }, 3500)
  }

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
              className="nav-button active"
            >
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

      {notice && (
        <div className="seminar-demo-notice">
          <strong>DEMO</strong>
          <span>{notice}</span>
        </div>
      )}

      <main className="seminar-page">
        <section className="seminar-hero">
          <div className="seminar-hero-inner">
            <p className="section-kicker">UPCOMING SEMINARS</p>

            <h1>
              새로운 임상 인사이트를
              <br />
              <span>직접 만나보세요.</span>
            </h1>

            <p>
              의료진을 위한 웨비나와 오프라인 세미나 일정을 확인하세요.
              <br />
              참가 신청은 각 세미나의 외부 신청 페이지에서 진행됩니다.
            </p>
          </div>
        </section>

        <section className="seminar-content">
          <div className="seminar-heading">
            <div>
              <span>EVENT SCHEDULE</span>
              <h2>예정 세미나</h2>
            </div>

            <p>총 {seminars.length}개의 일정</p>
          </div>

          <div className="seminar-list">
            {seminars.map((seminar) => (
              <article className="seminar-card" key={seminar.id}>
                <div className="seminar-date">
                  <span>{seminar.month}</span>
                  <strong>{seminar.date}</strong>
                  <small>{seminar.year}</small>
                </div>

                <div className="seminar-main">
                  <div className="seminar-topline">
                    <span className="seminar-type">{seminar.type}</span>

                    <span
                      className={`seminar-status ${
                        seminar.status === '마감 임박'
                          ? 'closing'
                          : seminar.status === '예정'
                            ? 'upcoming'
                            : ''
                      }`}
                    >
                      {seminar.status}
                    </span>
                  </div>

                  <h3>{seminar.title}</h3>

                  <p className="seminar-description">
                    {seminar.description}
                  </p>

                  <div className="seminar-details">
                    <div>
                      <span>FORMAT</span>
                      <strong>{seminar.format}</strong>
                    </div>

                    <div>
                      <span>TIME</span>
                      <strong>{seminar.time}</strong>
                    </div>

                    <div>
                      <span>SPEAKER</span>
                      <strong>{seminar.speaker}</strong>
                    </div>
                  </div>
                </div>

                <div className="seminar-action">
                  <button
                    type="button"
                    disabled={seminar.status === '예정'}
                    onClick={() => handleApply(seminar)}
                  >
                    {seminar.status === '예정'
                      ? '신청 예정'
                      : '외부 신청하기'}
                    <span>↗</span>
                  </button>

                  <small>
                    외부 등록 페이지로
                    <br />
                    연결됩니다.
                  </small>
                </div>
              </article>
            ))}
          </div>

          <div className="seminar-external-notice">
            <span>↗</span>

            <div>
              <strong>세미나 신청은 외부 페이지에서 진행됩니다.</strong>
              <p>
                본 포털에서는 일정과 세미나 정보를 제공하며, 실제 참가 신청 및
                결제 기능은 별도 등록 시스템과 연결하는 구조의 DEMO입니다.
              </p>
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

export default SeminarPage
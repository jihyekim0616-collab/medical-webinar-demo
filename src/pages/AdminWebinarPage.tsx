import { useState } from 'react'

type AdminWebinarPageProps = {
  onBack: () => void
}

type WebinarItem = {
  id: number
  title: string
  category: string
  speaker: string
  date: string
  status: 'published' | 'draft'
}

function AdminWebinarPage({
  onBack,
}: AdminWebinarPageProps) {
  const [showForm, setShowForm] = useState(false)

  const [webinars, setWebinars] = useState<WebinarItem[]>([
    {
      id: 1,
      title: 'Lower Face Contouring: 새로운 리프팅 접근',
      category: '웨비나',
      speaker: '김OO 원장',
      date: '2026.08.28',
      status: 'published',
    },
    {
      id: 2,
      title: 'Advanced Skin Rejuvenation Strategy',
      category: '세미나',
      speaker: '박OO 원장',
      date: '2026.08.17',
      status: 'published',
    },
    {
      id: 3,
      title: 'Clinical Insight: Facial Anatomy',
      category: '사내강의',
      speaker: '이OO 원장',
      date: '2026.08.08',
      status: 'draft',
    },
  ])

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('웨비나')
  const [speaker, setSpeaker] = useState('')
  const [date, setDate] = useState('')

  const handleAddWebinar = () => {
    if (!title.trim() || !speaker.trim() || !date) {
      return
    }

    setWebinars((current) => [
      {
        id: Date.now(),
        title: title.trim(),
        category,
        speaker: speaker.trim(),
        date,
        status: 'draft',
      },
      ...current,
    ])

    setTitle('')
    setCategory('웨비나')
    setSpeaker('')
    setDate('')
    setShowForm(false)
  }

  const handleToggleStatus = (id: number) => {
    setWebinars((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === 'published'
                  ? 'draft'
                  : 'published',
            }
          : item,
      ),
    )
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="brand-mark">M</span>

          <span>
            <strong>MEDICAL INSIGHT</strong>
            <small>ADMINISTRATION</small>
          </span>
        </div>

        <nav className="admin-nav">
          <button type="button" onClick={onBack}>
            <span>01</span>
            Dashboard
          </button>

          <button type="button">
            <span>02</span>
            회원 관리
          </button>

          <button type="button" className="active">
            <span>03</span>
            Webinar
          </button>

          <button type="button">
            <span>04</span>
            Resources
          </button>

          <button type="button">
            <span>05</span>
            Seminar
          </button>

          <button type="button">
            <span>06</span>
            Notice
          </button>
        </nav>

        <div className="admin-sidebar-bottom">
          <span>DEMO ADMIN</span>
          <strong>관리자</strong>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p>CONTENT MANAGEMENT</p>
            <h1>Webinar</h1>
          </div>

          <button
            type="button"
            className="admin-back-button"
            onClick={onBack}
          >
            ← Dashboard
          </button>
        </header>

        <section className="admin-content-heading">
          <div>
            <p>WEBINAR ARCHIVE MANAGEMENT</p>

            <h2>
              다시보기 콘텐츠를
              <span>관리합니다.</span>
            </h2>
          </div>

          <button
            type="button"
            className="admin-primary-button"
            onClick={() => setShowForm((current) => !current)}
          >
            + 새 웨비나 등록
          </button>
        </section>

        {showForm && (
          <section className="admin-webinar-form">
            <div className="admin-card-title">
              <span>NEW</span>

              <div>
                <p>NEW CONTENT</p>
                <h3>웨비나 등록</h3>
              </div>
            </div>

            <div className="admin-webinar-form-grid">
              <label>
                <span>제목</span>
                <input
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="웨비나 제목"
                />
              </label>

              <label>
                <span>카테고리</span>
                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                >
                  <option value="웨비나">웨비나</option>
                  <option value="세미나">세미나</option>
                  <option value="사내강의">사내강의</option>
                </select>
              </label>

              <label>
                <span>연자</span>
                <input
                  type="text"
                  value={speaker}
                  onChange={(event) =>
                    setSpeaker(event.target.value)
                  }
                  placeholder="예: 김OO 원장"
                />
              </label>

              <label>
                <span>게시일</span>
                <input
                  type="date"
                  value={date}
                  onChange={(event) =>
                    setDate(event.target.value)
                  }
                />
              </label>
            </div>

            <div className="admin-webinar-demo-note">
              <strong>DEMO</strong>
              <p>
                실제 구축 시 영상 URL, 썸네일, 설명,
                공개 범위 등을 함께 등록하도록 구성합니다.
              </p>
            </div>

            <div className="admin-webinar-form-actions">
              <button
                type="button"
                className="admin-reject-button"
                onClick={() => setShowForm(false)}
              >
                취소
              </button>

              <button
                type="button"
                className="admin-approve-button"
                onClick={handleAddWebinar}
              >
                임시저장
              </button>
            </div>
          </section>
        )}

        <section className="admin-webinar-list-section">
          <div className="admin-section-heading">
            <div>
              <p>REGISTERED CONTENT</p>
              <h2>등록 콘텐츠</h2>
            </div>

            <span className="admin-content-count">
              총 {webinars.length}건
            </span>
          </div>

          <div className="admin-webinar-table">
            <div className="admin-webinar-table-head">
              <span>콘텐츠</span>
              <span>카테고리</span>
              <span>연자</span>
              <span>게시일</span>
              <span>상태</span>
              <span>관리</span>
            </div>

            {webinars.map((webinar) => (
              <div
                className="admin-webinar-row"
                key={webinar.id}
              >
                <div className="admin-webinar-title">
                  <span>VIDEO</span>

                  <strong>{webinar.title}</strong>
                </div>

                <span>{webinar.category}</span>

                <span>{webinar.speaker}</span>

                <span>{webinar.date}</span>

                <span
                  className={
                    webinar.status === 'published'
                      ? 'admin-published-badge'
                      : 'admin-draft-badge'
                  }
                >
                  {webinar.status === 'published'
                    ? '공개'
                    : '임시저장'}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handleToggleStatus(webinar.id)
                  }
                >
                  {webinar.status === 'published'
                    ? '비공개로 전환'
                    : '공개하기'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="admin-demo-message">
          <strong>DEMO DATA</strong>

          <p>
            현재 등록 및 공개 상태는 브라우저에서만
            임시로 변경됩니다. 실제 운영 시 관리자 DB 및
            영상 서비스와 연결됩니다.
          </p>
        </div>
      </main>
    </div>
  )
}

export default AdminWebinarPage
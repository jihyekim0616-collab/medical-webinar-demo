import { useMemo, useState } from 'react'

type ResourcesPageProps = {
  onNavigate: (page: 'home' | 'webinar' | 'video-detail' | 'resources' | 'seminar' | 'notice') => void
}

type ResourceCategory = '전체' | '제품자료' | '임상자료' | '시술가이드'

type ResourceItem = {
  id: number
  category: Exclude<ResourceCategory, '전체'>
  type: string
  title: string
  description: string
  date: string
  pages: string
  tone: string
}

const categories: ResourceCategory[] = [
  '전체',
  '제품자료',
  '임상자료',
  '시술가이드',
]

const resources: ResourceItem[] = [
  {
    id: 1,
    category: '제품자료',
    type: 'PRODUCT GUIDE',
    title: 'Lifting Device Product Guide 2026',
    description: '제품 특징과 주요 사양, 의료진 대상 핵심 정보를 정리한 자료입니다.',
    date: '2026.09',
    pages: '24 pages',
    tone: 'resource-navy',
  },
  {
    id: 2,
    category: '임상자료',
    type: 'CLINICAL CASE',
    title: 'Before & After Clinical Cases',
    description: '다양한 환자 사례를 기반으로 한 임상 참고 자료입니다.',
    date: '2026.09',
    pages: '18 pages',
    tone: 'resource-slate',
  },
  {
    id: 3,
    category: '시술가이드',
    type: 'PROTOCOL',
    title: 'Recommended Treatment Protocol',
    description: '시술 계획 수립 시 참고할 수 있는 권장 프로토콜을 제공합니다.',
    date: '2026.08',
    pages: '12 pages',
    tone: 'resource-sand',
  },
  {
    id: 4,
    category: '제품자료',
    type: 'PRODUCT BROCHURE',
    title: 'Energy Based Device Overview',
    description: '의료진 설명용 제품 브로슈어와 핵심 기능 요약 자료입니다.',
    date: '2026.08',
    pages: '16 pages',
    tone: 'resource-blue',
  },
  {
    id: 5,
    category: '임상자료',
    type: 'CLINICAL REFERENCE',
    title: 'Lower Face Contouring Reference',
    description: '하안면 시술 계획과 임상 적용 시 참고할 수 있는 자료입니다.',
    date: '2026.07',
    pages: '20 pages',
    tone: 'resource-gray',
  },
  {
    id: 6,
    category: '시술가이드',
    type: 'TREATMENT GUIDE',
    title: 'Combination Treatment Planning',
    description: '복합 시술 순서와 환자별 접근 방법을 정리한 실무 참고 자료입니다.',
    date: '2026.07',
    pages: '14 pages',
    tone: 'resource-stone',
  },
]

function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ResourceCategory>('전체')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredResources = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase()

    return resources.filter((resource) => {
      const categoryMatch =
        selectedCategory === '전체' ||
        resource.category === selectedCategory

      const searchMatch =
        keyword.length === 0 ||
        resource.title.toLowerCase().includes(keyword) ||
        resource.description.toLowerCase().includes(keyword) ||
        resource.type.toLowerCase().includes(keyword)

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
              className="nav-button"
              onClick={() => onNavigate('webinar')}
            >
              Webinar
            </button>

            <button
              type="button"
              className="nav-button active"
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

      <main className="resources-page">
        <section className="resources-hero">
          <div className="resources-hero-inner">
            <p className="section-kicker">PROFESSIONAL RESOURCES</p>

            <h1>
              필요한 임상 자료를
              <br />
              <span>한곳에서.</span>
            </h1>

            <p>
              제품 자료, 임상 사례, 시술 가이드를 의료진 전용 공간에서
              확인하세요.
              <br />
              인증된 의료진 회원에게만 제공되는 전문 자료실입니다.
            </p>
          </div>
        </section>

        <section className="resources-content">
          <div className="resources-toolbar">
            <div className="resources-tabs">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category
                      ? 'resources-tab active'
                      : 'resources-tab'
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="resources-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="자료명을 검색하세요"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div className="resources-list-heading">
            <div>
              <span>RESOURCE LIBRARY</span>

              <h2>
                {selectedCategory === '전체'
                  ? '전체 자료'
                  : `${selectedCategory}`}
              </h2>
            </div>

            <p>
              총 <strong>{filteredResources.length}</strong>개의 자료
            </p>
          </div>

          {filteredResources.length > 0 ? (
            <div className="resources-grid">
              {filteredResources.map((resource) => (
                <article className="resource-library-card" key={resource.id}>
                  <div className={`resource-cover ${resource.tone}`}>
                    <span className="resource-cover-type">
                      {resource.type}
                    </span>

                    <div className="resource-document-mark">
                      <span>PDF</span>
                    </div>

                    <span className="resource-cover-pages">
                      {resource.pages}
                    </span>
                  </div>

                  <div className="resource-library-body">
                    <div className="resource-library-meta">
                      <span>{resource.category}</span>
                      <span>{resource.date}</span>
                    </div>

                    <h3>{resource.title}</h3>

                    <p>{resource.description}</p>

                    <div className="resource-library-footer">
                      <span className="professional-only">
                        <span>●</span>
                        의료진 전용
                      </span>

                      <button type="button" className="resource-open-button">
                        열람하기 <span>→</span>
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

          <div className="resource-access-notice">
            <span className="resource-access-icon">●</span>

            <div>
              <strong>의료진 전용 자료실</strong>
              <p>
                본 자료는 인증된 의료전문가를 위한 교육 및 제품 정보
                제공 목적으로 구성된 DEMO 콘텐츠입니다.
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

export default ResourcesPage
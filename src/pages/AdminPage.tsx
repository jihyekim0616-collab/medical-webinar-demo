type AdminPageProps = {
  memberName: string
  memberStatus: 'pending' | 'approved' | 'rejected'
  onMemberDetail: () => void
  onWebinar: () => void
  onExit: () => void
}

function AdminPage({
  memberName,
  memberStatus,
  onMemberDetail,
  onWebinar,
  onExit,
}: AdminPageProps) {
  const pendingMembers = [
    {
      id: 1,
      name: memberName || '테스트',
      hospital: '서울 메디컬 클리닉',
      department: '피부과',
      position: '원장',
      verification: '의료진 자격 서류 확인',
      appliedAt: '2026.09.05',
      status: memberStatus,
    },
    {
      id: 2,
      name: '박OO',
      hospital: '더웰 피부과',
      department: '피부과',
      position: '의사',
      verification: '의료기관 정보 확인',
      appliedAt: '2026.09.04',
      status: 'pending' as const,
    },
    {
      id: 3,
      name: '이OO',
      hospital: '프라임 클리닉',
      department: '성형외과',
      position: '원장',
      verification: '의료진 자격 서류 확인',
      appliedAt: '2026.09.03',
      status: 'pending' as const,
    },
  ]

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
          <button type="button" className="active">
            <span>01</span>
            Dashboard
          </button>

          <button type="button">
            <span>02</span>
            회원 관리
          </button>

          <button
  type="button"
  onClick={onWebinar}
>
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

          <button type="button" onClick={onExit}>
            사용자 화면으로 나가기 →
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div>
            <p>ADMINISTRATION</p>
            <h1>Dashboard</h1>
          </div>

          <div className="admin-user">
            <span>A</span>

            <div>
              <strong>관리자</strong>
              <small>Administrator</small>
            </div>
          </div>
        </header>

        <section className="admin-welcome">
          <div>
            <p>MEDICAL INSIGHT ADMIN</p>
            <h2>
              안녕하세요, 관리자님.
              <br />
              <span>오늘 확인할 항목이 있습니다.</span>
            </h2>
          </div>

          <div className="admin-date">
            <span>05</span>
            <div>
              <strong>SEP</strong>
              <small>2026</small>
            </div>
          </div>
        </section>

        <section className="admin-stats">
          <article>
            <span>MEMBERS</span>
            <strong>128</strong>
            <p>전체 의료진 회원</p>
          </article>

          <article className="highlight">
            <span>PENDING</span>
            <strong>3</strong>
            <p>승인 대기 회원</p>
          </article>

          <article>
            <span>WEBINARS</span>
            <strong>24</strong>
            <p>등록된 다시보기</p>
          </article>

          <article>
            <span>RESOURCES</span>
            <strong>36</strong>
            <p>등록된 전문 자료</p>
          </article>
        </section>

        <section className="admin-members-section">
          <div className="admin-section-heading">
            <div>
              <p>MEMBER VERIFICATION</p>
              <h2>가입 승인 대기</h2>
            </div>

            <button type="button">
              전체 회원 보기 →
            </button>
          </div>

          <div className="admin-member-table">
            <div className="admin-table-head">
              <span>회원</span>
              <span>의료기관</span>
              <span>진료과 / 직책</span>
              <span>인증 방식</span>
              <span>신청일</span>
              <span>상태</span>
              <span />
            </div>

            {pendingMembers.map((member) => (
              <div className="admin-table-row" key={member.id}>
                <div className="admin-member-name">
                  <span>{member.name.slice(0, 1)}</span>

                  <strong>{member.name}</strong>
                </div>

                <span>{member.hospital}</span>

                <span>
                  {member.department} / {member.position}
                </span>

                <span>{member.verification}</span>

                <span>{member.appliedAt}</span>

                <span
  className={
    member.status === 'approved'
      ? 'admin-approved-badge'
      : member.status === 'rejected'
        ? 'admin-rejected-badge'
        : 'admin-pending-badge'
  }
>
  {member.status === 'approved'
    ? '승인 완료'
    : member.status === 'rejected'
      ? '반려'
      : '승인 대기'}
</span>

                <button
                  type="button"
                  onClick={
                    member.id === 1
                      ? onMemberDetail
                      : undefined
                  }
                >
                  {member.status === 'pending' ? '검토 →' : '상세 →'}
                </button>
              </div>
            ))}
          </div>

          <div className="admin-demo-message">
            <strong>DEMO DATA</strong>
            <p>
              현재 표시되는 회원과 통계는 제안용 데모 데이터입니다.
              실제 구축 시 회원 가입 신청 및 관리자 승인 상태가
              데이터베이스와 연동됩니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AdminPage
type AdminMemberDetailPageProps = {
  memberName: string
  memberStatus: 'pending' | 'approved' | 'rejected'
  onBack: () => void
  onApprove: () => void
  onReject: () => void
}

function AdminMemberDetailPage({
  memberName,
  memberStatus,
  onBack,
  onApprove,
  onReject,
}: AdminMemberDetailPageProps) {
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
          <button type="button">
            <span>01</span>
            Dashboard
          </button>

          <button type="button" className="active">
            <span>02</span>
            회원 관리
          </button>

          <button type="button">
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
            <p>MEMBER MANAGEMENT</p>
            <h1>회원 검토</h1>
          </div>

          <button
            type="button"
            className="admin-back-button"
            onClick={onBack}
          >
            ← 승인 대기 목록으로
          </button>
        </header>

        <section className="admin-detail-heading">
          <div>
            <p>MEDICAL PROFESSIONAL VERIFICATION</p>

            <h2>
              {memberName}
              <span>님의 가입 신청을 검토합니다.</span>
            </h2>
          </div>

          <span
  className={
    memberStatus === 'approved'
      ? 'admin-detail-status approved'
      : memberStatus === 'rejected'
        ? 'admin-detail-status rejected'
        : 'admin-detail-status'
  }
>
  {memberStatus === 'approved'
    ? '승인 완료'
    : memberStatus === 'rejected'
      ? '반려'
      : '승인 대기'}
</span>
        </section>

        <section className="admin-detail-grid">
          <article className="admin-detail-card">
            <div className="admin-card-title">
              <span>01</span>

              <div>
                <p>ACCOUNT INFORMATION</p>
                <h3>계정정보</h3>
              </div>
            </div>

            <dl className="admin-info-list">
              <div>
                <dt>이름</dt>
                <dd>{memberName}</dd>
              </div>

              <div>
                <dt>이메일</dt>
                <dd>doctor@medicalinsight.demo</dd>
              </div>

              <div>
                <dt>가입 신청일</dt>
                <dd>2026.09.05</dd>
              </div>

              <div>
                <dt>회원 상태</dt>
                <dd>
                  <span
  className={
    memberStatus === 'approved'
      ? 'admin-approved-badge'
      : memberStatus === 'rejected'
        ? 'admin-rejected-badge'
        : 'admin-pending-badge'
  }
>
  {memberStatus === 'approved'
    ? '승인 완료'
    : memberStatus === 'rejected'
      ? '반려'
      : '승인 대기'}
</span>
                </dd>
              </div>
            </dl>
          </article>

          <article className="admin-detail-card">
            <div className="admin-card-title">
              <span>02</span>

              <div>
                <p>MEDICAL INFORMATION</p>
                <h3>의료진 정보</h3>
              </div>
            </div>

            <dl className="admin-info-list">
              <div>
                <dt>의료기관</dt>
                <dd>서울 메디컬 클리닉</dd>
              </div>

              <div>
                <dt>진료과</dt>
                <dd>피부과</dd>
              </div>

              <div>
                <dt>직책</dt>
                <dd>원장</dd>
              </div>

              <div>
                <dt>인증 방식</dt>
                <dd>의료진 자격 서류 확인</dd>
              </div>
            </dl>
          </article>
        </section>

        <section className="admin-verification-card">
          <div className="admin-card-title">
            <span>03</span>

            <div>
              <p>VERIFICATION REVIEW</p>
              <h3>의료진 자격 확인</h3>
            </div>
          </div>

          <div className="admin-document-preview">
            <div className="admin-document-icon">
              <span>PDF</span>
            </div>

            <div>
              <strong>의료진 자격 확인 자료</strong>

              <p>
                실제 운영 시 회원이 제출한 자격 확인 자료 또는
                의료기관 정보를 관리자가 이 영역에서 확인합니다.
              </p>

              <span>DEMO에서는 실제 파일을 저장하지 않습니다.</span>
            </div>

            <button type="button">
              자료 확인 DEMO
            </button>
          </div>
        </section>

        <section className="admin-review-note">
          <strong>검토 메모</strong>

          <textarea
            placeholder="승인 또는 반려 시 참고할 관리자 메모를 입력할 수 있습니다."
          />

          <p>
            현재 DEMO에서는 메모 내용이 저장되지 않습니다.
          </p>
        </section>

        <section className="admin-decision-area">
          <div>
            <p>ADMIN DECISION</p>

            <strong>
              의료진 정보를 확인한 후 승인 여부를 결정합니다.
            </strong>
          </div>

          <div className="admin-decision-buttons">
  {memberStatus === 'pending' ? (
    <>
      <button
        type="button"
        className="admin-reject-button"
        onClick={onReject}
      >
        반려
      </button>

      <button
        type="button"
        className="admin-approve-button"
        onClick={onApprove}
      >
        의료진 회원 승인
      </button>
    </>
  ) : (
    <span
      className={
        memberStatus === 'approved'
          ? 'admin-decision-result approved'
          : 'admin-decision-result rejected'
      }
    >
      {memberStatus === 'approved'
        ? '승인 처리가 완료되었습니다.'
        : '반려 처리가 완료되었습니다.'}
    </span>
  )}
</div>
        </section>

        <div className="admin-demo-message">
          <strong>DEMO DATA</strong>

          <p>
            표시된 의료기관과 자격정보는 제안용 예시입니다.
            실제 구축 시 회원이 입력한 데이터 및 제출 자료와
            연동됩니다.
          </p>
        </div>
      </main>
    </div>
  )
}

export default AdminMemberDetailPage
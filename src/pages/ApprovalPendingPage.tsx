type ApprovalPendingPageProps = {
  memberName: string
  onLogin: () => void
  onAdmin: () => void
}

function ApprovalPendingPage({
  memberName,
  onLogin,
  onAdmin,
}: ApprovalPendingPageProps) {
  return (
    <div className="approval-page">
      <header className="signup-header">
        <div className="signup-brand">
          <span className="brand-mark">M</span>

          <span>
            <strong>MEDICAL INSIGHT</strong>
            <small>PROFESSIONAL PORTAL</small>
          </span>
        </div>
      </header>

      <main className="approval-main">
        <section className="approval-card">
          <div className="approval-step-label">STEP 03</div>

          <div className="approval-icon">
            <span>✓</span>
          </div>

          <p className="approval-kicker">
            MEMBERSHIP APPLICATION RECEIVED
          </p>

          <h1>
            가입 신청이
            <br />
            <span>완료되었습니다.</span>
          </h1>

          <p className="approval-description">
            <strong>{memberName}</strong>님의 의료진 회원 가입 신청이
            정상적으로 접수되었습니다.
            <br />
            관리자 확인 및 승인 후 의료진 전용 콘텐츠를 이용할 수 있습니다.
          </p>

          <div className="approval-status">
            <div className="approval-status-item completed">
              <span>01</span>

              <div>
                <strong>계정정보 입력</strong>
                <small>완료</small>
              </div>
            </div>

            <div className="approval-status-line completed" />

            <div className="approval-status-item completed">
              <span>02</span>

              <div>
                <strong>의료진 정보 입력</strong>
                <small>완료</small>
              </div>
            </div>

            <div className="approval-status-line" />

            <div className="approval-status-item pending">
              <span>03</span>

              <div>
                <strong>관리자 승인</strong>
                <small>승인 대기</small>
              </div>
            </div>
          </div>

          <div className="approval-notice">
            <div className="approval-notice-badge">
              PENDING
            </div>

            <div>
              <strong>현재 상태 · 관리자 승인 대기</strong>

              <p>
                실제 운영 시 제출된 의료진 정보를 관리자가 확인한 후
                회원 이용 권한을 승인하는 방식으로 구성됩니다.
              </p>
            </div>
          </div>

          <div className="approval-demo">
            <span>DEMO</span>

            <p>
              현재 화면은 제안용 DEMO입니다. 실제 자격정보는 저장되지
              않았으며 관리자 승인 기능은 다음 관리자 화면에서
              시연합니다.
            </p>
          </div>

<button
  type="button"
  className="approval-admin-button"
  onClick={onAdmin}
>
  DEMO 관리자 화면에서 신청 확인하기 →
</button>
          <button
            type="button"
            className="approval-login-button"
            onClick={onLogin}
          >
            <span>로그인 화면으로 돌아가기</span>
            <span>→</span>
          </button>
        </section>
      </main>
    </div>
  )
}

export default ApprovalPendingPage
import { useState } from 'react'

type SignupPageProps = {
  onBack: () => void
  onNext: () => void
}

function SignupPage({ onBack, onNext }: SignupPageProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      setError('모든 항목을 입력해 주세요.')
      return
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    setError('')
    onNext()
  }

  return (
    <div className="signup-page">
      <header className="signup-header">
        <button
          type="button"
          className="signup-brand"
          onClick={onBack}
        >
          <span className="brand-mark">M</span>

          <span>
            <strong>MEDICAL INSIGHT</strong>
            <small>PROFESSIONAL PORTAL</small>
          </span>
        </button>

        <button
          type="button"
          className="signup-login-link"
          onClick={onBack}
        >
          로그인으로 돌아가기
        </button>
      </header>

      <main className="signup-main">
        <section className="signup-intro">
          <p className="signup-kicker">MEDICAL PROFESSIONAL MEMBERSHIP</p>

          <h1>
            의료진 회원
            <br />
            <span>가입 신청</span>
          </h1>

          <p>
            Medical Insight의 전문 콘텐츠는
            <br />
            의료진 인증 완료 후 이용할 수 있습니다.
          </p>

          <div className="signup-steps">
            <div className="signup-step active">
              <span>01</span>
              <div>
                <strong>계정정보</strong>
                <small>기본 회원정보 입력</small>
              </div>
            </div>

            <div className="signup-step">
              <span>02</span>
              <div>
                <strong>의료진 정보</strong>
                <small>의료기관 및 자격정보</small>
              </div>
            </div>

            <div className="signup-step">
              <span>03</span>
              <div>
                <strong>가입 신청</strong>
                <small>관리자 확인 및 승인</small>
              </div>
            </div>
          </div>
        </section>

        <section className="signup-form-section">
          <div className="signup-form-heading">
            <span>STEP 01</span>
            <h2>기본 계정정보</h2>
            <p>로그인에 사용할 회원정보를 입력해 주세요.</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label>
              <span>
                이름 <em>*</em>
              </span>

              <input
                type="text"
                placeholder="성함을 입력하세요"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label>
              <span>
                이메일 <em>*</em>
              </span>

              <input
                type="email"
                placeholder="doctor@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <small>로그인 아이디로 사용됩니다.</small>
            </label>

            <div className="signup-password-grid">
              <label>
                <span>
                  비밀번호 <em>*</em>
                </span>

                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              <label>
                <span>
                  비밀번호 확인 <em>*</em>
                </span>

                <input
                  type="password"
                  placeholder="비밀번호 재입력"
                  value={passwordConfirm}
                  onChange={(event) =>
                    setPasswordConfirm(event.target.value)
                  }
                />
              </label>
            </div>

            <p className="signup-password-guide">
              영문, 숫자를 조합한 8자 이상의 비밀번호를 권장합니다.
            </p>

            {error && <p className="signup-error">{error}</p>}

            <button type="submit" className="signup-next-button">
              <span>다음 단계</span>
              <span>02 / 의료진 정보 →</span>
            </button>
          </form>

          <div className="signup-security-note">
            <strong>MEDICAL PROFESSIONAL VERIFICATION</strong>

            <p>
              다음 단계에서 의료기관 및 의료진 자격 확인을 위한 정보를
              입력합니다. 현재 화면은 제안용 DEMO이며 실제 개인정보나
              자격정보를 저장하지 않습니다.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SignupPage
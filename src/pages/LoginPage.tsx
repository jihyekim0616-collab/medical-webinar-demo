import { useState } from 'react'

type LoginPageProps = {
  onLogin: () => void
}

function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('이메일과 비밀번호를 입력해 주세요.')
      return
    }

    setError('')
    onLogin()
  }

  const handleDemoLogin = () => {
    setEmail('doctor@medicalinsight.demo')
    setPassword('demo1234')
    setError('')
    onLogin()
  }

  return (
    <div className="login-page">
      <div className="login-brand-area">
        <div className="login-brand">
          <span className="brand-mark">M</span>

          <span>
            <strong>MEDICAL INSIGHT</strong>
            <small>PROFESSIONAL PORTAL</small>
          </span>
        </div>

        <div className="login-brand-copy">
          <p>MEDICAL PROFESSIONALS ONLY</p>

          <h1>
            더 나은 임상을 위한
            <br />
            <span>Medical Insight.</span>
          </h1>

          <p className="login-brand-description">
            의료진을 위한 웨비나, 임상 자료,
            <br />
            전문 세미나를 한곳에서 만나보세요.
          </p>
        </div>

        <div className="login-brand-footer">
          <span>Professional Education</span>
          <span>Clinical Resources</span>
          <span>Medical Webinar</span>
        </div>
      </div>

      <div className="login-form-area">
        <div className="login-form-wrapper">
          <div className="login-heading">
            <p>MEMBER LOGIN</p>
            <h2>의료진 회원 로그인</h2>
            <span>
              인증된 의료진 회원만 전문 콘텐츠를 이용할 수 있습니다.
            </span>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              <span>이메일</span>

              <input
                type="email"
                placeholder="doctor@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label>
              <span>비밀번호</span>

              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" />
                <span>로그인 상태 유지</span>
              </label>

              <button type="button" className="login-text-button">
                비밀번호 찾기
              </button>
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit">
              로그인
              <span>→</span>
            </button>
          </form>

          <div className="login-divider">
            <span>DEMO PREVIEW</span>
          </div>

          <button
            type="button"
            className="demo-login-button"
            onClick={handleDemoLogin}
          >
            의료진 DEMO 계정으로 입장
          </button>

          <div className="login-signup">
            <span>아직 의료진 회원이 아니신가요?</span>

            <button type="button">
              의료진 회원가입
            </button>
          </div>

          <div className="login-access-note">
            <span>●</span>

            <div>
              <strong>의료전문가 전용 서비스</strong>
              <p>
                실제 운영 시 의료진 자격 확인 후 관리자의 승인을 받은
                회원만 서비스를 이용하도록 구성됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
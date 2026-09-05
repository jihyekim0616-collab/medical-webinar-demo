import { useState } from 'react'

type MedicalInfoPageProps = {
  onBack: () => void
  onNext: () => void
}

function MedicalInfoPage({ onBack, onNext }: MedicalInfoPageProps) {
  const [hospital, setHospital] = useState('')
  const [department, setDepartment] = useState('')
  const [position, setPosition] = useState('')
  const [verification, setVerification] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !hospital.trim() ||
      !department ||
      !position ||
      !verification
    ) {
      setError('의료진 정보를 모두 입력해 주세요.')
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
          ← 이전 단계
        </button>
      </header>

      <main className="signup-main">
        <section className="signup-intro">
          <p className="signup-kicker">
            MEDICAL PROFESSIONAL MEMBERSHIP
          </p>

          <h1>
            의료진 회원
            <br />
            <span>가입 신청</span>
          </h1>

          <p>
            의료전문가 전용 콘텐츠 제공을 위해
            <br />
            기본적인 의료진 정보를 확인합니다.
          </p>

          <div className="signup-steps">
            <div className="signup-step completed">
              <span>✓</span>
              <div>
                <strong>계정정보</strong>
                <small>기본 회원정보 입력 완료</small>
              </div>
            </div>

            <div className="signup-step active">
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
            <span>STEP 02</span>
            <h2>의료진 정보</h2>
            <p>
              의료전문가 확인에 필요한 기본 정보를 입력해 주세요.
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <label>
              <span>
                의료기관명 <em>*</em>
              </span>

              <input
                type="text"
                placeholder="근무 중인 의료기관명을 입력하세요"
                value={hospital}
                onChange={(event) => setHospital(event.target.value)}
              />
            </label>

            <div className="signup-password-grid">
              <label>
                <span>
                  진료과 <em>*</em>
                </span>

                <select
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                >
                  <option value="">선택하세요</option>
                  <option value="dermatology">피부과</option>
                  <option value="plastic-surgery">성형외과</option>
                  <option value="general-practice">일반의</option>
                  <option value="other">기타</option>
                </select>
              </label>

              <label>
                <span>
                  직책 <em>*</em>
                </span>

                <select
                  value={position}
                  onChange={(event) => setPosition(event.target.value)}
                >
                  <option value="">선택하세요</option>
                  <option value="director">원장</option>
                  <option value="doctor">의사</option>
                  <option value="resident">전공의</option>
                  <option value="other">기타</option>
                </select>
              </label>
            </div>

            <fieldset className="verification-fieldset">
              <legend>
                의료진 자격 확인 방식 <em>*</em>
              </legend>

              <p>
                실제 운영 시 발주사 정책에 따라 필요한 인증 방식으로
                구성할 수 있습니다.
              </p>

              <label
                className={
                  verification === 'license'
                    ? 'verification-option selected'
                    : 'verification-option'
                }
              >
                <input
                  type="radio"
                  name="verification"
                  value="license"
                  checked={verification === 'license'}
                  onChange={(event) =>
                    setVerification(event.target.value)
                  }
                />

                <span className="verification-icon">01</span>

                <span>
                  <strong>의료진 자격 서류 확인</strong>
                  <small>
                    면허 또는 의료전문가 자격을 확인할 수 있는 자료
                  </small>
                </span>
              </label>

              <label
                className={
                  verification === 'hospital'
                    ? 'verification-option selected'
                    : 'verification-option'
                }
              >
                <input
                  type="radio"
                  name="verification"
                  value="hospital"
                  checked={verification === 'hospital'}
                  onChange={(event) =>
                    setVerification(event.target.value)
                  }
                />

                <span className="verification-icon">02</span>

                <span>
                  <strong>의료기관 정보 확인</strong>
                  <small>
                    의료기관 재직 또는 운영 정보를 기준으로 관리자 확인
                  </small>
                </span>
              </label>
            </fieldset>

            <div className="verification-demo-note">
              <strong>DEMO 안내</strong>
              <p>
                현재 데모에서는 실제 면허번호나 증빙서류를 입력·업로드하지
                않습니다. 실제 구축 시 발주사와 인증 기준을 확정한 후
                필요한 정보만 수집하도록 설계합니다.
              </p>
            </div>

            {error && <p className="signup-error">{error}</p>}

            <button type="submit" className="signup-next-button">
              <span>가입 신청하기</span>
              <span>03 / 관리자 승인 →</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default MedicalInfoPage
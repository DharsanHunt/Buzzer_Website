import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate()
    const [teamName, setTeamName] = useState('')
    const [rulesAccepted, setRulesAccepted] = useState(false)
    const [errors, setErrors] = useState({ teamName: false, rules: false })

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {
            teamName: !teamName.trim(),
            rules: !rulesAccepted,
        }
        setErrors(newErrors)

        if (newErrors.teamName || newErrors.rules) {
            setTimeout(() => setErrors({ teamName: false, rules: false }), 2500)
            return
        }

        localStorage.setItem('quizmaster_team_name', teamName.trim())
        navigate('/buzzer')
    }

    return (
        <div className="login-page">
            {/* Navigation Bar */}
            <nav className="login-nav glass-effect">
                <div className="login-nav-inner">
                    <div className="brand-logo">QuizMaster Pro</div>
                    <div className="nav-links">
                        <a href="/" className="nav-link active">Join Room</a>
                    </div>
                    <div className="nav-actions">
                        <button className="nav-icon-btn" aria-label="Notifications">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="nav-icon-btn" aria-label="Settings">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    </div>
                </div>
                <div className="nav-divider"></div>
            </nav>

            {/* Main Content */}
            <main className="login-main">
                {/* Background decorative element */}
                <div className="bg-deco" aria-hidden="true">
                    <span className="bg-deco-text">01</span>
                </div>

                <div className="login-grid">
                    {/* Left Side: Welcome */}
                    <section className="welcome-section animate-entrance">
                        <div className="welcome-header">
                            <span className="entry-label">Participant Entry</span>
                            <h1 className="welcome-title">
                                Assemble Your <span className="highlight">Knowledge Squad.</span>
                            </h1>
                        </div>
                        <p className="welcome-desc">
                            Welcome to QuizMaster Pro. Your team is one step away from entering the arena.
                            Enter your team name and agree to the rules to begin.
                        </p>
                    </section>

                    {/* Right Side: Registration Card */}
                    <section className="registration-card animate-entrance-delay">
                        <form onSubmit={handleSubmit} className="registration-form">
                            {/* Team Name Input */}
                            <div className="form-group">
                                <label htmlFor="team-name" className="form-label">
                                    Team Identity
                                </label>
                                <div className="input-wrap">
                                    <input
                                        id="team-name"
                                        type="text"
                                        className={`team-input ${errors.teamName ? 'input-error' : ''}`}
                                        placeholder="Enter your team name..."
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                    />
                                    <div className="input-icon">
                                        <span className="material-symbols-outlined">groups</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rules & Regulations */}
                            <div className="form-group">
                                <label className="form-label">Rules of Engagement</label>
                                <div className="rules-box custom-scrollbar">
                                    <div className="rules-content">
                                        <p><strong>1. Professionalism:</strong> All team names and communications must remain academic and professional.</p>
                                        <p><strong>2. Fair Play:</strong> External digital assistance or AI tools are strictly prohibited during the live session.</p>
                                        <p><strong>3. Latency:</strong> Users are responsible for their own network stability. QuizMaster Pro is not liable for disconnects.</p>
                                        <p><strong>4. Intellectual Property:</strong> All quiz content is proprietary to QuizMaster Pro and cannot be reproduced.</p>
                                        <p><strong>5. Verification:</strong> Teams may be asked to verify identities for prize distribution.</p>
                                    </div>
                                </div>
                                <label className={`checkbox-label ${errors.rules ? 'checkbox-error' : ''}`}>
                                    <input
                                        type="checkbox"
                                        className="rules-checkbox"
                                        checked={rulesAccepted}
                                        onChange={(e) => setRulesAccepted(e.target.checked)}
                                    />
                                    <span className="checkbox-text">
                                        I have read and agree to the tournament&apos;s Rules &amp; Regulations.
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="enter-arena-btn buzzer-gradient">
                                Enter Arena
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </button>
                        </form>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="login-footer">
                <a href="#" className="support-link glass-effect">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>help</span>
                    <span className="support-text">Technical Support</span>
                </a>
            </footer>
        </div>
    )
}

export default LoginPage

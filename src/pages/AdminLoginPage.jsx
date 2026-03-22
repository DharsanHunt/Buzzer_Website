import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLoginPage.css'

function AdminLoginPage() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Simple admin auth (demo — hardcoded)
        if (username.trim() === 'admin' && password === 'admin123') {
            localStorage.setItem('quizmaster_admin', 'true')
            navigate('/admin/dashboard')
        } else {
            setError('Invalid credentials. Try admin / admin123')
            setTimeout(() => setError(''), 3000)
        }
    }

    return (
        <div className="admin-login-page">
            {/* Nav */}
            <nav className="admin-login-nav glass-effect">
                <div className="admin-login-nav-inner">
                    <a href="/" className="admin-brand-logo">QuizMaster Pro</a>
                    <span className="admin-badge">ADMIN</span>
                </div>
                <div className="nav-divider-admin"></div>
            </nav>

            <main className="admin-login-main">
                {/* Background deco */}
                <div className="admin-bg-deco" aria-hidden="true">
                    <span className="material-symbols-outlined admin-bg-icon">shield_person</span>
                </div>

                <div className="admin-login-card animate-entrance">
                    {/* Icon */}
                    <div className="admin-login-icon-wrap">
                        <div className="admin-login-icon-circle">
                            <span className="material-symbols-outlined admin-lock-icon">admin_panel_settings</span>
                        </div>
                    </div>

                    <h1 className="admin-login-title">Admin Access</h1>
                    <p className="admin-login-subtitle">Sign in to manage quizzes, teams, and sessions.</p>

                    <form onSubmit={handleSubmit} className="admin-login-form">
                        {/* Username */}
                        <div className="admin-form-group">
                            <label htmlFor="admin-username" className="admin-form-label">Username</label>
                            <div className="admin-input-wrap">
                                <span className="material-symbols-outlined admin-input-icon">person</span>
                                <input
                                    id="admin-username"
                                    type="text"
                                    className="admin-input"
                                    placeholder="Enter admin username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="admin-form-group">
                            <label htmlFor="admin-password" className="admin-form-label">Password</label>
                            <div className="admin-input-wrap">
                                <span className="material-symbols-outlined admin-input-icon">lock</span>
                                <input
                                    id="admin-password"
                                    type="password"
                                    className="admin-input"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="admin-error-msg">
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button type="submit" className="admin-login-btn buzzer-gradient">
                            Sign In
                            <span className="material-symbols-outlined">login</span>
                        </button>
                    </form>

                    <div className="admin-login-footer-link">
                        <a href="/" className="back-to-participant">
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
                            Back to Participant Login
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminLoginPage

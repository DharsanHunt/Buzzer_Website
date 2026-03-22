import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BuzzerPage.css'

function BuzzerPage() {
    const [teamName, setTeamName] = useState('YOUR TEAM')
    const [buzzerPressed, setBuzzerPressed] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('quizmaster_team_name')
        if (stored) setTeamName(stored)
    }, [])

    const handleBuzz = () => {
        if (buzzerPressed) return

        setBuzzerPressed(true)

        // Auto-reset after 3 seconds (demo)
        setTimeout(() => {
            setBuzzerPressed(false)
        }, 3000)
    }

    return (
        <div className="buzzer-page">
            {/* Top App Bar */}
            <header className="buzzer-header">
                <Link to="/" className="buzzer-brand">
                    QuizMaster Pro
                </Link>
                <div className="buzzer-team-display">
                    <span className="team-name-text">{teamName}</span>
                </div>
                <div className="buzzer-header-actions">
                    <button className="header-icon-btn" aria-label="Notifications">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="header-icon-btn" aria-label="Settings">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <button className="header-icon-btn" aria-label="Account">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </header>

            <div className="buzzer-layout">
                {/* Main Content */}
                <main className="buzzer-main">
                    {/* Category Tag */}
                    <div className="category-tag animate-fade-in">
                        <span className="category-text">WAITING FOR ROUND</span>
                    </div>

                    {/* Question / Status */}
                    <div className="question-area animate-fade-in">
                        <h1 className="question-text">
                            Waiting for the quiz to begin...
                        </h1>
                    </div>

                    {/* Buzzer Button */}
                    <div className="buzzer-container animate-fade-in-delay">
                        <button
                            className={`buzzer-button buzzer-gradient-pulse ${buzzerPressed ? 'buzzer-pressed' : 'buzzer-pulse buzzer-glow'}`}
                            onClick={handleBuzz}
                        >
                            <span className="buzzer-label">
                                {buzzerPressed ? 'BUZZED!' : 'BUZZ!'}
                            </span>
                            <span className="buzzer-sublabel">
                                {buzzerPressed ? 'WAITING FOR ADMIN...' : 'PRESS TO BUZZ'}
                            </span>
                        </button>

                        {/* Connection Status */}
                        <div className="connection-status">
                            <span className="status-dot"></span>
                            <span className="status-text">Connected &amp; Ready</span>
                        </div>
                    </div>

                    {/* Background Texture */}
                    <div className="bg-texture" aria-hidden="true">
                        <div className="dot-grid"></div>
                    </div>
                </main>

                {/* Sidebar / Leaderboard */}
                <aside className="leaderboard-sidebar custom-scrollbar">
                    <div className="leaderboard-inner">
                        <div className="leaderboard-header">
                            <h2 className="leaderboard-title">LEADERBOARD</h2>
                            <span className="live-badge">
                                <span className="live-dot"></span>
                                LIVE
                            </span>
                        </div>

                        {/* Empty State */}
                        <div className="leaderboard-list">
                            <div className="leaderboard-empty">
                                <span className="material-symbols-outlined empty-icon">leaderboard</span>
                                <p className="empty-title">No teams yet</p>
                                <p className="empty-desc">
                                    Teams will appear here once the quiz begins.
                                </p>
                            </div>
                        </div>

                        <div className="leaderboard-footer">
                            <p className="leaderboard-info">
                                Live updates from central console. Ranking is calculated per round.
                            </p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default BuzzerPage

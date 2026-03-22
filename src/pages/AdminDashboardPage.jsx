import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminDashboardPage.css'

function AdminDashboardPage() {
    const navigate = useNavigate()
    const [teams, setTeams] = useState([])
    const [newTeamName, setNewTeamName] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    // Load teams from localStorage on mount
    useEffect(() => {
        const isAdmin = localStorage.getItem('quizmaster_admin')
        if (!isAdmin) {
            navigate('/admin')
            return
        }

        const saved = localStorage.getItem('quizmaster_teams')
        if (saved) {
            setTeams(JSON.parse(saved))
        }
    }, [navigate])

    // Persist teams to localStorage
    const saveTeams = (updated) => {
        setTeams(updated)
        localStorage.setItem('quizmaster_teams', JSON.stringify(updated))
    }

    const addTeam = () => {
        const name = newTeamName.trim()
        if (!name) return
        if (teams.some(t => t.name.toLowerCase() === name.toLowerCase())) return

        const updated = [
            ...teams,
            { id: Date.now(), name, active: true, joinedAt: new Date().toISOString() }
        ]
        saveTeams(updated)
        setNewTeamName('')
    }

    const removeTeam = (id) => {
        saveTeams(teams.filter(t => t.id !== id))
    }

    const toggleTeamStatus = (id) => {
        saveTeams(teams.map(t => t.id === id ? { ...t, active: !t.active } : t))
    }

    const handleLogout = () => {
        localStorage.removeItem('quizmaster_admin')
        navigate('/admin')
    }

    const filteredTeams = teams.filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const activeCount = teams.filter(t => t.active).length
    const inactiveCount = teams.filter(t => !t.active).length

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <header className="admin-dash-header">
                <div className="admin-dash-header-left">
                    <a href="/" className="admin-dash-brand">QuizMaster Pro</a>
                    <span className="admin-dash-badge">ADMIN</span>
                </div>
                <div className="admin-dash-header-right">
                    <button className="admin-dash-icon-btn" aria-label="Notifications">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="admin-dash-icon-btn" aria-label="Settings">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <button className="admin-logout-btn" onClick={handleLogout}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>logout</span>
                        Logout
                    </button>
                </div>
            </header>

            <div className="admin-dash-body">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <nav className="admin-sidebar-nav">
                        <a href="#" className="admin-sidebar-link active">
                            <span className="material-symbols-outlined">groups</span>
                            Team Management
                        </a>
                        <a href="#" className="admin-sidebar-link disabled">
                            <span className="material-symbols-outlined">quiz</span>
                            Quiz Control
                            <span className="coming-soon-chip">Soon</span>
                        </a>
                        <a href="#" className="admin-sidebar-link disabled">
                            <span className="material-symbols-outlined">leaderboard</span>
                            Leaderboard
                            <span className="coming-soon-chip">Soon</span>
                        </a>
                        <a href="#" className="admin-sidebar-link disabled">
                            <span className="material-symbols-outlined">settings</span>
                            Settings
                            <span className="coming-soon-chip">Soon</span>
                        </a>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="admin-dash-main">
                    {/* Page Header */}
                    <div className="admin-page-header">
                        <div>
                            <h1 className="admin-page-title">Team Management</h1>
                            <p className="admin-page-subtitle">Add, remove, and manage participating teams.</p>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="admin-stats-row">
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrap stat-total">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{teams.length}</span>
                                <span className="stat-label">Total Teams</span>
                            </div>
                        </div>
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrap stat-active">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{activeCount}</span>
                                <span className="stat-label">Active</span>
                            </div>
                        </div>
                        <div className="admin-stat-card">
                            <div className="stat-icon-wrap stat-inactive">
                                <span className="material-symbols-outlined">cancel</span>
                            </div>
                            <div className="stat-info">
                                <span className="stat-number">{inactiveCount}</span>
                                <span className="stat-label">Inactive</span>
                            </div>
                        </div>
                    </div>

                    {/* Add Team Section */}
                    <div className="admin-add-team-section">
                        <div className="admin-add-team-row">
                            <div className="admin-add-input-wrap">
                                <span className="material-symbols-outlined admin-add-icon">group_add</span>
                                <input
                                    type="text"
                                    className="admin-add-input"
                                    placeholder="Enter new team name..."
                                    value={newTeamName}
                                    onChange={(e) => setNewTeamName(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && addTeam()}
                                />
                            </div>
                            <button className="admin-add-btn buzzer-gradient" onClick={addTeam}>
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                                Add Team
                            </button>
                        </div>
                    </div>

                    {/* Teams Table */}
                    <div className="admin-teams-section">
                        <div className="admin-teams-header">
                            <h2 className="admin-teams-title">
                                All Teams
                                <span className="team-count-badge">{filteredTeams.length}</span>
                            </h2>
                            <div className="admin-search-wrap">
                                <span className="material-symbols-outlined admin-search-icon">search</span>
                                <input
                                    type="text"
                                    className="admin-search-input"
                                    placeholder="Search teams..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {filteredTeams.length === 0 ? (
                            <div className="admin-empty-state">
                                <span className="material-symbols-outlined empty-teams-icon">group_off</span>
                                <p className="empty-teams-title">
                                    {teams.length === 0 ? 'No teams added yet' : 'No teams match your search'}
                                </p>
                                <p className="empty-teams-desc">
                                    {teams.length === 0
                                        ? 'Add a team above to get started.'
                                        : 'Try a different search term.'}
                                </p>
                            </div>
                        ) : (
                            <div className="admin-teams-list">
                                {/* Table Header */}
                                <div className="admin-team-row team-row-header">
                                    <span className="team-col team-col-rank">#</span>
                                    <span className="team-col team-col-name">Team Name</span>
                                    <span className="team-col team-col-status">Status</span>
                                    <span className="team-col team-col-actions">Actions</span>
                                </div>

                                {/* Team Rows */}
                                {filteredTeams.map((team, idx) => (
                                    <div
                                        key={team.id}
                                        className={`admin-team-row ${team.active ? '' : 'team-inactive'}`}
                                    >
                                        <span className="team-col team-col-rank">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="team-col team-col-name">
                                            <span className="team-avatar">
                                                {team.name.charAt(0).toUpperCase()}
                                            </span>
                                            {team.name}
                                        </span>
                                        <span className="team-col team-col-status">
                                            <span className={`status-pill ${team.active ? 'pill-active' : 'pill-inactive'}`}>
                                                <span className={`status-dot-sm ${team.active ? 'dot-active' : 'dot-inactive'}`}></span>
                                                {team.active ? 'Active' : 'Inactive'}
                                            </span>
                                        </span>
                                        <span className="team-col team-col-actions">
                                            <button
                                                className={`team-action-btn ${team.active ? 'btn-deactivate' : 'btn-activate'}`}
                                                onClick={() => toggleTeamStatus(team.id)}
                                                title={team.active ? 'Deactivate' : 'Activate'}
                                            >
                                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                                    {team.active ? 'pause_circle' : 'play_circle'}
                                                </span>
                                            </button>
                                            <button
                                                className="team-action-btn btn-remove"
                                                onClick={() => removeTeam(team.id)}
                                                title="Remove team"
                                            >
                                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                                            </button>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboardPage

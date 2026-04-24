import "./Dashboard.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">
          Welcome to EcoTrack Dashboard
        </h1>

        <p className="dashboard-subtitle">
          You are successfully authenticated.
        </p>
      </div>
    </div>
  );
}
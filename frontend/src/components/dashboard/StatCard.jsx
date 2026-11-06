
function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>
          <h3 className="stat-value">{value}</h3>
        </div>

        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      </div>

      <p className="stat-subtitle">{subtitle}</p>
    </article>
  );
}

export default StatCard;

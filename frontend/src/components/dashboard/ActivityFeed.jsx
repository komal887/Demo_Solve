
import { activityFeed } from "../../data/conflicts";

function ActivityFeed() {
  return (
    <section className="activity-section">
      <div className="section-heading">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest events across reconciliation workflows.</p>
        </div>
      </div>

      <div className="activity-list">
        {activityFeed.slice(0, 3).map((activity) => (
          <article className="activity-item" key={activity.id}>
            <div className={`activity-marker ${activity.type}`}>
              {activity.type === "warning"
                ? "!"
                : activity.type === "success"
                ? "✓"
                : "↗"}
            </div>

            <div className="activity-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <span>{activity.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;

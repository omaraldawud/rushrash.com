// src/components/functional/SafetyTips.jsx
//
import { safetyTips } from "../data/safetyTips";

export default function SafetyTips() {
  return (
    <div className="safety-tips">
      {safetyTips.map((tip) => (
        <div key={tip.id} className={`tip-card ${tip.severity}`}>
          <i className={`bi ${tip.icon}`}></i>
          <div>
            <h5>{tip.title}</h5>
            <p>{tip.tip}</p>
            {tip.link && <a href={tip.link}>Learn more</a>}
          </div>
        </div>
      ))}
    </div>
  );
}

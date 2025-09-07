import safety_tips_ds from "../../assets/data/cctv_safety_tips_ds";

const SafetyTipsSidebar = () => {
  return (
    <div className="safety-tips p-3 bg-light rounded">
      {safety_tips_ds.map((tip, index) => (
        <div key={index} className="tip-card mb-3 text-start">
          <p className="small mb-1">
            <i className={`${tip.safety_icon} fs-5 me-2`}></i>
            {tip.safety_tip}
          </p>
          {index < safety_tips_ds.length - 1 && (
            <hr className="border-danger border-2 opacity-90 w-50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SafetyTipsSidebar;

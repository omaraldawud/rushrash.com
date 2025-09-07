// /src/components/sections/SocialProfiels.jsx

//data structures
import companyInfo from "../../assets/data/rr_company_ds";

//
export default function SocialProfiles() {
  return (
    <div className="social-links d-flex align-items-center">
      {companyInfo.socialProfiles.map((profile, index) => (
        <a
          key={index}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link me-2 d-flex align-items-center justify-content-center"
          title={`Follow us on ${profile.name}`}
        >
          <i className={`bi ${profile.icon}`}></i>
        </a>
      ))}
    </div>
  );
}

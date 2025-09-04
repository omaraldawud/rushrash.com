// React, JSON-LD Scheme & Meta
import { Container } from "react-bootstrap";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "../schemas";
import SEOMeta from "../components/seo/SEOMeta";

// Images

// Functionl Components
import PageInfoBox from "../components/cards/PageInfoBox";
import FAQsSection from "../components/sections/FAQsSection";

//

const services = [
  {
    title: "Network Setup & Management",
    icon: "bi-hdd-network",
    description:
      "Reliable network infrastructure and monitoring for your business.",
  },
  {
    title: "Cybersecurity Solutions",
    icon: "bi-shield-lock-fill",
    description: "Protect your data and systems from cyber threats.",
  },
  {
    title: "Cloud Services & Backup",
    icon: "bi-cloud-upload-fill",
    description: "Secure cloud storage, backup, and migration services.",
  },
  {
    title: "IT Support & Helpdesk",
    icon: "bi-headset",
    description:
      "Fast, professional IT support, Our US-based team provides fast, professional technical support to ensure your operations run smoothly, 24/7.",
  },
  {
    title: "Software Development",
    icon: "bi-code-slash",
    description:
      "We deliver bespoke software solutions engineered with state-of-the-art frameworks like Node, React, Next.js, MERN stack to perfectly fit your unique business needs..",
  },
  {
    title: "CDN Setup",
    icon: "bi-diagram-3-fill",
    description:
      "Setup your content delivery network (CDN) A globally distributed network of servers that delivers web content quickly and efficiently to users based on their geographic location. .",
    detailed_desc:
      "To set up a Content Delivery Network (CDN), you first select a provider like Cloudflare, Amazon CloudFront, or Akamai that meets your geographic and performance needs. The core of the setup involves configuring your domain's DNS settings to route traffic through the CDN by creating a CNAME record that points your subdomain (e.g., cdn.yourdomain.com) to the provider's network. You then define which static assets—such as images, CSS, and JavaScript files—to offload from your origin server to the CDN's globally distributed edge servers. This process dramatically accelerates content delivery to users by serving it from a location geographically closest to them, while also reducing bandwidth costs and improving your site's resilience against traffic spikes and DDoS attacks.",
  },
];

export default function ITServices() {
  return (
    <>
      <div>
        {/* JSON-LD Breadcrumb for IT Services Page */}
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://rushrash.com" },
            {
              name: "IT Services",
              url: "https://rushrash.com/services/it-services",
            },
          ]}
        />

        {/* FAQ Schema for IT Services */}
        <FAQSchema
          questions={[
            {
              question: "What IT services do you offer?",
              answer:
                "We provide comprehensive IT solutions including network setup & management, cybersecurity, cloud hosting, CDN setup, IT support & helpdesk, and software development.",
            },
            {
              question: "Can you manage my company's network remotely?",
              answer:
                "Yes. Our certified IT technicians offer remote network management and monitoring to ensure uptime and security for your business.",
            },
            {
              question: "Do you provide cloud hosting and backup solutions?",
              answer:
                "Absolutely. We offer reliable cloud hosting, automated backups, and disaster recovery solutions tailored to your business needs.",
            },
            {
              question:
                "Do you provide software integration and custom development?",
              answer:
                "Yes. We build and integrate software solutions to streamline your business processes and enhance productivity.",
            },
            {
              question: "Is your IT support available on-demand?",
              answer:
                "Yes. Our helpdesk and IT support services are available to quickly resolve issues and minimize downtime.",
            },
          ]}
        />

        {/* Featured Services for IT */}
        <ServiceSchema
          services={[
            {
              name: "Network Setup & Management",
              description:
                "Design, install, and maintain secure and reliable networks for small to enterprise-level businesses.",
            },
            {
              name: "Cybersecurity Solutions",
              description:
                "Protect your data and systems with firewalls, endpoint protection, threat monitoring, and compliance support.",
            },
            {
              name: "Cloud Hosting & Backup Services",
              description:
                "Reliable cloud hosting with automated backups, disaster recovery, and scalable storage solutions.",
            },
            {
              name: "CDN Setup",
              description:
                "Improve website speed and global performance with content delivery network (CDN) setup and optimization.",
            },
            {
              name: "IT Support & Helpdesk",
              description:
                "On-demand support for troubleshooting, maintenance, and technical assistance for your IT infrastructure.",
            },
            {
              name: "Software Development & Integration",
              description:
                "Custom software development and integration services to streamline workflows and automate business processes.",
            },
          ]}
        />

        {/* SEO Meta for IT Services */}
        <SEOMeta
          title="IT Services & Solutions | Rushrash Inc."
          description="Rushrash Inc. offers professional IT services including network management, cybersecurity, cloud hosting, CDN setup, IT support, and custom software development for businesses of all sizes."
          keywords="IT services, network setup, cybersecurity, cloud hosting, CDN, IT support, helpdesk, software development, software integration, business IT solutions"
          url="https://rushrash.com/it-services"
          image="https://rushrash.com/wp-content/uploads/2023/05/rushrash-logo-23.png"
          twitterHandle="@RushrashInc"
        />
      </div>

      <Container fluid>
        <PageInfoBox pageType="itServices" />
      </Container>
      <div className="container my-5">
        <div className="row g-4">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <i
                    className={`bi ${service.icon} fs-1 mb-3 text-primary`}
                  ></i>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <FAQsSection faqServiceType="IT" />
      </div>
    </>
  );
}

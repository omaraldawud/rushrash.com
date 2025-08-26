import { useLocation } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import services_ds from "../../assets/data/services_ds";
import { Row, Col } from "react-bootstrap";

const ServicesCard = () => {
  const location = useLocation();
  const filteredServices = services_ds.filter((service) =>
    service.cardPages?.includes(location.pathname)
  );

  return (
    <Row>
      {filteredServices.map((service, index) => (
        <Col xs={12} sm={6} md={4} key={index} className="mb-4">
          <ServiceCard
            cardImage={service.cardImage}
            cardTitle={service.cardTitle}
            cardText={service.cardText}
            cardIcon={service.cardIcon}
            cardFooter={service.cardFooter}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ServicesCard;

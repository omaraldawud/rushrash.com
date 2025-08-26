//
//
import { Card } from "react-bootstrap";

/////////////////////////////////////
export default function ServiceCard({
  cardTitle,
  cardText,
  cardIcon,
  cardFooter = "Near ME Garage Door Services",
  cardImage = "/images/advanced-garage-door-inc-logo-tr.png",
}) {
  return (
    <Card className="h-100 shadow-sm">
      {cardImage && (
        <div style={{ height: "150px", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={cardImage}
            alt={cardTitle}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              padding: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>
      )}
      <hr />
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <i className="me-2 fs-1 text-secondary">{cardIcon} </i>
          <Card.Title as="h5" className="mb-0">
            {cardTitle}
          </Card.Title>
        </div>
        <Card.Text>
          {cardText}
          <br />
        </Card.Text>
      </Card.Body>
      <Card.Footer>{cardFooter}</Card.Footer>
    </Card>
  );
}

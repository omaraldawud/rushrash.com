function GarageImageIcon({ src, size = 24, color, alt = "Garage Doors" }) {
  const styles = {
    icon: {
      display: "inline-block",
      width: `${size}px`,
      height: `${size}px`,
      marginRight: "22px",
    },
    image: {
      alt: { alt },
      width: "100%",
      height: "100%",
      objectFit: "contain",
      ...(color === "white" && { filter: "brightness(0) invert(2)" }),
    },
  };

  return (
    <div style={styles.icon}>
      <img src={src} alt={alt} style={styles.image} />
    </div>
  );
}

export default GarageImageIcon;

// Usage:

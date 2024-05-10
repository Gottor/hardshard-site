export const Hunger = (props) => {
  const value = parseFloat(props.value);
  const fullHungerCount = Math.floor(value)
  const halfHungerVisible = value - fullHungerCount >= 0.5; 
  const renderFullHunger = () => {
    const fullHungerImages = [];
    for (let i = 0; i < fullHungerCount; i++) {
      fullHungerImages.push(
        <img
          key={`full_hunger_${i}`}
          src="/img/textures/item/full_hunger.png"
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
        />
      );
    }
    return fullHungerImages;
  };
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        ...props.style
      }}
    >
      <div
        style={{
          display: "inline",
          minWidth: "1.75rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
        }}
      >
        {halfHungerVisible && (
          <img
          src="/img/textures/item/half_hunger.png"
          style={{
            verticalAlign: "top",
            width: "1.75rem",
            imageRendering: "pixelated",
          }}
          />
        )}
        {renderFullHunger()}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: props.fontSize,
          lineHeight: props.fontSize,
          fontWeight: "var(--ifm-font-weight-semibold)",
          color: props.color,
        }}
      >
        {props.value}
      </p>
    </div>
  );
}
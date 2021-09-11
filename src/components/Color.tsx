export interface ColorProps {
  name: string;
  hex: string;
}

export function Color(props: ColorProps) {
  return (
    <div
      style={{
        width: 120,
        height: 120,
        margin: 32,
        position: "relative",
        borderRadius: "50%",
        backgroundColor: props.hex,
        textTransform: "capitalize",
        boxShadow: "0 0 1px #000",
      }}
    >
      <span
        style={{
          fontSize: 10,
          bottom: -16,
          left: 0,
          right: 0,
          margin: "auto",
          textAlign: "center",
          position: "absolute",
        }}
      >
        {props.name}
      </span>
      <span
        style={{
          fontSize: 10,
          top: -16,
          left: 0,
          right: 0,
          margin: "auto",
          textAlign: "center",
          position: "absolute",
        }}
      >
        {props.hex}
      </span>
    </div>
  );
}

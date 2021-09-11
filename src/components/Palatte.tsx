import { Color } from "./Color";

export interface PaletteProps {
  name: string;
  colors: Record<string, string>;
}

export function Palette(props: PaletteProps) {
  const colorsInArray = Object.keys(props.colors).map((x) => ({
    name: x,
    hex: props.colors[x],
  }));

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {props.name}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {colorsInArray.map((color) => (
          <Color key={`${color.name}_${color.hex}`} {...color} />
        ))}
      </div>
    </div>
  );
}

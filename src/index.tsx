import ReactDOM from "react-dom";
import COLOR_SCHEMA from "../data/color_schema.json";
import { Palette } from "./components/Palatte";

function App() {
  const SCHEMA = COLOR_SCHEMA as unknown as Record<
    string,
    Record<string, string>
  >;

  return (
    <>
      {Object.keys(SCHEMA).map((name) => {
        return (
          <>
            <Palette name={name} colors={SCHEMA[name]} />
            <hr />
          </>
        );
      })}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

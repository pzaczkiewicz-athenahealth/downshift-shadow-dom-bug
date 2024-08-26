import DownshiftSelect from "./DownshiftSelect";
import LoremIpsum from "./LoremIpsum";
import ReactShadowRoot from "react-shadow-root";

export default function Home() {
  return (
    <>
      <LoremIpsum />
      <div>
        <ReactShadowRoot>
          <DownshiftSelect />
        </ReactShadowRoot>
      </div>
    </>
  );
}

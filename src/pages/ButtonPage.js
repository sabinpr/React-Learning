import { GoBellFill, GoDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-1" onClick={handleClick}>
          {" "}
          <GoBellFill /> Success{" "}
        </Button>
      </div>
      <div>
        <Button primary outline>
          {" "}
          <GoDownload /> Primary{" "}
        </Button>
      </div>
      <div>
        <Button secondary>
          {" "}
          <GoDatabase /> Secondary{" "}
        </Button>
      </div>
      <div>
        <Button warning rounded>
          {" "}
          Warning{" "}
        </Button>
      </div>
      <div>
        <Button danger outline>
          {" "}
          Danger{" "}
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;

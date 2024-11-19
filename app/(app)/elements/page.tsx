import { ElementsBar } from "./components/elements-bar";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <ElementsBar />
      </div>
    </div>
  );
}

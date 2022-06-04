import { Notification } from "./components/Notification";
import { Colours } from "./components/Colours";
import { ContainerAndSpacing } from "./components/ContainerAndSpacing";

export default function App() {
  return (
    <div>
      <Notification />
      <Colours />
      <ContainerAndSpacing />
    </div>
  );
}

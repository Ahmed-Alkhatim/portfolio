import { Header } from "@/components";
import MyInfo from "./MyInfo";
import Hello from "./Hello";
import Tools from "./Tools";

export default function Home() {
  return (
    <div className="pb-[200px] space-y-[64px]">
      <Header />
      <MyInfo/>
      <Hello />
      <Tools />
    </div>
  );
}

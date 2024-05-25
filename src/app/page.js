import { Header } from "@/components";
import MyInfo from "./MyInfo";

export default function Home() {
  return (
    <div className="pb-[200px]">
      <Header />
      <div className="mt-[64px]">
        <MyInfo/>
      </div>
    </div>
  );
}

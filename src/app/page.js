import { Footer, Header } from "@/components";
import MyInfo from "./MyInfo";
import Hello from "./Hello";
import Tools from "./Tools";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="space-y-[64px]">
      <Header />
      <MyInfo/>
      <Hello />
      <Tools />
      <div>
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

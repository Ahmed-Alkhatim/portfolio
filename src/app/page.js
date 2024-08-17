import { Container, Footer, Header } from "@/components";
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
        <Container>
        <div className="desk:flex justify-between items-center">
          <MyInfo/>
          <div className="lap:flex lap:mt-20 lap:space-x-10">
              <Hello />
              <Tools />
          </div>
        </div>
        </Container>
      <div>
        <About />
        <Work />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

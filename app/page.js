import { Topnav } from "@/components/component/topnav";
import Evals from "./evals/page";
import About from "./about/page";
import Content from "./content/page";
import { Footer } from "../components/component/footer";
import Findme from "./contact/page";





export default function Home() {
  return (
    <div>
      <Topnav/>
    <Evals/>
    <About/>
    <Content/>
    <Findme/>
    <Footer/>
    </div>
  );
}

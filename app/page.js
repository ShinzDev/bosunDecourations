import { Topnav } from "@/components/component/topnav";
import Evals from "./evals/page";
import About from "./about/page";
import Content from "./content/page";
import { Footer } from "../components/component/footer";





export default function Home() {
  return (
    <div>
      <Topnav/>
    <Evals/>
    <About/>
    <Content/>
    <Footer/>
    </div>
  );
}

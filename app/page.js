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


// Make it better than the last time 
// connect the dots 
// having a unique skillset that can't be copied and also stand the test of time 
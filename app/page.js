import { Topnav } from "@/components/component/topnav";
import { Mansory } from "@/components/component/mansory";
import Evals from "./evals/page";
import About from "./about/page";
// import './top.css'




export default function Home() {
  return (
    <div>
      <Topnav/>
    <Evals/>
    <About/>
    <Mansory/>
    </div>
  );
}

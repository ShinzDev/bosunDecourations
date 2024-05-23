import { Blog } from "@/components/component/blog";
import { Footer } from "@/components/component/footer";
import { Topblog } from "@/components/component/topblog";

export default function Nextpage() {
    return(
        <div>
  
            <Topblog/>
            <Blog/>
            <Footer/>
        </div>
    )
}
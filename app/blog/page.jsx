import { Blog } from "@/components/component/blog";
import { Footer } from "@/components/component/footer";
import { Topnav } from "@/components/component/topnav";

export default function Nextpage() {
    return(
        <div>
            <Topnav/>
            <Blog/>
            <Footer/>
        </div>
    )
}
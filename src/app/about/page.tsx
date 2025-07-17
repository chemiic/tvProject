
import {Menu} from "@/components/Menu";
import { ShadowBox } from '@/shared/ShadowBox';


export default function AboutPage() {
    return (
        <div style={{ width: '900px', height: '100vh' }} className={"flex flex-col mt-[60px] gap-2.5"}>
            <Menu />
            <ShadowBox>
                <p>Pushing the limits of media by creating content that stands out with a style that’s all our own. Whether it’s for artists, athletes, or brands, we capture high-impact visuals that help elevate your online presence and connect with your audience in a creative way.</p>
            </ShadowBox>
        </div>
    );
}

import { getPosts } from "@/features/posts/actions"
import LayoutHome from "./components/layout"
import BannerHome from "./components/banner";
import ListPost from "./components/list-posts";
export default async function HomePage() {
    const { posts_emphasis, posts_standard } = await getPosts();
    return (
        <LayoutHome>
            <BannerHome data={posts_emphasis} />
            <ListPost data={posts_standard} />
        </LayoutHome>
    )
}
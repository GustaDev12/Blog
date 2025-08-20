import { posts } from "@/mocks/posts"

export async function getPosts() {
    const posts_emphasis = posts.filter(post => post.type === "emphasis");
    const posts_standard = posts.filter(post => post.type === "standard");
    return { posts_emphasis, posts_standard }
}

export async function getPostById(id: string) {
    const post = posts.find(post => post.id === id);
    return post;
}
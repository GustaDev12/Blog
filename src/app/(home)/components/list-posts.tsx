import CardPost from "./cards";

export default function ListPost({ data }: { data: IPosts[] }) {

    return (
        <section>
            <h1 className="text-2xl font-inter font-extrabold text-text-2 mb-5">Latest Post</h1>
            <main className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.map((post) => (
                    <CardPost key={post.id} post={post} />
                ))}
            </main>
        </section>
    )
}
import { getPostById } from "@/features/posts/actions";
import Image from "next/image";
import LayoutPost from "./components/layout";
import { Metadata } from "next";

export async function generateMetadata({
    params
}: {
    params: { id: string }
}): Promise<Metadata> {
    const params_data = await params;
    const data = await getPostById(params_data.id);

    if (!data) {
        return {
            title: 'Post não encontrado',
            description: 'O post solicitado não foi encontrado.',
        };
    }

    return {
        title: data.meta.seo_title,
        description: data.meta.seo_description,
        authors: [{ name: data.author.name }],
        category: data.category,
        keywords: [data.category, data.title],
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `/posts/${params_data.id}`,
        },
    }
}


export default async function PostPage({ params }: { params: { id: string } }) {
    const params_data = await params
    const data = await getPostById(params_data.id)

    if (!data) return null;

    return (
        <LayoutPost>
            <div>
                <div className="bg-badge w-[100px] text-center text-white py-1.5 text-sm font-work-sans font-medium rounded-sm">
                    {data?.category}
                </div>
                <h1 className="mt-4 text-3xl text-text-2 font-bold">{data.title}</h1>
                <div className="mt-4 flex items-center space-x-2">
                    <Image
                        src={data.author.avatar_url || "/authors/undefined.png"}
                        width={32}
                        height={32}
                        alt="Avatar Image"
                    />
                    <span className='text-text-3 font-work-sans font-medium text-lg'>{data.author.name}</span>
                    <span className='text-text-3 font-work-sans font-normal text-md'>{new Date(data.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
                <main className="mt-[32px] space-y-3">
                    {data.content_blocks.map((item, index) => {
                        if (item.type === 'image' && item.image_url) {
                            return (
                                <div key={index}>
                                    <Image
                                        src={item.image_url}
                                        alt="Imagem"
                                        width={800}
                                        height={462}
                                    />
                                </div>
                            )
                        } else if (item.type === "paragraph") {
                            return (
                                <p key={index} className="mt-4 text-text-1 font-source-serif-4 font-normal text-lg">{item.content}</p>
                            )
                        } else if (item.type === "heading") {
                            return (
                                <h2 key={index} className="mt-4 text-text-1 font-work-sans font-bold text-2xl">{item.content}</h2>
                            )
                        } else if (item.type === "quote") {
                            return (
                                <blockquote key={index} className="mt-4 text-text-1 font-source-serif-4 font-normal text-lg">
                                    {item.content}
                                </blockquote>
                            )
                        } else if (item.type === "phrase") {
                            return (
                                <div key={index} className="bg-footer p-5 rounded-lg text-xl border-l-3 border-border font-source-serif-4 text-text-2">
                                    {item.content}
                                </div>
                            )
                        }


                    })}
                </main>
            </div>
        </LayoutPost>
    )
}
"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
export default function CardPost({ post }: { post: IPosts }) {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/post/${post.id}`)}
            className="cursor-pointer p-4 border-1 rounded-xl border-border max-w-[392px] max-h-[488px]">
            <header className="w-full mb-4">
                <Image
                    src={post.image}
                    width={360}
                    height={240}
                    alt={post.title}
                />
            </header>
            <main className="flex flex-col mb-5">
                <div className="bg-badge/5 text-badge w-[100px] mb-2 text-center p-1 rounded-md font-work-sans font-medium text-sm">
                    {post.category}
                </div>
                <h1 className="text-text-2 text-xl font-work-sans font-semibold line-clamp-3 max-h-[90px] leading-tight">
                    {post.title}
                </h1>
            </main>
            <footer className="w-full flex items-center">
                <div className="flex items-center space-x-3">
                    <Image
                        src={post.author.avatar_url}
                        width={36}
                        height={36}
                        alt={post.author.name}
                    />
                    <span className='text-text-3 font-work-sans font-medium text-base'>{post.author.name}</span>
                    <span className='text-text-3 font-work-sans font-normal text-sm'>•</span>
                    <span className='text-text-3 font-work-sans font-normal text-sm'>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
            </footer>
        </div>
    )
}
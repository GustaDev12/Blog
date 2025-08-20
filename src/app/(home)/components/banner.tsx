"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BannerHome({ data }: { data: IPosts[] }) {
    const router = useRouter();
    return (
        <div className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] mb-8">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper h-full"
            >
                {data.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => { router.push('/post/' + post.id) }}
                            className="cursor-pointer relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                            <Image
                                src={post.image}
                                width={1000}
                                height={600}
                                quality={100}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]"></div>

                            <div className='absolute bottom-4 left-4 right-4 md:bottom-6 md:left-8 md:right-8 lg:bottom-8 lg:left-16 lg:right-16 z-10'>
                                <div className='bg-background py-4 px-4 md:py-6 md:px-6 lg:py-8 lg:px-8 rounded-xl shadow-lg max-w-full md:max-w-[500px] lg:max-w-[600px]'>
                                    <div className='bg-badge inline-block px-2 py-1 md:px-3 md:py-1 text-white font-work-sans font-medium text-xs md:text-sm rounded-md'>{post.category}</div>
                                    <h1 className='text-text-2 font-work-sans font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 md:mt-3 lg:mt-4 leading-tight line-clamp-2'>
                                        {post.title}
                                    </h1>
                                    <div className='flex items-center space-x-2 md:space-x-3 mt-3 md:mt-4 lg:mt-6'>
                                        <Image
                                            src={post.author.avatar_url}
                                            alt={post.author.name}
                                            width={32}
                                            height={32}
                                            className="rounded-full md:w-9 md:h-9 lg:w-9 lg:h-9"
                                        />
                                        <span className='text-text-3 font-work-sans font-medium text-sm md:text-base'>{post.author.name}</span>
                                        <span className='text-text-3 font-work-sans font-normal text-xs md:text-sm'>•</span>
                                        <span className='text-text-3 font-work-sans font-normal text-xs md:text-sm'>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

interface IPosts {
    id: string
    type: 'emphasis' | 'standard'
    image: string
    category: string
    title: string
    description: string

    slug: string
    tags: string[]

    author: {
        avatar_url: string
        name: string
    }

    content_blocks: {
        type: 'paragraph' | 'image' | 'heading' | 'quote' | 'phrase'
        content: string
        image_url?: string
        alt?: string
        caption?: string
    }[]

    meta: {
        seo_title?: string
        seo_description?: string
        og_image?: string
    }

    createdAt: Date
    updatedAt: Date
}
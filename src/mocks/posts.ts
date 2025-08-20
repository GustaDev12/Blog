export const posts: IPosts[] = [
    {
        id: "1",
        type: 'emphasis',
        image: "/posts/1/card-image.png",
        category: "Technology",
        title: "Artificial Intelligence: Reshaping the Future of Work",
        description: "Explore how AI is revolutionizing industries, creating new opportunities, and transforming the way we approach problem-solving in the modern workplace.",
        slug: "artificial-intelligence-reshaping-future-work",
        tags: ["artificial-intelligence", "future-work", "automation", "innovation"],
        author: {
            avatar_url: "/authors/Jason-Francisco.png",
            name: "John Doe"
        },
        content_blocks: [
            {
                type: "image",
                content: "",
                image_url: "/posts/1/image-post-1.png",
                alt: "Castle at night",
                caption: "Modern workplace transformation"
            },

            {
                type: "paragraph",
                content: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels."
            },
            {
                type: "paragraph",
                content: "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect."
            },
            {
                type: "heading",
                content: "The Benefits of Traveling"
            },
            {
                type: "quote",
                content: "Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/1/image-post-2.png",
                alt: "Castle at night",
                caption: "Modern workplace transformation"
            },
            {
                type: "phrase",
                content: "“Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.“",
            },
        ],
        meta: {
            seo_title: "Artificial Intelligence: Reshaping the Future of Work",
            seo_description: "Explore how AI is revolutionizing industries, creating new opportunities, and transforming the way we approach problem-solving in the modern workplace.",
            og_image: "/posts/1/card-image.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        type: 'emphasis',
        image: "/posts/2.png",
        category: "Design",
        title: "The Psychology of Color in User Interface Design",
        description: "Discover how color choices influence user behavior, emotions, and decision-making in digital products. Learn practical tips for creating more effective UI designs.",
        slug: "psychology-color-user-interface-design",
        tags: ["ui-design", "color-psychology", "user-experience", "design-principles"],
        author: {
            avatar_url: "/authors/Jason-Francisco.png",
            name: "John Doe"
        },
        content_blocks: [
            {
                type: "paragraph",
                content: "Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, guide attention, and influence user behavior in ways that go far beyond mere aesthetics."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/2.png",
                alt: "Color psychology in UI design",
                caption: "Understanding color impact on user experience"
            },
            {
                type: "paragraph",
                content: "Research shows that users form opinions about websites within 50 milliseconds, and color plays a crucial role in this split-second judgment."
            },
        ],

        meta: {
            seo_title: "The Psychology of Color in User Interface Design",
            seo_description: "Discover how color choices influence user behavior, emotions, and decision-making in digital products. Learn practical tips for creating more effective UI designs.",
            og_image: "/posts/2.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        type: 'standard',
        image: "/posts/3.png",
        category: "Business",
        title: "Building Sustainable Startups in the Digital Age",
        description: "Learn essential strategies for creating environmentally conscious businesses that thrive in today's competitive market while making a positive impact.",
        slug: "building-sustainable-startups-digital-age",
        tags: ["sustainability", "startups", "green-business", "entrepreneurship"],
        author: {
            avatar_url: "/authors/Elizabeth-Slavin.png",
            name: "Elizabeth Slavin"
        },
        content_blocks: [
            {
                type: "paragraph",
                content: "The concept of sustainability in business is no longer just a trend—it's becoming a necessity for long-term success and social responsibility."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/3.png",
                alt: "Sustainable business practices",
                caption: "Green innovation in modern startups"
            },
            {
                type: "paragraph",
                content: "Today's consumers are increasingly conscious about the environmental impact of their purchasing decisions, creating new opportunities for eco-friendly businesses."
            },
        ],

        meta: {
            seo_title: "Building Sustainable Startups in the Digital Age",
            seo_description: "Learn essential strategies for creating environmentally conscious businesses that thrive in today's competitive market while making a positive impact.",
            og_image: "/posts/3.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        type: 'standard',
        image: "/posts/4.png",
        category: "Health & Wellness",
        title: "Mental Health in Remote Work: Finding Balance",
        description: "Practical strategies for maintaining mental wellness while working from home. Discover techniques to combat isolation and boost productivity.",
        slug: "mental-health-remote-work-finding-balance",
        tags: ["mental-health", "remote-work", "wellness", "work-life-balance"],
        author: {
            avatar_url: "/authors/Tracey-Wilson.png",
            name: "Tracey Wilson"
        },
        content_blocks: [
            {
                type: "paragraph",
                content: "Remote work has fundamentally changed how we approach mental health and wellness in professional settings, requiring new strategies and awareness."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/4.png",
                alt: "Remote work mental health",
                caption: "Creating healthy boundaries in home offices"
            },
            {
                type: "paragraph",
                content: "The blurred lines between home and office can lead to burnout, but with the right techniques, remote work can actually improve work-life balance."
            },
        ],

        meta: {
            seo_title: "Mental Health in Remote Work: Finding Balance",
            seo_description: "Practical strategies for maintaining mental wellness while working from home. Discover techniques to combat isolation and boost productivity.",
            og_image: "/posts/4.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "5",
        type: 'standard',
        image: "/posts/5.png",
        category: "Travel",
        title: "Digital Nomad Lifestyle: Working While Exploring",
        description: "A comprehensive guide to becoming a successful digital nomad. Learn about the best destinations, tools, and strategies for location-independent work.",
        slug: "digital-nomad-lifestyle-working-while-exploring",
        tags: ["digital-nomad", "remote-work", "travel", "lifestyle"],
        author: {
            avatar_url: "/authors/Jason-Francisco.png",
            name: "John Doe"
        },
        content_blocks: [
            {
                type: "paragraph",
                content: "The digital nomad lifestyle represents a fundamental shift in how we think about work, combining professional growth with personal adventure and cultural exploration."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/5.png",
                alt: "Digital nomad workspace",
                caption: "Working from anywhere in the world"
            },
            {
                type: "paragraph",
                content: "With the right tools and mindset, location independence can lead to increased productivity, creativity, and life satisfaction while building a global network."
            },
        ],

        meta: {
            seo_title: "Digital Nomad Lifestyle: Working While Exploring",
            seo_description: "A comprehensive guide to becoming a successful digital nomad. Learn about the best destinations, tools, and strategies for location-independent work.",
            og_image: "/posts/5.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "6",
        type: 'standard',
        image: "/posts/6.png",
        category: "Finance",
        title: "Cryptocurrency Investment Strategies for Beginners",
        description: "Navigate the complex world of digital currencies with confidence. Learn fundamental analysis, risk management, and portfolio diversification techniques.",
        slug: "cryptocurrency-investment-strategies-beginners",
        tags: ["cryptocurrency", "investment", "blockchain", "finance"],
        author: {
            avatar_url: "/authors/Eric-Smith.png",
            name: "Eric Smith"
        },
        content_blocks: [
            {
                type: "paragraph",
                content: "Cryptocurrency has evolved from a niche technology to a mainstream investment option, but success requires understanding both opportunities and risks."
            },
            {
                type: "image",
                content: "",
                image_url: "/posts/6.png",
                alt: "Cryptocurrency trading analysis",
                caption: "Understanding digital asset markets"
            },
            {
                type: "paragraph",
                content: "Smart investors approach crypto with a long-term perspective, focusing on fundamental analysis rather than short-term price movements."
            },
        ],

        meta: {
            seo_title: "Cryptocurrency Investment Strategies for Beginners",
            seo_description: "Navigate the complex world of digital currencies with confidence. Learn fundamental analysis, risk management, and portfolio diversification techniques.",
            og_image: "/posts/6.png",
        },

        createdAt: new Date(),
        updatedAt: new Date(),
    },
]

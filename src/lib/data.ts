export const services = [
    {
        id: 1,
        title: "Creative Agency",
        description: "Scale your brand with data-driven marketing strategies designed to increase visibility, audience engagement, and sustainable conversions across all major platforms.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        featuresTitle: "Includes:",
        features: [
            "Social Media Marketing",
            "Performance Marketing",
            "Brand Strategy & Positioning",
            "Content-Led Growth Campaigns",
            "Lead generations",
            "UGC content",
            "Artist/Model Management"
        ],
        events: [
            "Brand Launch Campaigns",
            "Influencer Meetups",
            "Digital Activation Events"
        ],
        photos: [
            "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
            "https://images.unsplash.com/photo-1551434678-e076c223a692",
            "https://images.unsplash.com/photo-1552664730-d307ca884978",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            "https://images.unsplash.com/photo-1512758684632-4fb32fb97914"
        ]
    },
    {
        id: 2,
        title: "Videography & Photography",
        description: "We capture high-quality visual stories that blend raw creativity with technical excellence to deliver impactful, platform-ready content for global brands.",
        image: "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4",
        featuresTitle: "Ideal for:",
        features: [
            "Brands & Businesses",
            "Marketing Brands & Businesses",
            "Social Media, Ads & Digital Platforms",
            "Corporate & Promotional Content",
            "Weddings & Personal Photography"
        ],
        events: [
            "Wedding Shoots",
            "Commercial Sets",
            "Corporate Headshots",
            "Product Launches"
        ],
        photos: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            "https://images.unsplash.com/photo-1520697830639-5a507e155b9a",
            "https://images.unsplash.com/photo-1554048612-387768052bf7",
            "https://images.unsplash.com/photo-1511285560982-1356c11d4606",
            "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
            "https://images.unsplash.com/photo-1582719478250-c8940cebf8ce"
        ]
    },
    {
        id: 3,
        title: "Content Production",
        description: "Our team provides end-to-end content creation tailored for modern digital platforms, YouTube series, and cinematic storytelling that drives real engagement.",
        image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf",
        featuresTitle: "Focus Areas:",
        features: [
            "YouTube Content",
            "Short-form & Long-form Videos",
            "Story-based Brand Content",
            "Digital Films & Creative Projects"
        ],
        events: [
            "Film Production",
            "YouTube Series Shoots",
            "Podcast Recording",
            "Documentary Filming"
        ],
        photos: [
            "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b",
            "https://images.unsplash.com/photo-1585856902403-bfb7e5e3478d",
            "https://images.unsplash.com/photo-1590845947698-8924d7409b56",
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c",
            "https://images.unsplash.com/photo-1594910243171-46ab4b574044",
            "https://images.unsplash.com/photo-1518131672697-613becd4fab5"
        ]
    },
    {
        id: 4,
        title: "Event Management",
        description: "We deliver comprehensive event planning and execution designed to create high-impact experiences from concept and production to flawless on-ground delivery.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
        featuresTitle: "Includes:",
        features: [
            "Corporate Events",
            "College Festivals",
            "Brand Activations",
            "Concerts & Gigs",
            "Private Parties"
        ],
        events: [
            "Music Festivals",
            "Tech Conferences",
            "Fashion Shows",
            "Corporate Retreats"
        ],
        photos: [
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
            "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9",
            "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14",
            "https://images.unsplash.com/photo-1514525253440-b393452e3383",
            "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
        ]
    },
    {
        id: 5,
        title: "Portfolio Shoots",
        description: "Professionally curated portfolio sessions for models and entrepreneurs designed to enhance personal branding, professional growth, and digital presence across industries.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
        featuresTitle: "Perfect for:",
        features: [
            "Models & Creators",
            "Business Owners",
            "Personal Branding",
            "Corporate Profiles & Online Presence"
        ],
        events: [
            "Model Portfolio Sessions",
            "Executive Branding Shoots",
            "Social Media Content Days"
        ],
        photos: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            "https://images.unsplash.com/photo-1521119989659-a83eee488058"
        ]
    },
];

const BASE_EVENT_URL = "https://pub-960024d73c05488896944e01057e8018.r2.dev/events";

export const events = [
    {
        id: 1,
        title: "Aakasam Dhati Vastava Pre-Release",
        shortDescription: "A grand movie pre-release event for the upcoming feature Aakasam Dhati Vastava.",
        fullDescription: "End-to-end production management for the pre-release event, including stage setup, lighting, and guest coordination to build maximum buzz for the film launch.",
        image: `${BASE_EVENT_URL}/Aakasam_dhati_vastava/2.JPG`,
        date: "Dec 2023",
        location: "Prasad's Labs, Hyderabad",
        gallery: [
            `${BASE_EVENT_URL}/Aakasam_dhati_vastava/1.JPG`,
            `${BASE_EVENT_URL}/Aakasam_dhati_vastava/2.JPG`
        ]
    },
    {
        id: 2,
        title: "Dhandiya Dhamaal Night",
        shortDescription: "A vibrant celebratory evening of Dhandiya with high-energy music and traditional dance.",
        fullDescription: "Managed full event logistics for the Dhandiya Dhamaal, featuring immersive sound systems, festive decor, and large-scale crowd management for a night of cultural celebration.",
        image: `${BASE_EVENT_URL}/Dhandiya_dhamaal/1.jpg`,
        date: "Oct 2023",
        location: "Convention Center, Hyderabad",
        gallery: [
            `${BASE_EVENT_URL}/Dhandiya_dhamaal/1.jpg`,
            `${BASE_EVENT_URL}/Dhandiya_dhamaal/2.JPG`,
            `${BASE_EVENT_URL}/Dhandiya_dhamaal/3.jpg`
        ]
    },
    {
        id: 3,
        title: "Family Star Movie Launch",
        shortDescription: "Promotional event for the major feature film 'Family Star' featuring the lead cast.",
        fullDescription: "Coordinated the promotional tour stop and pre-release event for Family Star, focusing on creating high-impact visual moments for social media and press coverage.",
        image: `${BASE_EVENT_URL}/Family_star/3.JPG`,
        date: "March 2024",
        location: "Gachibowli Stadium",
        gallery: [
            `${BASE_EVENT_URL}/Family_star/1.JPG`,
            `${BASE_EVENT_URL}/Family_star/2.JPG`,
            `${BASE_EVENT_URL}/Family_star/3.JPG`
        ]
    },
    {
        id: 5,
        title: "Love Mougli Pre-Release",
        shortDescription: "Youthful and energetic pre-release event for the movie Love Mougli.",
        fullDescription: "Created a trendy, high-energy atmosphere for the Love Mougli launch, utilizing creative lighting and interactive stage elements to engage the target demographic.",
        image: `${BASE_EVENT_URL}/Love_Mougli/2.JPG`,
        date: "Feb 2024",
        location: "T-Hub Amphitheater",
        gallery: [
            `${BASE_EVENT_URL}/Love_Mougli/1.JPG`,
            `${BASE_EVENT_URL}/Love_Mougli/2.JPG`
        ]
    },
    {
        id: 6,
        title: "Navaratri Nirvana Celebrations",
        shortDescription: "9 nights of spiritual and cultural celebration with traditional festive vibes.",
        fullDescription: "Orchestrated the large-scale Navaratri Nirvana event, managing vendor coordination, security, and the authentic festive ambiance for thousands of participants.",
        image: `${BASE_EVENT_URL}/Navaratri_nirvana/1.JPG`,
        date: "Oct 2023",
        location: "Celebration Grounds, Hyderabad",
        gallery: [
            `${BASE_EVENT_URL}/Navaratri_nirvana/1.JPG`,
            `${BASE_EVENT_URL}/Navaratri_nirvana/2.JPG`
        ]
    },
    {
        id: 7,
        title: "Rythmflix Musical Night",
        shortDescription: "A cinematic musical experience featuring upcoming talent and live orchestra.",
        fullDescription: "Engineered a high-fidelity musical production under the Rythmflix banner, blending live performance with synchronized visual projections for a premium audience experience.",
        image: `${BASE_EVENT_URL}/Rythmflix/1.JPG`,
        date: "Jan 2024",
        location: "Ravindra Bharathi",
        gallery: [
            `${BASE_EVENT_URL}/Rythmflix/1.JPG`,
            `${BASE_EVENT_URL}/Rythmflix/2.JPG`,
            `${BASE_EVENT_URL}/Rythmflix/3.JPG`
        ]
    },
    {
        id: 8,
        title: "Slum Dog Husband Pre-Release",
        shortDescription: "The energetic pre-launch celebration for the movie Slum Dog Husband.",
        fullDescription: "Successfully managed a massive press and fan event for Slum Dog Husband, ensuring flawless audio delivery and stage coordination for the extensive cast and crew.",
        image: `${BASE_EVENT_URL}/Slum_dog_husband/1.JPG`,
        date: "July 2023",
        location: "Cyber Convensions",
        gallery: [
            `${BASE_EVENT_URL}/Slum_dog_husband/1.JPG`,
            `${BASE_EVENT_URL}/Slum_dog_husband/2.JPG`,
            `${BASE_EVENT_URL}/Slum_dog_husband/3.JPG`
        ]
    }, {
        id: 4,
        title: "Hand NGO",
        shortDescription: "A meaningful NGO event dedicated to community support and charity fundraising.",
        fullDescription: "Produced a professional and heartwarming gala for Hand NGO, ensuring seamless AV and seating arrangements for donors and community leaders.",
        image: `${BASE_EVENT_URL}/Hand/3.JPG`,
        date: "Nov 2023",
        location: "Novotel Ballroom",
        gallery: [
            `${BASE_EVENT_URL}/Hand/1.JPG`,
            `${BASE_EVENT_URL}/Hand/2.JPG`,
            `${BASE_EVENT_URL}/Hand/3.JPG`
        ]
    }
];

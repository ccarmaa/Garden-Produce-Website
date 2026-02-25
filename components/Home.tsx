'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react';

export default function Home() {

    /* For Shop By Category:
       Change values here to add a category or update labels, links, and images */
    const categories = [
        { id: 1, href: '/shop?category=Vegetables', label: 'Vegetables', image: '/seed.jpg' },
        { id: 2, href: '/shop?category=Flowers', label: 'Flowers', image: '/seed.jpg' },
        { id: 3, href: '/shop?category=Plants', label: 'Plants', image: '/seed.jpg' },
        { id: 4, href: '/shop', label: 'Seeds', image: '/seed.jpg' },
        { id: 5, href: '/shop', label: 'All Products', image: '/seed.jpg' }
    ];
    
    // temporary; replace with actual posts pulled from database
    const fillerString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. \
            Curabitur laoreet sed lectus accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt.';    
    
    const medString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt. \
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt.';
    
    const shortString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium a ligula at vestibulum. Curabitur laoreet sed lectus accumsan tincidunt.';
    
    const blogPosts = [
        { id: 1, href: '/shop', image: '/flowers.jpg', title: 'Blog Post 1', date: '01/22/2026', body: medString},
        { id: 2, href: '/shop', image: '/flowers.jpg', title: 'Blog Post 2', date: '02/04/2026', body: shortString},
        { id: 3, href: '/shop', image: '/flowers.jpg', title: 'Blog Post 3', date: '02/15/2026', body: medString},
        { id: 4, href: '/shop', image: '/flowers.jpg', title: 'Blog Post 4', date: '02/26/2026', body: fillerString}
    ]


  return (
    <main>
        {/* Home banner */}
        <div className="relative flex items-center h-[40vh]">
            <div className="z-1">
                <Image src="/flowers.jpg" alt="image of flowers" fill style={{objectFit: 'cover'}} />
            </div>
            <div className="z-2 w-[35vw] h-7/10 ml-[5vw] p-2 bg-(--header)" >
                <div className="relative flex flex-col w-full h-full p-2 justify-around items-center bg-(--header) border-3 border border-(--footer)">
                    <h1 className="text-3xl">Beacon Street Gardens</h1>
                    <p>welcoming tagline TBD</p>
                    <Link href='/shop' className="text-white bg-(--rust) box-border border border-transparent hover:bg-(--dark-rust) font-base leading-5 rounded-md text-sm px-4 py-2">See What's Available</Link>
                </div>
            </div>
        </div>
        
        {/* Blog-post style updates */}
        <div className="max-w-6xl mx-auto text-center my-12">
            <h2 className="text-3xl mb-12 font-medium">What's New at the Garden?</h2>
            <div className="flex flex-col mx-[3vw] gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="flex min-h-64 shadow-lg shadow-(--rust) border border-(--footer) rounded-xl p-8 text-left gap-6">
                        <div className="relative w-1/4 h-auto">
                            <Image src={post.image} alt="garden photo" fill className="object-cover rounded-sm"></Image>
                        </div>
                        <div className="flex flex-col w-3/4">
                            <h3 className="text-2xl font-medium">{post.title}</h3>
                            <p className="mb-4">posted {post.date}</p>
                            <p className="mb-6">{post.body}</p>
                            <Link href={post.href} className="flex items-center gap-2 text-(--rust)">
                                View Items 
                                <MoveRight size={20} color="var(--rust)" />
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>

        
        <div className="relative bg-(--secondary)">
            
            {/* Farmer's market stand information */}
            <div className="relative flex flex-col md:flex-row max-w-6xl mx-auto justify-center py-12 md:gap-10">
                <div className="relative basis-1/2 w-full max-w-lg h-64">
                    <Image src="/market.jpg" alt="photo of farmer's market stand" fill className="object-cover rounded-sm" />
                </div>
                <div className="relative flex flex-col basis-1/2 items-center gap-3">
                    <h2 className="text-3xl font-medium mb-4">Visit Our Stand</h2>
                    <p>Stand Hours</p>
                    <p>Farmer's Market</p>
                    <p>Address</p>
                    <Link href='/about' className="text-white bg-(--rust) mt-4 box-border border border-transparent hover:bg-(--dark-rust) font-base leading-5 rounded-md text-sm px-4 py-2">Learn More</Link>
                </div>
            </div>

            {/* Shop by category */}
            <div className="relative max-w-6xl mx-auto text-center py-10 border-t-2 border-(--footer)">
                <h2 className="text-3xl font-medium mb-12">Shop by Category</h2>
                <ul className="flex flex-col md:flex-row justify-between pb-4">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link href={category.href} className="flex flex-col rounded-md items-center text-(--header) bg-[#68715B] hover:scale-103">
                                    <Image src={category.image} alt="photo of seedling" width={200} height={100} className="rounded-sm" />
                                <span className="text-sm p-2">{category.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </main>
  );
}
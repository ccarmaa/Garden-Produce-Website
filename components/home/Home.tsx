'use client'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

export default function Home() {

    /* Banner photo:
       Change link here to update banner photo
    */
   const bannerSrc = "/banner_seedlings.jpeg";

    /* For Shop By Category:
       Change values here to add a category or update labels, links, and images */
    const categories = [
        { id: 1, href: '/shop?category=Vegetables', label: 'Vegetables', image: '/pepper-photo.jpg' },
        { id: 2, href: '/shop?category=Flowers', label: 'Flowers', image: '/colorful-flowers.jpg' },
        { id: 3, href: '/shop?category=Plants', label: 'House Plants', image: '/potted-plant.jpg' },
        { id: 4, href: '/shop', label: 'Seeds', image: '/seed.jpg' },
        // { id: 5, href: '/shop', label: 'All Products', image: '/boot-flowers.jpg' }
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

    // Current index of blog post being displayed
    const [blogIndex, setBlogIndex] = useState(0);

    function handleBlogLeft(){
        const nextIndex = blogIndex-1;
        if (nextIndex < 0){
            setBlogIndex(blogPosts.length-1);
        }
        else {
            setBlogIndex(nextIndex);
        }
    }

    function handleBlogRight(){
        const nextIndex = (blogIndex+1)%blogPosts.length;
        setBlogIndex(nextIndex);
    }

  return (
    <main>
        {/* Home banner */}
        <div className="relative flex items-center h-[35vh]">
            <div className="z-1">
                <Image src={bannerSrc} alt="image of seedlings" fill style={{objectFit: 'cover'}} />
            </div>
            <div className="z-2 sm:w-[80vw] md:w-[40vw] h-7/10 ml-[3vw] p-2 bg-(--header)" >
                <div className="relative flex flex-col w-full h-full p-2 justify-center items-center gap-2 bg-(--header) border-2 border-(--footer)">
                    <Image src="/logo_beaconstgardens_noback.png" alt="Logo" width={150} height={173}/>
                    <h1 className="text-3xl font-semibold">Beacon Street Gardens</h1>
                    <p className="">Welcoming tagline</p>
                </div>
            </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col py-12 gap-8 items-center text-2xl ">
            <p>Locally grown in Squirrel Hill</p>
            <p>Order online for pickup or <Link href="#market-info" className="text-(--rust)">visit our stand</Link></p>
            <Link href='/shop' className="text-white bg-(--teal) box-border border border-transparent hover:bg-(--teal-hover) font-base leading-5 rounded-md text-lg px-4 py-2">
                <span className="flex place-items-center gap-2">
                    See What's Available
                    <MoveRight />
                </span>
            </Link>
        </div>

        <hr className="border-0 h-[3px] bg-gradient-to-r from-transparent via-(--footer) to-transparent" />
        
        {/* Blog-post style updates */}
        <div className="max-w-6xl mx-auto text-center mt-8 mb-12">
            <h2 className="text-3xl mb-8 font-medium">What's New at the Garden?</h2>
            <div className="flex mx-[3vw] items-center gap-2">
                <button onClick={handleBlogLeft} className="cursor-pointer hover:scale-115">
                    <ChevronLeft size={60} color="var(--input-border)" />
                </button>
                <div className="flex h-64 shadow-lg shadow-(--rust) border border-(--footer) rounded-xl p-8 text-left gap-6">
                    <div className="relative w-1/4 h-auto">
                        <Image src={blogPosts[blogIndex].image} alt="garden photo" fill className="object-cover rounded-sm"></Image>
                    </div>
                    <div className="flex flex-col w-3/4">
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-medium">{blogPosts[blogIndex].title}</h3>
                            <p className="text-(--input-border)">{blogIndex+1} / {blogPosts.length}</p>
                        </div>
                        <p className="mb-6">posted {blogPosts[blogIndex].date}</p>
                        <p className="mb-6 line-clamp-2">{blogPosts[blogIndex].body}</p>
                        <Link href={blogPosts[blogIndex].href} className="flex items-center gap-2 text-(--rust)">
                            Read More 
                            <MoveRight size={20} color="var(--rust)" />
                        </Link>
                    </div>
                </div>
                <button onClick={handleBlogRight} className="cursor-pointer hover:scale-115">
                    <ChevronRight size={60} color="var(--input-border)" />
                </button>
            </div>
        </div>

        
        <div id="market-info" className="relative bg-(--secondary) py-12">
            
            {/* Farmer's market stand information */}
            <div className="relative flex flex-col md:flex-row max-w-6xl mx-auto mb-12 justify-center md:gap-10">
                <div className="relative basis-1/2 w-full max-w-lg h-64">
                    <Image src="/stand_photo.jpeg" alt="photo of farmer's market stand" fill className="object-cover rounded-sm" />
                </div>
                <div className="relative flex flex-col basis-1/2 px-6 items-start gap-3">
                    <h2 className="text-3xl font-medium">Visit Our Stand</h2>
                    <hr className="w-full mb-4 border-0 h-[3px] bg-(--card-border)" />
                    <p>Stand Hours</p>
                    <p>Farmer's Market</p>
                    <p>Address</p>
                    <Link href='/about' className="text-white bg-(--rust) mt-4 box-border border border-transparent hover:bg-(--dark-rust) font-base leading-5 rounded-md text-sm px-4 py-2">Learn More</Link>
                </div>
            </div>

            {/* Shop by category */}
            <div className="relative max-w-6xl mx-auto text-center">
                <div className="relative flex mb-12 gap-4 items-center">
                    <hr className="w-full border-0 h-[3px] bg-(--card-border)" />
                    <h2 className="text-3xl text-nowrap font-medium">Shop by Category</h2>
                    <hr className="w-full border-0 h-[3px] bg-(--card-border)" />
                </div>
                <ul className="relative flex flex-col md:flex-row justify-between">
                    {categories.map((category) => (
                        <li key={category.id} className="relative flex flex-col items-center">
                            <Link href={category.href} className="h-64 w-68 hover:scale-103">
                                <div className="relative h-54">
                                    <Image src={category.image} alt="photo of seedling" fill className="object-cover" />
                                </div>
                                <div className="relative text-lg text-(--header) bg-(--teal-hover) p-1">
                                    <p>{category.label}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </main>
  );
}
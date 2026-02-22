'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const categories = [
        { id: 1, href: '/shop?category=Vegetables', label: 'Vegetables', },
        { id: 2, href: '/shop?category=Flowers', label: 'Flowers' },
        { id: 3, href: '/shop?category=Plants', label: 'Plants' },
        { id: 4, href: '/shop', label: 'All Products' },
    ];

    function handleClick(){
    console.log("IMPLEMENT: route to shop page");
    }

  return (
    <main>
        <div style={{position: "relative", height: "40vh", display: "flex", alignItems: "center"}}>
            <div className="hero-image" style={{zIndex: 1}}>
                <Image src="/flowers.jpg" alt="generic image of flowers" fill style={{objectFit: 'cover'}} />
            </div>
            <div className="hero" style={{position: "relative", width: "35vw", height: "70%", marginLeft: "5vw", padding: "10px", backgroundColor: "#F8F2F2", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", border: "double #E4DBD6"}}>
                <h1 className="text-3xl">Beacon Street Gardens</h1>
                <p>welcoming tagline TBD</p>
                <button onClick={handleClick} className="text-white bg-(--rust) box-border border border-transparent hover:bg-(--dark-rust) focus:ring-4 focus:ring-brand-medium font-base leading-5 rounded-md text-sm px-4 py-2 focus:outline-none">See What's Available</button>
            </div>
        </div>
        <div className="flex flex-col items-center p-[10]">
            <h2 className="text-2xl m-[10]">What's New at the Garden?</h2>
            <div className="flex justify-center items-center border border-(--footer) border-2 m-[20] w-[60vw]  h-[30vh]">
                <p className="p-[40]">Placeholder for blog-post style updates</p>
            </div>
            {/* format blogpost that has been pulled from database */}
        </div>
        <div className="flex flex-col bg-(--secondary) p-[20]">
            <div className="flex flex-row justify-center bg-inherit md:gap-30">
                <Image src="/market.jpg" alt="generic image of flowers" width={300} height={200} />
                <div className="">
                    <h2 className="text-2xl">Visit Our Stand</h2>
                    <p>Stand Hours</p>
                    <p>Farmer's Market</p>
                    <p>Address</p>
                    <button onClick={handleClick} className="text-white bg-(--rust) box-border border border-transparent hover:bg-(--dark-rust) focus:ring-4 focus:ring-brand-medium font-base leading-5 rounded-md text-sm px-4 py-2 focus:outline-none">See Details</button>
                </div>
            </div>
            <div className="flex flex-col items-center bg-inherit p-[40]">
                <h2 className="text-2xl mb-[20]">Shop by Category</h2>
                <ul className="flex md:gap-10">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <Link href={category.href} className="flex flex-col rounded-md items-center text-(--header) bg-[#68715B] hover:scale-105">
                                <Image src="/seed.jpg" alt="photo of seedling" width={200} height={100} />
                                <span className="text-sm p-[5]">{category.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </main>
  );
}
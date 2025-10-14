'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestProducts from "@/components/LatestProducts";
import HeroSplitSection from "@/components/HeroSplitSection";
import CategoriesMarquee from "@/components/CategoriesMarquee";
import Reviews from "@/components/Reviews";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestProducts />
            <BestSelling />
            <HeroSplitSection />
            <CategoriesMarquee />
            <OurSpecs />
            <Reviews />
            <Newsletter />
        </div>
    );
}

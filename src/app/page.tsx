// src/app/page.tsx or src/pages/index.tsx

import Hero from "@/components/Hero";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import MobNavbar from "@/components/MobNavbar";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewProduct />
      <Testimonial />
      <MobNavbar />
    </div>
  );
}

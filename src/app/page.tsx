import Image from "next/image";
import Link from 'next/link'
import Banner from '@/app/components/Banner'
import Blog from '@/app/blog/page'
import Offer from "@/Offer/page";
import ContactUs from '@/ContactUs.tsx/page'

export default function Home() {
  return (
   <div className='pt-4'>
      <Banner />
      <Blog />
      <Offer/>
      <ContactUs/>
     </div>
  );
}

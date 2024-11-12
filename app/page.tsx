
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HeroSection from '@/components/hero-section';
import NavBar from '@/components/navbar';
import {TrustedBy} from '@/components/trustedBy';
import {RetroGrid} from "@/components/magicui/retro-grid";
import TwitterTestimonials from '@/components/twitter-testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <div>
            <HeroSection />
          </div>
          <RetroGrid />
        </div>
      </div>
      <div>
        <TrustedBy></TrustedBy>
      </div>
      <div>
        <TwitterTestimonials></TwitterTestimonials>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>

  );
}

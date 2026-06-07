import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
        <About />
      <Gallery />
      <Reviews />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-2">&copy; {new Date().getFullYear()} NestorFix Handyman Service Inc. All rights reserved.</p>
          <p className="text-sm">Engineer-Led Property Maintenance in Calgary, AB.</p>
        </div>
      </footer>
    </main>
  );
}

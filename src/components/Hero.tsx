import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-slate-200 text-slateGray px-4 py-2 rounded-full mb-6 font-medium text-sm">
            <ShieldCheck className="w-4 h-4 text-safetyOrange" />
            <span>Engineer-Led Handyman Services</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slateGray tracking-tight mb-8">
            Professional, Engineer-Led Handyman Services in <span className="text-safetyOrange">Calgary & Area</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Immediate availability and transparent pricing. Structural awareness, precision laser alignment, and unmatched safety standards guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+14034614332"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-safetyOrange hover:bg-orange-600 text-crispWhite rounded-md font-bold text-lg transition-colors shadow-lg shadow-orange-500/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (403) 461-4332
            </a>

            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-slateGray hover:bg-slate-800 text-crispWhite rounded-md font-bold text-lg transition-colors"
            >
              Get an Estimate
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Available for Same Day Service
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-safetyOrange mr-2"></span>
              Serving Calgary, Airdrie, Okotoks, Cochrane
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

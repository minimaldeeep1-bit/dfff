import { Wrench, ShieldCheck, Ruler } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-crispWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-slateGray sm:text-4xl mb-6">
              Engineer-Led Precision & Reliability
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I&apos;m <strong className="text-slateGray font-bold">Vitalii Nestorenko</strong>, the owner and operator of NestorFix Handyman Service Inc.
              My background as a <strong className="text-safetyOrange font-bold">Mechanical Engineer</strong> and a registered <strong className="text-safetyOrange font-bold">Engineer-in-Training (EIT) with APEGA</strong> means you aren&apos;t just hiring a handyman—you are partnering with a professional trained in structural awareness, precision laser alignment, and strict safety standards.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I approach every project, big or small, with an engineering mindset. Whether it&apos;s mounting a heavy TV on metal studs or perfectly aligning new baseboards, my focus is on doing it right the first time to ensure safety, durability, and a premium finish.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-8 w-8 text-safetyOrange" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slateGray">Unmatched Safety Standards</h3>
                  <p className="mt-1 text-gray-600">Every repair and installation is executed with structural integrity and long-term safety as the top priority.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Ruler className="h-8 w-8 text-safetyOrange" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slateGray">Precision Alignment</h3>
                  <p className="mt-1 text-gray-600">Utilizing laser tools and engineering principles to ensure your mountings and installations are perfectly level and secure.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Wrench className="h-8 w-8 text-safetyOrange" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slateGray">Professional Execution</h3>
                  <p className="mt-1 text-gray-600">Punctual, clean, and communicative service tailored for Calgary area homeowners seeking premium property maintenance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Representation */}
          <div className="relative rounded-lg shadow-xl overflow-hidden bg-slateGray p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-slateGray to-gray-800 opacity-90"></div>
            <div className="relative p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="bg-crispWhite p-6 rounded-full shadow-lg mb-6">
                <Ruler className="h-16 w-16 text-safetyOrange" />
              </div>
              <h3 className="text-2xl font-extrabold text-crispWhite mb-4">
                Vitalii Nestorenko
              </h3>
              <p className="text-gray-300 text-lg font-medium mb-2">
                Mechanical Engineer
              </p>
              <p className="text-safetyOrange font-semibold text-lg tracking-wide">
                APEGA EIT
              </p>
              <div className="mt-8 border-t border-gray-600 pt-8 w-full">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">
                  Serving Calgary, Airdrie, Okotoks, Cochrane
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

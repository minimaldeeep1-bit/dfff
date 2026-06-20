import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    date: "Fall 2025",
    project: "Bidet Installation",
    text: "Vitalii was incredibly professional and efficient. He installed two bidets in our home, ensuring no leaks and perfect alignment. Highly recommend his engineer-led approach!",
  },
  {
    name: "Jason T.",
    date: "Fall 2025",
    project: "Furniture Assembly",
    text: "I had a massive IKEA wardrobe that I was dreading putting together. Vitalii assembled it perfectly, secured it to the wall for safety, and cleaned up afterward. Worth every penny.",
  },
  {
    name: "Emily R.",
    date: "Fall 2025",
    project: "Shower Re-grouting",
    text: "Our shower looks brand new! The old grout was failing, but the new silicone and grout application was flawless. You can really tell he cares about structural integrity and finish.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">Trusted by Calgary Homeowners</h2>
          <div className="flex justify-center items-center space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-safetyOrange text-safetyOrange" />
            ))}
          </div>
          <p className="text-lg text-gray-600">5-Star Rated Service</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-safetyOrange text-safetyOrange" />
                ))}
              </div>
              <p className="text-gray-700 italic flex-grow mb-6">&quot;{review.text}&quot;</p>
              <div>
                <p className="font-bold text-slateGray">{review.name}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                  <span>{review.project}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Wrench, Monitor, Paintbrush, Zap, Sprout, Hammer } from "lucide-react";

const services = [
  {
    title: "Interior Repairs & Renovations",
    description: "Drywall patching, door adjustments, hardware upgrades, and floor repairs.",
    icon: <Wrench className="w-8 h-8 text-safetyOrange" />,
  },
  {
    title: "Mounting & Assembly Precision",
    description: "Expert TV wall mounting on drywall/concrete, IKEA/modular furniture assembly, heavy mirrors/shelves/blinds.",
    icon: <Monitor className="w-8 h-8 text-safetyOrange" />,
  },
  {
    title: "Finishing & Decorating",
    description: "Caulking and silicone renewal, trim work, touch-up painting.",
    icon: <Paintbrush className="w-8 h-8 text-safetyOrange" />,
  },
  {
    title: "Small Plumbing & Electrical",
    description: "Existing connections only - Faucet, toilet tank mechanisms, lighting fixtures, and outlet upgrades.",
    icon: <Zap className="w-8 h-8 text-safetyOrange" />,
  },
  {
    title: "Outdoor & Yard Maintenance",
    description: "Fence/deck cosmetic repairs, seasonal cleanups.",
    icon: <Sprout className="w-8 h-8 text-safetyOrange" />,
  },
  {
    title: "Demolition & Site Prep",
    description: "Careful structure teardowns, post-renovation cleaning.",
    icon: <Hammer className="w-8 h-8 text-safetyOrange" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-crispWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">Our Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive property maintenance and handyman solutions, executed with engineer-level precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slateGray mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";

const pricingData = [
  { service: "TV Mounting", estimate: "$90 – $150" },
  { service: "Faucet / Light Fixtures", estimate: "$90 – $150" },
  { service: "Drywall Repair", estimate: "$90 – $180" },
  { service: "Toilet Installation", estimate: "$200 – $450" },
  { service: "Custom Tasks (Hourly)", estimate: "$60/hr" },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slateGray mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Clear, upfront estimates. Base pricing is C$60/hour with a minimum call-out charge ($85–$120 baseline).
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slateGray text-crispWhite">
                <th className="py-4 px-6 font-semibold text-lg">Service</th>
                <th className="py-4 px-6 font-semibold text-lg text-right">Estimated Cost</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-slateGray font-medium">{item.service}</td>
                  <td className="py-4 px-6 text-safetyOrange font-bold text-right">{item.estimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3 mb-8">
          {pricingData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`accordion-content-${index}`}
                id={`accordion-button-${index}`}
                className="w-full flex justify-between items-center p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safetyOrange focus-visible:ring-inset"
              >
                <span className="font-semibold text-slateGray">{item.service}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`accordion-content-${index}`}
                  role="region"
                  aria-labelledby={`accordion-button-${index}`}
                  className="px-4 pb-4 pt-1 bg-slate-50 border-t border-slate-100 flex justify-between items-center"
                >
                  <span className="text-sm text-gray-500">Estimated Cost:</span>
                  <span className="font-bold text-safetyOrange">{item.estimate}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-safetyOrange flex-shrink-0 mt-0.5" />
          <p className="text-sm text-orange-900 leading-relaxed">
            <strong>Crucial Disclaimer:</strong> NestorFix Handyman Service Inc. operates strictly within Class 2 Contractor limits. No compulsory restricted trades performed. All prices are approximate estimates.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Send, Phone, Mail, MapPin, Camera } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slateGray text-crispWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-crispWhite mb-4">Get Your Estimate Today</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to tackle your home project? Reach out below or send photos directly for a faster estimate.
          </p>
        </div>

        {/* WhatsApp / Email Prompt Banner */}
        <div className="bg-safetyOrange rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white/20 p-3 rounded-full">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Fastest Way to Get an Estimate!</h3>
              <p className="text-orange-100 text-sm">Send photos of your project via WhatsApp or Email.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <a
              href="https://wa.me/14034614332"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-safetyOrange font-bold px-6 py-2 rounded-md text-center hover:bg-gray-100 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:nestorshomehelp@gmail.com"
              className="bg-orange-700 text-white font-bold px-6 py-2 rounded-md text-center hover:bg-orange-800 transition-colors"
            >
              Email Photos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-crispWhite">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-safetyOrange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Call or Text</p>
                    <a href="tel:+14034614332" className="text-xl font-bold hover:text-safetyOrange transition-colors">
                      +1 (403) 461-4332
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-safetyOrange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Email</p>
                    <a href="mailto:nestorshomehelp@gmail.com" className="text-lg font-medium hover:text-safetyOrange transition-colors">
                      nestorshomehelp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-safetyOrange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-300 text-sm">Service Areas</p>
                    <p className="text-lg font-medium">Calgary, Airdrie, Okotoks, Cochrane</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h4 className="font-bold text-lg mb-4 text-safetyOrange">Standard Operating Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-medium text-crispWhite">2:00 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat - Sun:</span>
                  <span className="font-medium text-crispWhite">8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formspree Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-xl text-slateGray">
            <h3 className="text-2xl font-bold mb-6">Request Service</h3>
            <form action="https://formspree.io/f/mnnwakre" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="TV Mounting/Assembly">TV Mounting / Assembly</option>
                    <option value="Drywall/Repairs">Drywall / Repairs</option>
                    <option value="Plumbing/Electrical">Plumbing / Electrical</option>
                    <option value="Outdoor/Maintenance">Outdoor / Maintenance</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="community" className="block text-sm font-medium text-gray-700 mb-1">Address / Community *</label>
                  <input
                    type="text"
                    id="community"
                    name="community"
                    required
                    placeholder="e.g., NW Calgary, Airdrie"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Project Details *</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  placeholder="Describe what you need help with..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-safetyOrange focus:border-safetyOrange outline-none transition-colors bg-gray-50 resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-safetyOrange hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors flex justify-center items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Request
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                We respect your privacy. No spam, just a quick response from Vitalii Nestorenko.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "../componenets/landing/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-custom">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-primary to-secondary min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Gear Up Your
                <span className="text-ternary block">Vehicle's Future</span>
              </h1>
              <p className="text-xl mb-8 text-ternary leading-relaxed">
                Professional automotive services with expert technicians, quality parts, and customer satisfaction guaranteed. Your vehicle deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/customer"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ternary transition-colors text-center"
                >
                  Book Service Now
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative w-full h-full">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Gear Up Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-ternary/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complex repairs, we've got your vehicle covered with professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Engine Diagnostics",
                description: "Advanced computer diagnostics to identify and resolve engine issues quickly and accurately.",
                icon: "🔧"
              },
              {
                title: "Brake Services",
                description: "Complete brake system inspection, repair, and replacement for your safety on the road.",
                icon: "🛡️"
              },
              {
                title: "Oil Changes",
                description: "Regular oil changes with premium lubricants to keep your engine running smoothly.",
                icon: "⚙️"
              },
              {
                title: "Tire Services",
                description: "Tire installation, rotation, balancing, and alignment for optimal performance and safety.",
                icon: "🚗"
              },
              {
                title: "AC Repair",
                description: "Climate control system diagnosis and repair to keep you comfortable year-round.",
                icon: "❄️"
              },
              {
                title: "Battery Services",
                description: "Battery testing, replacement, and electrical system maintenance for reliable starts.",
                icon: "🔋"
              }
            ].map((service, index) => (
              <div key={index} className="bg-custom p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-ternary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Gear Up?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in automotive service, Gear Up has built a reputation for excellence, reliability, and customer satisfaction. Our certified technicians use state-of-the-art equipment and genuine parts to ensure your vehicle receives the best care possible.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Certified Technicians", description: "ASE-certified professionals with extensive training" },
                  { title: "Quality Guarantee", description: "All work backed by our comprehensive warranty" },
                  { title: "Fair Pricing", description: "Transparent pricing with no hidden fees" },
                  { title: "Quick Service", description: "Most services completed same-day" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Get Started Today</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <span className="text-gray-700">Book your appointment online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <span className="text-gray-700">Bring your vehicle to our facility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <span className="text-gray-700">Relax while we handle the rest</span>
                  </div>
                </div>
                <Link
                  href="/customer"
                  className="mt-6 block bg-primary text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to give your vehicle the care it deserves? Contact us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-gray-600">info@gearup.com</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
              <p className="text-gray-600">123 Auto Service St<br />Your City, ST 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/Logo.png"
                  alt="Gear Up Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold">Gear Up</span>
              </div>
              <p className="text-ternary mb-4 max-w-md">
                Your trusted partner for all automotive services. Quality work, fair prices, and customer satisfaction guaranteed.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-ternary hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-ternary hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-ternary hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/customer" className="text-ternary hover:text-white transition-colors">Customer Portal</Link></li>
                <li><Link href="/employee" className="text-ternary hover:text-white transition-colors">Employee Portal</Link></li>
                <li><Link href="/admin" className="text-ternary hover:text-white transition-colors">Admin Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-ternary">Engine Repair</span></li>
                <li><span className="text-ternary">Brake Service</span></li>
                <li><span className="text-ternary">Oil Changes</span></li>
                <li><span className="text-ternary">Tire Service</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary mt-8 pt-8 text-center">
            <p className="text-ternary">
              © 2025 Gear Up. All rights reserved. | Designed with ❤️ for automotive excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

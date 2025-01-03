export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6 rounded-t-md">
        <h1 className="text-5xl font-extrabold text-center mb-4">
          About ZuriHomes
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Connecting you with your dream home through technology, expertise, and
          trust.
        </p>
      </div>

      {/* Main Content */}
      <div className="py-16 px-6 max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-md">
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          ZuriHomes is a platform that connects people with homes for rent or
          sale. It is a web application that allows users to browse listings and
          make offers and purchases.
        </p>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 text-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            aria-label="Browse listings on ZuriHomes"
          >
            Browse Listings
          </button>
          <button
            className="ml-4 bg-gray-100 text-blue-500 py-2 px-4 rounded hover:bg-gray-200"
            aria-label="Contact ZuriHomes for inquiries"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="mt-12 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Our Clients Say
        </h2>
        <div className="bg-white shadow p-6 rounded-md">
          <p className="italic text-gray-700">
            "ZuriHomes made it so easy for us to find our dream home! The team
            was professional and supportive every step of the way."
          </p>
          <h4
            className="mt-4 text-right font-bold text-gray-900"
            aria-label="Testimonial by John Doe"
          >
            - John Doe
          </h4>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-12 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div
            className="bg-white shadow p-6 rounded-md flex-1"
            aria-label="Team member profile for Jane Smith"
          >
            <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-4 text-gray-700 text-sm">
              Jane is the visionary behind ZuriHomes, with a decade of
              experience in real estate and technology.
            </p>
          </div>
          <div
            className="bg-white shadow p-6 rounded-md flex-1"
            aria-label="Team member profile for Mark Johnson"
          >
            <h3 className="text-xl font-bold text-gray-900">Mark Johnson</h3>
            <p className="text-gray-600">CTO</p>
            <p className="mt-4 text-gray-700 text-sm">
              Mark leads our technology initiatives, ensuring the platform is
              fast, secure, and user-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mt-12 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <div className="bg-white shadow p-6 rounded-md">
          <p className="text-gray-700 text-lg mb-4">
            We’d love to hear from you! Reach out to us via email or phone for
            any inquiries.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> support@zurihomes.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +1 800 123 4567
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> 123 Main Street, Nairobi, Kenya
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com/zurihomes"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Visit ZuriHomes on Facebook"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/zurihomes"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Visit ZuriHomes on Twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/zurihomes"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Visit ZuriHomes on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

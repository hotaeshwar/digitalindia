import React from "react";
// import serviceImage from "../../assets/Images/service-left.png"; // Update with your image path
import serviceImage from "../../assets/Images/services-left-image2.png";

const Services = () => {
  return (
    <div className="bg-white py-10 px-15">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4 animate-slide-in-left">
          <img src={serviceImage} alt="Service" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4 animate-slide-in-right">
          <h2 className="text-3xl font-bold">Business Service</h2>
          <p className="mt-4 text-gray-700">
            We offer a range of digital marketing services to help businesses
            reach their target audience and achieve their marketing goals. Our
            services include:
          </p>
          <p className="mt-4 text-gray-700">
            Tailored business solutions delivering efficiency, growth, and
            innovation. Strategize, implement, and optimize operations,
            technology, and marketing to propel your business forward.
          </p>
        </div>
      </div>
      <div className="py-20 px-1 md:px-10 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
    {/* Card 1 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        Internship and Placement
      </h1>
      <p className="py-3">
        Unlock your future: internships and placements for career success!
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        University Admission Compliance
      </h1>
      <p className="py-3">
        Ensure your future: comply with university admission requirements for a seamless entry.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        Email Marketing
      </h1>
      <p className="py-3">
        Email marketing services provide targeted campaigns, automation, and analytics tools.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 4 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        Video and Photography
      </h1>
      <p className="py-3">
        Professional video and photography services for capturing memorable moments perfectly.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 5 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        App & Web Development
      </h1>
      <p className="py-3">
        App and web development services deliver customized, user-friendly digital solutions.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 6 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        SEO
      </h1>
      <p className="py-3">
        Search engine optimization improves website visibility and ranking on search engines.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 7 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        Meta Ads
      </h1>
      <p className="py-3">
        Meta ads services boost online presence through targeted, data-driven advertising.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 8 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        Social Media Marketing
      </h1>
      <p className="py-3">
        Social media marketing services enhance brand engagement and drive growth.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>

    {/* Card 9 */}
    <div className="bg-gray-200 p-8 hover:bg-orange-400 transition-all group rounded-md shadow-md">
      <h1 className="text-[22px] text-orange-400 font-medium group-hover:text-white">
        ORM (Online Reputation Management)
      </h1>
      <p className="py-3">
        Online reputation management services improve and maintain your digital image.
      </p>
      <a href="#home" className="text-blue-600 font-semibold">
        Contact us
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default Services;

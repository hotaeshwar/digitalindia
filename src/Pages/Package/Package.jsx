import React from "react";

const Package = () => {
  return (
    <div>
      <div className="px-6 md:px-14 py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl flex justify-center font-semibold">
          Choose Your Package
        </h1>
        <h2 className="flex justify-center py-2 md:py-4 text-center text-gray-600 text-sm md:text-base">
          Select from Basic, Standard, and Premium packages for services.
        </h2>
        <div className="border-b-2 border-gray-200 mx-6 md:mx-10 mb-6"></div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** Basic Package **/}
          <div className="border border-gray-400 rounded-lg bg-gray-100 w-full   hover:bg-orange-400 shadow-md transition-transform duration-300 hover:scale-105 hover:border-orange-400">
            <h1 className="bg-blue-500 flex justify-center text-white font-semibold text-lg md:text-xl py-3 rounded-t-lg">
              Basic
            </h1>
            <div className="text-xs md:text-sm border-b p-3 bg-white">
              - Platform: All Social Media Platforms
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Weekly 2 Designing and Posting of Graphics
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - 1 Instagram Reel Weekly
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Optimizing BIO & Interface
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Social Media Analytics Report
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - 1 Video Shoot per Month
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Posting Blogs & Articles
            </div>
            <div className="text-xs md:text-sm p-3 bg-white">
              - Business Strategy & Execution
            </div>
            <div className="flex justify-center py-4">
              <a
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>

          {/** Standard Package **/}
          <div className="border border-gray-400 rounded-lg bg-gray-100 w-full hover:bg-orange-400 shadow-md transition-transform duration-300 hover:scale-105 hover:border-orange-400">
            <h1 className="bg-yellow-500 flex justify-center text-white font-semibold text-lg md:text-xl py-3 rounded-t-lg">
              Standard
            </h1>
            <div className="text-xs md:text-sm border-b p-3 bg-white">
              - Platform: All Social Media Platforms + YouTube
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Weekly 3 Designing and Posting of Graphics
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - All Festive Creatives
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - 2 Instagram Reels Weekly
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Optimizing BIO & Interface
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - GMB Mapping & Listings
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Google Indexing & Updates
            </div>
            <div className="text-xs md:text-sm p-3 bg-white">
              - Business Strategy & Execution
            </div>
            <div className="flex justify-center py-4">
              <a
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>

          {/** Premium Package **/}
          <div className="border border-gray-400 rounded-lg bg-gray-100 w-full   hover:bg-orange-400 shadow-md transition-transform duration-300 hover:scale-105 hover:border-orange-400">
            <h1 className="bg-green-500 flex justify-center text-white font-semibold text-lg md:text-xl py-3 rounded-t-lg">
              Premium
            </h1>
            <div className="text-xs md:text-sm border-b p-3 bg-white">
              - Platform: All Social Media Platforms + YouTube
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Weekly 3 Designing and Posting of Graphics
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - All Festive Creatives
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - 2 Instagram Reels Weekly
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Optimizing BIO & Interface
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - GMB SEO & Online Reputation Management
            </div>
            <div className="text-xs md:text-sm p-3 border-b bg-white">
              - Exclusive Ad Campaigns (Budget Included)
            </div>
            <div className="text-xs md:text-sm p-3 bg-white">
              - 50-100 Qualified Leads per Month
            </div>
            <div className="flex justify-center py-4">
              <a
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;

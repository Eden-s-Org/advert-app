import React from "react";

import {
  Zap,
  Shield,
  Lightbulb,
  Briefcase,
  Linkedin,
  Twitter,
  LinkedinIcon,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="">
      <div className="flex items-center justify-start min-h-screen px-6 bg-[#EEAA77]">
        <div className="max-w-2xl ps-15">
          <h1 className="text-4xl font-bold text-gray-900">
            Boost Your Ads, Maximize Your Impact.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Effortlessly manage and optimize campaigns across platforms. Track
            real-time performance, save time, cut costs, and increase
            conversions.
          </p>
          <p className="font-bold text-[#424f74]"> Start managing smarter today!</p>
          <div className="flex gap-10 py-6">
          <a href="adverts"  target="_blank" rel="noopener noreferrer"> <button className="bg-[#EBEAE6] py-3 px-6 rounded-e-lg font-bold">
              Browse
            </button></a>
            <a href="create-ad"  target="_blank" rel="noopener noreferrer"> <button className="bg-[#424f74] text-black py-3 px-6 rounded-e-lg font-bold">
              Launch for Free
            </button></a>
          </div>
          
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  We're constantly pushing the boundaries of what's possible in
                  ad technology, leveraging AI and machine learning to deliver
                  results.
                </p>
              </div>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  Trust
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  We believe in complete transparency with our clients about
                  performance metrics, costs, and strategy recommendations.
                </p>
              </div>
              <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="text-purple-600 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                  Simplicity
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  We make complex advertising technology accessible through
                  intuitive interfaces and clear, actionable insights.
                </p>
              </div>
            </div>
          </div>

    <section className="bg-gray-50">    
  <div className="py-12 px-4 max-w-7xl mx-auto ">
    
    <div className="text-center mb-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 max-w-4xl mx-auto leading-tight">
        Trusted by innovative companies to power their growth with EdShop
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Join these forward-thinking businesses already using our platform
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
      <div className="font-bold text-xl md:text-2xl text-blue-500">FacePal</div>
      <div className="font-bold text-xl md:text-2xl text-green-500">Hungry Pal</div>
      <div className="font-bold text-xl md:text-2xl text-orange-500">Emerge</div>
      <div className="font-bold text-xl md:text-2xl text-purple-500">AnneRabV</div>
    </div>
    </div>
  </section>

          <div className="py-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
              Meet Our Leadership
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 overflow-hidden rounded-full">
                  <img
                    src="/api/placeholder/128/128"
                    alt="CEO portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-gray-900">
                  King Nortey
                </h4>
                <p className="text-blue-600 text-sm sm:text-base">
                  CEO & Founder
                </p>
                <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                  Former Google Ads strategist with 15+ years in digital
                  marketing.
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <LinkedinIcon size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 overflow-hidden rounded-full">
                  <img
                    src="/api/placeholder/128/128"
                    alt="CTO portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-gray-900">
                  RuBoah
                </h4>
                <p className="text-[#424f74] text-sm sm:text-base">CTO</p>
                <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                  AI expert who previously led engineering teams at Meta and
                  Twitter.
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 overflow-hidden rounded-full">
                  <img
                    src="/api/placeholder/128/128"
                    alt="COO portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-gray-900">
                  Prince Pattertson
                </h4>
                <p className="text-[#424f74] text-sm sm:text-base">COO</p>
                <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                  Operations expert with experience scaling SaaS companies from
                  startup to IPO.
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 overflow-hidden rounded-full">
                  <img
                    src="/api/placeholder/128/128"
                    alt="CPO portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-medium text-gray-900">
                  Malia Malia
                </h4>
                <p className="text-blue-600 text-sm sm:text-base">CPO</p>
                <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm">
                  Product visionary focused on creating intuitive user
                  experiences.
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  <a href="#" className="text-gray-400 hover:text-blue-500">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>



          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              We're always looking for talented individuals who are passionate
              about revolutionizing the advertising industry.
            </p>
            <a
              href="#careers"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-[#EEAA77] hover:bg-[#fac498]"
            >
              <Briefcase className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> View Open
              Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

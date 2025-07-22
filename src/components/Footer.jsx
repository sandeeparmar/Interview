import React from "react";
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Instagram, Github, NotebookText } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
      window.scrollTo({top:0 , behavior : 'smooth'}) ;
  } ;
  return (
    <div>
        <div className="accent-purple-500/25 px-4 py-8 lg:px-16 lg:py-12 bg-gray-600">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Logo + Description */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="w-12 h-12 rounded-2xl">
                  <img 
                    src="https://media.tenor.com/VQBGRLEBkE8AAAAj/raintome-fire.gif" 
                    alt="Logo" 
                    className="w-8 h-8 object-cover rounded-lg"
                  />
                </div>
                <span className="ml-4 text-2xl font-bold text-blue-500">INTERVIEW</span>
              </div>
              <p className="text-gray-600 text-base max-w-sm mx-auto lg:mx-0">
                You can learn and practice from this website. Theory and code are written in simple language to help you understand easily.
              </p>
               
              <div className="mt-8 flex justify-evenly">
                <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <a 
                        href="https://www.linkedin.com/in/sandeep-parmar-076b15292/" 
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 text-gray-600  hover:text-blue-600 transition-colors" />
                     </a>

                  </div>

                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                       <a 
                        href="https://github.com/sandeeparmar" 
                        rel="noopener noreferrer"
                      >
      <Github className="h-4 w-4 text-gray-600 hover:text-stone-900 transition-colors" />
                  </a>       
                  </div>

                    {/* <Resume className="h-4 w-4 text-gray-600" />  */}
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <a href="#"  >
                         <NotebookText className="h-4 w-4 text-gray-600 hover:text-red-900 transition-colors" />  
                      </a>
                  </div>
              </div> 

            </div>

            {/* Future Advancement */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 ">Future Advancement</h3>
              <div className="text-gray-600 space-y-4 text-sm">
                <p>We plan to add user accounts so you can track your progress, save your favorite questions, and get daily practice. A built-in code editor will let you solve problems directly on the site, and gamification features like points and badges will boost motivation.</p>
                <p>Later, we'll introduce tools like a resume builder and an AI mock interview helper. A community section for discussion and a mobile app with job opportunities will help make this platform a complete job prep ecosystem.</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>N9 Street, BusinessPark</p>
                    <p>Akd, MP 465337</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="tel:+919424572893" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    +91 9424572893
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </div>
                  <a href="mailto:sandeepparmard5656@gmail.com" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    sandeepparmard5656@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* lastLine and backToTop button*/}
       <div className="border-t-1 border-white  bg-gray-600">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <p className="text-white text-sm font-medium">
                © 2025 Interview . All Right Reserved 
              </p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center  
              space-x-2 px-4 py-2 text-gray-500 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-300 group transform hover:-translate-y-1"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

    </div>
  ) ;
} ;

export default Footer ;
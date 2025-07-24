import React from 'react'
import { Link } from 'react-router-dom'
import CardComponent from '../components/CardComponent';

 const LinkComponent = () => {
      return (
        <div className="flex justify-start sm:justify-center">

           <Link 
                to="/questions" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mx-4"
              >
                Start Practicing
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Resources
              </Link>
        </div>
      ) 
  } ;

const HomePage = () => {
  const stats = [
    { label: 'Total Questions', value: '100+' },
    { label: 'Categories', value: '8' },
    { label: 'Companies', value: '10+' },
    { label: 'Success Rate', value: '85%' }
  ]

 

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gray-600 text-white h-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex gap-6">
         
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ace Your Technical Interview
            </h1>


            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Prepare for your dream job with our comprehensive collection of 
              interview questions, coding challenges, and practice resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
             {<LinkComponent/>}

            </div>


          </div>

          <div className='w-1/3 p-3 hidden md:block'>
            <img 
              src="https://media.istockphoto.com/id/1779962110/photo/a-contemporary-artistic-collage-featuring-a-hand-holding-a-trophy.jpg?s=612x612&w=0&k=20&c=TQPcespDD1CpX2nRYxlXGDq57s5zdhBXD3l1t37E4Ks=" 
              alt="WinnerImage" 
              className='rounded-full border-2 border-white w-full h-auto object-cover' 
            />
          </div>
          

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-600">
        <div className="flex justify-center">
          <div className="relative group cursor-pointer mb-4">
            <span className="font-bold text-5xl  text-gray-400  hover:text-yellow-600">Achievement</span>
            <span className="absolute bottom-0 left-0 h-0.5 bg-yellow-500 w-0 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>




        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {stats.map((stat, index) => (
              <div key={index} className="text-center  hover:rounded-10  hover:shadow-lg 
              cursor-pointer">
                <div className="bg-blue-100 rounded-lg p-6">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-6 bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="flex justify-center">
            <div className="relative group cursor-pointer mb-4">
              <span className="font-bold text-4xl  text-gray-400  hover:text-yellow-600">Why Choose Our Platform?</span>
             
             </div>
         </div>
        
          <CardComponent/>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-600 flex w-full px-4 gap-5">
        <div className="w-2/3 text-center p-3 md:block w-full">
          <h2 className="text-3xl font-bold mb-4 text-violet-500">Ready to Start Your Journey?</h2>
          <p className="text-xl m-10 text-white">Join thousands of developers who have successfully prepared for their interviews</p>
          
          <LinkComponent/>
        </div>
        
        {/*Image Section*/}
        <div className='w-1/3 p-3 hidden md:block'>
            <img 
              src="https://media.istockphoto.com/id/1779962110/photo/a-contemporary-artistic-collage-featuring-a-hand-holding-a-trophy.jpg?s=612x612&w=0&k=20&c=TQPcespDD1CpX2nRYxlXGDq57s5zdhBXD3l1t37E4Ks=" 
              alt="WinnerImage" 
              className='rounded-full border-2 border-white w-full h-auto object-cover' 
            />
          </div>


      </section>
    </div>
  )
}

export default HomePage;
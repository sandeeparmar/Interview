import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const stats = [
    { label: 'Total Questions', value: '500+' },
    { label: 'Categories', value: '12' },
    { label: 'Companies', value: '100+' },
    { label: 'Success Rate', value: '95%' }
  ]

  const features = [
    {
      title: 'Comprehensive Question Bank',
      description: 'Access thousands of interview questions from top tech companies',
      icon: '📚'
    },
    {
      title: 'Code Editor',
      description: 'Practice coding problems with our built-in editor',
      icon: '💻'
    },
    {
      title: 'Multiple Categories',
      description: 'Questions organized by topic, difficulty, and company',
      icon: '📂'
    },
    {
      title: 'Progress Tracking',
      description: 'Track your preparation progress and improvement',
      icon: '📊'
    }
  ]

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-violet-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ace Your Technical Interview
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Prepare for your dream job with our comprehensive collection of 
              interview questions, coding challenges, and practice resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/questions" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of developers who have successfully prepared for their interviews</p>
          <Link 
            to="/questions" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage;
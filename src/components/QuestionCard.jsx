import React from 'react'
import { Link } from 'react-router-dom'

const QuestionCard = ({ question }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 flex-1 mr-3">
          {question.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
          {question.difficulty}
        </span>
      </div>
      
      <div className="mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {question.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {question.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags?.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <Link 
          to={`/question/${question.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Details
        </Link>
        <button 
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
          onClick={() => console.log('Practice mode for:', question.id)}
        >
          Practice
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
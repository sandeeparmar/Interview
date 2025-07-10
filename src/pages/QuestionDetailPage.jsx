import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Editor from '../components/Editor'
import questionsData from '../data/question.json'

const QuestionDetailPage = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState(null)
  const [activeTab, setActiveTab] = useState('problem')

  useEffect(() => {
    const foundQuestion = questionsData.questions.find(q => q.id === parseInt(id))
    setQuestion(foundQuestion)
  }, [id])

  if (!question) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Question not found</h2>
            <Link 
              to="/questions" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Back to Questions
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Link to="/questions" className="hover:text-gray-700 transition-colors">
              Questions
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{question.title}</span>
          </nav>

          {/* Question Meta */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{question.title}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {question.category}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              <button 
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'problem' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('problem')}
              >
                Problem
              </button>
              <button 
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'solution' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('solution')}
              >
                Solution
              </button>
              <button 
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'practice' 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('practice')}
              >
                Practice
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'problem' && (
              <div className="space-y-8">
                {/* Problem Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{question.description}</p>
                </div>

                {/* Examples */}
                {question.examples && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Examples</h3>
                    <div className="space-y-4">
                      {question.examples.map((example, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-3">Example {index + 1}:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="font-mono">
                              <span className="font-semibold text-gray-700">Input:</span> 
                              <span className="ml-2 text-gray-600">{example.input}</span>
                            </div>
                            <div className="font-mono">
                              <span className="font-semibold text-gray-700">Output:</span> 
                              <span className="ml-2 text-gray-600">{example.output}</span>
                            </div>
                            {example.explanation && (
                              <div>
                                <span className="font-semibold text-gray-700">Explanation:</span> 
                                <span className="ml-2 text-gray-600">{example.explanation}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Constraints */}
                {question.constraints && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Constraints</h3>
                    <ul className="space-y-1 text-gray-700">
                      {question.constraints.map((constraint, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{constraint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {question.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'solution' && (
              <div>
                {question.solution ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Hint : </h3>
                      <p className="text-gray-700 leading-relaxed">{question.hints.map((tag , index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>{tag}</span>
                        </li>
                      ))}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation</h3>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
                          <code>{question.solution}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Complexity Analysis</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-semibold text-gray-700">Time Complexity:</span> <span className="font-mono text-gray-600">{question.timeComplexity}</span></p>
                        <p><span className="font-semibold text-gray-700">Space Complexity:</span> <span className="font-mono text-gray-600">{question.spaceComplexity}</span></p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">
                      <svg className="mx-auto h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Solution not available for this question.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'practice' && (
              <div>
                <Editor 
                  language="javascript"
                  initialCode={question.starterCode || '// Write your solution here\n'}
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            to="/questions" 
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            ← Back to Questions
          </Link>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Previous
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetailPage
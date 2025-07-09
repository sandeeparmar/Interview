import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Editor from '../components/Editor'
import questionsData from '../data/questions.json'
import './QuestionDetailPage.css'

const QuestionDetailPage = () => {
  const { id } = useParams()
  const [question, setQuestion] = useState(null)
  // const [showSolution, setShowSolution] = useState(false)
  const [activeTab, setActiveTab] = useState('problem')

  useEffect(() => {
    const foundQuestion = questionsData.find(q => q.id === parseInt(id))
    setQuestion(foundQuestion)
  }, [id])

  if (!question) {
    return (
      <div className="question-detail-page">
        <div className="error-state">
          <h2>Question not found</h2>
          <Link to="/questions" className="btn btn-primary">
            Back to Questions
          </Link>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'difficulty-easy'
      case 'medium':
        return 'difficulty-medium'
      case 'hard':
        return 'difficulty-hard'
      default:
        return 'difficulty-medium'
    }
  }

  return (
    <div className="question-detail-page">
      {/* Header */}
      <div className="question-header">
        <div className="breadcrumb">
          <Link to="/questions">Questions</Link> / {question.title}
        </div>
        <div className="question-meta">
          <h1>{question.title}</h1>
          <div className="meta-info">
            <span className={`difficulty-badge ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
            <span className="category-badge">{question.category}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          Problem
        </button>
        <button 
          className={`tab ${activeTab === 'solution' ? 'active' : ''}`}
          onClick={() => setActiveTab('solution')}
        >
          Solution
        </button>
        <button 
          className={`tab ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          Practice
        </button>
      </div>

      {/* Content */}
      <div className="tab-content">
        {activeTab === 'problem' && (
          <div className="problem-tab">
            <div className="problem-description">
              <h3>Description</h3>
              <p>{question.description}</p>
            </div>

            {question.examples && (
              <div className="examples">
                <h3>Examples</h3>
                {question.examples.map((example, index) => (
                  <div key={index} className="example">
                    <h4>Example {index + 1}:</h4>
                    <div className="example-content">
                      <div className="input">
                        <strong>Input:</strong> {example.input}
                      </div>
                      <div className="output">
                        <strong>Output:</strong> {example.output}
                      </div>
                      {example.explanation && (
                        <div className="explanation">
                          <strong>Explanation:</strong> {example.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {question.constraints && (
              <div className="constraints">
                <h3>Constraints</h3>
                <ul>
                  {question.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="tags">
              <h3>Tags</h3>
              <div className="tag-list">
                {question.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="solution-tab">
            {question.solution ? (
              <div className="solution-content">
                <h3>Solution Approach</h3>
                <p>{question.solution.approach}</p>
                
                <h3>Implementation</h3>
                <pre className="code-block">
                  <code>{question.solution.code}</code>
                </pre>
                
                <div className="complexity">
                  <h3>Complexity Analysis</h3>
                  <p><strong>Time Complexity:</strong> {question.solution.timeComplexity}</p>
                  <p><strong>Space Complexity:</strong> {question.solution.spaceComplexity}</p>
                </div>
              </div>
            ) : (
              <div className="no-solution">
                <p>Solution not available for this question.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="practice-tab">
            <Editor 
              language="javascript"
              initialCode={question.starterCode || '// Write your solution here\n'}
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="question-navigation">
        <Link to="/questions" className="btn btn-secondary">
          Back to Questions
        </Link>
        <div className="nav-buttons">
          <button className="btn btn-outline">Previous</button>
          <button className="btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetailPage;
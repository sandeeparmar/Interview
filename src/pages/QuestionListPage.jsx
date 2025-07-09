import React, { useState, useEffect } from 'react'
import QuestionCard from '../components/QuestionCard'
import questionsData from '../data/questions.json'
import './QuestionListPage.css'

const QuestionListPage = () => {
  const [questions, setQuestions] = useState([])
  const [filteredQuestions, setFilteredQuestions] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setQuestions(questionsData)
    setFilteredQuestions(questionsData)
  }, [])

  useEffect(() => {
    let filtered = questions

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory)
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty.toLowerCase() === selectedDifficulty)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(q =>
        q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredQuestions(filtered)
  }, [questions, selectedCategory, selectedDifficulty, searchTerm])

  const categories = ['all', ...new Set(questions.map(q => q.category))]
  const difficulties = ['all', 'easy', 'medium', 'hard']

  return (
    <div className="question-list-page">
      <div className="page-header">
        <h1>Interview Questions</h1>
        <p>Practice with {questions.length} carefully curated questions</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Difficulty:</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="filter-select"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Difficulties' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="results-section">
        <p className="results-count">
          Showing {filteredQuestions.length} of {questions.length} questions
        </p>

        <div className="questions-grid">
          {filteredQuestions.map(question => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="no-results">
            <h3>No questions found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionListPage ;
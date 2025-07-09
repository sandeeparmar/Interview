import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
// import QuestionDetailPage from './pages/QuestionDetailPage'
// import QuestionListPage from './pages/QuestionListPage'

function App() {
  return (
   <div className="min-h-screen ">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
           {/* <Route path="/questions" element={<QuestionListPage />} /> */}
          {/* <Route path="/question/:id" element={<QuestionDetailPage />} /> */}
          <Route path="/resources" element={<ResourcesPage />} /> 
        </Routes>
      </main>
    </div>
  )
}

export default App
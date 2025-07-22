import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import QuestionDetailPage from './pages/QuestionDetailPage.jsx'
import QuestionListPage from './pages/QuestionListPage.jsx'
import LoginPage from './components/LoginPage.jsx'

function App() {
  return (
   <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/questions" element={<QuestionListPage />} />
          <Route path="/question/:id" element={<QuestionDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} /> 
          <Route path='/Login' element={<LoginPage />}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
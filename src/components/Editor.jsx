import React, { useState } from 'react'
import './Editor.css'

const Editor = ({ language = 'javascript', initialCode = '' }) => {
  const [code, setCode] = useState(initialCode)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState('')

  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running code...')
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Basic JavaScript execution simulation
        if (language === 'javascript') {
          // This is a simplified simulation - in a real app, you'd use a proper code execution service
          const result = eval(code)
          setOutput(result ? result.toString() : 'Code executed successfully')
        } else {
          setOutput('Code execution not implemented for this language')
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`)
      }
      setIsRunning(false)
    }, 1000)
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
  }

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div className="editor-title">
          <h3>Code Editor</h3>
          <span className="language-badge">{language}</span>
        </div>
        <div className="editor-actions">
          <button 
            onClick={runCode} 
            disabled={isRunning}
            className="btn btn-success"
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
          <button 
            onClick={resetCode}
            className="btn btn-secondary"
          >
            Reset
          </button>
        </div>
      </div>
      
      <div className="editor-content">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-textarea"
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
        />
      </div>
      
      {output && (
        <div className="output-section">
          <h4>Output:</h4>
          <pre className="output-content">{output}</pre>
        </div>
      )}
    </div>
  )
}

export default Editor
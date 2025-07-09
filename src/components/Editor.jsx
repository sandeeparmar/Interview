import React, { useState } from 'react';

const Editor = ({ language = 'javascript', initialCode = '' }) => {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');

    setTimeout(() => {
      try {
        if (language === 'javascript') {
          const result = eval(code);
          setOutput(result ? result.toString() : 'Code executed successfully');
        } else {
          setOutput('Code execution not implemented for this language');
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 bg-gray-900 text-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center border-b border-gray-700 pb-2">
        <div>
          <h3 className="text-xl font-semibold">Code Editor</h3>
          <span className="text-sm text-gray-400">Language: {language}</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={runCode}
            disabled={isRunning}
            className={`px-4 py-2 rounded-lg font-medium text-sm ${
              isRunning
                ? 'bg-yellow-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
          <button
            onClick={resetCode}
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 font-medium text-sm"
          >
            Reset
          </button>
        </div>
      </div>

      <div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          placeholder={`Write your ${language} code here...`}
          spellCheck="false"
          className="w-full h-60 bg-gray-800 text-sm text-green-200 font-mono p-4 rounded-lg resize-none outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {output && (
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="font-semibold mb-2 text-green-400">Output:</h4>
          <pre className="whitespace-pre-wrap text-sm text-gray-200">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default Editor;

import React, { useState } from 'react'

const Herosection = () => {
  const [count, setCount] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const questions = [
    {
      id: 1,
      question: 'Which continent has the highest number of countries?',
      correct: 'Africa',
      options: ['Africa', 'Asia', 'Europe', 'North America']
    },
    {
      id: 2,
      question: 'Which continent is the largest by land area?',
      correct: 'Asia',
      options: ['Africa', 'Asia', 'South America', 'Europe']
    },
    {
      id: 3,
      question: 'Which continent is known as the "Dark Continent"?',
      correct: 'Africa',
      options: ['Africa', 'Europe', 'Australia', 'North America']
    },
    {
      id: 4,
      question: 'Which continent is home to the Amazon Rainforest?',
      correct: 'South America',
      options: ['South America', 'Africa', 'Asia', 'Europe']
    },
    {
      id: 5,
      question: 'Which continent is the least populated?',
      correct: 'Antarctica',
      options: ['Antarctica', 'Africa', 'Europe', 'Asia']
    }
  ]

  const restartQuiz = () => {
    setCount(0)
    setScore(0)
    setSelectedAnswer(null)
    setIsCompleted(false)
  }

  const currentQuestion = questions[count]

  if (isCompleted) {
    return (
      <div
        className="bg-white p-8 rounded-2xl shadow-lg"
        style={{
          width: '75vw',
          position: 'relative',
          top: '57px',
          height: '79vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-gray-600 mb-8">
          Your final score is: {score} out of {questions.length}
        </p>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          onClick={restartQuiz}
        >
          Restart Quiz
        </button>
      </div>
    )
  }

  return (
    <div
      className="bg-white p-8 rounded-2xl shadow-lg"
      style={{
        width: '75vw',
        position: 'relative',
        top: '57px',
        height: '79vh',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
    >
      <h1 className="text-3xl font-bold mb-6" style={{ borderBottom: '2px solid #ccc', paddingBottom: '16px' }}>Quiz App</h1>

      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">{count + 1}. {currentQuestion?.question}</h2>
        <div className="flex justify-center mb-4">
          <p className="absolute w-20 text-gray-700" style={{ right: '28px', top: '115px' }}>Score: {score}</p>
        </div>

        <div className="grid gap-9">
          {currentQuestion?.options.map((answer) => (
            <button
              key={answer}
              disabled={selectedAnswer !== null}
              onClick={() => {
                if (selectedAnswer !== null) return
                setSelectedAnswer(answer)
                if (answer === currentQuestion?.correct) {
                  setScore(score + 1)
                }
              }}
              className={`w-full py-3 px-4 rounded-lg text-left font-medium transition border-2
                ${selectedAnswer !== null && answer === currentQuestion?.correct ? 'bg-green-200 border-green-400' : ''}
                ${selectedAnswer === answer && answer !== currentQuestion?.correct ? 'bg-red-200 border-red-400' : ''}
                ${selectedAnswer === null ? 'border-gray-200 hover:bg-blue-100' : ''}
                 ${selectedAnswer !== null
                  ? "cursor-not-allowed opacity-80"
                  : ""
                }
              `}
            >
              {answer}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-4 mt-4">
          <button
          {...selectedAnswer === null && { style: { cursor: 'not-allowed', opacity: 0.5 } }}
            className="bg-blue-900 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            disabled={selectedAnswer === null}
          onClick={() => {
            if (count === questions.length - 1) {
              setIsCompleted(true)
              return
            }

            setCount((prevCount) => prevCount + 1)
            setSelectedAnswer(null)
          }}
          >
            Next
          </button>
        </div>

        <p className="text-center text-gray-600">{count + 1} of {questions.length} questions</p>
      </div>
    </div>
  )
}

export default Herosection

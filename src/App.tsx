import React, { useState } from 'react';
import {fetchQuizQuestions} from './API';
//components
import { QuestionCard } from './components/QuestionCard'
//types
import {QuestionState, Difficulty} from './API';

const TOTAL_QUESTIONS = 10;

function App() {
  const[loading, setLoading] = useState(false);
  const[questions, setQuestions] = useState<QuestionState[]>([]);
  const[number, setNumber] = useState(0);
  const[userAnswers, setUserAnswers] = useState([]);
  const[score, setScore] = useState(0);
  const[gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  async function startTrivia () {

  }

  function checkAnswer (e: React.MouseEvent<HTMLButtonElement>) {

  }

  function nextQuestion () {

  }
  
  return (
    <div className="App">
      <h1>QUIZ GAME</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Scores ...</p>
      {/*<QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />*/}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;

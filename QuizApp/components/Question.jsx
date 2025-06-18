import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedOption, submitOneAnswer, resetQuiz } from '../redux/quizSlice';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestion, selectedOption, score } = useSelector(state => state.quiz);
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    dispatch(submitOneAnswer());
  };

  const handleSelect = (value) => {
    dispatch(setSelectedOption(value));
  };

  if (submitted || currentQuestion >= questions.length) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button onClick={() => dispatch(resetQuiz())}>Restart</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Q{currentQuestion + 1}. {question.question}</h2>
      {question.options.map((value, index) => (
        <button
          key={index}
          onClick={() => handleSelect(value)}
          style={{
            backgroundColor: selectedOption === value ? 'lightblue' : ''
          }}
        >
          {value}
        </button>
      ))}

      <br />

      <button
        onClick={() => setSubmitted(true)}
        disabled={currentQuestion !== questions.length - 1}
      >
        Submit
      </button>

      <button
        onClick={handleNext}
        disabled={currentQuestion >= questions.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;

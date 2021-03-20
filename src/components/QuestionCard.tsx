import React from 'react';

interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}   

export function QuestionCard ({question, answers, callback, userAnswer, questionNumber, totalQuestions}: QuestionCardProps) {
    return (
        <div>
            <p className="number">
                Question: {question}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {
                    answers.map(function (answer) {
                        <div>
                            <button disabled={userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}/>
                            </button>
                        </div>
                    })
                }
            </div>
        </div>
    );
}


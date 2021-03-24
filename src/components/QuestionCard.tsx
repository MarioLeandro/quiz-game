import React from 'react';
//types
import {AnswerObject} from '../App';

interface QuestionCardProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}   

export function QuestionCard ({question, answers, callback, userAnswer, questionNumber, totalQuestions}: QuestionCardProps) {
    return (
        <div>
            <p className="number">
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map((answer) => (
                   <div key={answer}>
                       <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                       </button>
                   </div> 
                ))
                }
            </div>
        </div>
    );
}


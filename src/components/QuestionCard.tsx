import React from 'react';
//types
import {AnswerObject} from '../App';
//styles
import { Wrapper, ButtonWrapper} from './QuestionCard.styles';

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
        <Wrapper>
            <p className="number">
                Question: {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper 
                        key={answer} 
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer }
                    >
                       <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                       </button>
                   </ButtonWrapper> 
                ))
                }
            </div>
        </Wrapper>
    );
}


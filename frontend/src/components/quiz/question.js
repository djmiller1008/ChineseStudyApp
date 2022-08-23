import React, { useEffect, useState } from "react";
import "../../assets/quiz.scss";

const Question = ({ getDiary, user_id, diary }) => {

    const [alreadyMixed, setAlreadyMixed] = useState(false);
    const [mixedAnswers, setMixedAnswers] = useState([]);
    const [diaryIndex, setDiaryIndex] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [correctMessage, setCorrectMessage] = useState("");
    const [incorrectMessage, setIncorrectMessage] = useState("");
    const [disabled, toggleDisabled] = useState("");
    const [numCorrect, setNumCorrect] = useState(0);
    

    useEffect(() => {
        getDiary(user_id);
    }, []);

    const storeFirstAnswer = realAnswer => {
        if (answer === null) {
            setAnswer(realAnswer);
        }
    }

    const resetGame = (e) => {
        e.preventDefault();
        setAnswer(null);
        setNumCorrect(0);
        toggleDisabled("");
        setDiaryIndex(0);
    }

    

    const createQuestion = () => {

        if (diaryIndex >= diary.length) {
            return (
                <div className="endgame-div">
                    
                    <section>
                        
                        <p>You got {numCorrect} / {diary.length} correct.</p>
                    </section>
                    <button onClick={resetGame}>Try Again</button>
                </div>
            );
        }

        const answerArray = [];
        const character = diary[diaryIndex].character;

        const realAnswer = diary[diaryIndex].pinyin;
        answerArray.push(realAnswer);
        
        storeFirstAnswer(realAnswer);
       

        const randomAnswer1 = getRandomAnswer(diaryIndex);
        answerArray.push(randomAnswer1);

        let randomAnswer2 = getRandomAnswer(diaryIndex);
        
        while (randomAnswer1 === randomAnswer2) {
            randomAnswer2 = getRandomAnswer(diaryIndex);
        }
        answerArray.push(randomAnswer2);

        let mixedAnswerArray;
        if (alreadyMixed) {
            mixedAnswerArray = mixedAnswers;
        } else {
            mixedAnswerArray = mixAnswers(answerArray);
            setAlreadyMixed(true);
            setMixedAnswers(mixedAnswerArray);
        }
            
        const answers = mixedAnswers.map((option, i) => {
                
                if (option === answer) {
                    return <button key={i} disabled={disabled} className="correct" onClick={handleCorrectAnswer}>{option}</button>
                } else {
                    return <button key={i} disabled={disabled} className="incorrect" onClick={handleIncorrectAnswer}>{option}</button>
                }
            
            })

        return (
            <div>
                <h1>{character}</h1>
                <section className="message-section">
                    {correctMessage}
                    {incorrectMessage}
                </section>
                <section className="answer-section">
                    {answers}
                </section>
            </div>
        );
    }

    const handleCorrectAnswer = (e) => {
        e.preventDefault();
        setNumCorrect(numCorrect + 1);
        setCorrectMessage(<h2>Correct!</h2>);
        toggleDisabled("disabled");
        setTimeout(() => {
            setDiaryIndex(diaryIndex + 1);
            setCorrectMessage("");
            setAnswer(diary[diaryIndex + 1].pinyin);
            toggleDisabled("");
            setAlreadyMixed(false);
        }, 2000);
       
        
        
    }

    const handleIncorrectAnswer = (e) => {
        e.preventDefault();
        setIncorrectMessage(<h2>Incorrect</h2>);
        toggleDisabled("disabled");
        setTimeout(() => {
            setDiaryIndex(diaryIndex + 1);
            setIncorrectMessage("");
            setAnswer(diary[diaryIndex + 1].pinyin);
            toggleDisabled("");
            setAlreadyMixed(false);
        }, 2000);
    }

    const mixAnswers = (answerArray, numAnswers = 3) => {
        
        const mixedIndexArray = [];
        const randomIdx1 = Math.floor(Math.random() * numAnswers);
        mixedIndexArray.push(randomIdx1);

        let randomIdx2 = Math.floor(Math.random() * numAnswers);
        while (randomIdx2 === randomIdx1) {
            randomIdx2 = Math.floor(Math.random() * numAnswers);
        }
        mixedIndexArray.push(randomIdx2);

        const randomIdx3 = numAnswers - randomIdx1 - randomIdx2;
        mixedIndexArray.push(randomIdx3);

        return mixedIndexArray.map(idx => answerArray[idx]);

    }

    const getRandomAnswer = (currentAnswerIdx) => {
        let random = Math.floor(Math.random() * diary.length);
        while (random === currentAnswerIdx) {
            random = Math.floor(Math.random() * diary.length);
        }

        return diary[random].pinyin;
    }
   
    if (diary.length > 0) {
        return (
            <div className="main-quiz-container">
                <h1>Choose the correct pinyin!</h1>
                <div>
                    {createQuestion()}
                </div>
            </div>
        );
    } 

    return (
        <div className="no-entries-div">
            <p>Add some characters to your diary to take a quiz!</p>
        </div>
    )
};

export default Question;
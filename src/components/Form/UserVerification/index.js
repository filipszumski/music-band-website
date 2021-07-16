import React from "react";

export const UserVerification = ({ question, setQuestion }) => {

    return (
        <fieldset>
            <legend>Weryfikacja użytkownika</legend>
            <p>
                {question.content}
            </p>
            <ol type="A">
                {question.answers.map((answer, liIndex) => (
                    <li key={answer.answer}>
                        <input
                            type="radio"
                            name="answer"
                            id={answer.answer}
                            checked={answer.checked}
                            onChange={({ target }) => setQuestion({
                                ...question,
                                answers: question.answers.map((answer, index) => {
                                    if (index === liIndex) {
                                        return {
                                            ...answer,
                                            checked: target.checked
                                        }
                                    }
                                    return {
                                        ...answer,
                                        checked: !target.checked
                                    }
                                })
                            })}
                        />
                        <label htmlFor={answer.answer}>{answer.answer}</label>
                    </li>
                ))}
            </ol>
        </fieldset>
    )
}
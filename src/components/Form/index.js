import React, { useState } from "react";
import { Input } from "./Input";
import { Button, FormContentWrapper, StyledForm } from "./styled";
import { Textarea } from "./Textarea";
import { useFormValidator } from "./useFormValidator";
import { questions } from "./questions";
import { UserVerification } from "./UserVerification";

export const Form = ({ isFormActive, setIsFormActive }) => {
    const inisitalFormDataState = {
        fields: {
            name: "",
            email: "",
            tel: "",
            message: "",
        },
        errors: {
            name: "To pole nie może być puste",
            email: "To pole nie może być puste",
            tel: "To pole nie może być puste",
            message: "To pole nie może być puste",
        },
    };

    const [formData, setFormData] = useState(inisitalFormDataState);
    const [showErrors, setShowErrors] = useState(false);
    const [question, setQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);
    const validate = useFormValidator();

    const handleClick = () => {
        setIsFormActive(prevState => !prevState);
        setFormData(inisitalFormDataState);
        setShowErrors(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(formData.errors).length) {
            alert("Formularz zawiera błędy, popraw je aby móc wysłać formularz")
            setShowErrors(true);
            return;
        };

        if (!question.answers.some(answer => answer.checked && answer.correct)) {
            alert("Błędna odpowiedź na pytanie weryfikacyjne. Aby wysłać formularz musisz prawidłowo odpowiedzieć na pytanie. Spróbuj ponownie :)");
            setQuestion(questions[Math.floor(Math.random() * questions.length)]);
            return;
        };

        setIsFormActive(false);
        setFormData(inisitalFormDataState);
        setQuestion(questions[Math.floor(Math.random() * questions.length)]);
        setShowErrors(false);
        setTimeout(() => alert("Udało się wysłać formularz! :)"), 300);
    };

    return (
        <StyledForm isActive={isFormActive} onSubmit={handleSubmit}>
            <FormContentWrapper>
                <Button type="button" justifyStart onClick={handleClick}>X</Button>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    labelText="Imię i nazwisko"
                    formData={formData}
                    setFormData={setFormData}
                    validate={validate}
                    showErrors={showErrors}
                />
                <Input
                    type="email"
                    name="email"
                    id="email"
                    labelText="E-mail"
                    formData={formData}
                    setFormData={setFormData}
                    validate={validate}
                    showErrors={showErrors}
                />
                <Input
                    type="tel"
                    name="tel"
                    id="tel"
                    labelText="Telefon"
                    formData={formData}
                    setFormData={setFormData}
                    validate={validate}
                    showErrors={showErrors}
                />
                <Textarea
                    name="message"
                    id="message"
                    labelText="Treść wiadomości"
                    formData={formData}
                    setFormData={setFormData}
                    validate={validate}
                    showErrors={showErrors}
                />
                <UserVerification
                    question={question}
                    setQuestion={setQuestion}
                />
                <Button type="submit">Wyślij</Button>
            </FormContentWrapper>
        </StyledForm>
    )
};
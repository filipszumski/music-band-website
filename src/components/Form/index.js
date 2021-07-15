import React, { useState } from "react";
import { Input } from "./Input";
import { Button, FormContentWrapper, StyledForm } from "./styled";
import { Textarea } from "./Textarea";
import { useFormValidator } from "./useFormValidator";

export const Form = ({ isFormActive, setIsFormActive }) => {
    const [formData, setFormData] = useState({
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
    });
    const validate = useFormValidator();
    const [showErrors, setShowErrors] = useState(false);

    const handleClick = () => {
        setIsFormActive(prevState => !prevState)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(formData.errors).length) {
            alert("Formularz zawiera błędy, popraw je aby móc wysłać formularz")
            setShowErrors(true);
        };

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
                <fieldset>
                    <legend>Weryfikacja użytkownika</legend>
                    <p>
                        Treść pytania ?
                    </p>
                    <ul>
                        <li>
                            <input type="radio" name="answer" id="answer_1" />
                            <label htmlFor="answer_1">Odpowiedz_1</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_2" />
                            <label htmlFor="answer_1">Odpowiedz_2</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" id="answer_3" />
                            <label htmlFor="answer_1">Odpowiedz_3</label>
                        </li>
                    </ul>
                </fieldset>
                <Button type="submit">Wyślij</Button>
            </FormContentWrapper>
        </StyledForm>
    )
}
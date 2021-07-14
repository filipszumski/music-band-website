import React from "react";
import { StyledForm } from "./styled";

export const Form = () => {

    return (
        <StyledForm>
            <button>Close</button>
            <p>
                <label htmlFor="name">Imię i nazwisko</label>
                <input type="text" name="name" id="name" />
            </p>
            <p>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
            </p>
            <p>
                <label htmlFor="tel">Telefon</label>
                <input type="tel" name="tel" id="tel" />
            </p>
            <p>
                <label htmlFor="message">Treść wiadomości</label>
                <textarea name="tel" id="tel" />
            </p>
            <p>
                <fieldset>
                    <legend>Weryfikacja użytkownika (odpowiedz prawidłowo na pytanie)</legend>
                    <p>
                        Treść pytania ?
                    </p>
                    <p>
                        <input type="radio" name="answer" id="answer_1" />
                        <label htmlFor="answer_1">Odpowiedz_1</label>
                    </p>
                    <p>
                        <input type="radio" name="answer" id="answer_2" />
                        <label htmlFor="answer_1">Odpowiedz_2</label>
                    </p>
                    <p>
                        <input type="radio" name="answer" id="answer_3" />
                        <label htmlFor="answer_1">Odpowiedz_3</label>
                    </p>
                </fieldset>
            </p>
        </StyledForm>
    )
}
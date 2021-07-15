export const useFormValidator = () => {
    const nameValidation = (name) => {
        if (name.trim() === "") {
            return "To pole nie może być puste";
        }
        if (/[^a-zA-z -]/.test(name)) {
            return "Pole może zawierać jedynie litery";
        }
        return null;
    };

    const emailValidation = (email) => {
        if (email.trim() === "") {
            return "To pole nie może być puste";
        }
        if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email)) {
            return "Podaj adres email w prawidłowym formacie np. imienazwisko@mail.com";
        }

        return null;
    };

    const telValidation = (tel) => {
        if (tel.trim() === "") {
            return "To pole nie może być puste";
        }
        if (!/^(([+]?[0-9]{2}[- ]?[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{3})|([0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{3}))$/gm.test(tel)) {
            return "Podaj numer telefonu w prawidłowym formacie np. 111 111 111 lub +48 111 111 111";
        }

        return null;
    };

    const messageValidation = (message) => {
        if (message.trim() === "") {
            return "To pole nie może być puste";
        }
        if (message.trim().length < 10) {
            return "Wiadomość musi mieć przynajmniej 10 znaków"
        }
        return null;
    };

     const validate = {
        name: nameValidation,
        email: emailValidation,
        tel: telValidation,
        message: messageValidation
    };

    return validate;
}
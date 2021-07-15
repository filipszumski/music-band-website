import React from "react";
import { ErrorText, Label, StyledInput, Wrapper } from "./styled";

export const Input = ({ type, name, id, labelText, formData, setFormData, validate, showErrors }) => {

    const handleInputChange = ({ target }) => {
        const { [target.name]: removedError, ...restErrors } = formData.errors;

        const error = validate[target.name](target.value);

        setFormData({
            ...formData,
            fields: {
                ...formData.fields,
                [target.name]: target.value
            },
            errors: {
                ...restErrors,
                ...(error && { [target.name]: error })
            }
        })
    };

    return (
        <Wrapper>
            <Label htmlFor={id}>{labelText}* : </Label>
            <StyledInput
                type={type}
                name={name}
                id={id}
                value={formData.fields[name]}
                onChange={handleInputChange}
                error={showErrors && formData.errors[name]}
            />
            <ErrorText>{showErrors && formData.errors[name]}</ErrorText>
        </Wrapper>
    )
}
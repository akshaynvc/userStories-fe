import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface TextInputProps {
  field: any;
  label: string;
  name: string;
  id: string;
  value: any;
  form: {
    touched: any;
    errors: any;
  };
  [prop: string]: any;
}

const TextArea: FC<TextInputProps> = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  defaultValue,
  ...props
}) => {
    const fieldValue = field.value || defaultValue || "";
  return (
    <Fragment>
      <Label htmlFor={id}>{label}</Label>
      <TextFieldWrapper>
        <TextInput id={id} {...field} {...props} value={fieldValue} />
        {touched[field.name] && errors[field.name] && (
          <Error>{errors[field.name]}</Error>
        )}
      </TextFieldWrapper>
    </Fragment>
  );
};

export default TextArea;

const Label = styled.label`
  margin-bottom: 8px;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const TextInput = styled.textarea`
  border: 1px solid ${theme.secondary};
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.blue};
  }
`;

const Error = styled.div`
  color: red;
`;

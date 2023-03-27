import React, { FC, Fragment } from "react";
import { Error, Input, Label, Wrapper } from "./styles";

interface SelectInputProps {
  field: any;
  label: string;
  name: string;
  id: string;
  value: any;
  form: {
    touched: any;
    errors: any;
  };
  options: any[];
  [prop: string]: any;
}

const SelectField: FC<SelectInputProps> = ({
  field,
  label,
  name,
  id,
  value,
  form: { touched, errors },
  options,
  ...props
}) => {
  return (
    <Fragment>
      <Label htmlFor={id}>{label}</Label>
      <Wrapper>
        <Input id={id} {...field} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input>
        {touched[field.name] && errors[field.name] && (
          <Error>{errors[field.name]}</Error>
        )}
      </Wrapper>
    </Fragment>
  );
};

export default SelectField;

import React from "react";
// import { Input, Label, FormGroup } from "reactstrap";
import { Controller } from "react-hook-form";
import { FormGroup } from "reactstrap";
import { InputStyled } from "../../../styles/utils";


type InputTextProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  title: string;
  id: string;
};


export default function InputText({
  name,
  placeholder,
  title,
  type,
  id,
  control,
}: InputTextProps) {
  return (
    <FormGroup floating>
      <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <InputStyled
          {...field}
          placeholder={placeholder}
          name={name}
          id={id}
          type={type}
          label={title}
          variant="filled"
          fullWidth
        />
      )}
    />
    </FormGroup>

  );
}

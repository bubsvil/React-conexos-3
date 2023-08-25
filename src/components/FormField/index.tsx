import { Field } from "./style";

interface FieldProps {
  label: string;
  name: string;
  type: string;
}

export default function FormField({ label, name, type }: FieldProps) {
  return (
    <>
      <Field>
        <label>{label}</label>
        <input type={type} name={name} />
      </Field>
    </>
  );
}

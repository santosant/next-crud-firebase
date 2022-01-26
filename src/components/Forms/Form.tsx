import { useState } from "react";
import Customer from "../../core/Customer/Customer";
import Button from "../Button/Button";
import Input from "../Input/Input";

interface FormProps {
  customer: Customer;
  customerChange?: (customer: Customer) => void;
  cancelled?: () => void;
}

export function Form(props: FormProps) {
  const id = props.customer?.id;
  const [name, setName] = useState(props.customer?.name ?? "");
  const [age, setAge] = useState(props.customer?.age ?? 0);

  return (
    <div>
      {id ? <Input text="Código" value={id} readonly type="number" /> : false}
      <Input
        text="Nome"
        value={name}
        onChange={setName}
        type="text"
        className="mb-4"
      />
      <Input
        text="Idade"
        value={age}
        onChange={setAge}
        type="text"
        className="mb-4"
      />

      <div className="mt-7 flex justify-end">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.customerChange?.(new Customer(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>

        <Button onClick={props.cancelled}>Cancelar</Button>
      </div>
    </div>
  );
}

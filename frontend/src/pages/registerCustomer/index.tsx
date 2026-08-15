import { useState } from "react";
import * as _ from "./style";
import banner from "../../assets/banner.jpg";
import { Input } from "../../components/UI/input";
import { ColorPicker } from "../../components/ColorPicker";
import { Button } from "../../components/UI/button";

export const RegisteCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [color, setColor] = useState<string | null>(null);

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfNumbers = cpf.replace(/\D/g, "");

    const hasEmptyFields = [fullName, email, cpf, color].some(
      (value) => !value?.trim(),
    );

    const isValidEmail = emailRegex.test(email);
    const isValidCpf = cpfNumbers.length === 11;

    if (hasEmptyFields || !isValidEmail || !isValidCpf) {
      console.log("Formulário inválido");
      return;
    }

    console.log({
      fullName,
      email,
      cpf: cpfNumbers,
      color,
    });
  };

  return (
    <_.Container>
      <_.Content>
        <_.BannerContainer>
          <_.Banner src={banner} />
        </_.BannerContainer>

        <_.FormContainer>
          <_.FormTitle>Register Form</_.FormTitle>

          <Input
            type="text"
            placeholder="Full name"
            label="Full name *"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            label="Email *"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            type="text"
            placeholder="CPF"
            label="CPF *"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />

          <ColorPicker value={color} onChange={setColor} />

          <Button style={{ marginTop: "20px" }} onClick={onSubmit}>
            Submit
          </Button>
        </_.FormContainer>
      </_.Content>
    </_.Container>
  );
};

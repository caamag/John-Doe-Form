import { useState } from "react";
import * as _ from "./style";
import banner from "../../assets/banner.jpg";
import { Input } from "../../components/UI/input";
import { ColorPicker } from "../../components/ColorPicker";
import { Button } from "../../components/UI/button";
import { useRegister } from "./useRegister";
import { formatCpf } from "../../utils/formatCpf";

export const RegisteCustomer = () => {
  const { onSubmit, loading } = useRegister();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [favoriteColor, setFavoriteColor] = useState<string | null>(null);
  const [observations, setObservations] = useState<string>("");

  const payload = {
    name,
    email,
    cpf,
    favoriteColor: favoriteColor ?? "",
    observations,
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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            onChange={(event) => setCpf(formatCpf(event.target.value))}
          />

          <textarea
            placeholder="Observations: "
            value={observations}
            onChange={(e) => {
              setObservations(e.target.value);
            }}
          />

          <p>Selecione sua cor favorita</p>

          <ColorPicker value={favoriteColor} onChange={setFavoriteColor} />

          <Button
            style={{ marginTop: "20px" }}
            onClick={() => {
              onSubmit(payload);
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </_.FormContainer>
      </_.Content>
    </_.Container>
  );
};

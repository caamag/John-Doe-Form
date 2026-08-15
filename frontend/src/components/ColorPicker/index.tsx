import * as _ from "./style";

interface ColorPickerProps {
  value: string | null;
  onChange: (color: string) => void;
}

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <_.Container>
      {colors.map((color) => (
        <_.Color
          key={color}
          color={color}
          selected={value === color}
          onClick={() => onChange(color)}
          type="button"
          aria-label={`Selecionar cor ${color}`}
        />
      ))}
    </_.Container>
  );
}

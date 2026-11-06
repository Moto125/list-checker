import { Label, Radio, RadioGroup } from "@heroui/react";

type RadioButtonProps = {
  list: {
    id: string;
    label: string;
  }[];
  defaultValue?: string;
  onChange: (id: string) => void;
};
export function RadioButtons({
  list,
  defaultValue,
  onChange,
}: RadioButtonProps) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      onChange={(nextValue) => onChange(nextValue)}
    >
      {list.map((option, idx) => (
        <Radio key={idx} value={option.id}>
          <Radio.Content>
            <Radio.Control>
              <Radio.Indicator />
            </Radio.Control>
            <Label>{option.label}</Label>
          </Radio.Content>
        </Radio>
      ))}
    </RadioGroup>
  );
}

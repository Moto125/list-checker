import { Checkbox, CheckboxGroup, Label } from "@heroui/react";

type CheckListCardProps = {
  checklist: string[];
  onCheck: (index: number) => void;
};
export function CheckListCard({ checklist, onCheck }: CheckListCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <CheckboxGroup>
        {checklist.map((check, index) => {
          return (
            <Checkbox key={index} value={check} onChange={() => onCheck(index)}>
              <Checkbox.Content>
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Label>{check}</Label>
              </Checkbox.Content>
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </div>
  );
}

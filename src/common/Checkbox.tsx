type ButtonProps = {
  checked?: boolean;
  disabled?: boolean;
  onCheck: (value: boolean) => void;
};
export function Checkbox({ checked, disabled, onCheck }: ButtonProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onCheck(e.target.checked)}
    />
  );
}

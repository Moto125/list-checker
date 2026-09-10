type TextInputProps = {
  value: string
  disabled?: boolean
  onChange: (value: string) => void
}
export function TextInput({ value, disabled, onChange }: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
      className="border border-text-primary text-text-primary px-2 py-2 focus:outline-none focus:ring-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
    />
  )
}
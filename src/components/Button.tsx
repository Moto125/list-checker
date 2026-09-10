type ButtonProps = {
  text: string
  disabled?: boolean
  onPress: () => void
}
export function Button({ text, disabled, onPress }: ButtonProps) {
  return (
    <button onClick={onPress} disabled={disabled} className="bg-primary text-text-primary font-semibold px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed">
      {text}
    </button>
  )
}
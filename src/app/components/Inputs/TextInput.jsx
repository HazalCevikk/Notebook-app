const TextInput = ({ label, placeholder, className, innerRef, ...props }) => (
    <div className="flex flex-col">
      {label && <label className="text-xs">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className={`px-2 py-1 bg-[#f2f1ee]/60 rounded text-base ${className || ''}`}
        ref={innerRef}
        {...props}
      />
    </div>
)

export default TextInput

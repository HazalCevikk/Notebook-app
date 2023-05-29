const Button = ({ icon, text, className, ...props }) => (
        <button className={`border-2 border-[#0f0f0f]/15 cursor-pointer hover:bg-[#37352f]/[0.08] px-3 w-full rounded ${className || ''}`} {...props} >
            {icon}
            {text}
        </button>
)

export default Button;

export default function AuthLayout({ children }) {
  return (
    <div className="h-screen pt-20">
      <div className="w-64 m-auto">{children}</div>
    </div>
  )
}

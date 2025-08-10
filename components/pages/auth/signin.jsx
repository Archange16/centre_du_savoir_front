import { signIn } from 'next-auth/react'

export default function SignIn() {
  const handleLogin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/'
    })
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  )
}

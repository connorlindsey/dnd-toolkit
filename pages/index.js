import AuthForm from "../components/AuthForm"

export default function Home() {
  return (
    <div>
      <h1>Tools for DMs and Players</h1>
      <h2>Sign up - It's free</h2>
      <p>Currently offering:</p>
      <ul>
        <li>Monster Lookup</li>
        <li>Spell Lookup</li>
      </ul>

      <AuthForm />
    </div>
  )
}

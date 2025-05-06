import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const signup = async (username, email, contact, password, password_confirmation) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(
      "https://grokart-backend.onrender.com/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          contact,
          password,
          password_confirmation,
        }),
      }
    );
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.errors)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      navigate("/")

      // update loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}
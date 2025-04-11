import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  const navigateUserDetail = () => {
    const userId = 1
    navigate(`/users/${userId}`)
  }
  return (
    <>
      <h1>Home</h1>
      <Link to='/about'>About </Link>
      <button onClick={navigateUserDetail}>Switch to user detail</button>
    </>
  )
}

function RedirectPage () {
  const [count, setCount] = useState(-1)
  const navigate = useNavigate()

  const handleClick = () => {
    setCount(4)
  }

  useEffect(() => {
    if (count == -1) {
      return
    }
    const interval = setInterval(() => {
      setCount(count - 1)
    }, 1000)
    console.log(count)
    if (count == 0) {
      navigate(`/about`)
    }
    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      <button onClick={handleClick}>Switch Page</button>
      {count > 0 && <p>Navigate to about in {count}s</p>}
    </div>
  )
}

export { RedirectPage, Home }

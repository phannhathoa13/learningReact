import { useParams } from 'react-router-dom'

function UserDetail () {
  const { id } = useParams()
  return (
    <>
      <h1>Hello {id} </h1>
    </>
  )
}

export { UserDetail }

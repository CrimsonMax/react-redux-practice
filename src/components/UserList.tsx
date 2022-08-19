import { useEffect } from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../store/hooks/useTypedSelector"
import { useActions } from "../store/hooks/useActions"

export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  const dispatch: Dispatch<any> = useDispatch()
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>{error}</h1>

  return (
    <div>
      {users.map(elem => <div key={elem.id}>{elem.name}</div>)}
    </div>
  )
}
import {useQuery} from '@apollo/client'

import {GET_USERS} from '../query/user'
function Users() {

    const {loading,error,data} =useQuery(GET_USERS)

    if(loading) return 'loading....';
    if (error) return `Error! ${error.message}`;
  return (
    <div>

        <h1>Users List</h1>
        <ul>
            {data.users.data.map(user =>(
                <li key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users
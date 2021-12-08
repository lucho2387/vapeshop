import { Link } from "react-router-dom"

const UsersList = ({ users, setCurrentUser }) => {
    
    return (
        <>
            {
                users.map((user) => {
                    const { first, last } = user.name
                    const {username} = user.login
                    return (
                        <Link
                        to={`/profile/${username}`}
                        onClick={() => setCurrentUser(user)}
                        key={username}
                        >
                            <h1>{first} {last}</h1>
                        </Link>
                    )
                })
            }  
        </>
    )

}

export default UsersList
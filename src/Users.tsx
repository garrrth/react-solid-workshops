import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css';

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data)
    })
  }, [])

  return (
    <ul id='users-list'>
      {users.filter((user) => user.id <= 4).map((user) => (
        <div key={user.id} className='user-info' role='listitem'>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Website:</strong> <a href={user.website}>{user.website}</a></p>
        </div>
      ))}
    </ul>
  )
}

export default Users
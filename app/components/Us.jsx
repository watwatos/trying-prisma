
import React from 'react'

export const getData=async()=>{
    const res = await fetch(`${process.env.API_URL}/api/user`)
    return res.json()
}

const Us = async() => {
    const users = await getData()
    console.log(users)
  return (
    <div>
        {users.map(user=>user.id)}
    </div>
  )
}

export default Us

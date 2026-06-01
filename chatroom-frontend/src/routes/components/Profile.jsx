import React from 'react'
import { useState } from 'react'

export default function Profile(home) {
    const user = {
        id: 1,
        username: 'John123',
        name: 'John Doe',
        city: 'Los Angeles',
        profilePic: 'zany.jpg',
        theme: 'red'
    }
    const [edit, setEdit] = useState(false)
    const [username, setUsername] = useState(user.username)
    const [name, setName] = useState(user.name)
    const [city, setCity] = useState(user.city)
    const [profilePic, setProfilePic] = useState(user.profilePic)
    const [theme, setTheme] = useState(user.theme)

    const handleSave= () => {
        e.preventDefault()
        
    }
  return (
    <div>
        { edit ? 
            <>
                <form action="">
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} name='username' onChange={(e) => {setUsername(e.target.value)}}/>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                    <label htmlFor="">City:</label>
                    <input type="text" />
                    <label htmlFor="">Profile Picture:</label>
                    <select name="" id="">
                        <option value="default">default</option>
                        <option value="cool">cool</option>
                        <option value="zany">zany</option>
                        <option value="calm">calm</option>
                    </select>
                    <label htmlFor="">Theme</label>
                    <select name="" id="">
                        <option value="default">default</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                    </select>
                    <button>Save</button>
                </form>
            </>
            :
            <>
                <p>Username:</p>
                <p>{user.username}</p>
                <p>Name:</p>
                <p>{user.name}</p>
                <p>City:</p>
                <p>{user.city}</p>
                <p>Profile Picture:</p>
                <p>{user.profilePic}</p>
                <p>Theme:</p>
                <p>{user.theme}</p>
                <p>Click this button to edit</p>
            </>          
        }  
    </div>
  )
}

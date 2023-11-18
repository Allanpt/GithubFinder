import { UserProps } from '../types/user'
import { useState } from 'react'

import Search from '../components/Search'
import User from '../components/User'
import Erro from '../components/Erro'

function Home() {

    const [user, setUser] = useState<UserProps | null>(null)
    const [erro, setErro] = useState(false)

    const loadUser = async (username:string) => {
        
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()

        if(username === ""){
          setUser(null)
          setErro(false)
          return
        }
        
        if(res.status === 404){
          setUser(null)
          setErro(true)
          return
        }

        const { avatar_url, login, location, followers, following} = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        console.log(userData)
        setErro(false)
        setUser(userData)
    }

  return (
    <div>
        <Search loadUser={loadUser}/>
        {erro && <Erro/>}
        {user && <User {...user}/>}
    </div>
  )
}

export default Home
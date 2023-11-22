import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { RepoProps } from '../types/repos'
import Loader from '../components/Loader'
import BackBtn from '../components/BackBtn'
import Repo from '../components/Repo'

import classes from './Repos.module.css'

function Repos() {
  const {username} = useParams()

  const [repos, setRepos] = useState< RepoProps[] | [] | null >(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadRepos = async (username: string) => {
    setIsLoading(true)

    const res = await fetch(`https://api.github.com/users/${username}/repos`)

    const data = await res.json()

    let orderedRepos = data.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count)

    orderedRepos = orderedRepos.slice(0, 5)

    setRepos(orderedRepos)
    setIsLoading(false)
  }
  useEffect(() => {
    if(username){
      loadRepos(username)
    }
  }, [])

  return (
    <div className={classes.repos}>
      {isLoading && <Loader/>}
      {repos && (
        <div>
          <h2>Explore os repositórios do usuário: {username}</h2>
          <BackBtn/>
          {repos.length === 0 && <p>Não há repositórios</p>}
          {repos.length > 0 && (
            <div className={classes.repos_container}>
              {repos.map((repo) => (
                <Repo key={repo.name} {...repo}/>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Repos

import { RepoProps } from "../types/repos"
import { BsCodeSlash } from "react-icons/bs"
import {AiOutlineStar, AiOutlineFork} from "react-icons/ai"
import {RiGitRepositoryLine} from "react-icons/ri"

import classes from "./Repo.module.css"

function Repo({name, html_url, language, stargazers_count, forks_count} : RepoProps) {

  return (
    <div className={classes.repos_div}>
        <h3>{name}</h3>
        <p className={classes.language}>
            <BsCodeSlash/>
            <span>{language}</span>
        </p>
        <div className={classes.stats}>
            <div>
                <AiOutlineStar/>
                <span>{stargazers_count}</span>
            </div>
            <div>
                <AiOutlineFork/>
                <span>{forks_count}</span>
            </div>
        </div>
        <a href={html_url} target="_blank" rel="noopener noreferrer" className={classes.repo_btn}>
            <span>Ver código</span>
            <RiGitRepositoryLine/>
        </a>
    </div>
  )
}

export default Repo
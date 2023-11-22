import { useState } from "react"

import {Outlet} from "react-router-dom"

import BackBtn from "./components/BackBtn"

import classes from "./App.module.css"

function App() {

  const [reposClass, setReposClass] = useState(false)

  const haveReposClass = document.querySelector('._repos_1ol9s_1')

  if(haveReposClass){
    console.log(haveReposClass)
  }
  
  console.log(haveReposClass?.className.includes("_repos_1ol9s_1"))
  if(haveReposClass?.className.includes("repos")){
    
    setReposClass(true)
  }
  return (
    <div className={classes.app}>
        {reposClass && <BackBtn/>}
        <h1>Github Finder</h1>
        <Outlet/>
    </div>
  )
}

export default App

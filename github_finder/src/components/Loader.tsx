import { LiaSpinnerSolid } from "react-icons/lia";

import classes from "./Loader.module.css"

function Loader() {
  return (
    <>
        <LiaSpinnerSolid className={classes.loader}/>
    </>
  )
}

export default Loader
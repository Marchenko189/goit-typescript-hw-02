import { CSSProperties } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import css from "./Loader.module.css"


export default function Loader({ loading }) {
    
  return (
      <div className={css.container}>
      <ScaleLoader color="#007bff" size={100}
        loading={loading}/>
      </div>
        
    )
}
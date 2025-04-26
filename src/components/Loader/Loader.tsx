import ScaleLoader from "react-spinners/ScaleLoader";
import css from "./Loader.module.css"
import { LoaderProps } from "./Loader.types";


export default function Loader({ loading }: LoaderProps) {
    
  return (
      <div className={css.container}>
      <ScaleLoader color="#007bff" height={50} width={5} margin={3} loading={loading}/>
      </div>
        
    )
}
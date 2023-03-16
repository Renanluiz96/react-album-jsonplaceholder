import { Link } from "react-router-dom"
import "./style.css"


type Props = {
    id: number
    title: string
}


export const Item = ({ id, title}: Props)=> {
  return (
    <Link to={`/album/${id}`}>
        {title}
    </Link>
  )
}

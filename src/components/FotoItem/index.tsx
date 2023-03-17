import { Link } from 'react-router-dom'
import { Foto } from '../../types/foto'
import './styles.css'

type Props = {
    data: Foto
}

export const FotoItem = ({ data }: Props) => {
  return (
    <div >
        <Link to={`/photo/${data.id}`}  className="fotos">
        <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    </div>
  )
}

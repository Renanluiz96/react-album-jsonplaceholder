import { useEffect, useState } from "react"
import { api } from "../api"
import { Item } from "../components/Item"
import { AlbumType } from "../types/album"

export const Home = () => {
  const [album, setAlbum] = useState<AlbumType[]>([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=> {carregarAlbum()}, [])

  const carregarAlbum = async  () => {
    setLoading(true)
    const listagem = await api.getAlbums();
    setAlbum(listagem)
    setLoading(false)
  }
  return (
    <div>
      {loading && "Carregando"}

      <ul>
        {album.map((item, index)=> (
          <li key={index}>
            <Item  id={item.id}  title={item.title} />
          </li>
        ))}
      </ul>
        
    </div>
  )
}

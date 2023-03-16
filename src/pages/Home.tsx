import { useEffect, useState } from "react"
import { api } from "../api"
import { Item } from "../components/Item"
import { AlbumType } from "../types/album"



export const Home = () => {

  const [album, setAlbum] = useState<AlbumType[]>([])


  useEffect(()=> {carregarAlbum()}, [])


  const carregarAlbum = async  () => {
    const listagem = await api.getAlbums();
    setAlbum(listagem)
  }

  console.log(album)


  return (
    <div>
        

        <ul>
          {album.map((item, index)=> (
            <li>
              <Item key={index} id={item.id}  title={item.title} />
            </li>
          ))}
        </ul>
        
    </div>
  )
}

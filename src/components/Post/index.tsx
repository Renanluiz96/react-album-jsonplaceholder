import './style.css' 
import axios from "axios";
import { useEffect, useState } from 'react';
import { Album } from '../../types/album';



export const Post = () => {
  const BASE = 'https://jsonplaceholder.typicode.com'

  const [album, setAlbum] = useState<Album[]>([])

  const loadAlbum = async () => {
    let response = await axios.get(`${BASE}/albums`)
    return setAlbum(response.data)
  }
  
  console.log(setAlbum)

  useEffect(()=> {loadAlbum()}, [])

  return (
    <div>

          total de Album {album.length}
          <div>
            {album.map((item, index)=> (
              <div key={index} className="posts">
                {item.title}
              </div>
            ))}
          </div>

    </div>
  )
}


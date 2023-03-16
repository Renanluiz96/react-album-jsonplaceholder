import './style.css' 
//import axios from "axios";
import { useEffect, useState } from 'react';
import { Album } from '../../types/album';
import { api } from '../../api';
import { Link, useNavigate, useParams } from 'react-router-dom';




export const Post = () => {
  const navigate = useNavigate()
  

   const [album, setAlbum] = useState<Album[]>([])

    const loadAlbum = async () => {
      const album = await api.getAlbum()
      setAlbum(album)
    }

  useEffect(()=> {loadAlbum()}, [])

  const handleLinkButton = () => {
      navigate('/listagem/:id')
  }

  return (
    <div>

          total de Album {album.length}
          <ul>
            {album.map((item, index)=> (
              <li key={index} className="posts" onClick={handleLinkButton}>
                {item.title}
              </li>
            ))}
          </ul>

    </div>
  )
}


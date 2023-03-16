import './style.css' 
//import axios from "axios";
import { useEffect, useState } from 'react';
import { Album } from '../../types/album';
import http  from '../../api';
import { Link } from 'react-router-dom';



export const Post = () => {

   const [album, setAlbum] = useState<Album[]>([])

    const loadAlbum = async () => {
      await http.get("/albums").then(function (response) {
        return setAlbum(response.data);
      })
    }

  useEffect(()=> {loadAlbum()}, [])

  return (
    <div>

          total de Album {album.length}
          <ul>
            {album.map((item, index)=> (
              <li key={index} className="posts">
                <Link to={'/listagem/'}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

    </div>
  )
}


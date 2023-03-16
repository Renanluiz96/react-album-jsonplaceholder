import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { AlbumType } from "../types/album"



export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});

    const loadAlbum =async (id:string) => {
        const albumInformacao = await api.getAlbum(id);
        setAlbumInfo(albumInformacao)
    }

    useEffect(()=> {
        if(params.id) {
            loadAlbum(params.id)
        }
    }, [])

  return (
    <div>
        <h1>{albumInfo.title}</h1>
    </div>
  )
}

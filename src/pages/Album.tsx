import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { FotoItem } from "../components/FotoItem";
import { AlbumType } from "../types/album"
import { Foto } from "../types/foto";



export const Album = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id: 0, title: '', userId: 0});
    const [fotos, setFotos] = useState<Foto[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        if(params.id) {
            loadAlbum(params.id);
            loadPhotos(params.id);
        }
    }, [])

    const loadPhotos = async (id: string) => {
        const photo = await api.getPhotosFromAlbum(id);
        setFotos(photo)
    }

    const loadAlbum = async (id:string) => {
        setLoading(true)
        const informacao = await api.getAlbum(`${id}`);
        setAlbumInfo(informacao)
        setLoading(false)
    }

    const handleBackButton = () => {
        navigate(-1)
    }

  return (
    <div>
        {loading && "Carregando"}
        <button onClick={handleBackButton}>Voltar</button>
        <h1>{albumInfo.title}</h1>
        <br />
        {fotos.map((item, index)=> (
            <FotoItem 
                key={index}
                data={item}
            />
        ))}
    </div>
  )
}

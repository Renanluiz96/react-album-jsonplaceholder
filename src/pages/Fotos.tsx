import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api";
import { Foto as PhotoType } from "../types/foto";


export const Fotos = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [fotoInfo, setFotoInfo] = useState<PhotoType>()

    useEffect(() => {
        if (params.id) {
            carregarFoto(params.id)
        }
    }, [])

    const carregarFoto = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setFotoInfo(photo)
        setLoading(false)
    }


    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading && "Carregando"}

            {fotoInfo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <h4>{fotoInfo.title}</h4>
                    <img src={fotoInfo.url} alt={fotoInfo.title} />
                </>
            }

        </div>
    )
}

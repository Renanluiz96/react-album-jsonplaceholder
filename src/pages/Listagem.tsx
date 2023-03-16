import { SetStateAction, useEffect, useState } from "react"
import { Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { Lista } from "../types/album"
import { api } from "../api"
import { AxiosResponse } from "axios"
import { useParams } from "react-router-dom"


export const Listagem = () => {

  const [lista, setLista] = useState<Lista[]>([])
  const params = useParams()

  const loadLista = async () => {
    await api.get("/albums").then(function (response: AxiosResponse) {
      return setLista(response.data);
    })
  }

  useEffect(()=> {loadLista()}, [])

    

  return (
    <div>
        <Header />
        total de lista {params.id}
        {lista.map((item, index)=> (
            <div key={index}>
                {item.title}
            </div>
        ))}
    </div>
  )
}

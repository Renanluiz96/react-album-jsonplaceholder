import { useEffect, useState } from "react"
import { Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { Lista } from "../types/album"

export const Listagem = () => {

    const [lista, setLista] = useState<Lista[]>([])


    

  return (
    <div>
        <Header />
        total de lista {lista.length}
        {lista.map((item, index)=> (
            <div>
                {item.albumId}
            </div>
        ))}
    </div>
  )
}

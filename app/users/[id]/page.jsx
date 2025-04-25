'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getUser } from "@/services/user"
import Loading from "@/components/loading/Loading"
import axios from "axios"

const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return
        
        setError(null)

        getUser(id)
        .then(data => {
            if(data === null) {
                setNotFound(true)
            } else {
                setUser(data)
            }
        })
        .catch (err => {
            console.error(err)
            setError(err)
        })
        .finally(() => setLoading(false))
    }, [id])

    if(loading) return <Loading />

    //caso a api retorne 404 ele me manda para esse componente um 'null' e se for null quer dizer que não tem nenhum arquivo sendo assim ela me deu uma resposta mão não tinha nenhum usuario com aquele id da req, nesse caso "Usuário não encontrado"
    if(notFound) return <p style={{color:"#fff"}}>Usuário não encontrado.</p>
    
    //se der outro erro retorna isso
    if(error) return <p style={{color:"#fff"}}>Ocorreu um erro ao carregar usuário.</p>

    //aqui já temos um usuário
    return (
        <div style={{color:"#fff"}}>
            <h1>Nome: {user.name}</h1>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Telefone: {user.phone}</h2>
        </div>
    );
}

export default User
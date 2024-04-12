import { useRouter } from "next/router"
import Link from "next/link"

// Colocando na URL http://localhost:3000/rotas/parame?nome=Leonardo&id=123
// será recebido os valores nome e id dentro de router

export default function parame() {
    const router = useRouter()

    const id = router.query.id
    const nome = router.query.nome

    console.log(router)
    
    return (
        <div>
            <h1>Rotas Parame: {id} e {nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
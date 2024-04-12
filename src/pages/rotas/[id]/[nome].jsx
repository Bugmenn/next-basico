import { useRouter } from "next/router"
import Link from "next/link"

export default function nome() {
    const router = useRouter()
    const condigo = +router.query.id
    const nome = router.query.nome

    console.log(router)

    return (
        <div>
            <h1>Rotas/id/nome</h1>
            <h1>Rotas/{condigo}/nome</h1>
            <h1>Rotas/{condigo}/{nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
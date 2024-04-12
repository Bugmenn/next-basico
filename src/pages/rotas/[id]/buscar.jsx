// é utilizado para acessar as informações que estão dentro de id
import { useRouter } from "next/router"
import Link from "next/link"

// rota dinamica, colocando colchetes o nome id pode ser mudado por qualquer coisa sem ocorrer erro
// localhost:3000/rotas/123/buscar
export default function buscar() {
    const router = useRouter()
    const condigo = +router.query.id // o + transforma em númerico
    const texto = router.query.id // fica em tipo texto

    console.log(router) // mostra o que tem na URL

    return (
        <div>
            <h1>Rotas/id/buscar</h1>
            <h1>Rotas/{condigo}/buscar</h1>
            <h1>Rotas/{texto}/buscar</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}
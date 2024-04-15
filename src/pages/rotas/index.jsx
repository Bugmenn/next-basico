import Link from "next/link"
import { useRouter } from "next/router"

// ao colocar na URL só a palavra rotas vai abrir diretamente o index
export default function rotas() {
    const router = useRouter()

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/parame",
            query: {
                id: 12,
                nome: "Ana Silva"
            }
        })       
    }
    
    return (
        <div>
            <h1>Rota</h1>
            <ul>
                {/*Link para outro arquivo*/}
                <Link href="/rotas/parame?id=12&nome=Ana">
                    <li>Parame</li>
                </Link>
                <Link href="rotas/id/nome">
                    <li>Nome</li>
                </Link>
                <Link href="rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Ricardo">
                    <li>Ricardo</li>
                </Link>
            </ul>
            {/*Navegação utilizando a forma programatica*/}
            <div style={{display:"flex", flexDirection:"column", alignItems: "flex-start"}}>
                <button onClick={navegacaoComParams}>Parame</button>
                <button onClick={() => router.push("rotas/123/nome")}>Nome</button>
                <button onClick={() => router.push("rotas/123/buscar")}>Buscar</button>
                <button onClick={() => navegacaoSimples("rotas/123/Ricardo")}>Ricardo</button>
            </div>
        </div>
    )
}
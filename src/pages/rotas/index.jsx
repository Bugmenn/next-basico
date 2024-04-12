import Link from "next/link"

// ao colocar na URL só a palavra rotas vai abrir diretamente o index
export default function rotas() {
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
        </div>
    )
}
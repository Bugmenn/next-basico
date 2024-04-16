// essa função informa que o componente é estatico para o next
// assim no modo build a informação será criada uma vez e não será mais mudada
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props) {
    return (
        <div>
            <span>Aleatorio: {props.numero}</span>
        </div>
    )
}
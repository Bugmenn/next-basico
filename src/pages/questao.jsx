import { useEffect, useState } from "react"

export default function questao() {
    const [questao, setQuestao] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:3000/api/questao/123") //retorna um promes
        .then(resp => resp.json()) //em resp tem um metodo que também retorna um promes
        .then(setQuestao)
    }, [])
    
    function rendenrizarRespostas() {
        if (questao) {
            return questao.respostas.map((resp, i) => {
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }

    return (
        <div>
            <h1>Questao</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {rendenrizarRespostas()}
                </ul>
            </div>
        </div>
    )
}
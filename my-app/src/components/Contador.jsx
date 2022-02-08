import { useState } from "react"

export default function Contador() {
    const [num, setNum] = useState(0)

    const soma = () => setNum(num + 1)    
    const sub = () => setNum(num - 1)

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {num}</div>
            <div>
                <button onClick={sub}>-</button>
                <button onClick={soma}>+</button>
            </div>
        </div>
    )
}
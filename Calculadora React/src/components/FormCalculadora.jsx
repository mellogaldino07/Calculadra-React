import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora () {

    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operacao, setOperacao] = useState('+')
    const [msg, setMsg] = useState('')

    function limpar() {
        setNumero1('')
        setNumero2('')
        setOperacao('+')
        setMsg('')
    }

    function calcular(e) {
        e.preventDefault()

        if (!numero1 || !numero2) {
            alert('Preencha todos os campos!')
            return
        }

        const num1 = parseFloat(numero1)
        const num2 = parseFloat(numero2)

        let resultado

        if (operacao === '+') {
            resultado = num1 + num2
        } else if (operacao === '-') {
            resultado = num1 - num2
        } else if (operacao === '*') {
            resultado = num1 * num2
        } else if (operacao === '/') {
            if (num2 === 0) {
                setMsg('Não é possível dividir por zero')
                return
            }
            resultado = num1 / num2
        }

        setMsg(`Resultado: ${resultado}`)
    }

  return (
    <div>
        <form onSubmit={calcular} className={styles.formContainer}>
            <h2>Calculadora Simples</h2>

            <div className={styles.numero1}>
                <input
                    type="text"
                    name="numero1"
                    id="numero1"
                    placeholder="Informe o primeiro número..."
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                />
            </div>

            <div className={styles.operacao}>
                <select
                    name="operacao"
                    id="operacao"
                    value={operacao}
                    onChange={(e) => setOperacao(e.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>

            <div className={styles.numero2}>
                <input
                    type="text"
                    name="numero2"
                    id="numero2"
                    placeholder="Informe o segundo número..."
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                />
            </div>

            <div className={styles.btn}>
                <input type="submit" value="Calcular" />
                <input type="button" value="Limpar" onClick={limpar} />
            </div>

            <div className={styles.resultado}>
                <p>{msg}</p>
            </div>
        </form>

    </div>
  )
}

export default FormCalculadora
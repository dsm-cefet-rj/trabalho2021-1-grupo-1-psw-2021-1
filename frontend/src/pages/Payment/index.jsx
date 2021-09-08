import "../../styles/Payment.css";
import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { paymentSchema } from "../../schemas/paymentsSchema.js";

export default function Payment() {

    const history = useHistory();
    let [tattoo, setTattoo] = useState({price:null});
    let [pay, setPay] = useState({
        name: "",
        cpf: "",
        num_cartao: "",
        validade: "",
        preco: "",
        cvv: ""
    });
    let [errors, setError] = useState({
        name: "",
        cpf: "",
        num_cartao: "",
        validade: "",
        preco: "",
        cvv: ""
    });
            /* NAMES DOS INPUTS
                NomeTitular
                CPF_CNPJ
                NumeroDoCartao
                Validade
                CVV
                Preco
            */

    function onChange(event) {
        const { name, value } = event.target;
        if (name === "NomeTitular") {
            setPay({ ...pay, name: value })
        }
        else if (name === "CPF_CNPJ") {
            setPay({ ...pay, cpf: value })
        }
        else if (name === "NumeroDoCartao") {
            setPay({ ...pay, num_cartao: value })
        }
        else if (name === "Validade") {
            setPay({ ...pay, validade: value })
        }
        else if (name === "CVV") {
            setPay({ ...pay, cvv: value })
        }
    };

    async function onSubmit(event) {
        event.preventDefault();
        const valid_bool = await paymentSchema.isValid(pay)
        if (valid_bool) {
            await api.post(`/compra/`, pay);
            alert("Compra efetuada com sucesso")
            history.push("/0/agendamento/")
        }
        else {
            paymentSchema.validate(pay, {abortEarly: false }).catch(function (err) {
                let name, validade, num_cartao, cpf, cvv, preco;
                err.inner.forEach(e => {
                    let {path, message} = e;
                    if ( path === "name") {
                        name = message
                    }
                    else if (path === "cpf") {
                        cpf = message
                    }
                    else if (path === "num_cartao") {
                        num_cartao =  message 
                    }
                    else if (path === "validade") {
                        validade = message
                    }
                    else if (path === "cvv") {
                        cvv = message
                    }
                    else if (path === "preco") {
                        preco = message
                    }
                })
                setError({
                    name,
                    cpf,
                    num_cartao,
                    validade,
                    cvv,
                    preco
                })
            })
    }
}    
    function goBack(){
        history.push("/me/")
    }
               
    return (
        <main id="main-container">
            <h1>Forma de pagamento</h1>
            <form id="form-container">
                <fieldset className="fieldset-container">
                    <legend className="fieldset-legend">Seus dados</legend>
                    <label>Nome do titular</label>
                    <input name="NomeTitular" alt="Digite aqui o nome igual aparece impresso no cartão" placeholder=" Nome do titular" />
                    <p className="error"> {errors.name} </p>
                    <label>CPF/CNPJ</label>
                    <input name="CPF_CNPJ" alt="Digite aqui o CPF ou CNPJ do dono do cartão" placeholder=" CPF/CNPJ" />
                    <p className="error"> {errors.cpf} </p>
                </fieldset>
                <fieldset className="fieldset-container">
                    <legend className="fieldset-legend">Dados do cartão</legend>
                    <label>Num. do cartão</label>
                    <input name="NumeroDoCartao" placeholder=" Número do cartão" alt="Digite aqui o número do cartão" />
                    <p className="error"> {errors.num_cartao} </p>
                    <label>Validade</label>
                    <input name="Validade" placeholder=" Validade" alt="Escolha a data contendo o mês e ano de expiração do cartão" />
                    <p className="error"> {errors.validade} </p>
                    <label>Código de segurança</label>
                    <input name="CVV" placeholder=" CVV" alt="Digite aqui o código de segurança do cartão" />
                    <p className="error"> {errors.cvv} </p>
                    <label>Parcelas</label>
                    <div>
                        <input name="Preco" disabled="" placeholder=" R$ 500,00" alt="O valor a ser pago é de R$ 500" />
                        <p className="error"> {errors.preco} </p>
                        <select alt="Selecione aqui o número de parcelas" required>
                            <option alt="Uma parcela de R$ 500,00"> 1 parcela de R$ 500,00 (R$ 500,00)</option>
                            <option atl="Duas parcelas de R$ 250,00"> 2 parcelas de R$ 250,00 (R$ 500,00)</option>
                            <option atl="Três parcelas de R$ 166,33"> 2 parcelas de R$ 166,33 (R$ 500,00)</option>
                            <option alt="Quatro parcelas de R$ 125,00"> 4 parcelas de R$ 125,00 (R$ 50,00)</option>
                        </select>
                    </div>
                </fieldset>

                <div id="button-container">
                    <button onClick={goBack}>CANCELAR</button>
                    <button type="submit" alt="Processar pagamento e encerrar compra" id="form-submit" onClick={onSubmit}>CONTINUAR</button>
                </div>
            </form>
        </main>
    )
}
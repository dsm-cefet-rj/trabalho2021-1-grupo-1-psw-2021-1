import "../../styles/Payment.css";

export default function Payment() {
    return (
        <main id="main-container">
            <h1>Forma de pagamento</h1>
            <form id="form-container">
                <fieldset class="fieldset-container">
                    <legend class="fieldset-legend">Seus dados</legend>
                    <label>Nome do titular</label>
                    <input alt="Digite aqui o nome igual aparece impresso no cartão" placeholder=" Nome do titular" />
                    <label>CPF/CNPJ</label>
                    <input alt="Digite aqui o CPF ou CNPJ do dono do cartão" placeholder=" CPF/CNPJ" />
                </fieldset>
                <fieldset class="fieldset-container">
                    <legend class="fieldset-legend">Dados do cartão</legend>
                    <label>Num. do cartão</label>
                    <input placeholder=" Número do cartão" alt="Digite aqui o número do cartão" />
                    <label>Validade</label>
                    <input placeholder=" Validade" alt="Escolha a data contendo o mês e ano de expiração do cartão" />
                    <label>Código de segurança</label>
                    <input placeholder=" CVV" alt="Digite aqui o código de segurança do cartão" />
                    <label>Parcelas</label>
                    <div>
                        <input disabled="" placeholder=" R$ 500,00" alt="O valor a ser pago é de R$ 500" />
                        <select alt="Selecione aqui o número de parcelas">
                            <option alt="Uma parcela de R$ 500,00"> 1 parcela de R$ 500,00 (R$ 500,00)</option>
                            <option atl="Duas parcelas de R$ 250,00"> 2 parcelas de R$ 250,00 (R$ 500,00)</option>
                            <option atl="Três parcelas de R$ 166,33"> 2 parcelas de R$ 166,33 (R$ 500,00)</option>
                            <option alt="Quatro parcelas de R$ 125,00"> 4 parcelas de R$ 125,00 (R$ 50,00)</option>
                        </select>
                    </div>
                </fieldset>

                <div id="button-container">
                    <button>CANCELAR</button>
                    <button type="submit" alt="Processar pagamento e encerrar compra" id="form-submit">CONTINUAR</button>
                </div>
            </form>
        </main>
    )
}
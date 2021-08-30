import "../../styles/PaymentConfirm.css";


export default function PaymentConfirm() {
    return (

        <main id="main-container">
            <h1 >Confirmação de pagamento</h1>

            <section id="section-container">
                <h2 id="title">Dados da compra</h2>
                <div id="artist-data">
                    <h3>Tatuador</h3>
                    <p>José da Silva Alves</p>
                </div>
                <div id="art-data">
                    <h3>Arte</h3>
                    <p>Tatto tribal costas</p>
                </div>
                <div id="img-data">
                    <img src="./exemplo1.jpg" alt="Miniatura da tatuagem"/>
                </div>
                <div id="total-data">
                    <h3>Valor</h3>
                    <p>1 parcela de R$ 500,00</p>
                </div>
                <div id="method-data">
                    <h3>Forma de pagamento</h3>
                    <p>Cartão com o final 789 </p>
                </div>
            </section>

            <div id="button-container">
                <button>Cancelar</button>
                <button>Confirmar</button>
            </div>
        </main>
    )
}
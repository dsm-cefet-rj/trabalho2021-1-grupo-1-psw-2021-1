import * as yup from "yup";
export let paymentSchema = yup.object().shape({ 
    name: yup.string().required("O campo email é obrigatório"),
    cpf: yup.string().required("O campo senha é obrigatório"),
    num_cartao: yup.string().required("O campo 'número do cartão' é obrigatório"),
    validade: yup.string().required("O campo 'Validade' é obrigatório"),
    cvv: yup.string().required("O campo 'CVV' é obrigatório"),
    preco: yup.string().required("O campo 'Preco' é obrigatório")
});

export default paymentSchema;
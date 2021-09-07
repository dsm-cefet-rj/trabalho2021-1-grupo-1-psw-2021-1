import * as yup from "yup";
export let tattooSchema = yup.object().shape({ 
    name: yup.string().required("O campo nome da tatuagem é obrigatório").max(60), 
    description: yup.string().required("O campo descrição da tatuagem é obrigatório"),
    preco: yup.number().required("O valor da tatuagem é obrigatório")
});

export default tattooSchema;
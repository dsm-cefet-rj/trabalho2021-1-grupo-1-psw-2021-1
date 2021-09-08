import * as yup from "yup";
export let loginSchema = yup.object().shape({ 
    email: yup.string().email().required("O campo email é obrigatório"),
    senha: yup.string().required("O campo senha é obrigatório")
});

export default loginSchema;
import * as yup from "yup";
export let userSchema = yup.object().shape({ 
    name: yup.string().required("O campo nome é obrigatório").max(60), 
    username: yup.string().required("O campo usernome é obrigatório").max(60),
    email: yup.string().required("O campo email é obrigatório").email(),
    senha: yup.string().required("O campo senha é obrigatório").min(8, "A senha deve ter, no mínimo, 8 caracteres"),
    confirm_senha:yup.string().required("O campo de confirmação de senha é obrigatório").min(8, "A senha deve ter, no mínimo, 8 caracteres").oneOf([yup.ref("senha"),null], "As senhas precisam ser iguais")
});

export default userSchema;
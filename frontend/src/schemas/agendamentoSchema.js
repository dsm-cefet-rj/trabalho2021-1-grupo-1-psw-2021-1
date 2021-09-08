import * as yup from "yup";
export let agendamentoSchema = yup.object().shape({ 
    data: yup.string().required("O campo com a data é obrigatório"),
    horario: yup.string().required("O horário nessa data é obrigatório")
});

export default agendamentoSchema;
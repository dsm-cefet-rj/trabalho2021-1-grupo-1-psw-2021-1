export default function SignUpClient() {
    return (
        <div class="main-container">
            <form action="#" id="form-container">
                <legend>Cadastro</legend>

                <label for="name" class="form-content">Nome completo</label>
                <input type="text" name="name" class="form-content" />

                <label for="username" class="form-content">Nome de usuário</label>
                <input type="text" name="username" class="form-content" />

                <label class="form-content">E-mail</label>
                <input type="email" class="form-content" />

                <label class="form-content">Senha</label>
                <input type="password" class="form-content" />

                <label class="form-content">Confirme sua senha</label>
                <input type="password" class="form-content" />


                <div class="checkbox-content">
                    <label>Interesses</label>
                    <label>Tribais</label>
                    <input type="checkbox" />
                    <label>New school</label>
                    <input type="checkbox" />
                    <label>Minimalista</label>
                    <input type="checkbox" />
                    <label>Formas geométricas</label>
                    <input type="checkbox" />
                    <label>Old school</label>
                    <input type="checkbox" />
                    <button>Adicionar outro</button>
                </div>
                <button type="submit" id="submit">Cadastrar</button>

            </form>
        </div>
    )
}
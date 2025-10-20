export default function Login() {
  return (
    <html lang="pt-BR">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tela de Login</title>
        <link rel="stylesheet" href="style.css" />
        </head>
        <body>
        <div class="login-container">
            <div class="login-box">
            <h2>Conecte-se</h2>
            <form>
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" />

                <label for="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" />

                <button type="submit">Entrar</button>
            </form>
            </div>
        </div>
        </body>
    </html>
  );
}
export default function AgendarConsulta() {
  return (
    <html lang="pt-BR">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Agendar Consulta</title>
        <link rel="stylesheet" href="style.css" />
        </head>
        <body>
        <div class="container">
            <div class="card">
                <h2>Agendar Consulta</h2>
                <form>
                    <label for="paciente">Paciente</label>
                    <input type="text" id="paciente" placeholder="Nome do paciente" />

                    <label for="data">Data</label>
                    <input type="date" id="data" placeholder="dd/mm/aaaa" />

                    <label for="hora">Hora</label>
                    <input type="time" id="hora" placeholder="--:--" />

                    <button type="submit">Agendar Consulta</button>
                </form>
            </div>
        </div>
        </body>
    </html>
  );
}
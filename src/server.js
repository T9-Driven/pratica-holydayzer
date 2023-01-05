import express from 'express'

const server = express()

const holidays = [
  { date: "1/4/2023", name: "Confraternização mundial" },
  { date: "1/3/2023", name: "Carnaval" },
  { date: "4/17/2023", name: "Páscoa" },
  { date: "4/21/2023", name: "Tiradentes" },
  { date: "5/1/2023", name: "Dia do trabalho" },
  { date: "6/16/2023", name: "Corpus Christi" },
  { date: "9/7/2023", name: "Independência do Brasil" },
  { date: "10/12/2023", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2023", name: "Finados" },
  { date: "11/15/2023", name: "Proclamação da República" },
  { date: "12/25/2023", name: "Natal" }
];

server.get("/holidays", (req, res) => {
  res.send(holidays)
})

server.get("/is-today-holiday", (_, res) => {

  const today = new Date().toLocaleDateString("en-us");

  //HOF find, map, foreach, filter
  const holiday = holidays.find(item => item.date === today)

  // Early return
  if (holiday) {
    res.send(`Sim, hoje é ${holiday.name}`)
    return;
  }

  res.send('Não, hoje não é feriado')
})

// Bônus
app.get("/holidays/:month", (req, res) => {
  const month = req.params.month;

  const holidaysMonth = holidays.filter((item) => item.date.split("/")[0] === month);

  res.send(holidaysMonth);
});

const PORT = 5005

server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))
// CONTADOR DE TEMPO JUNTOS (SEGURO)
const startDate = new Date(2025, 9, 9); // 9 de Outubro de 2025

function updateTimeTogether() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let text = "";
  if (years > 0) text += `${years} ${years === 1 ? "ano" : "anos"}, `;
  if (months > 0) text += `${months} ${months === 1 ? "mês" : "meses"} e `;
  text += `${days} ${days === 1 ? "dia" : "dias"}`;

  document.getElementById("time-together").innerHTML =
    `<strong>Estamos juntos há:</strong><br>${text}`;
}

updateTimeTogether();
setInterval(updateTimeTogether, 3600000);
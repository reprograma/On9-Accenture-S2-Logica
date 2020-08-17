const queHorasSao = Number(prompt("Que horas são"));

if (queHorasSao <= 12) {
  // Ação
  console.log("Bom dia");
} else if (queHorasSao <= 18) {
  // Ação
  console.log("Boa tarde");
} else {
  // Ação
  console.log("Boa noite");
}

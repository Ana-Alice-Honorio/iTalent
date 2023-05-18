// do while -> executa e depois pergunta se continua
// while -> testa e realiza depois (loop)
//
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// while (true) {
//   console.log("while true");
// }

let teste = true;
let numero = 0;

while (teste) {
  if (100 <= numero) {
    teste = false;
  }
  console.log(numero);
  numero++;
}

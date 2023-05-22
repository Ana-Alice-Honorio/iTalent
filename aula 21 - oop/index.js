async function Espera() {
  const promise = new Promise((res) => {
    setTimeout(() => res(console.log("levo 3 segundos")), 3000);
  });

  const esperando = await promise;
  console.log("tô aqui hein");
}

Espera();

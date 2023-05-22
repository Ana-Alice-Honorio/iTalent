function contar(valor) {
  let temp = 0;
  for (let i = 0; i < valor; i++) {
    temp += 1;
  }
  return temp;
}

async function teste() {
  let res = await contar(1111);
  console.log("não demorei");
  console.log(res);
}

teste();

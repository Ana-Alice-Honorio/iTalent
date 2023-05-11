window.onload = function () {
  document.getElementById("cep").addEventListener("focusout", function () {
    searchCep(this.value);
  });
};

function clearForm() {
  document.getElementById("rua").value = "";
  document.getElementById("número").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("estado").value = conteudo.uf;
  } else {
    clearForm();
    alert("CEP not found");
  }
}

function searchCep(val) {
  var cep = val.replace(/\D/g, "");

  if (cep != "") {
    var validCep = /^[0-9]{8}$/;

    if (validCep.test(cep)) {
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";

      var script = document.createElement("script");
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      document.body.appendChild(script);
    } else {
      clearForm();
      alert("Error");
    }
  } else {
    clearForm();
  }
}

// array de tarefas
var tarefas = [];

// função para adicionar tarefa
function adicionar() {
  var input = document.getElementById("descricao");
  var texto = input.value;

  if (texto == "") {
    alert("Digite uma tarefa!");
    return;
  }

  var tarefa = {
    descricao: texto,
    status: false
  };

  tarefas.push(tarefa);
  input.value = "";

  mostrar();
}

// função para mostrar tarefas
function mostrar() {
  var div = document.getElementById("lista");
  div.innerHTML = "";

  for (var i = 0; i < tarefas.length; i++) {

    if (tarefas[i].status == true) {
      div.innerHTML +=
        '<div class="tarefa">' +
        '<input type="checkbox" checked onclick="mudarStatus(' + i + ')">' +
        '<span class="concluida">' + tarefas[i].descricao + '</span>' +
        '</div>';
    } else {
      div.innerHTML +=
        '<div class="tarefa">' +
        '<input type="checkbox" onclick="mudarStatus(' + i + ')">' +
        '<span>' + tarefas[i].descricao + '</span>' +
        '</div>';
    }

  }
}

// função para mudar o status
function mudarStatus(posicao) {
  if (tarefas[posicao].status == true) {
    tarefas[posicao].status = false;
  } else {
    tarefas[posicao].status = true;
  }

  mostrar();
}

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nomeCliente"] = document.getElementById("nomeCliente").value;
    formData["cpf"] = document.getElementById("cpf").value;
    formData["cep"] = document.getElementById("cep").value;
    formData["endereco"] = document.getElementById("endereco").value;
    formData["email"] = document.getElementById("email").value;
    formData["telefone"] = document.getElementById("telefone").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("clienteLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCliente;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cpf;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cep;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.endereco;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.telefone;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Remover</a>`;
}

function resetForm() {
    document.getElementById("nomeCliente").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCliente").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cpf").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cep").value = selectedRow.cells[2].innerHTML;
    document.getElementById("endereco").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeCliente;
    selectedRow.cells[1].innerHTML = formData.cpf;
    selectedRow.cells[2].innerHTML = formData.cep;
    selectedRow.cells[3].innerHTML = formData.endereco;
    selectedRow.cells[4].innerHTML = formData.email;
    selectedRow.cells[5].innerHTML = formData.telefone;
}
function onDelete(td) {
    if (confirm('Tem certeza que deseja remover esse cliente?')) {
        row = td.parentElement.parentElement;
        document.getElementById("clienteLista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nomeCliente").value == "") {
        isValid = false;
        document.getElementById("nomeClienteErro").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeClienteErro").classList.contains("hide"))
            document.getElementById("nomeClienteErro").classList.add("hide");
    }
    return isValid;
}
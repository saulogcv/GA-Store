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
    formData["nomeProd"] = document.getElementById("nomeProd").value;
    formData["idCod"] = document.getElementById("idCod").value;
    formData["qtde"] = document.getElementById("qtde").value;
    formData["preco"] = document.getElementById("preco").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeProd;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idCod;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qtde;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.preco;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nomeProd").value = "";
    document.getElementById("idCod").value = "";
    document.getElementById("qtde").value = "";
    document.getElementById("preco").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeProd").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idCod").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qtde").value = selectedRow.cells[2].innerHTML;
    document.getElementById("preco").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeProd;
    selectedRow.cells[1].innerHTML = formData.idCod;
    selectedRow.cells[2].innerHTML = formData.qtde;
    selectedRow.cells[3].innerHTML = formData.preco;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar esse produto?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nomeProd").value == "") {
        isValid = false;
        document.getElementById("nomeProdutoErro").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeProdutoErro").classList.contains("hide"))
            document.getElementById("nomeProdutoErro").classList.add("hide");
    }
    return isValid;
}
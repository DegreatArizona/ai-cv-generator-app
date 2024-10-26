
const btn = document.getElementById("openInvoiceBtn");
const span = document.getElementsByClassName("close")[0];
const modal = document.getElementById("invoiceModal");


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

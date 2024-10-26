
//const btn = document.getElementById("openInvoiceBtn");
const span = document.getElementsByClassName("close")[0];

function openInvoiceBtn() {
    const modal = document.getElementById("invoiceModal");
    modal.style.display = "block";
}

span.onclick = function() {
    const modal = document.getElementById("invoiceModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("invoiceModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

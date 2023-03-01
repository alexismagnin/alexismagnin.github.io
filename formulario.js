document.getElementById("formulario").addEventListener("submit", function () {
    document.getElementById("formulario").style.display = 'none';
    const nombre = document.getElementById("input-nombre").value;
    const apellido = document.getElementById("input-apellido").value;
    document.getElementById("div-formulario").style.textAlign = "center";
    document.getElementById("div-formulario").innerHTML = "<strong>" + nombre + " " + apellido + ", gracias por contactarte!</strong>";
});
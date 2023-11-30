function procesar () {
    var clavesValidas = [];
    var clavesIvalidas = [];
    var itemsArray = $("#sourceText").val().toLowerCase().split('\n');

    $.each(itemsArray, function (index, value) {
        var clave = value.split(':');
        var letra = clave[0].slice(-1);
        var rango = clave[0].slice(0, -2).split('-');
        var regex = new RegExp(`[${letra}]`, "g");
        var ocurrencias = clave[1].match(regex);
        if (ocurrencias !== null) {
            if (ocurrencias.length >= Number(rango[0]) && ocurrencias.length <= Number(rango[1])) {
                clavesValidas.push(value);
            } else {
                clavesIvalidas.push(value);
            }
        } else {
            clavesIvalidas.push(value);
        }
    });

    document.getElementById("finalResult").innerHTML = clavesIvalidas[41];

}

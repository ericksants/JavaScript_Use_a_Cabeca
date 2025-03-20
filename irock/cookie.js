function writeCookie(name, value, days) {
    //nao ha expiracao, entao o cookie e temporario
    var expires = "";
    //especificar numero de dias torna ele persistente
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 *60 * 1000));
        expires= "; expires=" + date.toGMTString();
    }

    //atribua nome, valor e data de validade
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    //busque e retorne seu valor
    var serchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0;  i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ') 
            c = c.substring(1, c.length);
        if (c.indexOf(serchName) == 0)
            return c.substring(serchName.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    //apague o cookie especificado
    writeCookie(name, "", -1);
}
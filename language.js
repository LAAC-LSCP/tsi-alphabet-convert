var es_BO = {
    label: "es_BO",
    id: "spanish",
    title: "Convertidor Alfabeto Tsimane'",
    header: "Conversor Alfabeto Tsimane'",
    paragraph: "Este conversor te permite convertir automáticamente un texto escrito en alfabeto tsimane' (utilizando la fuente Times Chimini, el alfabeto antiguo o el alfabeto nuevo) a otro alfabeto.\
    Simplemente necesitas copiar y pegar el texto en la sección de la izquierda, seleccionar el alfabeto original y el alfabeto de salida deseado, y el texto convertido aparecerá en la sección de la derecha.\
    Las teclas rayadas significan que no se pueden apretar.",
    chimani: "Chimani",
    old: "Antiguo",
    new: "Nuevo",
    english: "inglés",
    spanish: "español",
    left_placeholder: "El texto original se pega acá...",
    right_placeholder: "Y el texto convertido aparece acá!",
    credits: "Créditos:<br/>\
    Convertidor construido por William N Havard, investigador posdoctoral,<br/>\
    bajo la supervisión de Alejandrina Cristia, directora de investigación.<br/>\
    Equipo LAAC-LSCP en la ENS de París,<br/>\
    29 rue d'Ulm 75005 París, Francia",
    legal: "Aviso legal y datos personales"
}

var en_US = {
    label: "en_US",
    id: "english",
    title: "Tsimane' alphabet converter",
    header: "Tsimane' alphabet converter",
    paragraph: "This converter allows you to automatically convert a text written in tsimane' alphabet (using Times Chimini font, the old alphabet or the new alphabet) to another alphabet.\
    You simply need to copy and paste the text into the left section, select the original alphabet and the desired output alphabet, and the converted text will appear in the right section.\
    Dashed keys mean that they cannot be pressed.",
    chimani: "Chimani",
    old: "Old",
    new: "New",
    english: "english",
    spanish: "spanish",
    left_placeholder: "The original text is written here...",
    right_placeholder: "and the converted text is displayed here!",
    credits: "Credits:<br/>\
    Converter built by William N Havard, post-doctoral researcher,<br/>\
    under the supervision of Alejandrina Cristia, research director.<br/>\
    LAAC-LSCP team at ENS Paris,<br/>\
    29 rue d'Ulm 75005 Paris, France",
    legal: "Legal notice and personal data"
}

function set_lang(lang) {
    document.getElementsByTagName("html")[0].lang = lang.label
    document.getElementsByTagName("title")[0].innerHTML = lang.title;
    document.getElementById("header").innerHTML = lang.header;
    document.getElementById("paragraph").innerHTML = lang.paragraph;
    Array.prototype.forEach.call(document.getElementsByClassName("chimani"), function(element) {
        element.innerHTML = lang.chimani
    });
    Array.prototype.forEach.call(document.getElementsByClassName("old"), function(element) {
        element.innerHTML = lang.old
    });
    Array.prototype.forEach.call(document.getElementsByClassName("new"), function(element) {
        element.innerHTML = lang.new
    });
    document.getElementById("english").innerHTML = lang.english;
    document.getElementById("spanish").innerHTML = lang.spanish;

    document.getElementById("source").placeholder = lang.left_placeholder;
    document.getElementById("target").placeholder = lang.right_placeholder;

    document.getElementById("credits").innerHTML = lang.credits
    document.getElementById("legal").innerHTML = lang.legal

    Array.prototype.forEach.call(document.getElementsByClassName("button-lang"), function(element) {
        if (element.id == lang.id) {
            element.classList.add("selected")
        } else {
            element.classList.remove("selected")
        }
    });
}

set_lang(es_BO)
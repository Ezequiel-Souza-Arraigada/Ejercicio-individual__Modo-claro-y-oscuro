$(document).ready(function () {
    // Botón para Modo Claro
    $("#modo-claro").click(function () {
        $("body").removeClass("bg-dark text-light").addClass("bg-light text-dark");
        $("nav").removeClass("bg-dark navbar-dark").addClass("bg-primary navbar-light");
        $("footer").removeClass("bg-dark").addClass("bg-primary");
        $("#titulo").removeClass("text-white").addClass("text-primary");
        $("#tabla-datos").removeClass("table-dark-custom").addClass("table-striped");
    });

    // Botón para Modo Oscuro
    $("#modo-oscuro").click(function () {
        $("body").removeClass("bg-light text-dark").addClass("bg-dark text-light");
        $("nav").removeClass("bg-primary navbar-light").addClass("bg-dark navbar-dark");
        $("footer").removeClass("bg-primary").addClass("bg-dark");
        $("#titulo").removeClass("text-primary").addClass("text-white");
        $("#tabla-datos").removeClass("table-striped").addClass("table-dark-custom");
    });
});


$(document).ready(function(){

    jQuery.extend(jQuery.validator.messages, {
        required: "* Este campo es obligatorio.",

        remote: "* Por favor, rellena este campo.",
        email: "* Escribe una dirección de correo válida",

        url: "* Por favor, escribe una URL válida.",
        date: "* Por favor, escribe una fecha válida.",
        dateISO: "* Por favor, escribe una fecha (ISO) válida.",
        number: "* Por favor, escribe un número entero válido.",
        digits: "* Por favor, escribe sólo dígitos.",
        creditcard: "* Por favor, escribe un número de tarjeta válido.",

        equalTo: "* Las contraseñas no coinciden",



        maxlength: jQuery.validator.format("* Debe contener un maximo de {0} caracteres."),

        minlength: jQuery.validator.format("* Debe contener almenos {0} caracteres."),

        accept: "* Por favor, escribe un valor con una extensión aceptada.",
        rangelength: jQuery.validator.format("* Por favor, escribe un valor entre {0} y {1} caracteres."),
        range: jQuery.validator.format("* Por favor, escribe un valor entre {0} y {1}."),
        max: jQuery.validator.format("* Por favor, escribe un valor menor o igual a {0}."),
        min: jQuery.validator.format("* Por favor, escribe un valor mayor o igual a {0}.")
    })
    $("#form_ingreso").validate({
        rules:{

            ing_email:{
                required:true,
                email:true

            },
            ing_contraseña:{
                required:true,
                password:true



            }

        }  
    })

    $("#form_registro").validate({
        rules: {

            reg_email:{
                required:true,
                email:true
            },

            reg_nombre:{
                required:true,
                minlength:3,
                maxlength:15

            },
            reg_apellido:{
                required:true,
                minlength:3,
                maxlength:15
            },
            reg_contraseña:{
                required:true,
                minlength:6


            },

            reg_confcontraseña:{
                required:true,
                minlength:6,
                equalTo:"#reg_contraseña"
            },

            reg_chbox:{
                checked:true
            }, reg_chbox:"required"

        }     
    })

    

});
function validar()
    {
        var nombre= document.formulario.txt_nombre.value;
        var rut= document.formulario.txa_rut.value;
        var cell= document.formulario.txt_cell.value;
        guion1 = nombre.charAt(9)
        if(nombre <5 || nombre >30)
        {
            alert("nombrer debe tener minimo 3 y maximo 30")
            document.formulario.txa_rut.focus()
            return false
        }
        if(rut <9 )
        {
            alert("rut incompleto, deve ingresarlo con guion y sin puntos")
            document.formulario.txa_rut.focus()
            return false
        }
        if(cell <9)
        {
            alert("Telefonoi debe tener 9 digitos")
            document.formulario.txa_rut.focus()
            return false
        }

    }

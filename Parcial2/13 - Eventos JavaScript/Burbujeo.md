# Alan Abiud Castro Cruz - 19100159

### Propagación en JavaScript
--- 

Los eventos son la manera que tenemos de monitorizar el comportamiento de nuestros usuarios, por ejemplo al *detectar cuando se hace click en un botón.* Para capturar esos eventos se utilizan los listeners, con la siguiente estructura:

    elemento.addEventListener(event, () => {})

El burbujeo de eventos es un método de propagación de eventos en la *API HTML DOM* y ocurre cuando un evento **está en un elemento dentro de otro elemento** y ambos elementos han registrado un **identificador** para ese evento.   

Es un proceso que comienza con el elemento que desencadenó el evento y luego asciende a los elementos que lo contienen en la jerarquía.

Ejemplo de evento "Click":

    const e = document.getElementById('unBoton')
        e.addEventListener('click', () => {
        console.log('Click')
    })

En dado caso de que algun boton se encuentre dentro de un boton, o dentro de un div, o dentro de cualquier elemento, al momento de **dar click en el boton mas** ***interno***, se activaran tambien los eventos del mismo tipo para todos sus componentes padre.

El burbujeo es evitable de las siguientes maneras.
Opcion 1:
    
    event.stopPropagation();
    Ocurre el evento predeterminado y detiene el burbujeo

Opcion 2:

    event.preventDefault();
    Evita el evento predeterminado y permite que ocurran el resto.

Opcion 3:

    return false;
    Evita los eventos.

    






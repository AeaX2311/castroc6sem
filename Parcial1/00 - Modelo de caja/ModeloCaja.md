# **Modelo de caja**
## Alan Abiud Castro Cruz
### *19100159*
<br/>
El enfoque principal es el codigo CSS, el diseño de las paginas web, en este espacio se comprende  
que todos los componentes se componen de cajas, y que a esas cajas las encierran mas cajas.  

Existen dos tipos de cajas, *en bloque* y *en linea* y determina su comportamiento.  

### En bloque
- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor (100%).
- Se respetan las propiedades width y height.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.
- Algunos ejemplos son H1 y P.
### En linea
- La caja no fuerza ningún salto de línea al llegar al final de la línea.
- Las propiedades width y height no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.  

Independientemente de el tipo de caja *externa* que contenga un componente, internamente tambien esta dividido por estas  
cajas en donde es posible modificar su alineamiento y visualizacion *interna*.  
<br/>
Ahora bien, esa caja contiene varias partes importantes. Incluyendo los siguientes:
1. ***Content box:*** area donde se muestra el contenido, se puede cambiar su tamaño con *width y height*.
1. ***Padding box:*** es espacio en blanco que encierra el contenido, se utiliza para generar una separacion con el borde de la caja. *padding*.
1. ***Border box:*** envuelve el contenido, es visible dependiendo su anchura. *border*.
1. ***Margin box:*** es espacio en blanco que encierra el contenido, se utiliza para generar una separacion con otros componentes. *margin*.  
<br/>
![Partes de la caja](https://mdn.mozillademos.org/files/16558/box-model.png)
<br/><br/>s
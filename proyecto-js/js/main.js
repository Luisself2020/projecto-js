$(document).ready(function(){
    
    // Slider
  if(window.location.href.indexOf('index') > -1){ // Hacemos if para comprobar si estan cargando las librerias, por lo que comprobamos en el location de la web si esta el index o que esta
    $('.bxslider').bxSlider({ //Este codigo lo bajas de la pag https://bxslider.com
    mode: 'fade',
    captions: false,
    slideWidth: 1200,
    responsive: true,
    pager: true // Los 3 puntos del slider
  });

  }
	

	// Posts
if(window.location.href.indexOf('index') > -1){


    var posts = [

       {
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"), /* .day(), - MMM Do YYY- MMM ddd YYY*/
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"),
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"),
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"),
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        {
        title: 'Prueba de titulo 5',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"),
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        {
        title: 'Prueba de titulo 6',
        date: 'Publicado el dia' + moment().date() + " de " + moment().format("MMM") + "del" + moment().format("YYY"),
        content: "Es un hecho establecido desde hace mucho tiempo que un lector se distraerá con el contenido legible de una página al mirar su diseño. El punto de usar Lorem Ipsum es que tiene una distribución de letras más o menos normal, en lugar de usar 'Contenido aquí, contenido aquí', lo que hace que parezca un inglés legible. Muchos paquetes de edición de escritorio y editores de páginas web ahora usan Lorem Ipsum como texto de modelo predeterminado, y una búsqueda de 'lorem ipsum' descubrirá muchos sitios web aún en su infancia. Varias versiones han evolucionado a lo largo de los años, a veces por accidente, a veces a propósito (humor inyectado y similares)."
       },
        
    ];

   posts.forEach((item, index) => {/*Con item accedes al objeto y .title tomas la propiedad */

    var post = `
        <article class="post">
                    <h2>${item.title}</h2>  
                    <span class="date">${item.date}</span>

                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a> 
                </article>
    `;

    $("#posts").append(post);

   });

   }

   // Selector de tema

   var theme = $("#theme"); // Seleccionamos el theme incluido, que es la hoja de estilo en el html en Estilos CSS
   $("#to-green").click(function(){
    theme.attr("href", "css/green.css") //Seleccionamos theme y cambiamos el atributo con .attr("href", "css/") y colocamos la otra hoja de estilos
   });

   $("#to-red").click(function(){
    theme.attr("href", "css/red.css") 
   });

   $("#to-blue").click(function(){
    theme.attr("href", "css/blue.css") 
   });


/*PLUS OPCIONAL CLASE 133: Utilizar el localstorage y guardar el color alla en ese momento y luego cuando
se actualice la pantalla, hacer una condicion que saque ese valor del localstorage
y en funcion del valor que ponga un tema u otro.*/


// Scroll arriba de la web

$(".subir").click(function(){
    e.preventDefault(); // Para que el link no haga su funcion principal que es llevarnos a otro sitio, simplemente que se ejecute esta funcionalidad sin dirigirnos a otra parte
    $("html, body").animate({ // hacemos uso de animate sobre los elementos html y body para hacer una animacion
        scrollTop: 0 // Esta propiedad permite subir la pag. hasta el pixel 0
    }, 500); // Este sera el tiempo en el que se ejecute la animacion de medio segundo.

return false;

});

// Login falso

$("#login form").submit(function(){
    var form_name = $("#form_name").val();

    localStorage.setItem("form_name", form_name); // "form_ name" es el indice del localStorage y le pasamos la var form_name para guardar el dato, de esta forma ya tenemos el valor en el localStorage 

});

var form_name = localStorage.getItem("form_name"); // .getItem mostramos el var y setItem guardamos

if(form_name != null && form_name != "undefined"){

    var about_parrafo = $("#about p");

    about_parrafo.html("Bienvenido", +form_name ); //Concatenamos el nombre del usuario q tenemos en el localStorage almacenado en la variable +form_name
    about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>"); // link de cerrar secion con.append

    $("#login").hide();
    $("#logout").click(function(){ // Utilizamos el BOM
        localStorage.clear();
        location.reload()// hace que muestre los datos y veulva a mostrar el formulario

    });
}

// Acordeon

if(window.location.href.indexOf('about') > -1){
  $("#acordeon").accordion();

}

// Reloj 
if(window.location.href.indexOf('reloj') > -1){

  setInterval(function(){  // Esta funcion nos permite ejecutar en bucle cada segundo o cada cierto tiempo que le indique un trozo de instrucciones

     var reloj = moment().format("hh:mm:ss");
     $('#reloj').html(reloj);

 }, 1000);

}

// Validacion

if(window.location.href.indexOf('contact') > -1){ /*('contact') Esto se coloca
 en caso de que exista en la url y se va a ejecutar solo en la pag contact- 
 En caso que sea la pag de contact que se ejecute es codigo*/

$("form input[name='date']").datepicker({ // Esto es el calendario en fecha
  dateFormat: 'dd-mm-yyyy'

}); 
$ . validate({
    lang : 'es',
    errorMessagePosition: 'top',
    scrollToTopOnError: true
  });

}

});



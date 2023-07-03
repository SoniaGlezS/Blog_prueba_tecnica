# Objetivo del repositorio
### Desarrollo de blog de visitas turísticas propuesto como prueba técnica. 

### Este documento proporciona una descripción general del proyecto consistente en un blog donde los usuarios pueden crear, ver, editar y eliminar publicaciones relacionadas con visitas turísticas en comunidades autónomas españolas.

## Tecnologías utilizadas:
- [x] NodeJS
- [x] Express
- [x] Multer
- [x] React
- [x] CSS 
- [x] Bootstrap
- [x] HTML
- [x] MySQL

## Secciones:
### Feed: 
- Componente header.
- Nav, con un bóton que redirigirá a la vista para crear una nueva entrada.
- El cuerpo de esta vista mostrará un listado con todos los post existentes en la base de datos. El renderizado se realiza mediante un loop de componentes PostCard, que muestran la imagen del post, título, fecha y un   pequeño extracto de su contenido.
- En cada una de las tarjetas contamos con un icono de bootstrap, que nos ofrece la posibilidad de borrar el post (mostrando previamente una alerta para confimar que se quiere eliminar de forma permanente). Se eliminará la entrada en la base de datos, así como la foto guardada en la carpeta public/images del servidor.
- Pulsando sobre la imagen o el título de la tarjeta, se redirige a la vista CompletePost.
- Footer

### CompletePost:
- Componente header. Pulsando sobre el logo nos redirige a la vista Feed.
- El renderizado se hace de manera condicional a través del manejo de estados. De manera inicial, el cuerpo de la vista mostrará la imagen del post a un tamaño mayor que en las tarjetas del feed, el título, la fecha formateada, su contenido completo y la provincia. En la parte inferior veremos los botones "Editar" y "Borrar". El botón borrar realiza la misma funcionalidad que la explicada en el feed.
- Al pulsar sobre "Editar", el renderizado de la página pasará a ser con inputs, cuyo value serán los datos del post, pero de manera que permita su edición. De esta forma se pueden editar los campos que se consideren necesarios, sin perder el valor de aquellos que no se quieran modificar.
- En modo edición veremos el botón "Guardar" y desaparecerá el botón "Editar".
- Footer.

### CreatePost: 
- Componente header. Pulsando sobre el logo nos redirige a la vista Feed.
- El cuerpo de la vista consiste en un formulario que permite adjuntar un archivo de tipo imagen e incluye los campos necesarios para crear una nueva entrada a la base de datos mediante una solicitud de tipo post.
- Para manejar las imágenes y gestionarlas en el servidor, se utiliza multer. Mediante el uso de crypto, se garantiza que el nombre de la imagen que se guarda en el backend tenga un nombre único, al añadir una serie de byter aleatorios.
- Botón guardar. Envia la solicitud fetch a la base, muestra un mensaje al usuario para informar de que se ha ejecutado correctamente y redirige al feed.
- Footer.

## Base de datos SQL:
La base consta de una única tabla que incluye:
- id_post: como primary key, que se genera de forma automática con un valor autoincremental
- title
- content
- place
- date
- image: aquí se guardará la ruta relativa a la imagen en nuestro servidor, para poder mostrarla en las vistas.


  

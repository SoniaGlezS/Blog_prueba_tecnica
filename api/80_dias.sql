-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2023 a las 20:36:43
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `80_dias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `post`
--

CREATE TABLE `post` (
  `id_post` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` varchar(50) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `place` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `post`
--

INSERT INTO `post` (`id_post`, `date`, `image`, `title`, `content`, `place`) VALUES
(11, '2023-07-03 15:56:07', 'images/descenso_sella-b6547ecb313ccf16.jpeg', 'Descenso del sella', 'El Descenso del Sella en canoa es una de las actividades de turismo activo y aventura más demandadas en Asturias. Una actividad lúdico-deportiva que puedes realizar solo, en familia, con amigos… en la que disfrutarás de un entorno natural privilegiado. El recorrido del Descenso del Sella desde Arriondas hasta Llovio (Ribadesella) son 16 Km que podrás hacer tranquilamente parándote a comer, tomar un baño, visitando algun chiringuito y haciendo fotos.  Tendrás entre 3  y 5 horas para realizarlo, tiempo que verás que es suficiente.\r\n\r\nSi en cualquiera de las 2 opciones te cansas y quieres abandonarlo podrás bajarte en nuestra parada de Omedina, habiendo realizado 13 km en la versión larga y 9 km en la versión corta.\r\n\r\nTú escoges si quieres hacer el descenso como un piragüista profesional batiendo records como si te persiguiera un Tiranosaurio, o si prefieres ir parando y disfrutar del paisaje, entretenida y tranquilamente.\r\n\r\nCuando llegues, te estaremos esperando en la orilla del río para trasladarte de nuevo a nuestras oficinas. Además, si quieres, podrás darte una ducha con agua caliente, ir a la plata de Ribadesella  y… ¡a disfrutar de un merecido descanso!\r\n                                                          \r\nQué ropa hay que llevar al Descenso del Sella\r\nRopa de baño o que se pueda mojar, camiseta y calzado cómodo o escarpines (preferiblemente sujeto al pie) que se pueda mojar porque aunque no sea tu intención, es fácil mojarse o incluso caer al agua.\r\nCrema solar, gafas de sol atadas, gorra y toalla para secarte o simplemente sentarte en la parte de la orilla del río que más te guste.\r\nPara días algo frescos, lo mejor es un chubasquero o cortavientos.\r\nRopa de cambio por si te quieres cambiar al terminar la actividad. Puedes dejarla en las taquillas disponibles y gratuitas en nuestra instalaciones.\r\nTambién podrás darte una buena ducha con agua caliente al finalizar la actividad.\r\nBolsa de aseo\r\nPuedes traer algo más de comida y bebida si quieres a parte del picnic que hayas escogido, pero ten en cuenta que tiene que caber todo en el bidón estanco de unos 24l de capacidad.\r\nA lo largo de todo el Sella hay chiringuitos que sirven comida y bebida, así que no olvides llevar algo de efectivo.\r\nPara las reservas online, tu ticket impreso o en pantalla junto al DNI, de la persona a nombre de quien se haya hecho la reserva. Cualquier duda recuerda que siempre puedes llamarnos y te atenderemos telefónicamente.\r\nSi la reserva ha sido telefónica o en persona, puedes pagar justo antes de iniciar la actividad en efectivo o con tarjeta.\r\nY aunque no te recomendamos usar las tecnologías mientras realizas el descenso, seguro que al menos un móvil te viene bien para hacer alguna foto o para llamarnos si lo necesitas.\r\nLo más importante: ¡Muchas ganas de pasar un día inolvidable!', 'Asturias_'),
(12, '2023-07-03 16:53:46', 'images/capricho_gaudi-c7f50b29dfe7a551.jpeg', 'El capricho de Gaudí en Comillas', 'Puede que cuando pensamos en las obras de Gaudí lo relacionamos directamente con Cataluña. Y es que la mayoría de sus obras se encuentran en esta comunidad, sin embargo, hay 4 que se encuentran fuera de ella: La Casa Botines (León), Palacio Episcopal de Astorga (Astorga), La Catedral de Palma de Mallorca (Baleares) y El Capricho (Cantabria). De este último es del que os vamos a hablar hoy.\r\n\r\nLa Villa Quijano (popularmente conocida como El Capricho) es un edificio modernista situado en la localidad cántabra de Comillas, una población costera situada a unos 50 kilómetros al oeste de Santander. Fue construido entre los años 1883 y 1885 por encargo de Máximo Díaz de Quijano, un abogado enriquecido en América, como residencia vacacional. Se pueden hacer dos tipos de visita: por libre o con una visita guiada. La visita guiada dura aproximadamente 1 hora y harás un recorrido por los exteriores y el interior, con todas las explicaciones de un guía profesional. Cuando lo visitamos nosotros el precio de la entrada era el mismo, si querías hacer la visita guiada solamente tenías que dirigirte al punto de encuentro a la hora indicada.\r\n\r\nEl edificio llama automáticamente la atención por su peculiar fachada y torre cilíndrica. Está concebido como un palacete oriental, con unos colores verdes rojo y crema que hacen que se mimetice con la vegetación de alrededor. Curiosamente, cada fachada es diferente a las demás. \r\nLa impresionante torre tiene 20 metros de altura, revestida completamente de cerámica. Recuerda un poco a un minarete islámico. En la parte superior de la misma se encuentra un mirador, con una plataforma y barandilla de hierro forjado con motivos musicales (claves de sol). Desde aquí se pueden tiene unas vistas impresionantes del mar Cantábrico.', 'Cantabria'),
(13, '2023-07-02 23:05:21', 'images/combarro-60.jpeg', 'El pueblo de los horreos frente al mar, Combarro', 'Combarro se encuentra en la Ría de Pontevedra, cerca de la desembocadura del Río Lérez, de hecho, tan solo 15 minutos en coche lo separan Pontevedra ciudad. Se cree que se fundó en el siglo I d.C cuando llegaron los castreños. Se declaró Conjunto de Interés Artístico y Pintoresco en 1972. A veces bromeo con mis amigos y les digo que Combarro es el «Santorini gallego». Un pueblo de pescadores precioso donde las calles se entrecruzan sin seguir ningún orden urbanístico, donde paseas bajo estrechos soportales repletos de tiendas y llegas a sentir agobio si lo estas visitando en plena temporada alta debido a la masificación turística…quizá ese es su único pero, la gente.\r\nCuando desde la amplia plaza de Chousa te adentres por la estrecha rúa San Roque en el centro histórico de este pueblo del que existen referencias desde el siglo XII, constatarás que es uno de los mejores ejemplos que puedes encontrar de arquitectura rural en Galicia.\r\nYa en la citada plaza podrás ver un conjunto de dos hórreos, elemento arquitectónico tradicionalmente utilizado como granero o despensa en los pueblos de Galicia y Asturias.\r\nTe aviso de que en Combarro tienes la posibilidad de ver más de 60 hórreos, destacando los más de 30 que se alinean a orillas de la ría.\r\nEn tu paseo irás viendo hórreos y te irás encontrando alguno de los siete cruceiros que hay en Combarro.\r\n\r\nTe diré que el cruceiro es una construcción tradicional no solo en Galicia, sino también en otras regiones célticas, como Irlanda o Bretaña en Francia.', 'Pontevedra');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

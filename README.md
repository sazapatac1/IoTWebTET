# IoTWebTET
Desarrollo de una aplicación IoT web de REGISTRO DE DATOS sobre un(os) sensor(es) utilizando framework web moderno y su correspondiente procesamiento y visualización de datos.

Frontend => Vue.js | Backend => Node.js | Database => MySQL


Nombre alumno: Santiago Arturo Zapata Chacón.

Código alumno: 201717515010.

Email-EAFIT: sazapatac1@eafit.edu.co.

Email-Gmail: santiagox0320@gmail.com.

# ¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?
Se quiere resolver la visualización y procesamiento de datos brindados por un dispositivo IoT.

# Requisitos funcionales:
- La aplicación almacenará datos de temperatura, humedad y gps desde un dispositivo iot externo.
- La aplicación registrará y dará acceso a usuarios para la visualización y procesamiento de sus respectivos datos.
- La aplicación mostrará los datos almacenados por el dispositivo filtrados por el usuario que haya iniciado sesión.
- La aplicación contará con un sistema API REST de backend.
- La aplicación contará con front-end desarrollado por un framework moderno.
- La vista de la aplicación estará completamente separada del backend.

# Requisitos no funcionales:
- La contraseña de los usuarios estarán encriptadas
- La aplicación debe tener una disponibilidad del 99% de las veces en que un usuario intente acceder.
- La aplicación protegerá los datos del acceso no autorizado
- La aplicación tendrá autentificación de usuarios.

# ¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?
Tecnología frontend: Vue.js, Bulma.
Tecnología backend: Express.js, mongoose.

EN EL BACKEND?
En el backend se desarrolló un API REST utilizando frameworks: Express.js, mongoose (para el manejo de base de datos). También se utilizó jwt para generar el token correspondiente del usuario.

EN EL FRONTEND?
En el frontend se desarrollaron una SPA utilizando el framework de Vue.js, también se utilizó Bulma para mejorar los componentes visuales de las vistas.

# ¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND
Los servicios se dividen en servicios de usuario y de datos iot:

Servicios de datos IoT:
- ‘/api/data’ trae todos los datos de iot que existan en la base de datos. (GET)
- ‘/api/databyuser’ trae los datos de iot de un usuario en específico. (GET)
- ‘/api/data’ recibe datos requeridos para crear un dato iot. (POST)
- ‘/api/data/:id’ elimina los datos de iot específico por ID. (DELETE)

Servicios de usuario:
- ‘api/users’ trae todos los usuarios que existan en la base de datos, IMPORTANTE: se omite el envío de atributos como contraseña. (GET)
- ‘api/users/:id’ trae los atributos de un usuario específico. (GET)
- ‘api/users/signUp’ ofrece el servicio de registro de un usuario con sus respectivos datos. (POST)
- ‘api/users/signIn’ ofrece el servicio de inicio de sesión de un usuario con sus respectivos datos. (POST)
- ‘api/users/:id’ elimina el usuario especificado por ID. (DELETE)
- ‘api/users/:id’ actualiza los datos de un usuario especificado por ID (PUT).
- ‘api/hasAccess’ una ruta de prueba para verificar el token del middleware de autentificación.

# ¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?
El único servicio que requiere autentificación es ‘/api/databyuser’ donde éste toma el token del header para revisar si el token es verídico mediante un middleware.

# ¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?
La principal dificultad fue realizar el manejo de token en el frontend debido a que hay diversas formas de realizarlo, al final opté por guardarlo en local storage y restringiendo únicamente la visualización de datos en las vistas.

7.1 POR DESCONOCIMIENTO DE LA TECNOLOGÍA?
Es la primera vez que utilizaba el framework Vue.js

7.2 ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?
Manejo de token en frontend.

7.3 ¿QUÉ HABILIDADES DE DESARROLLO LE FALTAN PARA PODER TERMINAR EL PROYECTO?
Conocimientos en tecnologías frontend debido a que he tenido poca experiencia utilizando estos.

# ¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?
Los principales aprendizajes fueron separar completamente el backend del frontend, donde cada uno de estos realizaba únicamente sus funcionalidades correspondientes. También, utilizando frameworks full stack acorta el tiempo de desarrollo debido a que las funcionalidades básicas de una página web ya están integradas en este o por medio de librerías. Por último, mediante JWT podemos brindar una pequeña capa de seguridad a nuestras aplicaciones para no darle acceso a cualquier persona, sobre todo en los servicios de API REST.

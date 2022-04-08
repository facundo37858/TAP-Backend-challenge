# TAP-Backend-challenge



## Consigna

La consigna se basa en implementar al menos un método API REST que serán parte del backend para un
buscaminas. No hay limitación con respecto a arquitectura, protocolo o librerías.


## Requerimientos:
- Debe estar desarrollado en JavaScript (Node JS)
- Debe incluir al menos uno de estos 2 métodos:

  - GET. Como parámetro debe esperar un ID, este es el identificador de una partida, si viene
    informado se recupera desde un almacenamiento, si no está informado se crea una nueva
    partida.
    Este método debe responder a las siguientes rutas:
    GET /game
    GET /game/{ID}, donde {ID} es el identificador de la partida previamente guardada.

   - POST que guardará una partida ya iniciada y recibe la partida en curso.
     Este método debe responder a la siguiente ruta:
     POST /game (el body a enviar se muestra en el punto siguiente).


    - Tanto los métodos GET como POST deben utilizar la siguiente estructura JSON para
      intercambio de información, se incluyen datos de ejemplo:

    {
       "game": {
         "id": "M67REZ8NPWJ7W7G94KVGOP",
         "created": "2022-03-22T17:18:26.259101-03:00",
         "state": {
             "code": "1",
             "description": "CREATED"
            }
        },
      "cells": []
    }

- “id”: identificador de la partida.
- “created”: fecha de creación de la partida. 
- “state”: objeto que representa el estado de la partida, los valores posibles son 1-CREATED,
  2-WON, 3-LOST.
- “cells”: listado de celdas, en esta instancia será una colección vacía.

- Debe incluir al menos un Unit Test.
- La definición del medio de almacenamiento es libre (puede ser en memoria).
- La entrega consistirá del repositorio GitHub + indicaciones básicas de cómo ejecutar el
  buscaminas

## ¿Qué vamos a evaluar?
- Funcionalidad incluída en el desarrollo.
- Buenas prácticas aplicadas (arquitectura, legibilidad del código, etc).
- Tests (unit & integration).
Dado que este challenge puede requerir de mucho tiempo de desarrollo, te pido que no inviertas en este
desarrollo más de 6 horas y el plazo de entrega es de 3 días. Si las 6 horas no te son suficientes podés
recortar el alcance y aclararlo en la información básica sobre cómo ejecutar el proyecto, puede estar en un
README dentro de github

#### Tecnologías utilizadas:
- [ ] NodeJs
- [ ] Express
- [ ] Sequelize
- [ ] PostgresSQL

#### Base de datos

El modelo de la base de datos deberá tiene las siguientes entidades

- [ ] Game con las siguientes propiedades:
  - id 
  - cells
  - created

- [ ] State con las siguientes propiedades:
  - id
  - code
  - Description

La relación entre ambas entidades es de uno a uno ya que un game puede tener un estado.

## Funcionamiento

- crear un archivo .env como el archivo .envejemplo con las credenciales
- crear una base de datos con el nombre buscaminas
- dentro de la carpeta api ejecutar en consola npm install, para instalar las dependencias.
- luego npm run dev para levantar el server
- luego podemos hacer las peticiones a las rutas /game

### Ruta GET /game

- si no pasamos el parámetro ID por query devuelve todos los games
- si pasamos un ID devuelve el geme respectivo

### Ruta POST /game

- crea un game a partir de los parámetros recibidos por body
- retorna un mensaje desacuerdo si se creó o no 

#### Test
- utilice supertest
- solo pude realizar un test muy básico
- para ejecutarlo, ubicados dentro de la carpeta api ejecutar por consola npm run test.



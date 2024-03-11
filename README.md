# Proyecto CampusLands - Sistema de Gestión de Activos

## Descripción del proyecto

El proyecto CampusLands consiste en el desarrollo de un sistema de gestión de activos para llevar el control de todos los elementos ubicados en la sede principal de CAMPUSLANDS en la ciudad de Bucaramanga. Este sistema permitirá gestionar la ubicación, asignación, estado y movimientos de los activos de la organización.

## Entidades

El sistema manejará las siguientes entidades:

- **Activos**: Representan los elementos físicos ubicados en las instalaciones de CAMPUSLANDS.
- **Categoría de Activo**: Categorías a las que pertenecen los activos.
- **Proveedor**: Entidades que proveen los activos.
- **Tipo de Activo**: Tipos específicos de activos.
- **Marcas**: Marcas de los activos.
- **Personas**: Personal de la organización.
- **Tipo de Persona**: Tipos de roles que puede tener una persona en la organización.
- **Tipo de Movimiento de Activo**: Tipos de movimientos que puede tener un activo.
- **Asignación**: Registro de asignaciones de activos a personas.
- **Detalle de Movimiento**: Detalles de los movimientos realizados sobre un activo.
- **Historial de Activo**: Historial de movimientos de un activo.

## Requerimientos de diseño

### Área de Menú

- Logo de CampusLands.
- Opciones de Menú: Activos, Marcas, Personas, Estado, Tipo de Persona, Tipo de Movimiento de Activo, Tipo de Activo.

### Área de Contenido

#### Agregar

- Caja de texto para introducir información.
- Botón de ejecución.

#### Editar

- Campos para editar información de un activo (ID, nombre, estado).
- Caja de texto para introducir información de búsqueda.
- Botón de ejecución de búsqueda.

#### Eliminar

- Campos para eliminar un activo (ID, nombre, estado).
- Caja de texto para introducir información de búsqueda.
- Botón de ejecución de búsqueda.
- Botón de ejecución de eliminación (solo disponibles si el activo está dado de baja).

#### Buscar

- Campo de búsqueda para encontrar un activo por su ID, nombre o estado.
- Botón de ejecución de búsqueda.
- Botón para ver detalles del activo seleccionado.

#### Asignación

- Crear Asignación: Asignar activos a personas.
- Retornar Activo: Registrar el retorno de un activo asignado.

## README

### Instrucciones de instalación

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

### Uso del sistema

1. Selecciona una opción del menú para comenzar.
2. Agrega, edita, elimina o busca activos según tus necesidades.
3. Realiza asignaciones de activos a personas y registra su retorno cuando sea necesario.

### Api

## duckFetch

Este módulo contiene funciones para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una API RESTful utilizando la función fetch de JavaScript.

## Funciones

### duckFetch(endpoint, id, request, data)

```js
async function duckFetch(endpoint, id, request, data)
```

- **Descripción:** Función asíncrona que realiza una solicitud HTTP a la API.
- **Parámetros:**
  - `endpoint` (String): La ruta de la API a la que se realizará la solicitud.
  - `id` (Number): El ID del recurso a ser modificado o eliminado (opcional).
  - `request` (String): El método HTTP a utilizar (GET, POST, DELETE, PUT).
  - `data` (Object): Los datos a enviar en la solicitud (solo para POST y PUT).
- **Retorna:** Una Promise que se resuelve con la respuesta de la API (si la hay) o lanza un error si ocurre algún problema.

### HTTPrequest(url, method, data)

```js
async function HTTPrequest(url, method, data = null)
```

- **Descripción:** Función asíncrona que realiza una solicitud HTTP a una URL específica.
- **Parámetros:**
  - `url` (String): La URL a la que se realizará la solicitud.
  - `method` (String): El método HTTP a utilizar.
  - `data` (Object): Los datos a enviar en la solicitud (opcional).
- **Retorna:** Una Promise que se resuelve con la respuesta de la solicitud (si la hay) o lanza un error si ocurre algún problema.

### fillData(casillas, opciones)

```js
function fillData(casillas, opciones)
```

- **Descripción:** Función que crea un objeto con los datos de los campos de formulario.
- **Parámetros:**
  - `casillas` (NodeList): Una colección de elementos de entrada de formulario.
  - `opciones` (Array): Un array con las claves para el objeto de datos.
- **Retorna:** Un objeto con los datos de los campos de formulario.

### editSomething(endpoint, id)

```js
async function editSomething(endpoint, id)
```

- **Descripción:** Función asíncrona que muestra una ventana de confirmación para editar un recurso en la API.
- **Parámetros:**
  - `endpoint` (String): La ruta de la API donde se realizará la solicitud.
  - `id` (Number): El ID del recurso a ser editado.

### addSomething(endPoint)

```js
async function addSomething(endPoint)
```

- **Descripción:** Función asíncrona que muestra una ventana de confirmación para agregar un nuevo recurso en la API.
- **Parámetros:**
  - `endPoint` (String): La ruta de la API donde se realizará la solicitud.

### fillOptions(endpoint, select)

```js
async function fillOptions(endpoint, select)
```

- **Descripción:** Función asíncrona que llena un elemento `<select>` con opciones obtenidas de la API.
- **Parámetros:**
  - `endpoint` (String): La ruta de la API de donde se obtendrán las opciones.
  - `select` (HTMLSelectElement): El elemento `<select>` a ser llenado con las opciones.

### deleteAnything(endPoint, selectId)

```js
function deleteAnything(endPoint, selectId)
```

- **Descripción:** Función que muestra una ventana de confirmación para eliminar un recurso de la API.
- **Parámetros:**
  - `endPoint` (String): La ruta de la API donde se realizará la solicitud.
  - `selectId` (Number): El ID del recurso a ser eliminado.

### setupValidation()

```js
function setupValidation()
```

- **Descripción:** Función que configura la validación de formularios en la página.

## Exportaciones

```js
export { duckFetch, addSomething, editSomething, fillOptions, deleteAnything, setupValidation }
```

Este módulo exporta las siguientes funciones:

- `duckFetch`
- `addSomething`
- `editSomething`
- `fillOptions`
- `deleteAnything`
- `setupValidation`

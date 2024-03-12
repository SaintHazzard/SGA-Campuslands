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

## Api

### **duckFetch(endpoint, id, request, data)**

```javascript
async function duckFetch(endpoint, id, request, data)
```

*   **Descripción:** Función asíncrona que realiza una solicitud fetch a la URL `URL_API` concatenada con `endpoint` y `id` (si se proporciona).

*   **Parámetros:**
    *   `endpoint` (String): El endpoint al que se realizará la solicitud.
    *   `id` (String | null): El ID del recurso (opcional).
    *   `request` (String): El método HTTP a utilizar.
    *   `data` (Object): Los datos a enviar en la solicitud (opcional).

*   **Retorna:** Una Promise que se resuelve con la respuesta de la solicitud (si la hay) o lanza un error si ocurre algún problema.

### **HTTPrequest(url, method, data)**

```javascript
async function HTTPrequest(url, method, data = null)
```

*   **Descripción:** Función asíncrona que realiza una solicitud HTTP a una URL específica.

*   **Parámetros:**
    *   `url` (String): La URL a la que se realizará la solicitud.
    *   `method` (String): El método HTTP a utilizar.
    *   `data` (Object): Los datos a enviar en la solicitud (opcional).

*   **Retorna:** Una Promise que se resuelve con la respuesta de la solicitud (si la hay) o lanza un error si ocurre algún problema.

### **fillData(casillas, opciones)**

```javascript
function fillData(casillas, opciones)
```

*   **Descripción:** Función que crea un objeto `data` a partir de los valores de los elementos `casillas` y las claves `opciones`. Asigna a cada elemento `casilla` un atributo `data-set` con la clave correspondiente.

*   **Parámetros:**
    *   `casillas` (NodeList): Una lista de elementos HTML.
    *   `opciones` (Array): Un array de claves.

*   **Retorna:** Un objeto `data` con las claves y valores correspondientes.

### **editSomething(endpoint, id)**

```javascript
async function editSomething(endpoint, id)
```

*   **Descripción:** Función asíncrona que abre una ventana de confirmación de SweetAlert para guardar los cambios. Si se confirma, llama a `duckFetch` con el método `PUT`, `endpoint` e `id` proporcionados, y los datos recopilados por `fillData`. Luego, renderiza la vista.

*   **Parámetros:**
    *   `endpoint` (String): El endpoint al que se realizará la solicitud.
    *   `id` (String): El ID del recurso.

*   **Retorna:** Nada.

### **addSomething(endPoint)**

```javascript
async function addSomething(endPoint)
```

*   **Descripción:** Función asíncrona que abre una ventana de confirmación de SweetAlert para guardar los cambios. Si se confirma, llama a `duckFetch` con el método `POST`, `endPoint` y los datos recopilados por `fillData`. Además, genera un nuevo ID con `autoIncrementalId` y lo agrega a los datos. Luego, renderiza la vista.

*   **Parámetros:**
    *   `endPoint` (String): El endpoint al que se realizará la solicitud.

*   **Retorna:** Nada.

### **addAssignement(endPoint)**

```javascript
async function addAssignement(endPoint)
```

*   **Descripción:** Función asíncrona que abre una ventana de confirmación de SweetAlert para guardar los cambios. Si se confirma, actualiza el estado del producto correspondiente y llama a `duckFetch` con el método `POST`, `endPoint` y los datos recopilados por `fillData`. Además, genera un nuevo ID con `autoIncrementalId` y lo agrega a los datos. Luego, renderiza la vista.

*   **Parámetros:**
    *   `endPoint` (String): El endpoint al que se realizará la solicitud.

*   **Retorna:** Nada.

### **fillOptions(endpoint, select)**

```javascript
async function fillOptions(endpoint, select)
```

*   **Descripción:** Función asíncrona que obtiene datos de `duckFetch` con el método `GET` y `endpoint` proporcionados. Luego, crea elementos `option` con el `id` y `nombre` de cada elemento de los datos y los agrega al elemento `select`.

*   **Parámetros:**
    *   `endpoint` (String): El endpoint al que se realizará la solicitud.
    *   `select` (HTMLElement): El elemento HTML `<select>` donde se agregarán las opciones.

*   **Retorna:** Nada.

### **fillOptionsAssignaments(endpoint, select, accion = null)**

```javascript
async function fillOptionsAssignaments(endpoint, select, accion = null)
```

*   **Descripción:** Función asíncrona que, dependiendo del valor de `endpoint` y `accion`, obtiene datos de `duckFetch` con el método `GET` y `endpoint` proporcionados. Luego, crea elementos `option` con el `id` y una descripción basada en los datos obtenidos y los agrega al elemento `select`.

*   **Parámetros:**
    *   `endpoint` (String): El endpoint al que se realizará la solicitud.
    *   `select` (HTMLElement): El elemento HTML `<select>` donde se agregarán las opciones.
    *   `accion` (String | null): Una acción adicional (opcional).

*   **Retorna:** Nada.

### **addhistory(productId)**

```javascript
async function addhistory(productId)
```

*   **Descripción:** Función asíncrona que obtiene datos de `asignaractivos` y `assignaments` relacionados con el `productId` proporcionado. Luego, crea nuevos registros en `historialactivos` con los datos obtenidos y un nuevo ID generado por `autoIncrementalId`.

*   **Parámetros:**
    *   `productId` (String): El ID del producto.

*   **Retorna:** Nada.

### **deleteAnything(endPoint, selectId)**

```javascript
function deleteAnything(endPoint, selectId)
```

*   **Descripción:** Función que abre una ventana de confirmación de SweetAlert para eliminar un elemento. Si se confirma, llama a `duckFetch` con el método `DELETE`, `endPoint` y `selectId` proporcionados. Luego, renderiza la vista.

*   **Parámetros:**
    *   `endPoint` (String): El endpoint al que se realizará la solicitud.
    *   `selectId` (String): El ID del elemento a eliminar.

*   **Retorna:** Nada.

### **setupValidation()**

```javascript
function setupValidation()
```

*   **Descripción:** Función que agrega un controlador de eventos `submit` a todos los formularios con la clase `needs-validation`. Si el formulario no es válido, previene el envío y agrega la clase `was-validated` al formulario.

*   **Parámetros:** Ninguno.

*   **Retorna:** Nada.

### **updateProductStatus(productId, newStatus)**

```javascript
async function updateProductStatus(productId, newStatus)
```

*   **Descripción:** Función asíncrona que obtiene los datos del producto con `productId` proporcionado y actualiza su `estadoId` con `newStatus`. Luego, llama a `duckFetch` con el método `PUT`, `productId` y los datos actualizados.

*   **Parámetros:**
    *   `productId` (String): El ID del producto.
    *   `newStatus` (String): El nuevo estado del producto.

*   **Retorna:** Nada.
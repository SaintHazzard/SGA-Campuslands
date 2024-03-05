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

¡Disfruta utilizando el sistema de gestión de activos de CampusLands!
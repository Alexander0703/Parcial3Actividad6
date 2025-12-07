🎓 Gestor de Alumnos - Aplicación Web Interactiva
Una aplicación web moderna para gestionar y filtrar información de estudiantes con diseño atractivo y lenguaje juvenil. Esta aplicación permite visualizar y filtrar datos de alumnos de manera intuitiva y divertida.

📁 Estructura del Proyecto
text
📂 gestor-alumnos/
├── index.html          # Interfaz principal de la aplicación

├── styles.css          # Estilos CSS con diseño moderno y oscuro

├── script.js           # Lógica JavaScript (clase GestorAlumnos)

├── alumnos.json        # Base de datos de alumnos en formato JSON

└── README.md           # Este archivo

✨ Características Destacadas
🎨 Diseño Moderno
Tema oscuro con acentos rojos y gradientes atractivos

Diseño responsive que se adapta a móviles y escritorio

Tarjetas interactivas con efectos hover

Botones con gradientes y animaciones suaves

Borde rojo temático en toda la interfaz

🎯 Funcionalidades Principales
Filtros Inteligentes:

Todos los alumnos

Mayor de edad ("Alumnos que están rucos")

Menor de edad ("Alumnos que aún están chavos")

Aprobados ("Alumnos que sí le saben")

Reprobados ("Alumnos que no le saben")

Por género: Hombre ("Vatos") / Mujer ("Chavas")

Visualización de Datos:

Tarjetas individuales por alumno

Estado de aprobación con colores (verde/rojo)

Contador de resultados por filtro

Información completa: nombre, edad, género, calificación

Controles:

Botón "Clear" para limpiar la pantalla

Mensajes descriptivos con lenguaje juvenil

Manejo de errores elegante

🚀 Cómo Usar
Instalación Local
Descarga o clona el proyecto

Asegúrate de tener todos los archivos en la misma carpeta:

index.html

styles.css

script.js

alumnos.json

Abre index.html en tu navegador web

Uso Básico
Abrir la aplicación: Navega al archivo index.html

Seleccionar filtro: Haz clic en cualquiera de los botones de filtro

Ver resultados: Los alumnos aparecerán en tarjetas organizadas

Cambiar filtro: Selecciona otro botón para cambiar la vista

Limpiar: Usa el botón "Clear" para volver al estado inicial

🎮 Filtros Disponibles
Botón	Descripción	Lógica	Mensaje Mostrado
Todos	Muestra todos los alumnos	Sin filtro	"Todos los alumnos"
Mayor de Edad	Edad ≥ 18 años	edad >= 18	"Alumnos que están rucos"
Menor de Edad	Edad < 18 años	edad < 18	"Alumnos que aún están chavos"
Aprobados	Calificación ≥ 60	aprobado: true	"Alumnos que sí le saben"
Reprobados	Calificación < 60	aprobado: false	"Alumnos que no le saben"
Hombre	Género masculino	genero: "hombre"	"Alumnos vatos"
Mujer	Género femenino	genero: "mujer"	"Alumnos chavas"
Clear	Limpia la pantalla	-	Mensaje inicial
📊 Estructura de Datos (alumnos.json)
Cada alumno tiene la siguiente estructura:

json
{
  "id": 1,
  "nombre": "Ana García",
  "edad": 20,
  "genero": "mujer",
  "calificacion": 85,
  "aprobado": true
}
Campos:

id: Identificador único

nombre: Nombre completo del alumno

edad: Edad en años

genero: "hombre" o "mujer"

calificacion: Puntaje de 0 a 100

aprobado: true si calificación ≥ 60, false en caso contrario

🔧 Detalles Técnicos
Clase GestorAlumnos (script.js)
La aplicación está construida usando Programación Orientada a Objetos:

javascript
class GestorAlumnos {
    constructor()        // Inicializa la aplicación
    cargarDatos()        // Carga JSON mediante fetch
    inicializarEventos() // Configura listeners de botones
    mostrarTodos()       // Muestra todos los alumnos
    filtrarMayoresEdad() // Filtra por edad ≥ 18
    filtrarMenoresEdad() // Filtra por edad < 18
    filtrarAprobados()   // Filtra por aprobación
    filtrarReprobados()  // Filtra por reprobación
    filtrarGenero()      // Filtra por género
    limpiarPantalla()    // Restaura estado inicial
    mostrarAlumnos()     // Renderiza tarjetas
    mostrarError()       // Maneja errores
}
Tecnologías Utilizadas
HTML5: Estructura semántica

CSS3: Grid, Flexbox, Gradientes, Transiciones

JavaScript ES6+: Clases, async/await, fetch API, Array methods

JSON: Almacenamiento de datos

Características de Código
Limpio y modular: Código bien organizado en funciones específicas

Manejo de errores: Try/catch para fetch y validaciones

Responsive: Media queries para móviles

Accesibilidad: HTML semántico, contraste adecuado

🎨 Personalización
Modificar Colores
En styles.css puedes cambiar:

css
/* Colores principales */
--color-primario: #ff4444;
--color-secundario: #ff6b6b;
--fondo-oscuro: #1a1a1a;
--fondo-tarjeta: #2a0a0e;

/* Estados */
.aprobado { background: #388e3c; }
.reprobado { background: #d32f2f; }
Agregar Más Alumnos
En alumnos.json, añade nuevos objetos dentro del array "alumnos":

json
{
  "id": 8,
  "nombre": "Nuevo Estudiante",
  "edad": 19,
  "genero": "hombre",
  "calificacion": 75,
  "aprobado": true
}
Agregar Nuevos Filtros
En script.js, añade:

Botón en HTML

Event listener en inicializarEventos()

Método de filtrado en la clase

📱 Responsive Design
La aplicación se adapta automáticamente:

Escritorio: Grid de 3-4 columnas para tarjetas

Tablet: Grid de 2 columnas

Móvil (≤768px):

Botones en 2 columnas

Tarjetas en 1 columna

Fuentes más pequeñas

🔄 Posibles Mejoras
Búsqueda por nombre - Campo de búsqueda en tiempo real

Ordenamiento - Por nombre, edad, calificación

Edición de datos - Modificar información de alumnos

Agregar alumnos - Formulario para nuevos registros

Exportar datos - Descargar resultados en CSV/PDF

Persistencia - Guardar cambios en localStorage

Temas - Alternar entre modo claro/oscuro

Gráficos - Visualización estadística de datos

Paginación - Para muchos resultados

Filtros combinados - Ej: "Mujeres aprobadas mayores de edad"

🧪 Pruebas
La aplicación incluye:

✅ Carga asíncrona de datos

✅ Manejo de errores en fetch

✅ Filtros funcionales

✅ Diseño responsive

✅ Interacciones de usuario

✅ Mensajes descriptivos

📋 Requisitos
Navegador moderno (Chrome, Firefox, Safari, Edge)

JavaScript habilitado

Servidor web (para evitar problemas CORS con fetch)

Importante: Debido al uso de fetch, abre la aplicación desde un servidor local:

bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
🐛 Solución de Problemas
"Error al cargar los datos"
Verifica que alumnos.json exista en la misma carpeta

Asegúrate de usar un servidor local (no file://)

Revisa la consola del navegador (F12) para detalles

"No se muestran los alumnos"
Verifica la estructura del JSON

Comprueba que los datos se hayan cargado correctamente

Revisa que los filtros estén aplicando la lógica correcta

"Diseño no se ve bien"
Asegúrate de que todos los archivos CSS estén cargados

Verifica que no haya errores en la consola

Prueba en otro navegador

🎓 Casos de Uso
Educadores: Visualizar rápidamente el desempeño de estudiantes

Administradores: Filtrar por diferentes criterios demográficos

Estudiantes: Ver compañeros con características similares

Desarrolladores: Ejemplo de aplicación CRUD con filtros

Aprendizaje: Proyecto educativo de JavaScript moderno

Autor: Proyecto educativo en JavaScript
Tecnologías: HTML5, CSS3, JavaScript (ES6+), JSON
Propósito: Demostración de filtrado de datos y diseño web moderno
Nivel: Intermedio - Fetch API, Clases, Manipulación del DOM
Licencia: Uso educativo y personal libre

Nota: La aplicación usa lenguaje informal y juvenil para hacerla más atractiva y cercana a estudiantes.

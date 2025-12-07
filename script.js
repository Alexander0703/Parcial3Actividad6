class GestorAlumnos {
    constructor() {
        this.alumnos = [];
        this.cargarDatos();
        this.inicializarEventos();
    }

    async cargarDatos() {
        try {
            const respuesta = await fetch('alumnos.json');
            const datos = await respuesta.json();
            this.alumnos = datos.alumnos;
        } catch (error) {
            console.error('Error al cargar los datos:', error);
            this.mostrarError('Error al cargar los datos de alumnos');
        }
    }

    inicializarEventos() {
        document.getElementById('btnTodos').addEventListener('click', () => this.mostrarTodos());
        document.getElementById('btnMayorEdad').addEventListener('click', () => this.filtrarMayoresEdad());
        document.getElementById('btnMenorEdad').addEventListener('click', () => this.filtrarMenoresEdad());
        document.getElementById('btnAprobados').addEventListener('click', () => this.filtrarAprobados());
        document.getElementById('btnReprobados').addEventListener('click', () => this.filtrarReprobados());
        document.getElementById('btnHombre').addEventListener('click', () => this.filtrarGenero('hombre'));
        document.getElementById('btnMujer').addEventListener('click', () => this.filtrarGenero('mujer'));
        document.getElementById('btnClear').addEventListener('click', () => this.limpiarPantalla());
    }

    mostrarTodos() {
        this.mostrarAlumnos(this.alumnos, 'Todos los alumnos');
    }

    filtrarMayoresEdad() {
        const mayores = this.alumnos.filter(alumno => alumno.edad >= 18);
        this.mostrarAlumnos(mayores, 'Alumnos que estan rucos');
    }

    filtrarMenoresEdad() {
        const menores = this.alumnos.filter(alumno => alumno.edad < 18);
        this.mostrarAlumnos(menores, 'Alumnos que aun estan chavos');
    }

    filtrarAprobados() {
        const aprobados = this.alumnos.filter(alumno => alumno.aprobado);
        this.mostrarAlumnos(aprobados, 'Alumnos que si le saben');
    }

    filtrarReprobados() {
        const reprobados = this.alumnos.filter(alumno => !alumno.aprobado);
        this.mostrarAlumnos(reprobados, 'Alumnos que no le saben');
    }

    filtrarGenero(genero) {
        const filtrados = this.alumnos.filter(alumno => alumno.genero === genero);
        const titulo = genero === 'hombre' ? 'Alumnos vatos' : 'Alumnos chavas';
        this.mostrarAlumnos(filtrados, titulo);
    }

    limpiarPantalla() {
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = '<p class="mensaje-inicial">Selecciona un filtro para mostrar los datos</p>';
    }

    mostrarAlumnos(alumnos, titulo) {
        const resultados = document.getElementById('resultados');
        
        if (alumnos.length === 0) {
            resultados.innerHTML = `
                <div class="mensaje-vacio">
                    <h3>${titulo}</h3>
                    <p>No se encontraron alumnos que coincidan con el filtro</p>
                </div>
            `;
            return;
        }

        let html = `<h2 style="grid-column: 1 / -1; color: #ff6b6b; margin-bottom: 20px; text-align: center;">${titulo} (${alumnos.length})</h2>`;
        
        html += alumnos.map(alumno => `
            <div class="tarjeta-alumno">
                <h3>${alumno.nombre}</h3>
                <p><strong>Edad:</strong> ${alumno.edad} años</p>
                <p><strong>Género:</strong> ${alumno.genero.charAt(0).toUpperCase() + alumno.genero.slice(1)}</p>
                <p><strong>Calificación:</strong> ${alumno.calificacion}/100</p>
                <span class="estado ${alumno.aprobado ? 'aprobado' : 'reprobado'}">
                    ${alumno.aprobado ? 'Aprobado' : 'Reprobado'}
                </span>
            </div>
        `).join('');

        resultados.innerHTML = html;
    }

    mostrarError(mensaje) {
        const resultados = document.getElementById('resultados');
        resultados.innerHTML = `<p class="mensaje-vacio" style="color: #ff4444;">${mensaje}</p>`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new GestorAlumnos();
});
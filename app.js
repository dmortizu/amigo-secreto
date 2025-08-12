// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaAmigos = [];
const MAX_AMIGOS = 5;

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    // Validar que no se haya alcanzado el límite de 5 amigos
    if (listaAmigos.length >= MAX_AMIGOS) {
        alert('Ya se han añadido 5 amigos. No se pueden añadir más.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (listaAmigos.includes(nombre)) {
        alert('Este nombre ya ha sido añadido. Por favor, ingrese un nombre diferente.');
        return;
    }
    
    // Añadir el nombre a la lista
    listaAmigos.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización
    mostrarListaAmigos();
    
    // Mostrar mensaje de confirmación
    console.log(`Amigo "${nombre}" añadido exitosamente. Total: ${listaAmigos.length}/${MAX_AMIGOS}`);
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    if (listaAmigos.length === 0) {
        listaElement.innerHTML = '<li class="empty-message">No hay amigos añadidos aún</li>';
        return;
    }
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.className = 'friend-item';
        li.innerHTML = `
            <span class="friend-number">${index + 1}</span>
            <span class="friend-name">${amigo}</span>
            <button class="remove-button" onclick="eliminarAmigo(${index})" title="Eliminar amigo">
                <span>&times;</span>
            </button>
        `;
        listaElement.appendChild(li);
    });
    
    // Mostrar contador
    const contador = document.createElement('div');
    contador.className = 'counter';
    contador.textContent = `${listaAmigos.length}/${MAX_AMIGOS} amigos añadidos`;
    listaElement.appendChild(contador);
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    const nombreEliminado = listaAmigos[index];
    listaAmigos.splice(index, 1);
    mostrarListaAmigos();
    console.log(`Amigo "${nombreEliminado}" eliminado. Total: ${listaAmigos.length}/${MAX_AMIGOS}`);
}

// Función para sortear amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para hacer el sorteo.');
        return;
    }
    
    // Seleccionar un amigo aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado en el formato solicitado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">El amigo Secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
    
    console.log('Amigo secreto sorteado:', amigoSorteado);
    console.log('Lista completa de amigos:', listaAmigos);
}

// Función para limpiar toda la lista
function limpiarLista() {
    if (listaAmigos.length === 0) {
        alert('La lista ya está vacía.');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres eliminar todos los amigos de la lista?')) {
        // Limpiar la lista de amigos
        listaAmigos = [];
        
        // Limpiar el campo de entrada
        const inputAmigo = document.getElementById('amigo');
        inputAmigo.value = '';
        
        // Limpiar el mensaje del resultado del sorteo
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        
        // Actualizar la visualización de la lista
        mostrarListaAmigos();
        
        // Enfocar el campo de entrada
        inputAmigo.focus();
        
        console.log('Lista de amigos limpiada completamente.');
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarListaAmigos();
    
    // Agregar evento de tecla Enter al campo de entrada
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el campo de entrada al cargar la página
    inputAmigo.focus();
});


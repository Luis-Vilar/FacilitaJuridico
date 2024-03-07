function calculateRoute(clients) {
  // inicializar la ruta y los clientes visitados
  const route = [];
  const visited = [];
  // comenzamos desde el local de la empresa (longitud 0, latitud 0)
  let current = { longitud: 0, latitud: 0 };
  // inicializar la distancia mínima y el siguiente cliente a visitar
  let minDistance = Number.MAX_VALUE;
  let next = null;
  // mientras no se hayan visitado todos los clientes
  while (visited.length < clients.length) {
    // buscar el cliente más cercano
    for (let i = 0; i < clients.length; i++) {
      // si no se ha visitado
      if (!visited.includes(i)) {
        // calcular la distancia euclidiana entre el cliente actual y el cliente i
        const distance = Math.sqrt(
          Math.pow(clients[i].longitud - current.longitud, 2) +
            Math.pow(clients[i].latitud - current.latitud, 2)
        );
        // si la distancia es menor que la mínima encontrada hasta el momento
        if (distance < minDistance) {
          // actualizar la distancia mínima y el siguiente cliente a visitar
          minDistance = distance;
          next = i;
        }
      }
    }
    // marcar el cliente como visitado y agregarlo a la ruta
    visited.push(next);
    route.push(clients[next]);
    // actualizar el cliente actual y la distancia mínima
    current = clients[next];
    minDistance = Number.MAX_VALUE;
  }
  return route;
}

module.exports = { calculateRoute };

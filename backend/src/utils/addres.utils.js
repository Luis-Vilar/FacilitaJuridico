function calculateRoute(clients) {
  const route = [];
  const visited = [];
  let current = { longitud: 0, latitud: 0 };
  let minDistance = Number.MAX_VALUE;
  let next = null;
  while (visited.length < clients.length) {
    for (let i = 0; i < clients.length; i++) {
      if (!visited.includes(i)) {
        const distance = Math.sqrt(
          Math.pow(clients[i].longitud - current.longitud, 2) +
            Math.pow(clients[i].latitud - current.latitud, 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          next = i;
        }
      }
    }
    visited.push(next);
    route.push(clients[next]);
    current = clients[next];
    minDistance = Number.MAX_VALUE;
  }
  return route;
}

module.exports = { calculateRoute };

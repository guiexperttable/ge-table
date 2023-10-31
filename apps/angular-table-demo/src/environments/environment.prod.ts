
const websocketPort = 3334;

export const environment = {
  production: true,
  tableApi:{
    websocketPort,
    findUrl: "/api/find" // see async-table-server-demo
  }
};

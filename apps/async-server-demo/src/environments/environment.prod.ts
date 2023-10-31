const frontendPort = 4200;
const websocketPort = 3334;

export const environment = {
  production: true,

  frontendPort,

  websocketPort: websocketPort,
  websocketOptions: {
    cors: {
      origin: [
        'http://localhost:' + frontendPort,
        'http://localhost:' + process.env.PORT,
        'http://localhost:3333',
      ]
    }
  }
};

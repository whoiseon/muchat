import { io } from 'socket.io-client';

const ENDPOINT = 'http://localhost:3065';

export const socket = (code) => {
  return io(`${ENDPOINT}/chat`, {
    transports: ["websocket"],
    query: {
      code,
    },
  });
};

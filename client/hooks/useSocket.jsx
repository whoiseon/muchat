import { useCallback, memo } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3065';
const sockets = {};

const useSocket = (code) => {
  const disconnect = useCallback(() => {
    if (code) {
      sockets[code].disconnect();
      delete sockets[code];
    }
  }, []);

  if (!code) return [undefined, disconnect];

  sockets[code] = io(`${ENDPOINT}/chat`, {
    cors: {
      origin: '*',
      credentials: true,
    },
    transports: ["websocket"],
    query: {
      code,
    },
  });

  return [sockets[code], disconnect];
};

export default useSocket;

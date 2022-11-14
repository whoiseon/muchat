import { useCallback } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:3065';
const sockets = {};

const useSocket = (code) => {
  const disconnect = useCallback(() => {
    if (code && sockets[code]) {
      sockets[code].disconnect();
      delete sockets[code];
    }
  }, [code]);

  if (!code) {
    return [undefined, disconnect];
  }

  if (!sockets[code]) {
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
  }

  return [sockets[code], disconnect];
};

export default useSocket;

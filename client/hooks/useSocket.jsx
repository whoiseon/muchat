import { useCallback, memo } from 'react';
import io from 'socket.io-client';

const backUrl = 'http://localhost:3065';
const sockets = {};

const useSocket = (code) => {
  const disconnect = useCallback(() => {
    if (code) {
      sockets[code].disconnect();
      delete sockets[code];
    }
  }, []);

  if (!code) return [undefined, disconnect];

  sockets[code] = io(`${backUrl}/muchat`, { transports: ["websocket"] });

  return [sockets[code], disconnect];
};

export default useSocket;

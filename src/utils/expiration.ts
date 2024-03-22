const expireMap = new Map();

const timeout = 60 * 1000;

export const isExpiration = (id: string) => {
  const timestamp = new Date().valueOf();
  const preTime = expireMap.get(id);
  if (preTime && timestamp - preTime < timeout) {
    return false;
  }
  return true;
};

export const updateExpiration = (id: string) => {
  const timestamp = new Date().valueOf();
  expireMap.set(id, timestamp);
};

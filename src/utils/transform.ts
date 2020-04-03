const transArray2Map = (
  data: Record<string, any>[],
  keyPath = 'id',
  valuePath: string
): Record<string, any> => {
  const keyPaths = keyPath.split('.');
  const valuePaths = valuePath.split('.');
  const map = new Map();

  data.forEach(item => {
    const key = keyPaths.reduce((result, currentValue) => result[currentValue], item);
    const value = valuePaths.reduce((result, currentValue) => result[currentValue], item);
    map.set(key, value);
  });

  return map;
};

export default transArray2Map;

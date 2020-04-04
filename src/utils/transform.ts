const getValueInDepth = (result: any, currentValue: string): any => result[currentValue];

const transArray2Map = (keyPath = 'id', valuePath: string) => {
  return (data: Record<string, any>[]): Record<string, any> => {
    const keyPaths = keyPath.split('.');
    const valuePaths = valuePath.split('.');
    const map = new Map();

    data.forEach(item => {
      const key = keyPaths.reduce(getValueInDepth, item);
      const value = valuePaths.reduce(getValueInDepth, item);
      map.set(key, value);
    });

    return map;
  };
};

export default transArray2Map;

const analyzeArray = (arr) => {
  if (arr.length === 0) {
    throw new Error("Can't work with empty arrays");
  }

  const average = () => {
    return (
      arr.reduce(
        (accumulator, current) =>
          Number.parseFloat(accumulator) + Number.parseFloat(current),
        0
      ) / arr.length
    );
  };

  const min = () => {
    let minElement = Number.MAX_VALUE;

    arr.forEach((elem) => {
      if (elem < minElement) {
        minElement = elem;
      }
    });

    return Number.parseFloat(minElement);
  };

  const max = () => {
    let maxElement = Number.MIN_VALUE;

    arr.forEach((elem) => {
      if (elem > maxElement) {
        maxElement = elem;
      }
    });

    return Number.parseFloat(maxElement);
  };

  const length = () => {
    return arr.length;
  };

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;

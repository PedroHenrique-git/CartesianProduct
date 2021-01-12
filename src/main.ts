// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { alphabet, numbers } from "./data";

function getRandomIntInclusive(min: number, max: number): number {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  );
}

function generateMatrix(size: number): string[][] {
  const arr1: string[] = [];
  const arr2: string[] = [];
  const result: string[][] = [];

  for (let i = 0; i < size; i += 1) {
    const randomNumber = getRandomIntInclusive(0, 9);
    arr1.push(`${alphabet[randomNumber]}`);
    arr2.push(`${numbers[randomNumber]}`);
  }

  result.push(arr1);
  result.push(arr2);

  return result;
}

function generateCoordinates(matrix: string[][]): string[] {
  const arr3: string[] = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix[1].length; j += 1) {
      arr3.push(`(${matrix[0][i]},${matrix[1][j]})`);
    }
  }

  return arr3;
}

const dots: string[] = generateCoordinates(generateMatrix(3));

dots.forEach((dot) => console.log(dot));

// Java: Exception
// JavaScript: Error

// const array = new Array(100000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }

  return `file contents`;
}

function colseFile(fileName: string) {
  //
}

const fileName = 'not exist!';

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!!`);
} finally {
  colseFile(fileName);
  console.log(`finally!`);
}

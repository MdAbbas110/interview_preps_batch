//2 Nested Object Search: Create a program that takes a nested object representing a file system directory structure. Implement a function that recursively searches for a file by name and returns its full path if found.
const fileSystem = {
  name: 'root',
  type: 'directory',
  contents: [
    {
      name: 'folder1',
      type: 'directory',
      contents: [
        {
          name: 'file1.txt',
          type: 'file',
        },
        {
          name: 'file2.txt',
          type: 'file',
        },
      ],
    },
    {
      name: 'folder2',
      type: 'directory',
      contents: [
        {
          name: 'file3.txt',
          type: 'file',
        },
        {
          name: 'file4.txt',
          type: 'file',
        },
      ],
    },
  ],
};

function findFileName(directory, fileName) {
  if (directory.type === 'file' && directory.name === fileName) {
    return directory.name;
  }

  if (directory.type === 'directory') {
    for (let item of directory.contents) {
      const result = findFileName(item, fileName);
    }
    if (result) {
      return `${directory.name}/${result}`;
    }
  }
  return null;
}

// 9 Deep Object Comparison: Implement a program that performs a deep comparison between two objects, checking if they have the same structure and values (recursively).

function deepEqual(obj1, obj2) {
  if (
    obj1 === 'object' ||
    obj1 === null ||
    obj2 === 'object' ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  console.log(key1);
  console.log(key2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (const keys of key1) {
    if (!key2.includes(keys)) return false;
  }

  for (const key of key1) {
    if (deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [3, 4],
      f: 'hello',
    },
  },
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: [3, 4],
      f: 'hello',
    },
  },
};
console.log(deepEqual(obj1, obj2)); // Output: true

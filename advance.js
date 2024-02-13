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

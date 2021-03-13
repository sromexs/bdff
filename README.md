# bdff
Make Build and initiates default folders directories and files.

# Make Initial Folders

with this simple code you can make folders and directories easily. this package first checks if directory is exists or not if not exists makes directory. You can input list of folders that you want to create by array.
```typescript
bdff.mkdir(["Test", "Test/Inner", "Test/Inner2"]);

// Created Directories :
// Test/
// Test/Inner/
// Test/Inner2/
```
You can just input single string and make single directory.
```typescript
bdff.mkdir("WithString");

// Created Directories :
// WithString/
```

# Make Initial Files

This package cheks if given file does not exists and creates file with default value.
```typescript
bdff.writeFile([
  {
    name: "Test/array.json",
    data: JSON.stringify([]),
  },
  {
    name: "Test/file.txt",
    data: "Simple Text",
  },
]);

// Created Files :
// Test/array.json => []
// Test/file.txt => Simple Text
```
You can use this method by one object.
```typescript
bdff.writeFile({
  name: "Test/singleObject.json",
  data: JSON.stringify({}),
});

// Created Files :
// Test/singleObject.json => {}
```

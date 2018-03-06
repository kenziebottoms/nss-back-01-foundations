# Streaming File IO

- [x] Create a JavaScript file to act as a Node.js program (`09-streaming.js`).
- [x] This program should read a file (`07-languages.json`) and output to a file (`09-streaming-caps.json`). 
- [x] Use the second command-line argument to declare the destination. You will not need to make your own `Readable` for this exercise. Simply use [`fs.createReadStream()`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) instead.
- [ ]  In between, all letters should be capitalized with your own `Transform` stream. 
- [ ]  Then the data should be passed to your own `Writable` stream.
- [ ]  [`fs.appendFile()`](https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback) will be helpful for this task.
- [ ] In addition, use some other method in the `fs` module to make sure executing the program multiple times does not continue making a larger and larger destination file.

Expected:

```bash
$ cat 09.json
{
  "languages": {
    "JavaScript": "Awesome",
    "C++": "Difficult",
    "BASIC": "Old"
  }
}
$ ./09-streaming.js 09-streaming-caps.json
$ cat 09-streaming-caps.json
{
  "LANGUAGES": {
    "JAVASCRIPT": "AWESOME",
    "C++": "DIFFICULT",
    "BASIC": "OLD"
  }
}
```

## Bonus

- [ ] ES6 Object Destructuring
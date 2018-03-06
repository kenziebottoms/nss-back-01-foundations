# Streaming File IO

- [ ] Create a JavaScript file to act as a Node.js program named `streams.js`.
- [ ] This program should read a file `languages.json` and output to a file `languages_caps.json`. 
- [ ] Use the second command-line argument to declare the destination. You will not need to make your own `Readable` for this exercise. Simply use [`fs.createReadStream()`](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options) instead.
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
$ ./09.js 09_Caps.json
$ cat 09_Caps.json
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
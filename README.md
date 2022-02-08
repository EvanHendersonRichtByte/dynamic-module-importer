# Dynamic Module Importer
### Allows you to import multiple modules into your node script

<br>

### Installation
Install from the command line:

`npm install @evanhendersonrichtbyte/dynamic-module-importer@1.1.0`

Install via package.json:

`"@evanhendersonrichtbyte/dynamic-module-importer": "1.1.0"`

### Tested with:
- mongoose
- other file that contains default exported functions

### How to use
include functions needs 3 parameters (files, fileDirectory, includedFn)
- files : array of strings = your files (containing array of filenames)
- fileDirectory : strings = modules relative path from your current file
- includedFn : array of strings = storing list of imported functions

### Functions
- functionList = return list of imported functions
- fileList = return list of imported files

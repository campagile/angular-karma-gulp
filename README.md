# Setup

You may need to install bower and gulp, you can install this globally using:
``` sh
npm install -g bower
npm install -g gulp
```

Install karma command line interface globally using:
``` sh
npm install karma-cli -g
```

Use "npm install" and "bower install" to install required dependencies:
``` sh
npm install
bower install
```

## Development
Run gulp serve to run grunt in develop mode:
``` sh
gulp serve
```
This will automatically start a server at port 3000.
``` sh
http://localhost:3000
```

This server is configured with autoreload, so changes in the app folder will automatically apply.
Make sure you only edit files in the app folder. So do not edit files in the generated dist folder.

## Tests
To run tests, we can use:
``` sh
gulp test
```

## Builds
For the test or production jenkins builds:
``` sh
gulp
```

This will compile all required source files and moves all frontend files to the dist folder.

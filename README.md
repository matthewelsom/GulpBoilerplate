# Gulp Boilerplate

To use gulp to process, you need to install the following:

## Prerequisites:

### NPM

Install npm locally via Terminal
		
```
npm install npm -g
```

To check what version of npm you have, use `npm -v` 

### Node JS 

Download and install [Node.js](https://nodejs.org/en/)

Use `node -v` to check the version number of node you have installed.

## Install Gulp

1. `cd` to the project directory
2. Install gulp and the dependencies required to process your files, simply use the command 

```
sudo npm install
```

This command will install all the dependencies that are required in this project into a folder called `node_modules`.

## I/O

Gulp will process and watch all files inside the `app` folder, the output will be placed in a `dist` directory automatically.

Gulp is controlled by `gulpfile.js`, project information including the dependencies used are included in package.json.
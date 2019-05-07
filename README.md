# i9


To get the project running, you have to have the following installed in your machine.
1. Node 7.4.0

## If you dont have angular cli installed
2. `npm install -g @angular/cli@v1.5.5`
3. Go to project folder and do : `npm install `

## If you already have angular cli installed
2. `npm uninstall -g @angular/cli`
3. `npm cache clean`
 (if npm version is > 5 then use `npm cache verify` to avoid errors (or to avoid using --force) )
4. `npm install -g @angular/cli@v1.5.5`
5. Go to project folder and do : `npm install `
 

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Coding Standards and best practices

* Each new block of code should be indented by 4 spaces from previous block for easy readability.  This setting is configured in .editorconfig which should automatically be taken into consideration by the IDE.
* All statements should end with a semi-colon
* Terinary operators are to be used only in the case of returning or assinging a value from both the true and false conditions
* if or if-else should be used in the cases where multiple statemetns need to be executed.  This provides good readability to code
* String litreal is to be enclosed in double quotation marks (" ")
* Use of ES6 feature like lambda expression or fat arrow function `()=> { } ` is preferred over ES5 convention of using `function() { }`
* Where possible use "String interpolation" for readabiility
* Where there are functions which are common across multiple components, it is recommended to create them in the Utility classes and reuse them
* All variables and function names need to be in camel case 
* Use `const` variable only when the values does not change or you are not changing the value it holds 
* Use `let` to limit scope within the block 
* Use `var` for everything else 
* Use [lodash](https://lodash.com/docs/) library for string and Array manipulation 
* Ensure you do deep copy of the object if you are passing it to another class or function before manipulating

## Tools and Extensions

There are a lot of IDE's and text-editors available for angular development. We strongly recommend [Visual Studio Code](https://code.visualstudio.com/download) with Angular Essentials extension.

## Download links and resources

1. [Visual Studio Code](https://code.visualstudio.com/download) : `https://code.visualstudio.com/download`
2. [Angular Essentials Extenstion](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials) : `https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials`


## Further help
Use visual studio code for development
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

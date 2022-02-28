


To install mocha and chai in your node project directory you must enter,in case .gitignore excludes the node_modules directory, necessary for mocha chai:

npm init

npm install mocha chai --save-dev

Package.json add lines :

"scripts": { "description": "Línea per als tests de mocha chai", "test": "mocha tests/*.spec.js" },

For install mochawesome:

npm install mochawesome --save-dev

For install moment:

npm install moment

Package.json add lines :


"scripts": {
    "description": "Línea per als tests de mocha chai",
    "test": "mocha tests/*.spec.js"
  },
  
  "script": {
    "description": "Línea per als tests de unitaris mochawesome",
    "test": "mocha test/unitarias test/integracion --reporter mochawesome"
  },
  
  
Descomentar los console.log para mostrar salida o no desde los test o ejecutando desde node. //console.log();

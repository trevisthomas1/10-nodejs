var p = process.argv;
var x = p[2];
var y = p[3];

console.log(p);

if (x === y) {
    console.log("These two numbers are equal");
} else {
    console.log("These two numbers are not equal!");
}


//In terminal, write: node app.js 5 5
//This should return:
// ['C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Trevis.Thomas\\Developer\\uofu0418\\github\\10-nodejs\\01-Activities\\05-ParameterCheck\\app.js',
//     '5',
//     '5']
// These two numbers are equal

// Now try: node app.js 5 4
// This should return:
// ['C:\\Program Files\\nodejs\\node.exe',
//     'C:\\Users\\Trevis.Thomas\\Developer\\uofu0418\\github\\10-nodejs\\01-Activities\\05-ParameterCheck\\app.js',
//     '5',
//     '4']
// These two numbers are not equal!
const fs= require("fs");
const path= require("path");
const fetch = require("node-fetch");
let index= process.argv.indexOf("--file");
console.log(index);
let uri= process.argv[index + 1];
console.log(uri);


// validando que el documento sea extensión .md y leyendo el contenido del archivo

function mdFile (uri) {
    
    const fileExt = path.extname(uri)
    if (fileExt!== ".md"){
        console.log("Documento con extensión diferente a .md");
        return false;
    }else{
        console.log("Es un archivo markdown");
        let data = fs.readFileSync(uri, "utf8");
        console.log(data)
        return data
    }

}
data = mdFile(uri)
//obteniendo los links apartir de la data contenida en el archivo markdown
function getLinks(data){
    let regEx= /\bhttps:\/\/([a-z0-9.a-z0-9\/]+)([-a-z0-9?=_&#\/]+)([.a-z0-9]+)/gi;
    let links= data.match(regEx);
    console.log(links);
    return links

}
links= getLinks(data)
let totalLinks = links.length;
console.log(`Total de links: ${totalLinks}`);




    


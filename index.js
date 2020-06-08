const fs= require("fs");
const path= require("path");

// validando que el documento sea extensión .md

const mdFile = (file)=> {
    
    const fileExt = path.extname(file)
    if (fileExt!== ".md"){
        console.log("Documento con extensión diferente a .md");
        return false;
    }else{
        console.log("Este es un archivo markdown");
        return true;
    }

}
mdFile("./README.md")
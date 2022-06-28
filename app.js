//esConsonante(letra)
//Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

//esVocal('a') // false
//esVocal('n') // true

const esConsonante = (letra)=>{
        if(letra !=='a' && letra !=='e' && letra !=='i' && letra !=='o' && letra !=='u'){
            return true;
        }
        else{
            return false;
        }
    }
    
console.log(esConsonante('a'));
console.log(esConsonante('n'));

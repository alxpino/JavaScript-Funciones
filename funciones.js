/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function noParameters(){ return true};

const asincrona = new Promise((resolve, reject) => {
    if(noParameters()) {
        resolve("Soy una promesa");
    } else {
      reject("No soy una promesa");
    }
  });


asincrona.then(resultado => { 
    const time = setTimeout(noParameters, 5000);
    console.log(resultado);
}).catch(resultado =>{ console.log(resultado);} );



function* pares(){
  let id = 0;
  while(noParameters()){
      id += 2;
      if(id == 10)
          return id;
      yield id;
  }
}

const par = pares();

console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);

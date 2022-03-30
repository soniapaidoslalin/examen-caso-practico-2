


class Ropa{    //creo una clase padre con el nombre de Ropa
    precio;    //declaro las propiedades publicas de dicha clase
    temporada;
    #tejido;  //declaro las clases privadas con la #, las clases privadas solo se puede acceder desde la propia clase
    #genero;


    constructor(precio,temporada,tejido,genero){  //creo el constructor
        this.precio=precio; 
        this.temporada=temporada;
        this.#tejido=tejido;
        this.#genero=genero;
    }

    // set setPrecio(precio){  // en las clases públicas no es necesario hacer set y get
    //     this.precio=precio;
    // }

    // set setTemporada(temporada){
    //     this.temporada=temporada;
    // }

    // get getPrecio(){
    //     return `El precio es ${this.precio}`;
    // }

    // get getTemporada(){
    //     return `La temporada es ${this.temporada}`;
    // }

    set setTejido(tejido){    //realizo los set y los get de las clases privadas
        this.#tejido=tejido;  //los set modifican el valor de la propiedad y
    }                         //los get asignan el valor a una propiedad.

    set setGenero(genero){
        this.#genero=genero;
    }

    get getTejido(){
        return `El tejido es ${this.#tejido}`;
    }

    get getGenero(){
        return `El genero es ${this.#genero}`;
    }
   

}

class Vestido extends Ropa{    //creo una clase hija Vestido que hereda de la clase padre Ropa
    #color;
    #peso;
    constructor(precio,temporada,tejido,genero,color,peso){   // creo el constructor
        super(precio,temporada,tejido,genero)                 // en el super pongo las propiedades de la clase padre
        this.#color=color;
        this.#peso=peso;
    }

    set setColor(color){      //realizo los set y los get
        this.#color=color;
    }
    get getColor(){
        return `El color es ${this.#color}`;
    }

    set setPeso(peso){
        this.#peso=peso;
    }

    get getPeso(){
        return `El peso es ${this.#peso}`;
    }
} 

class Sudadera extends Ropa{    //creo la 2 clase hija Sudadera
    #tendencia;
    #marca;
    constructor(precio,temporada,tejido,genero,color,peso,tendencia,marca){ //creo el constructor
        super(precio,temporada,tejido,genero,color,peso)
        this.#tendencia=tendencia;
        this.#marca=marca;
    }

    set setTendencia(tendencia){  //hago losa set y los get
        this.#tendencia=tendencia;
    }
    get getTendencia(){
        return `La tendencia es ${this.#tendencia}`;
    }

    set setMarca(marca){
        this.#marca=marca;
    }

    get getMarca(){
        return `La marca es ${this.#marca}`;
    }
}

const corteIngles=new Sudadera(85,'Invierno','Algodon','Masculino','Gris',1,'Oversize','Lacoste');

console.log(corteIngles);

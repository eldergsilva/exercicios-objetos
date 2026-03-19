const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
 
for (let usuario of usuarios) {
     
    const { nome, pets } = usuario;
    const numeroDePets = pets.length;

    if (numeroDePets === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
    } else if (numeroDePets === 1) {
         
        console.log(`Sou ${nome} e tenho ${numeroDePets} pet`);
    } else {
         
        console.log(`Sou ${nome} e tenho ${numeroDePets} pets`);
    }
}
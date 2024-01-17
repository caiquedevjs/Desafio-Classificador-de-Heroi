const heroi = {
    nome: 'Caique',
    ex: 9000,
};

let nivel;

if (heroi.ex < 1000) {
    nivel = 'Ferro';
} else if (heroi.ex <= 2000) {
    nivel = 'Bronze';
} else if (heroi.ex <= 5000) {
    nivel = 'Prata';
} else if (heroi.ex <= 7000) {
    nivel = 'Ouro';
} else if (heroi.ex <= 8000) {
    nivel = 'Platina';
} else if (heroi.ex <= 9000) {
    nivel = 'Ascendente';
} else if (heroi.ex <= 10000) {
    nivel = 'Imortal';
} else {
    nivel = 'Radiante';
}

console.log(`O herói de nome ${heroi.nome} está no nível de ${nivel}`);

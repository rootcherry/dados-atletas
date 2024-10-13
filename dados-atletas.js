class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return 'Infantil';
    if (this.idade === 12 && this.idade === 13) return 'Juvenil';
    if (this.idade === 14 && this.idade === 15) return 'Intermediário';
    if (this.idade >= 16 || this.idade <= 30) return 'Adulto';
    return 'Sem categoria';
  }

  calculaIMC() {
    return (this.peso / (this.altura * this.altura));
  }

  calculaMediaValida() {
    // inicializando min/max/total
    let min = this.notas[0];
    let max = this.notas[0];
    let total = 0;

    // buscando valores min/max
    for (let i = 0; i < this.notas.length; i++) {
      const nota = this.notas[i];
      total += nota;

      // min
      if (nota < min) {
        min = nota;
      }

      // max
      if (nota > max) {
        max = nota;
      }
    }

    // calculo da media valida
    return (total - min - max) / (this.notas.length - 2);
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }
  obtemPesoAtleta() {
    return this.peso;
  }

  obtemAlturaAtleta() {
    return this.altura;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }

  // Exemplo saída
  // Nome: Cesar Abascal
  // Idade: 30
  // Peso: 80
  // Altura: 1.7
  // Notas: 10,9.34,8.42,10,7.88
  // Categoria: Adulto
  // IMC: 27.68166089965398
  // Média válida: 9,25333333
  obtemSaida() {
    console.log(`Nome: ${this.obtemNomeAtleta()}`);
    console.log(`Idade: ${this.obtemIdadeAtleta()}`);
    console.log(`Peso: ${this.obtemPesoAtleta()}`);
    console.log(`Altura: ${this.obtemAlturaAtleta()}`);
    console.log(`Notas: ${this.obtemNotasAtleta()}`);
    console.log(`Categoria: ${this.obtemCategoria()}`);
    console.log(`IMC: ${this.obtemIMC()}`);
    console.log(`Média válida: ${this.calculaMediaValida()}`);
  }
}

// Exemplo de entrada
// Declara o atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

atleta.obtemSaida();

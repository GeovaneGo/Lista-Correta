export class Tarefa {
    constructor(
        //Define para o typeScript, que id, nome, e 'concluida' se tornará atributos da classe, através do constructor
        //Deixando a interrogação na frente, deixa em aberto, não sendo obrigatório a utilização do parametro.
        public id?:number,
        public descricao?: string,
        public prazo?: string,
        public concluida?: boolean
    ){}
    
}
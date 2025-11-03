export interface ServicoItem {
    nome: string;
    desc: string;
    preco: string;
}

export interface Categoria {
    nome: string;
    itens: ServicoItem[];
}

export interface Combo {
    nome: string;
    desc: string;
    preco: string;
}

export interface ServicosData {
    categorias: Categoria[];
    combos: Combo[];
}

export interface MembroEquipe {
    nome: string;
    especialidade: string;
    foto: string;
    instagram?: string;
}

export interface ImagemGaleria {
    src: string;
    alt: string;
}

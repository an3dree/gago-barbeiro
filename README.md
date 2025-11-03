# Gago Barber Shop 💈

Site moderno e responsivo para barbearia, desenvolvido com React, Vite, TypeScript e Tailwind CSS.

![Gago Barber Shop](./public/logo.png)

## 🚀 Características

- ✨ **Design Moderno**: Interface limpa e profissional com estética masculina
- 📱 **Totalmente Responsivo**: Experiência perfeita em todos os dispositivos
- 🎨 **Paleta de Cores Personalizada**: Extraída do logo da marca
- 🔥 **Componentes Reutilizáveis**: Arquitetura modular com TypeScript
- 🖼️ **Galeria com Lightbox**: Visualização de trabalhos em tela cheia
- 📍 **Integração Google Maps**: Localização fácil da barbearia
- 💬 **WhatsApp Flutuante**: Agendamento rápido via WhatsApp
- ⚡ **Performance Otimizada**: Build rápido com Vite

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd gago-barbeiro
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as imagens**
   Copie as seguintes imagens para a pasta `public/`:
   - `logo.png` - Logo da barbearia
   - `hero.jpeg` - Imagem de fundo da seção Hero
   - `trabalho1.png` - Foto de trabalho para galeria
   - `trabalho2.png` - Foto de trabalho para galeria

4. **Execute o projeto**
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
gago-barbeiro/
├── public/
│   └── logo.png              # Logo da barbearia
├── src/
│   ├── components/           # Componentes React
│   │   ├── Navbar.tsx       # Menu de navegação sticky
│   │   ├── Hero.tsx         # Seção hero com CTA
│   │   ├── ServicosMenu.tsx # Menu de serviços estilo cardápio
│   │   ├── Galeria.tsx      # Galeria com lightbox
│   │   ├── Equipe.tsx       # Apresentação da equipe
│   │   ├── Funcionamento.tsx # Horários de funcionamento
│   │   ├── Localizacao.tsx  # Endereço e mapa
│   │   ├── WhatsAppButton.tsx # Botão flutuante WhatsApp
│   │   └── Footer.tsx       # Rodapé com informações
│   ├── data/
│   │   └── servicos.json    # Dados dos serviços e combos
│   ├── types/
│   │   └── index.ts         # Definições TypeScript
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Paleta de Cores

A paleta foi extraída do logo da barbearia:

- **Vermelho Principal**: `#E31E24` - Destaque e ação
- **Dourado**: `#D4B896` - Elegância e sofisticação
- **Turquesa**: `#4A9B8E` - Modernidade
- **Preto**: `#0A0A0A` - Base e fundo
- **Creme**: `#F5F5DC` - Texto principal

## 📝 Personalização

### Alterar Serviços e Preços

Edite o arquivo `src/data/servicos.json`:

```json
{
  "categorias": [
    {
      "nome": "Cortes",
      "itens": [
        {
          "nome": "Corte Social",
          "desc": "Descrição do serviço",
          "preco": "R$ 50,00"
        }
      ]
    }
  ],
  "combos": [...]
}
```

### Alterar Informações de Contato

Edite os componentes:
- `src/components/Localizacao.tsx` - Endereço e mapa
- `src/components/Footer.tsx` - Rodapé
- `src/components/WhatsAppButton.tsx` - Número do WhatsApp

### Alterar Imagens da Galeria

No arquivo `src/components/Galeria.tsx`, substitua as URLs das imagens:

```typescript
const images = [
  {
    src: '/caminho/para/sua/imagem.jpg',
    alt: 'Descrição da imagem'
  }
];
```

### Alterar Equipe

No arquivo `src/components/Equipe.tsx`, edite o array `equipe`:

```typescript
const equipe = [
  {
    nome: "Nome do Barbeiro",
    especialidade: "Especialidade",
    foto: "url-da-foto",
    instagram: "@instagram"
  }
];
```

## 🚀 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📱 Recursos por Seção

### 🏠 Hero
- Imagem de fundo impactante
- Logo centralizado
- Título e subtítulo
- CTAs para serviços e agendamento
- Indicador de scroll animado

### 📋 Menu de Serviços
- Layout estilo cardápio premium
- Categorias (Cortes, Barba, Tratamentos)
- Seção especial de combos
- Design tipográfico elegante

### 🖼️ Galeria
- Grid responsivo (3/2/1 colunas)
- Efeito hover com overlay
- Lightbox em tela cheia
- Navegação com teclado

### 👥 Equipe
- Cards horizontais por barbeiro
- Foto, nome e especialidade
- Links para Instagram
- CTA para trabalhe conosco

### 🕐 Horário de Funcionamento
- Tabela visual de horários
- Destaque para dias especiais
- Indicação de fechamento
- Nota sobre agendamento

### 📍 Localização
- Informações de contato
- Google Maps integrado
- Botão de agendamento via WhatsApp

### 💬 WhatsApp Button
- Botão flutuante no canto direito
- Animação de pulse
- Tooltip informativo
- Badge de notificação

### 🦶 Footer
- Logo e descrição
- Links rápidos
- Informações de contato
- Redes sociais
- Copyright

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Pré-visualiza build de produção
npm run lint     # Verifica erros de código
```

## 📄 Licença

© 2025 Gago Barber Shop. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para homens que valorizam estilo e tradição.**

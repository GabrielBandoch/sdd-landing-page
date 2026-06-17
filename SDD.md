# TravelX Landing Page - Spec-Driven Development (SDD)

Este documento contém as especificações completas para o desenvolvimento da landing page TravelX, seguindo a metodologia Spec-Driven Development.

## 1. Product Requirements Document (PRD)

### Objetivo do projeto
Criar uma landing page atrativa, moderna e responsiva para a plataforma "TravelX", com o intuito de apresentar os serviços de planejamento de viagens personalizadas e converter visitantes em leads/usuários através de chamadas para ação (CTAs) estratégicas.

### Público-alvo
Viajantes que buscam experiências exclusivas, roteiros personalizados e conveniência no planejamento de suas viagens, valorizando tempo e curadoria de alta qualidade.

### Problema que a landing page resolve
O processo de planejar viagens pode ser exaustivo e complexo. A landing page demonstra como a TravelX simplifica esse processo através de recomendações inteligentes e personalização, entregando o valor da plataforma de forma clara e visualmente impactante.

### Requisitos funcionais
- **Navegação**: Links de âncora ou rotas simples para seções como "Destinos", "Como Funciona" e "Planos".
- **CTAs Funcionais**: Botões ("Cadastrar", "Planejar Minha Viagem", "Começar Agora") que simulam o redirecionamento para o funil de conversão.
- **Visualização de Destinos**: Exibição de cards com imagens, títulos e preços de destinos em destaque.
- **Seção de Passos (Como Funciona)**: Apresentação clara do fluxo de uso do serviço.

### Requisitos não funcionais
- **Performance**: Carregamento rápido de imagens e assets.
- **Responsividade**: Adaptação perfeita para resoluções Desktop, Tablet e Mobile.
- **Acessibilidade**: Contraste adequado, tags semânticas e textos alternativos em imagens.
- **Tecnologia**: React, TypeScript, Tailwind CSS, utilizando Vite como bundler.

### Critérios de aceitação
- A interface deve corresponder fielmente ao design do protótipo (cores, tipografia, espaçamentos e imagens).
- A página deve ser responsiva em todas as larguras de tela (mobile-first approach).
- O código deve estar livre de erros no console e seguir boas práticas de componentização.
- O projeto deve compilar e rodar localmente sem problemas através do comando `npm run dev`.

---

## 2. Technical Specification

### Arquitetura da aplicação
- **Framework**: React 18+ (SPA)
- **Linguagem**: TypeScript para tipagem estática e maior segurança.
- **Estilização**: Tailwind CSS para utilitários de estilo rápidos e consistentes.
- **Bundler/Ferramenta de Build**: Vite para desenvolvimento rápido.
- **Ícones**: `lucide-react` para os ícones da seção de features.

### Estrutura de componentes
A interface será dividida em componentes reutilizáveis para manter o código limpo:
- `Navbar`: Cabeçalho com logo, links de navegação e botão de cadastro.
- `Hero`: Seção principal com título de impacto, subtítulo, CTA e imagem de destaque.
- `Features`: Grade com as 4 vantagens principais (ícones + texto).
- `HowItWorks`: Linha do tempo ou grade de passos numerados mostrando o funcionamento.
- `Destinations`: Seção de destaque com cards.
  - `DestinationCard`: Componente individual para cada destino (Imagem, Nome, Preço).
- `CallToAction`: Banner inferior com cor sólida (azul) e botão de ação secundário (amarelo).
- `Footer`: Rodapé com links organizados em colunas e copyright.

### Organização de pastas
```text
src/
├── assets/         # Imagens exportadas/geradas (hero, destinos)
├── components/     # Componentes isolados e reutilizáveis
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Destinations.tsx
│   ├── DestinationCard.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── ui/         # Componentes base (Botões, etc)
├── App.tsx         # Componente principal que agrupa as seções
├── main.tsx        # Entry point do React
└── index.css       # Configurações globais do Tailwind
```

### Estratégia de responsividade
- **Mobile (< 768px)**: 
  - Navbar com menu hambúrguer (ou links ocultos por simplicidade).
  - Hero com imagem abaixo do texto e alinhamento centralizado.
  - Features, HowItWorks e Destinations em layout de 1 coluna (empilhados).
  - Footer com seções empilhadas.
- **Tablet (768px - 1024px)**:
  - Layouts de 2 colunas para Features e Destinations.
- **Desktop (> 1024px)**:
  - Layout fiel ao protótipo fornecido, com larguras máximas contidas (container) e alinhamento central.

### Tecnologias utilizadas
- Vite
- React
- TypeScript
- Tailwind CSS
- Lucide React (ícones)

---

## 3. Task Breakdown

### Fase 1: Setup do Projeto
- [x] Inicializar projeto Vite com React + TypeScript.
- [x] Instalar e configurar Tailwind CSS.
- [x] Instalar dependências adicionais (lucide-react).
- [x] Configurar fontes e paleta de cores globais no `tailwind.config.js`.

### Fase 2: Assets e Estrutura
- [x] Gerar imagens placeholder de alta qualidade para o Hero e os Destinos (Bali, Amalfi, Kyoto).
- [x] Criar estrutura de pastas base (`components`, `assets`).

### Fase 3: Desenvolvimento de Componentes (Mobile-First)
- [x] Desenvolver `Navbar` responsiva.
- [x] Desenvolver seção `Hero`.
- [x] Desenvolver seção `Features` com os ícones correspondentes.
- [x] Desenvolver seção `HowItWorks` com a linha de passos.
- [x] Criar componente `DestinationCard` e a seção `Destinations`.
- [x] Desenvolver banner `CallToAction`.
- [x] Desenvolver `Footer`.

### Fase 4: Integração e Refinamento
- [x] Integrar todos os componentes no `App.tsx`.
- [x] Refinar espaçamentos, tipografia e cores para bater 100% com o protótipo.
- [x] Testar responsividade em diferentes resoluções.

### Fase 5: Documentação e Finalização
- [x] Escrever `README.md` detalhado.
- [x] Preparar código final para entrega.

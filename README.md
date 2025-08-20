# 📝 Blog Moderno - Next.js 15

> Um blog moderno e responsivo construído com as mais recentes tecnologias web

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Sobre o Projeto

Este é um blog moderno e totalmente responsivo desenvolvido com Next.js 15, React 19 e TypeScript. O projeto apresenta um design elegante com suporte completo a dark/light mode, sistema de posts flexível e uma experiência de usuário excepcional.

### ✨ Características Principais

- 🎨 **Design Responsivo**: Interface adaptável para todos os dispositivos
- 🌙 **Dark/Light Mode**: Alternância de tema com persistência
- 📱 **Mobile First**: Otimizado para dispositivos móveis
- ⚡ **Performance**: Otimizações avançadas com Next.js 15
- 🔍 **SEO Otimizado**: Metadados dinâmicos e estrutura semântica
- 🎯 **TypeScript**: Tipagem completa para maior confiabilidade
- 🎪 **Banner Interativo**: Carousel de posts em destaque
- 📝 **Sistema de Posts Flexível**: Suporte a múltiplos tipos de conteúdo

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset tipado do JavaScript

### Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Google Fonts](https://fonts.google.com/)** - Work Sans, Inter, Source Serif 4

### Funcionalidades
- **[Swiper.js](https://swiperjs.com/)** - Carousel/slider moderno
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Otimização automática de imagens

### Desenvolvimento
- **[ESLint 9](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento de CSS
- **[Turbopack](https://turbo.build/pack)** - Bundler de alta performance

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/blog.git
cd blog
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse o projeto**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── (home)/            # Route group - página inicial
│   │   └── components/    # Componentes específicos da home
│   │       └── banner.tsx # Banner com carousel de posts
│   ├── components/        # Componentes globais
│   │   └── global/       
│   │       ├── navbar.tsx # Barra de navegação
│   │       └── footer.tsx # Rodapé
│   ├── post/[id]/        # Páginas dinâmicas de posts
│   │   ├── page.tsx      # Página do post
│   │   └── components/   # Componentes do post
│   ├── author/           # Páginas de autor (em desenvolvimento)
│   ├── globals.css       # Estilos globais e variáveis CSS
│   └── layout.tsx        # Layout raiz da aplicação
├── contexts/             # Contextos React
│   └── ThemeContext.tsx  # Gerenciamento de tema
├── features/             # Funcionalidades organizadas
│   └── posts/           
│       └── actions.ts    # Actions para posts
├── mocks/                # Dados de exemplo
│   └── posts.ts          # Posts de exemplo
└── types/                # Definições de tipos TypeScript
    └── posts.d.ts        # Tipos para posts
```

## 📝 Uso

### Adicionando Novos Posts

Os posts são definidos no arquivo `src/mocks/posts.ts`. Cada post segue a interface `IPosts`:

```typescript
interface IPosts {
  id: string;
  type: 'emphasis' | 'standard';
  image: string;
  category: string;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  author: {
    avatar_url: string;
    name: string;
  };
  content_blocks: ContentBlock[];
  meta: {
    seo_title: string;
    seo_description: string;
    og_image: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Tipos de Conteúdo Suportados

- **Parágrafo**: Texto corrido
- **Imagem**: Imagens com caption
- **Título**: Headings H2
- **Citação**: Blockquotes
- **Frase Destacada**: Texto em destaque

### Personalizando o Tema

O sistema de cores está definido em `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --text-1: #3B3C4A;
  --badge: #4B6BFB;
  /* ... outras variáveis */
}

.dark {
  --background: #181A2A;
  --text-1: #FFFFFF;
  /* ... versões dark */
}
```

## 🎨 Design System

### Cores
- **Primary**: `#4B6BFB` (Badge/CTA)
- **Background**: `#FFFFFF` / `#181A2A` (Light/Dark)
- **Text**: Hierarquia de 4 níveis de cinza
- **Secondary**: Tons de cinza para elementos de apoio

### Tipografia
- **Work Sans**: Interface e navegação
- **Source Serif 4**: Conteúdo de posts
- **Inter**: Elementos de apoio

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
```

## 📊 Performance

- ⚡ **Turbopack** para builds ultra-rápidos
- 🖼️ **Next/Image** para otimização automática de imagens
- 📱 **Responsive Images** com múltiplas resoluções
- 🎯 **Server Components** para melhor performance
- 🔄 **Lazy Loading** nativo

## 🔧 Configurações

### Next.js
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};
```

### TypeScript
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Roadmap

- [ ] Sistema de comentários
- [ ] Página de autor completa
- [ ] Busca avançada com filtros
- [ ] Paginação de posts
- [ ] Sistema de tags
- [ ] RSS Feed
- [ ] Sitemap automático
- [ ] Testes automatizados
- [ ] CMS Integration
- [ ] Newsletter

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gustavo Vinicíus**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

## 📞 Suporte

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para:

- Abrir uma [issue](https://github.com/seu-usuario/blog/issues)
- Entrar em contato via [email](mailto:seu-email@exemplo.com)

---

<p align="center">
  Feito com ❤️ e ☕ por Gustavo Vinicíus
</p>

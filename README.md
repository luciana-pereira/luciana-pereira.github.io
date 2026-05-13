# Site Profissional

</br>

Este repositório contém o **código-fonte** do meu site pessoal, desenvolvido com Blazor WebAssembly.

🔗 **Acesse o site:**
[https://luciana-pereira.github.io](https://luciana-pereira.github.io)

![Deploy status](https://github.com/luciana-pereira/luciana-pereira.github.io/actions/workflows/deploy.yml/badge.svg)

---

## Tecnologias

- [Blazor WebAssembly (.NET)](https://learn.microsoft.com/pt-br/aspnet/core/blazor/?view=aspnetcore-10.0&utm_source=chatgpt.com)
- Blazor WASM
- HTML e SASS (CSS pré-processado)
- GitHub Actions (para CI/CD)
- GitHub Pages (Hospedagem)
- Bootstrap via CDN

---

## Publicação Automática

As alterações feitas neste repositório são automaticamente compiladas e publicadas no repositório `luciana-pereira.github.io` usando um workflow de GitHub Actions.

---

## Sobre o Site

Este site apresenta meu trabalho, experiências e projetos. Foi pensado para ser uma vitrine profissional com tecnologia moderna, focado em performance e escalabilidade com Blazor.

---

## Rodar a aplicação localmente

```.shell
dotnet restore luciana-pereira.github.io.sln
dotnet build luciana-pereira.github.io.sln
dotnet run --project site.csproj ou dotnet watch run --project site.csproj
```

---

## Rascunho

## Estrutura ideal

```.cmd
Luciana Pereira
    ↓
Portfolio / autoridade técnica

DevZeroBug
    ↓
Cursos + Blog + Plataforma
```

```.cmd
luciana-pereira.github.io
│
├── Home
├── Experience
├── Projects
├── Skills
├── Certifications
├── Contact
├── Blog → redirect → blog.devzerobug.com
└── Courses → redirect → app.devzerobug.com
```

## Plataforma DevZeroBug

```.cmd
devzerobug.com
│
├── blog.devzerobug.com
├── app.devzerobug.com
├── api.devzerobug.com
└── auth.devzerobug.com
```

## Design System

Definição de:

- Tipografia
- Spacing
- Grid
- Componentes
- Tokens

## Identidade Visual

### Cores principais (Versão Dark)

| Tipo       | Cor       |
| ---------- | --------- |
| Background | Preto     |
| Primária   | Azul neon |
| Secundária | Roxo      |
| Destaque   | Magenta   |
| Texto      | Branco    |

### Paleta

Primary Blue    #00A3FF
Primary Purple  #7B61FF
Accent Pink     #FF00C7
Background      #050505
Surface         #111111
Text Primary    #FFFFFF
Text Secondary  #B3B3B3
Border          #262626

### Heading

Utilizar o [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk?utm_source=chatgpt.com&preview.script=Latn) para:

- Titulo
- Navbar
- Destaques
- Hero Section

### Texto

Utilizar o [Inter](https://fonts.google.com/specimen/Inter?utm_source=chatgpt.com) para:

- Descrição
- Cards
- Artigos
- Conteudo

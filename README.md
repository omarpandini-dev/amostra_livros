# Mundo Encantado

Biblioteca digital infantil para livros e histórias em quadrinhos. O acervo é descoberto automaticamente nas pastas locais, sem banco de dados e sem cadastro manual. O leitor usa diretamente a biblioteca StPageFlip (`page-flip`) para reproduzir folhas flexíveis e páginas duplas.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O frontend abre em `http://localhost:5173` e usa o backend em `http://localhost:3001`.

## Build

```bash
npm run build
```

## Produção

```bash
npm start
```

Depois do build, o Express serve a aplicação completa em `http://localhost:3001`, incluindo as rotas amigáveis do leitor.

## Docker

Crie a imagem e execute o container:

```bash
docker build -t mundo-encantado .
docker run --rm -p 3001:3001 mundo-encantado
```

A aplicação estará disponível em `http://localhost:3001`. O container inclui o frontend compilado, o servidor, as configurações comerciais e o acervo presente em `assets` no momento do build.

O estado do container pode ser consultado em `GET /api/health`.

### EasyPanel

1. Crie um serviço do tipo **App** e conecte o repositório Git.
2. Selecione **Dockerfile** como método de build e mantenha `Dockerfile` como caminho.
3. Configure a porta do serviço como `3001`.
4. Associe o domínio e faça o deploy.

Não é necessário configurar um volume quando o acervo é versionado junto com o projeto. Se os livros forem enviados ou alterados diretamente em produção no futuro, configure armazenamento persistente para `/app/assets` e garanta que o volume seja inicialmente populado com o acervo.

## Como adicionar um livro

Crie uma pasta em `assets/books/meu-livro/`:

```text
assets/books/meu-livro/
├── 0.png        # capa
├── 1.png        # página 1
├── 1.mp3        # narração opcional da página 1
├── 2.png
└── 3.webp
```

Reinicie o servidor. O título `Meu Livro`, a capa, as páginas e os áudios aparecerão automaticamente.

Também é reconhecida a estrutura `output/img/`, usada pelo conteúdo já existente. Imagens podem ser PNG, JPG, JPEG ou WebP. Arquivos numerados com sufixos, como `05_pagina_01.png`, também são aceitos e ordenados pelo prefixo numérico.

## Como adicionar um quadrinho

Use o mesmo padrão dentro de `assets/comics/`:

```text
assets/comics/minha-hq/
├── 0.png
├── 1.png
├── 2.png
└── 2.mp3
```

## Metadados opcionais

Adicione `metadata.json` na pasta principal do conteúdo quando quiser personalizar os dados:

```json
{
  "title": "O Reino Perdido",
  "description": "Uma jornada além das montanhas azuis.",
  "age": "7-10",
  "featured": true
}
```

Sem esse arquivo, o título é gerado pelo nome da pasta e os demais dados recebem valores seguros.

Para compatibilidade com o acervo atual, o sistema também aproveita o campo `title` de `textos_json.json` ou `titulo_da_historia` de `ideia_historia_json.json` quando um desses arquivos já existir.

## Narração

Ao ativar a narração, cada página procura um MP3 com o mesmo número. O áudio anterior sempre é interrompido e reiniciado antes da página seguinte. A preferência de som fica salva no navegador. Se o navegador bloquear a primeira reprodução automática, o leitor mostra o botão **Ativar narração**.

## Progresso, teclado e tela cheia

O progresso de cada história é salvo no `localStorage` e aparece na seção **Continue sua aventura**. No leitor:

- `←` e `→` mudam de página;
- `M` ativa ou desativa o som;
- `F` alterna a tela cheia;
- `Esc` sai da tela cheia.

## API

- `GET /api/health`
- `GET /api/books`
- `GET /api/comics`
- `GET /api/content/:type/:slug`
- `GET /api/pricing`
- `GET /api/pricing/physical?pages=16`

Os valores de `type` e `slug` são validados, e o servidor impede acesso fora de `assets/books` e `assets/comics`.

## Validação

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

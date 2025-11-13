# Academia de Hábitos — Estado do Projeto

Este repositório contém a versão inicial da interface web do projeto "Academia de Hábitos" (protótipo Figma disponível no link abaixo).

## Links
- Protótipo (Figma): https://www.figma.com/design/KJbG3xprqBLzMeB17RStJj/Academia-de-H%C3%A1bitos?node-id=0-1&p=f&m=dev  
- Demo (Vercel): https://academiadehabitos.vercel.app/

## Estado atual (resumo)
- Frontend: React + Vite.
- Estilos: Tailwind CSS + CSS custom em `src/App.css`.
- Layout inicial do header (logo + título), navegação e botões implementados.
- Logo(s) adicionadas na pasta `public/`:
  - `logo_mobile.png`
  - `logo_desktop.png`
  - Uso recomendado no código: src="/logo_mobile.png" ou src="/logo_desktop.png" (arquivos em `public` são servidos na raiz; não referenciar `/public/...`).
- Arquivo principal do componente: `src/App.jsx` (JSX válido — `class` convertido para `className`).
- `App.css` importa as diretivas do Tailwind e contém estilos complementares e resets mínimos.

## O que foi implementado (detalhado)
- Importação da fonte "Luckiest Guy" (via `index.html`) e aplicação no título principal.
- Header com:
  - Logo responsiva (duas abordagens possíveis: `<picture>` com `source` ou duas `<img>` com classes Tailwind `md:hidden` / `hidden md:block`).
  - Título estilizado com fonte do projeto.
  - Botões de navegação com hover e transições.
- Estilos de navegação e `hr` personalizados.
- Regras responsivas (media queries e utilitários Tailwind — breakpoint `md` usado para alternar imagens/laytou).
- Correções no projeto para evitar warnings do Vite:
  - Uso de `src="/logo_xxx.png"` para imagens em `public/`.
  - Diretrizes do Tailwind (`@tailwind base; @tailwind components; @tailwind utilities;`) no topo de `src/App.css`.

## Arquivos importantes (alterados)
- `index.html` — link Google Fonts.
- `src/App.jsx` — componente App (header, nav, imagens, classes Tailwind).
- `src/App.css` — import Tailwind + estilos complementares e ajustes de reset.
- `public/logo_mobile.png`, `public/logo_desktop.png`.

## Como rodar localmente
1. Instale dependências:
```powershell
npm install
```
2. Inicie o servidor de desenvolvimento (Vite):
```powershell
npm run dev
```
Abra http://localhost:5173 (ou o endereço exibido pelo Vite).

## Problemas conhecidos e dicas de debug
- Aviso recorrente do Vite: "Files in the public directory are served at the root path. Instead of /public/logo.png, use /logo.png."
  - Causa: referências no código apontando para `/public/...`. Solução: buscar e substituir por `/<nome-do-arquivo>`.
  - Para encontrar no Windows PowerShell (raiz do projeto):
  ```powershell
  Select-String -Path .\**\* -Pattern "/public/" -SimpleMatch
  ```
- HMR (Hot Module Replacement) em loop / recarregamentos contínuos:
  - Verifique e desative temporariamente: Editor.formatOnSave, auto-fix de ESLint/Prettier, extensões que reescrevem arquivos.
  - Pausar serviços de sincronização (OneDrive, backup) para a pasta do projeto.
  - Reiniciar o dev server após alterações: `npm run dev`.
  - Listar arquivos recentemente modificados:
  ```powershell
  Get-ChildItem -Recurse | Sort-Object LastWriteTime -Descending | Select-Object -First 20 FullName, LastWriteTime
  ```
- Se utilitários Tailwind não estiverem aplicando, confirme que `src/App.css` contém:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
e que o build do PostCSS/Tailwind está corretamente configurado (`tailwind.config.js`, `postcss.config.js`).

## Boas práticas / próximos passos imediatos
- Migrar estilos específicos para componentes CSS Modules ou usar classes utilitárias do Tailwind para aumentar reusabilidade.
- Substituir duplicação de imagens por `<picture>` com `source` para melhor semântica/performance.
- Consolidar cores e tokens em `:root` ou em config do Tailwind.
- Criar uma checklist para revisar possíveis fontes de HMR loop (extensões, sync, hooks git).

## Planejamento (curto/médio prazo)
- Implementar telas de autenticação e perfis (pais/crianças).
- Sistema básico de pontuação e banco de recompensas.
- Endpoints backend (Node/Express ou alternativa) para persistência.
- Testes unitários para lógica de pontuação e integração mínima.

---

Se quiser, atualizo o README com mais detalhes (ex.: comandos npm/yarn alternativos, badge de build, screenshots) ou faço as correções automáticas para referências `"/public/"` no workspace. Deseja que eu corrija as ocorrências agora?

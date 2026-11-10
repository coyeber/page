# COYEBER® — Site da agência

Website estático em HTML, CSS e JavaScript, publicado via GitHub Pages em https://coyeber.github.io/page/.

## Estrutura
- index.html: página inicial, serviços, projetos, galeria, Instagram, sobre e contato.
- styles.css: sistema visual editorial responsivo e estilos para mobile.
- script.js: menu acessível, ano automático, formulário do WhatsApp e fallback de imagens.
- about.html: página do parceiro criativo CASS3DS.
- styles2.css: folha antiga, mantida somente por histórico; não é utilizada no novo site.

## Personalização
- Projetos: edite as seções #projetos e #instagram em index.html. Não publique métricas sem comprovação.
- Galeria: seis imagens reaproveitadas do portfólio do site anterior, hospedadas externamente em i.ibb.co. Recomendamos migrá-las para uma pasta assets/ no repositório após obter os arquivos originais.
- Instagram: o botão abre https://instagram.com/coyeber/. O site não extrai posts em tempo real. Para inserir posts específicos, utilize links de publicações autorizadas ou uma integração oficial.
- WhatsApp: número 5581991485100, mantido do site anterior, presente em index.html e script.js. Verifique antes de publicar.
- Parceiro: altere about.html para atualizar projetos e imagens CASS3DS.

## Checklist antes de publicar
- [ ] Abrir index.html e about.html no desktop e no celular.
- [ ] Testar o menu mobile.
- [ ] Testar os links internos e externos.
- [ ] Testar o formulário e confirmar o texto no WhatsApp.
- [ ] Verificar as imagens e direitos de uso.
- [ ] Revisar conteúdo dos projetos e serviços.
- [ ] Aprovar visualmente e fazer merge da pull request em main.

## Publicação
Se o GitHub Pages estiver configurado para servir a raiz da branch main, o merge da pull request fará a nova versão ser publicada. O comportamento depende das configurações de Pages do repositório.

Feito para ser editável sem frameworks ou etapa de build.


## Portfólio de novembro de 2026

Todas as nove imagens novas foram enviadas pelo responsável pela Coyeber e armazenadas em assets/work/ no formato WebP. Nenhuma das seções depende de incorporar o feed privado do Instagram.

| Seção | Arquivos |
|---|---|
| Fotografia | fotografia-volei.webp, fotografia-futsal.webp |
| Projetos digitais | projeto-poli-energia.webp, projeto-kethilly-lima.webp, projeto-unicap-esporte.webp |
| Projetos 3D (CASS3DS) | projeto-3d-moto.webp, projeto-3d-viatura.webp, projeto-3d-personagem.webp |
| Design recente | designs-recentes.webp |

A página inicial usa o estilo em coyeber-redesign-2026.css e mantém uma cópia desse CSS dentro do HTML como garantia de visual caso a hospedagem não carregue o arquivo externo (problema identificado nas capturas de tela anteriores). A mesma proteção foi aplicada a about.html.

Para atualizar uma imagem: substitua o arquivo correspondente na pasta assets/work/ preservando seu caminho; para adicionar um projeto, edite o HTML da categoria correspondente em index.html.

O conjunto apresentado contém nove imagens efetivamente anexadas na conversa. A categorização considera o conteúdo visual, inclusive o screenshot da UNICAP Esporte como um projeto digital e a montagem do feed como designs recentes.

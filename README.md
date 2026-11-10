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

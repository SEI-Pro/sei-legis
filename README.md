# Bem vindo ao SEI Legis ![SEI Legis](/img/icon-32.png)

**SEI Legis §!** adiciona ao [Sistema Eletrônico de Informações (SEI)](https://softwarepublico.gov.br/social/sei) a função de enumerar normas conforme as regras de redação legislativa da [Lei Complementar nº 95, de 26 de fevereiro de 1998](http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm) e do [Decreto nº 9.191, de 1º de novembro de 2017](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/D9191.htm).

Criada a partir da necessidade de revisão e consolidação dos atos normativos inferiores a decreto ([Decreto nº 10.139, de 28 de novembro de 2019](http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/D10139.htm)), a ferramenta enumera automaticamente títulos, capítulos, seções, artigos, parágrafos, incisos e alíneas de suas normas criadas a partir do editor de texto do SEI.

Adicionou um novo artigo bem no meio do documento? Não se preocupe, fazemos a enumeração pra você!

## Como começar?

Instale a extenção para o Google Chrome em:

[https://chrome.google.com/webstore/detail/sei-legis/gmepnnlhjedfmkncmocpljoimbmkblgj](https://chrome.google.com/webstore/detail/sei-legis/gmepnnlhjedfmkncmocpljoimbmkblgj)

## Como utilizar?

No editor de textos do SEI, ative a enumeração dinâmica do **SEI Legis** no botão **§!**

![Tela 1](/img/tela-1.02.gif) 

As enumurações digitadas manualmente serão automaticamente convertidas em referências dinâmicas.

> `CAPÍTULO II`
>
> DA AUTORIZAÇÃO PARA OPERAR
> 
> `Seção I`
>
> Das disposições gerais
> 
> `Art. 9º` Somente poderá prestar serviço público de transporte de passageiros e veículos na navegação interior de travessia, a EBN autorizada pela ANTAQ.
>
> `Parágrafo único.` A autorização de que trata o caput é intransferível e terá vigência a partir da data da sua publicação no Diário Oficial da União - DOU.

Para digitar nos dispositivos utilize o código de referência desejado:

![Tela 2](/img/tela-2.02.gif) 

Atualmente são enumeradas automaticamenete as seguintes referências:

| Tipo de Dispositivo  |  Referência  |
| ------------------- | ------------------- |
|  Títulos |  `TIT.` |
|  Capítulos |  `CAP.` |
|  Seções |  `Sec.` |
|  Artigos |  `Art.` |
|  Parágrafos |  `§` |
|  Incisos |  `Inc.` |
|  Alíneas |  `Alin.` |
|  Anexos |  `ANEXO.` |

As referências dinâmicas são atualizadas sempre que você inserir uma nova linha `ENTER ↵ `

## Atualizando referências

Para adicionar novos dispositivos, adicionei a referência desejada e clique novamente no botão do **SEI Legis §!**

![Tela 2](/img/tela-2.01.gif) 

Remover dispositivos é igulamente simples.

![Tela 3](/img/tela-3.01.gif) 

## Referências cruzadas

Citar e atualizar dispositivos da própria norma ficou mais fácil e prático.

Em qualquer parte do texto utilize a referência do dispositivo precedida de `#`:

| Exemplo  |  Referência cruzada  |
| ------------------- | ------------------- |
|  artigo 8º, inciso II, "a" |  `#art8IIa` |
|  artigo 7º, parágrafo único |  `#art7§1` |
|  Capítulo II, Seção I |  `#capituloIIsecaoI` |
|  artigo 15º, § 5º |  `#art15§5` |
|  Título III, Capítulo I |  `#tituloIIcapituloI` |

Não se preocupe em inserir novos dispositivos, as citações no texto também são atualizadas automaticamente.

![Tela 4](/img/tela-4.01.gif) 

Referências não localizadas serão destacadas em vermelho.

Corrija-as e atualize as referências novamente.

> ![Tela 5](/img/tela-5.01.gif) 

## Deseja contribuir?

Caso deseja reportar um erro ou solicitar um recurso, acesse [Issue](https://github.com/pedrohsoaresadv/sei-legis/issues) no [Projeto GitHub](https://github.com/pedrohsoaresadv/sei-legis/) e adicione sua requisição.

Ou envie um e-mail para `pedrohsoares.adv (a) gmail.com`

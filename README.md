# Bem vindo ao SEI Legis ![SEI Legis](/img/icon-32.png)

**SEI Legis §!** adiciona ao [Sistema Eletrônico de Informações (SEI)](https://softwarepublico.gov.br/social/sei) a função de enumerar normas conforme as regras de redação legislativa da [Lei Complementar nº 95, de 26 de fevereiro de 1998](http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm) e do [Decreto nº 9.191, de 1º de novembro de 2017](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/D9191.htm).

Criada a partir da necessidade de revisão e consolidação dos atos normativos inferiores a decreto ([Decreto nº 10.139, de 28 de novembro de 2019](http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/decreto/D10139.htm)), a ferramenta enumera automaticamente títulos, capítulos, seções, artigos, parágrafos, incisos e alíneas de suas normas criadas a partir do editor de texto do SEI.

Adicionou um novo artigo bem no meio do documento? Não se preocupe, fazemos a enumeração pra você!

## Como começar?

Instale a extensão para o Google Chrome em:

[https://chrome.google.com/webstore/detail/sei-legis/gmepnnlhjedfmkncmocpljoimbmkblgj](https://chrome.google.com/webstore/detail/sei-legis/gmepnnlhjedfmkncmocpljoimbmkblgj)

## Como utilizar?

No editor de textos do SEI, ative a enumeração automática do **SEI Legis §!** no botão ![icone](/img/icon-cke.png) 

![Tela 1](/img/tela-1.02.gif) 

As enumerações digitadas manualmente serão convertidas em referências dinâmicas.

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

## Novos dispositivos

Para criar nos dispositivos, inicie seu texto com a **referência dinâmica** correspondente:

Atualmente são suportadas as seguintes referências dinâmicas:

| Tipo de Dispositivo  |  Referências Dinâmicas  |  Enumeração Gerada  |
| ------------------- | ------------------- | ------------------- |
|  Anexos |  `ANEXO.` |  `ANEXO I` ou `ANEXO ÚNICO`, `ANEXO II`, `ANEXO III`, `ANEXO IV` ... |
|  Títulos |  `TIT.` |  `TÍTULO I`, `TÍTULO II`, `TÍTULO III`, `TÍTULO IV` ... |
|  Capítulos |  `CAP.` |  `CAPÍTULO I`, `CAPÍTULO II`, `CAPÍTULO III`, `CAPÍTULO IV` ... |
|  Seções |  `Sec.` |  `Seção I`, `Seção II`, `Seção III`, `Seção IV` ... |
|  Artigos |  `Art.` |  `Art. 1º`, `Art. 2º`, `Art. 3º`, `Art. 4º` ... |
|  Parágrafos |  `§` |  `Parágrafo único.` ou `§ 1º`, `§ 2º`, `§ 3º` ... |
|  Incisos |  `Inc.` |  `I -`, `II -`, `III -`, `IV -` ... |
|  Alíneas |  `Alin.` |  `a)`, `b)`, `c)`, `d)` ... |

> Ao utilizar `ANEXO.`, todas as demais referências reiniciarão sua contagem.

![Tela 2](/img/tela-2.02.gif) 

As referências dinâmicas são atualizadas sempre que você digitar `ENTER ↵ `

## Alertas

Alertas relevantes poderão aparecer no começo dos dispositivos.

Passe o mouse sobre eles para verificar as dicas de adequação.

![Tela 3](/img/tela-3.03.gif) 

Clique duas vezes sobre o alerta para ignorá-lo.

![Tela 3a](/img/tela-3.03a.gif) 

## Referências cruzadas

Citar dispositivos da própria norma ficou fácil e prático.

Em qualquer parte do texto utilize a referência do dispositivo precedida de `#`:

![Tela 4](/img/tela-4.02.gif) 

As referências cruzadas utilizam o seguinte padrão:

| Exemplo  |  Referência cruzada  |
| ------------------- | ------------------- |
|  artigo 8º, inciso II, "a" |  `#art8IIa` |
|  artigo 7º, parágrafo único |  `#art7§1` |
|  Capítulo II, Seção I |  `#capituloIIsecaoI` |
|  artigo 15º, § 5º |  `#art15§5` |
|  Título III, Capítulo I |  `#tituloIIcapituloI` |

Não se preocupe em inserir novos dispositivos, as citações no texto também são atualizadas automaticamente.

![Tela 5](/img/tela-5.02.gif) 

> No exemplo, a referência `art. 23, inciso II, alínea "a"` foi atualizada para `art. 24, inciso II, alínea "a"`

### Referências não localizadas

Referências não localizadas serão destacadas em vermelho.

Após corrigi-las, digite `ENTER ↵ ` para o **SEI Legis §!** encontrar as novas referências. 

![Tela 6](/img/tela-6.02.gif) 

### Referências externas

Citar legislações federais ficou ainda mais fácil.

Em qualquer parte do texto digite o número da norma precedida de `@`

Atualmente estão disponíveis as seguintes legislações

| <td colspan=2> Legislação Federal  | 
| ------------------- | ------------------- |
|  [Constituição Federal](http://www.planalto.gov.br/ccivil_03/Constituicao/Constituicao.htm) |  [Medidas Provisórias](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/medidas-provisorias) |
|  [Leis Ordinárias](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/leis-ordinarias) |  [Decretos](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/decretos1) |
|  [Leis Complementares](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/leis-complementares-1) |  [Decretos-Leis](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/decretos-leis) |
|  [Códigos](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/codigos-1) |  [Estatutos](http://www4.planalto.gov.br/legislacao/portal-legis/legislacao-1/estatutos) |

## Deseja contribuir?

Caso deseja reportar um erro ou solicitar um recurso, acesse [Issue](https://github.com/pedrohsoaresadv/sei-legis/issues) no [Projeto GitHub](https://github.com/pedrohsoaresadv/sei-legis/) e adicione sua requisição.

Ou envie um e-mail para [pedrohsoares.adv@gmail.com](mailto:pedrohsoares.adv@gmail.com)

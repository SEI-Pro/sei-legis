## Bem vindo ao SEI Legis

Esta extensão adiciona ao Sistema Eletrônico de Informações (SEI) a função de enumerar normas conforme regras de redação legislativa (legística) da [Lei Complementar nº 95, de 26 de fevereiro de 1998](http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp95.htm) e [Decreto nº 9.191, de 1º de novembro de 2017](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/D9191.htm).

A ferramenta enumera automaticamente títulos, capítulos, seções, artigos, parágrafos, incisos e alíneas de suas normas criadas a partir do editor de texto do SEI.

Adicionou um novo artigo bem no meio do documento? Não se preocupe, fazemos o trabalho pesado (e chato) pra você!

### Como começar?

Adicione no começo do parágrafo a referência desejada:
```
Títulos:       TIT.
Capítulos:     CAP.
Seções:        Sec.
Artigos:       Art.
Parágrafos:    §
Incisos:       Inc.
Alíneas:       Alin.
```

 Substitua a enumeração tradicional...

>                          CAPÍTULO II
>
>                   DA AUTORIZAÇÃO PARA OPERAR
> 
>                            Seção I
>
>                     Das disposições gerais
> 
> Art. 9º Somente poderá prestar serviço público de transporte de passageiros e veículos na navegação interior de travessia, a EBN autorizada pela ANTAQ.
>
> Parágrafo único. A autorização de que trata o caput é intransferível e terá vigência a partir da data da sua publicação no Diário Oficial da União - DOU.

Pelas referências do Sei Legis §!

>                          `CAP.`
>
>                   DA AUTORIZAÇÃO PARA OPERAR
> 
>                            `Sec.`
>
>                     Das disposições gerais
> 
> `Art.` Somente poderá prestar serviço público de transporte de passageiros e veículos na navegação interior de travessia, a EBN autorizada pela ANTAQ.
>
> `§` A autorização de que trata o caput é intransferível e terá vigência a partir da data da sua publicação no Diário Oficial da União - DOU.


### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/pedrohsoaresadv/sei-legis/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

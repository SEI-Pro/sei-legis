/******************************************************************************
 SEI Legis: Extensão para o Firefox e Chrome que adiciona ao Sistema Eletrônico de Informações (SEI) a função de enumerar normas conforme regras de legística.
 Autor: Pedro Henrique Soares (pedro.soares@antaq.gov.br; pedrohsoares.adv@gmail.com)
*******************************************************************************/

function handleInstalled(details) {
  console.log(details.reason);

  function onError(error) { console.log(`Error: ${error}`); }
  function AbrirUrlSeipp(item) {
    // Ao instalar ou atualizar.
    item.InstallOrUpdate = true;
    browser.storage.local.set(item);

    if (item.CheckTypes == undefined) {
      //browser.tabs.create({ url: "https://pedrohsoaresadv.github.io/sei-legis/" });
    } else if (item.CheckTypes.indexOf("hidemsgupdate") == -1) {
      //browser.tabs.create({ url: "https://pedrohsoaresadv.github.io/sei-legis/" });
    }
  }

  if (isChrome) { /* Chrome: */
    browser.storage.local.get("CheckTypes", AbrirUrlSeipp);
  } else {
    var gettingItem = browser.storage.local.get("CheckTypes");
    gettingItem.then(AbrirUrlSeipp, onError);
  }
}

/******************************************************************************
 * Inicio                                                                     *
 ******************************************************************************/
const isChrome = (typeof browser === "undefined"); /* Chrome: */
if (isChrome) { var browser = chrome; } /* Chrome: */

browser.runtime.onInstalled.addListener(handleInstalled);

if(!isChrome) {
  browser.runtime.getBrowserInfo().then(function (info) {
    browser.storage.local.set({version: info.version}).then(null, null);
  });
}

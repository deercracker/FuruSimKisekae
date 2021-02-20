/*!
 * contents.js
 * Copyright (c) 2021 deercracker
 *
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 *
 * The inherits function is:
 * ISC license | https://github.com/deercracker/FuruSimKisekae/blob/main/LICENSE
 */
'use strict';
const cardAry = [
  '01-yurina', '02-saine', '03-himika', '04-tokoyo', '05-oboro', '06-yukihi', '07-shinra', '08-hagane',
  '09-chikage', '10-kururu', '11-thallya', '12-raira', '13-utsuro', '14-honoka', '15-korunu', '16-yatsuha',
  '17-hatsumi', '18-mizuki', '19-megumi', '20-kanawe',
];
const modal = document.getElementById('DECK-BUILD-MODAL');
const writeImg = (cardid, imgid, imgurl) => {
  const card = document.getElementById(cardid);
  if (null == card) {
    return false;
  } else if (null == document.getElementById(imgid)) {
    const img = document.createElement('img');
    img.src = imgurl;
    img.id = imgid;
    img.style = card.getAttribute('style');
    card.appendChild(img);
    document.querySelector(`#${cardid} > div.card-name`).style = 'visibility: hidden !important;';
    document.querySelector(`#${cardid} > div:nth-child(2)`).style = 'visibility: hidden !important;';
  }
  return true;
}
const handlerDOMNodeInserted = (e) => {
  modal.removeEventListener('DOMNodeInserted', handlerDOMNodeInserted, false);
  const area = document.getElementById('DECK-BUILD-CARD-AREA');
  area.style = 'height: 500px';
  area.parentNode.style = 'max-height: 500px';
  for (const index in cardAry) {
    const cardList = document.querySelectorAll(`div [id^=board-object-deck-${cardAry[index]}]`);
    cardList.forEach((v, k, p) => {
      const sp = v.id.split('-');
      writeImg(v.id, `na_${sp[3]}_${sp[5].toLowerCase()}_${sp[6]}_${sp[7]}`, chrome.extension.getURL(`resources/cards/na_${sp[3]}_${sp[4]}_${sp[5].toLowerCase()}_${sp[6]}_${sp[7]}.png`));
    });
  }
  modal.addEventListener('DOMNodeInserted', handlerDOMNodeInserted, false);
}
modal.addEventListener('DOMNodeInserted', handlerDOMNodeInserted, false);


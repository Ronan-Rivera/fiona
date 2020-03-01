'use strict';

function madLibs() {
  // const madLib1 = 'The [ADJECTIVE] brown [ANIMAL] [PAST_VERB] [PREPOSITION] the [ADJECTIVE] [PLURAL_ANIMAL].';

  // // fill out these words to complete the first mad lib!
  // const adjective1 = 'wierd';
  // const animal1 = 'cat';
  // const pastVerb1 = 'ran';
  // const preposition1 = 'from';
  // const adjective2 = 'scary';
  // const pluralAnimal1 = 'mice';

  // const listOfMadLibsVariables1 = [adjective1, animal1, pastVerb1, preposition1, adjective2, pluralAnimal1];

  // displayMadLib('#mad-lib-1', completeMadLib(madLib1, listOfMadLibsVariables1));





  // now, create your own mad lib
  const madLib2 = 'one day there was a [adjective1] guy named [name1]. He had a [animal1] named [name2] and a [animal2] named [name3]. [name1] was very fond of his [pluralnoun1], but he did like [name3] more than [name2]  because [name2] [verb1] almost all of their food epsecially the [food1]';

  const adjective1 = getTextFromInput('#input1');
  const name1 =  getTextFromInput('#input2');
  const animal1 =  getTextFromInput('#input3');
  const name2 =  getTextFromInput('#input4');
  const animal2 =  getTextFromInput('#input5');
  const name3 =  getTextFromInput('#input6');
  const pluralnoun1 =  getTextFromInput('#input7');
  const verb1 =  getTextFromInput('#input8');
  const food1 =  getTextFromInput('#input9');
  const listOfMadLibsVariables2 = [adjective1, name1, animal1, name2, animal2, name3, name1, pluralnoun1, name3, name2, name2, verb1, food1];

  displayMadLib('#mad-lib-2', completeMadLib(madLib2, listOfMadLibsVariables2));
}






// ignore everything below this line

function completeMadLib(madLib, words) {
  const fillInRegex = /\[[A-Za-z0-9_\-]+\]/;
  return madLib.split(' ').map((word, index) => {
    if (fillInRegex.test(word)) {
      return word.replace(fillInRegex, words.shift());
    } else {
      return word;
    }
  }).join(' ');
}

function displayMadLib(cssSelector, string) {
  document.querySelector(cssSelector).textContent = string;
}

function getTextFromInput(cssSelector) {
  const element = document.querySelector(cssSelector);
  if (element) {
    return element.value;
  }
  return 'PLACEHOLDER';
}

madLibs();



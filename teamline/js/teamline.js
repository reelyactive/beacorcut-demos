/**
 * Copyright reelyActive 2019
 * We believe in an open Internet of Things
 */


// Constant definitions
const EARLIEST_YEAR = '2012';
const LATEST_YEAR = '2019';
const STORIES_BY_YEAR = {
    "2012": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/"
    ],
    "2013": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/",
      "https://reelyactive.github.io/beacorcut-demos/stories/shauheen/",
      "https://reelyactive.github.io/beacorcut-demos/stories/cyril/",
      "https://reelyactive.github.io/beacorcut-demos/stories/shant/"
    ],
    "2014": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/",
      "https://reelyactive.github.io/beacorcut-demos/stories/vaughn/",
      "https://reelyactive.github.io/beacorcut-demos/stories/tim/"
    ],
    "2015": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/juan/",
      "https://reelyactive.github.io/beacorcut-demos/stories/george/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/",
      "https://reelyactive.github.io/beacorcut-demos/stories/nicolas/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imranj/",
      "https://reelyactive.github.io/beacorcut-demos/stories/ibrahim/",
      "https://reelyactive.github.io/beacorcut-demos/stories/marwan/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/tingli/"
    ],
    "2016": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/juan/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/marwan/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/",
      "https://reelyactive.github.io/beacorcut-demos/stories/tingli/",
      "https://reelyactive.github.io/beacorcut-demos/stories/vincent/",
      "https://reelyactive.github.io/beacorcut-demos/stories/brian/"
    ],
    "2017": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/juan/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/brian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/"
    ],
    "2018": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/"
    ],
    "2019": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/",
      "https://reelyactive.github.io/beacorcut-demos/stories/imran/",
      "https://reelyactive.github.io/beacorcut-demos/stories/camille/",
      "https://reelyactive.github.io/beacorcut-demos/stories/furaha/"
    ]
};


// DOM elements
let years = document.querySelectorAll('.year');
let forward = document.querySelector('#forward');
let backward = document.querySelector('#backward');
let cards = document.querySelector('#cards');


// Local variables
let currentYearId = LATEST_YEAR;


// Update the year
function handleYearSelection(event) {
  let selectedId = this.getAttribute('id');
  let selectedYearId = currentYearId;

  if(selectedId === 'forward') {
    selectedYearId = (parseInt(currentYearId) + 1).toString();
  }
  else if(selectedId === 'backward') {
    selectedYearId = (parseInt(currentYearId) - 1).toString();
  }
  else {
    selectedYearId = selectedId;
  }

  currentYearId = selectedYearId;
  updateControls(selectedYearId);

  years.forEach(function(year) {
    let isSelectedYear = (year.getAttribute('id') === selectedYearId);
    if(isSelectedYear) {
      year.setAttribute('class', 'page-item year active');
    }
    else {
      year.setAttribute('class', 'page-item year');
    }
  });

  let selectedYearStoryUrls = STORIES_BY_YEAR[selectedYearId];
  updateCards(selectedYearStoryUrls);
}


// Update the forward and backward controls based on the given year
function updateControls(selectedYearId) {
  if(selectedYearId === EARLIEST_YEAR) {
    backward.setAttribute('class', 'page-item disabled');
  }
  else {
    backward.setAttribute('class', 'page-item');
    backward.addEventListener('click', handleYearSelection, { once: true });
  }

  if(selectedYearId === LATEST_YEAR) {
    forward.setAttribute('class', 'page-item disabled');
  }
  else {
    forward.setAttribute('class', 'page-item');
    forward.addEventListener('click', handleYearSelection, { once: true });
  }
}


// Update the cards to display based on the given story URLs
function updateCards(storyUrls) {
  let updatedCards = document.createDocumentFragment();
  let storiesToRetrieve = storyUrls.length;
  let storiesRetrieved = 0;

  while(cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }

  storyUrls.forEach(function(storyUrl) {
    cormorant.retrieveStory(storyUrl, function(story) {
      let isRetrievalComplete = (++storiesRetrieved === storiesToRetrieve);
      let div = document.createElement('div');
      div.setAttribute('class', 'card bg-light');
      updatedCards.appendChild(div);
      cuttlefish.render(story, div);
      if(isRetrievalComplete) {
        cards.appendChild(updatedCards);
      } 
    });
  });
}


// Observe year selection clicks
years.forEach(function(year) {
  year.addEventListener('click', handleYearSelection);
});


// Observe backward click once
backward.addEventListener('click', handleYearSelection, { once: true });


// On page load, select the latest year
updateCards(STORIES_BY_YEAR[currentYearId]);

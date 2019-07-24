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
      "https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/"
    ],
    "2014": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/"
    ],
    "2015": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/"
    ],
    "2016": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/traian/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/"
    ],
    "2017": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/"
    ],
    "2018": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/"
    ],
    "2019": [
      "https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/",
      "https://reelyactive.github.io/beacorcut-demos/stories/benoit/",
      "https://reelyactive.github.io/beacorcut-demos/stories/philippe/",
      "https://reelyactive.github.io/beacorcut-demos/stories/camille/",
      "https://reelyactive.github.io/beacorcut-demos/stories/furaha/"
    ]
};


// DOM elements
let years = document.querySelectorAll('.year');
let cards = document.querySelector('#cards');


// Update the year
function handleYearSelection(event) {
  let selectedYear = this;  // currentTarget of event
  let selectedYearId = selectedYear.getAttribute('id');

  years.forEach(function(year) {
    year.setAttribute('class', 'page-item year');
  });
  selectedYear.setAttribute('class', 'page-item year active');

  let selectedYearStoryUrls = STORIES_BY_YEAR[selectedYearId];
  updateCards(selectedYearStoryUrls);
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


// On page load, select the latest year
updateCards(STORIES_BY_YEAR[LATEST_YEAR]);

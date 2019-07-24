/**
 * Copyright reelyActive 2019
 * We believe in an open Internet of Things
 */


// Constant definitions
const JEFFREY_URL = 'https://reelyactive.github.io/beacorcut-demos/stories/jeffrey/';
const TRAIAN_URL = 'https://reelyactive.github.io/beacorcut-demos/stories/traian/';
const PIEROLIVIER_URL = 'https://reelyactive.github.io/beacorcut-demos/stories/pierolivier/';



// DOM elements
let jeffrey = document.querySelector('#jeffrey');
let traian = document.querySelector('#traian');
let pierolivier = document.querySelector('#pierolivier');

cormorant.retrieveStory(JEFFREY_URL, function(story) {
  cuttlefish.render(story, jeffrey);
});

cormorant.retrieveStory(TRAIAN_URL, function(story) {
  cuttlefish.render(story, traian);
});

cormorant.retrieveStory(PIEROLIVIER_URL, function(story) {
  cuttlefish.render(story, pierolivier);
});


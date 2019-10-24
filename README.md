# ember-peek-calendar

Hello friends! Ember is really cool.. Celia, you were right! 
The newer versions of Ember feel much more familiar! I believe
Handlebars will take some getting used to but I like how straight
forward and verbose it is. I found an ember addon called 
ember-composable-helpers which feels like a lodash for Handlebars.
I was also exposed to the option of creating my own helper functions, 
which is super exciting. With the basic knowledge of Ember I have 
so far, I've tried to replicate the calendar implementation I built 
in React. I hard coded data and also element style definitions. I 
feel like there are some nuances with Ember/Handlebars that I'm going 
to need to learn in order to do cool things with my code. Super exciting! 

So this bare bones Ember app is running Ember 3.11. It has a router with a default route that points
to 'home'. The home component is a row of links nested in divs that all
point to the same 'dayview' route. The day-view component renders a list
of time slots and has one 'activity tile' that has an onlick action that
will toggle a component property. When toggled, a nested component
(activity-details) will be rendered with hard coded data. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-peek-calendar`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

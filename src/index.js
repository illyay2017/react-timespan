// export { default as default } from './Timeline.jsx';
// console.log('My Minimal React Webpack Babel Setup');
import React from 'react';
import ReactDOM from 'react-dom';
import Timeline from './components/Timeline';
import '../stylesheet.scss';
// import Chatview from './components/Testcomp';

const title = 'My Maximal React Webpack Babel Setup';

const activities = [
  {
    name: 'Test Site 1',
    start: '1500-02-24',
    url: '../dis',
    body: 'As a baby I was born because something about birds and bees.',
    image: 'https://dur-duweb.newscyclecloud.com/storyimage/DU/20180304/NEWS01/180309820/AR/0/AR-180309820.jpg'
  },
  {
    name: 'Test Site 2',
    start: '1501-02-24',
    url: '../dis',
    body: 'As a baby I was born because something about birds and bees.',
    image: 'https://dur-duweb.newscyclecloud.com/storyimage/DU/20180304/NEWS01/180309820/AR/0/AR-180309820.jpg'
  },
  {
    name: 'Cole Turner',
    start: '1991-02-24',
    url: '../dis',
    body: 'As a baby I was born because something about birds and bees.',
    image: 'https://dur-duweb.newscyclecloud.com/storyimage/DU/20180304/NEWS01/180309820/AR/0/AR-180309820.jpg'
  },
  {
    name: 'The Year I Wrote This',
    start: '2017-01-01',
    end: '2017-12-31',
    url: 'http://cole.codes/',
    moreLinks: [
      {
        text: 'Link to my profile',
        url: 'http://cole.codes/',
      },
      {
        text: 'Another external link',
        url: 'http://news.google.com/',
      }
    ],
    body: 'Truly I made this for my portfolio and decided to share.',
    image: 'https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/stonehenge/history/stonehenge-aerial2.jpg?w=1440&h=612&mode=crop&scale=both&quality=60&anchor=NoFocus&WebsiteVersion=20180611'
  }
];


ReactDOM.render(
  <div>
    <Timeline activities={activities} />
  </div>,
  document.getElementById('app')
)

module.hot.accept();

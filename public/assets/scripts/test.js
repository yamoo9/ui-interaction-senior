import { getNode as $, before, after, create } from './lib/index.js';

const test = $('.test');

// before($('li:last-child', test), '<li>0</li>');
// after($('li:nth-child(3)', test), '<li>100</li>');
before($('li:last-child', test), create('li', null, '<span>wow</span>'));
after($('li:nth-child(3)', test), create('li', null, '<span>oops</span>'));

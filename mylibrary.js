//this file gets put in dist as a ready to go browser library

import Mylibrary from './index';

if (! window.Mylibrary) {
  window.Mylibrary = Mylibrary;
}

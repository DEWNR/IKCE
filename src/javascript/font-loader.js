import FontFaceObserver from 'fontfaceobserver/fontfaceobserver.standalone';

const html = document.documentElement;

const fontA = new FontFaceObserver('Open Sans');
const fontB = new FontFaceObserver('adelle-condensed');
const fontC = new FontFaceObserver('proxima-nova-condensed');

if (!sessionStorage.fontsLoaded) {
  Promise.all([
    // load Open Sans
    fontA.load()
  ]).then(() => {
    // load Adelle
    fontB.load().then(() => {
      // load Proxima
      fontC.load().then(() => {
        // add class to html
        html.classList.add('fonts-loaded');
        // add token to session storage
        sessionStorage.fontsLoaded = true;
      });
    });
  }).catch((err) => {
    // remove token from session storage
    sessionStorage.fontsLoaded = false;
    // send error to console
    console.error('Error: ', err);
  });
} else {
  // Add all font classes to html tag
  html.classList.add('fonts-loaded');
};

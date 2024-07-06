importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js');

//Loading the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('https://cdn.jsdelivr.net/gh/danioke/cdn@main/_service-worker.js', {scope: 'https://kuakayuagungoki.blogspot.com/'});
  });

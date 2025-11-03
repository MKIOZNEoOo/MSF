// filepath: c:\Users\MKIOZNE\Documents\GitHub\mkweb\file\js\main.js
(function(){
  const wrapper = document.querySelector('.hero-logo');
  if (!wrapper) return;

  // find or create video element inside wrapper
  let vid = wrapper.querySelector('video');
  if (!vid) {
    vid = document.createElement('video');
    vid.className = 'hero-logo-video';
    vid.autoplay = true;
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    vid.setAttribute('playsinline', '');
    wrapper.appendChild(vid);
  }

  // use fixed relative paths that match your repo layout
  const webmPath = 'file/background/logo_video.webm';
  const mp4Path  = 'file/background/logo_video.mp4';
  const posterPath = 'file/background/logo.png';

  // set poster
  vid.poster = posterPath;

  // remove existing sources to avoid duplicates
  Array.from(vid.querySelectorAll('source')).forEach(s => s.remove());

  // prefer webm (alpha) then mp4 fallback
  const srcWebm = document.createElement('source');
  srcWebm.src = webmPath;
  srcWebm.type = 'video/webm';
  const srcMp4 = document.createElement('source');
  srcMp4.src = mp4Path;
  srcMp4.type = 'video/mp4';
  vid.appendChild(srcWebm);
  vid.appendChild(srcMp4);

  // ensure the browser loads the new sources
  vid.load();

  // try to play when ready; fallback to image on error
  vid.addEventListener('canplaythrough', tryPlay, { once: true, passive: true });
  vid.addEventListener('error', () => { console.error('Video error'); showFallback(); }, true);

  function tryPlay(){
    // some browsers block autoplay unless muted (we set muted=true)
    vid.play().catch(err => {
      console.warn('Autoplay blocked or play failed:', err);
      showFallback();
    });
  }

  // small timeout: if still not playing, fallback
  setTimeout(() => {
    if (vid.paused || vid.readyState < 3) showFallback();
  }, 2500);

  function showFallback(){
    if (wrapper.querySelector('img.hero-logo-fallback')) return;
    const img = document.createElement('img');
    img.src = posterPath;
    img.alt = 'MK logo';
    img.className = 'hero-logo-fallback';
    img.style.width = getComputedStyle(wrapper).width || '100%';
    if (vid.parentElement === wrapper) wrapper.replaceChild(img, vid);
    else wrapper.appendChild(img);
  }
})();
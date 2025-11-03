(function(){
  const wrapper = document.querySelector('.hero-logo');
  if (!wrapper) return;

  // find or create the <video> element
  let vid = wrapper.querySelector('video');
  if (!vid) {
    vid = document.createElement('video');
    vid.className = 'hero-logo-video';
    wrapper.appendChild(vid);
  }

  // ensure playback attributes
  vid.autoplay = true;
  vid.muted = true;
  vid.loop = true;
  vid.playsInline = true;
  vid.setAttribute('playsinline', '');
  vid.preload = 'auto';

  // use fixed base path that matches your GitHub repo layout
  const base = 'file/';

  const webmPath = base + 'background/logo_video.webm';
  const mp4Path  = base + 'background/logo_video.mp4';
  const posterPath = base + 'background/logo.png';

  // set poster (use png)
  vid.poster = posterPath;

  // clear any existing children (remove invalid inline fallback markup)
  while (vid.firstChild) vid.removeChild(vid.firstChild);

  // create sources (prefer webm then mp4)
  const s1 = document.createElement('source');
  s1.src = webmPath;
  s1.type = 'video/webm';
  const s2 = document.createElement('source');
  s2.src = mp4Path;
  s2.type = 'video/mp4';
  vid.appendChild(s1);
  vid.appendChild(s2);

  // load new sources
  vid.load();

  // try to play when enough is buffered; fallback on error or blocked autoplay
  vid.addEventListener('canplaythrough', tryPlay, { once: true });
  vid.addEventListener('error', (e) => {
    console.error('Video error', e);
    showFallback();
  }, true);

  function tryPlay(){
    vid.play().catch(err => {
      console.warn('Autoplay/play failed:', err);
      showFallback();
    });
  }

  // if still not playing after a short time, show fallback
  setTimeout(() => {
    if (!vid || vid.paused || vid.readyState < 3) showFallback();
  }, 2500);

  function showFallback(){
    if (wrapper.querySelector('img.hero-logo-fallback')) return;
    const img = document.createElement('img');
    img.src = posterPath;
    img.alt = 'MK logo';
    img.className = 'hero-logo-fallback';
    img.style.width = getComputedStyle(wrapper).width || '100%';
    // replace video with image
    if (vid.parentElement === wrapper) wrapper.replaceChild(img, vid);
    else wrapper.appendChild(img);
  }
})();
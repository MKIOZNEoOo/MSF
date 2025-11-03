// ...new file...
(function(){
  const vid = document.querySelector('.hero-logo video');
  if (!vid) return;

  // Try to play and handle promise rejection (autoplay / codec issues)
  vid.play().catch(err => {
    console.warn('Video play failed:', err);
    showFallback();
  });

  // If the video reports an error, show fallback
  vid.addEventListener('error', (e) => {
    console.error('Video error event:', e);
    showFallback();
  }, true);

  function showFallback(){
    const wrapper = vid.parentElement;
    const img = document.createElement('img');
    img.src = 'file/background/logo.png';
    img.alt = 'MK logo';
    img.className = 'hero-logo-fallback';
    // copy size from video element
    img.style.width = getComputedStyle(vid).width || '100%';
    // replace video with image
    wrapper.replaceChild(img, vid);
  }
})();
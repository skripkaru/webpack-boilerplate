export const mobileCheck = () => {
  const html = document.documentElement;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    html.classList.add('page--android');
    return 'Android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    html.classList.add('page--ios');
    return 'iOS';
  }

  return 'unknown';
};

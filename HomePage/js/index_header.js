// Header-hide 滚动出现
(function () {
  const header = document.querySelector('.header')
  const banner = document.querySelector('.banner')
  const header_hide = header.cloneNode(true); // 克隆 header
  header_hide.classList.add("header-hide"); // 只添加类，不手动设置样式
  document.body.appendChild(header_hide);
  window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop
    if (n >= banner.offsetTop) {
      header_hide.style.top = '0px';
    } else {
      header_hide.style.top = '-60px';
    }
  })
})(); 
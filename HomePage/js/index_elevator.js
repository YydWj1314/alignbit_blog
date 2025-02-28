// Elevator 
// 1.滚动->出现
(function () {
  const banner = document.querySelector('.banner')
  const elevator = document.querySelector('.elevator')
  window.addEventListener('scroll', function () {
    const n = document.documentElement.scrollTop;
    elevator.style.opacity = n >= banner.offsetTop ? 1 : 0;
  })
})();

// 2.点击事件
(function () {
  const list = document.querySelector('.elevator .list')
  const header = document.querySelector('.header')
  list.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'A' || e.target.tagName === 'I') {
      // 点击->active
      const active_old = document.querySelector('.elevator .list .active')
      if (active_old) {
        active_old.classList.remove('active')
      }
      e.target.classList.add('active')
      // 点击->scroll
      const data_name = e.target.dataset.name
      console.log(data_name);
      
      if (data_name === "top" || data_name === "top-icon") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        e.target.classList.remove('active')
      }
      else {
        const data = document.querySelector(`.Blogs_${data_name}`)
        const len = data.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
        window.scrollTo({
          top: len,
          behavior: "smooth"
        });
      }
    }
  })
})();
// 3.滑动事件: 页面滚动到主页区域，elevator <a> -> active
(function () {
  window.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const header = document.querySelector('.header')
    const bufferSpace = 50
    // Binary search 优化: 盒子按照 offsetTop 顺序排列，根据 offsetTop 找到盒子执行操作
    // 3.1. 创建Array: offsetMap=[{name:"data-set", offsetTop:20 },{},{}...]
    const allA = document.querySelectorAll('.elevator .list a')
    // 根据 <a> 标签的 data-name 获取盒子对象
    const offsetMap = Array.from(allA)
      .map(a => {
        const box = document.querySelector(`.Blogs_${a.dataset.name}`)
        // console.log(a.dataset.name);

        return box ? { name: a.dataset.name, offsetTop: box.offsetTop - bufferSpace } : null;
      }).filter(Boolean);
    // 3.2. Binary search: 根据当前scrollTop -> offsetTop 找到盒子，添加active 
    let left = 0, right = offsetMap.length - 1, activeIndex = 0;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (scrollTop >= offsetMap[mid].offsetTop - header.offsetHeight) {
        activeIndex = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    // 3.3. 移除旧active, 添加新active
    const oldActive = document.querySelector('.elevator .list .active')
    if (oldActive) { oldActive.classList.remove('active') }
    allA[activeIndex]?.classList.add('active')
  })
})();
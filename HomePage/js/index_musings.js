// Blog_musings 条件渲染
fetch("../json/index_musings.json")
  .then(response => response.json())
  .then(data => {
    renderMusing(data)
    // updateCards(); // **确保 cards 变量更新**
    renderMusingScroll();
    renderMusingHover();
  })
  .catch(error => console.error("获取json失败", error))
// function
function renderMusing(blogs) {
  const blogList = document.querySelector('.Blogs_musings .content .left ul')
  blogList.innerHTML = ""
  blogs.slice(0, 8).forEach(blog => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="container">
        <div class="card active">
          <!-- image -->
          <div class="image"><img src="${blog.pic}" alt=""></div>
          <!-- cotentent -->
          <div class="content">
            <div>
              <p class="musing-title">${blog.title}</p>
              <p class="musing-date">${blog.date}</p>
              <p class="musing-abstract">${blog.abstract}</p>
            </div>
          </div>
          <!-- link -->
          <a href="" class="musing-link">Read</a>
        </div>
      </div>
    `;
    blogList.appendChild(li)
  })
  updateCards();
}

// scroll 效果渲染
let cards = [];
function updateCards() {
  cards = document.querySelectorAll('.Blogs_musings .container .card');
}
const scrollContainer = document.querySelector('.Blogs_musings .content .left')
scrollContainer.addEventListener('scroll', renderMusingScroll);

function renderMusingScroll() {
  let centerCard = null
  let minDiff = Infinity
  cards.forEach(card => {
    card.classList.remove('active')
    // .getBoundingClientRect(): .top → 盒子距离视口顶部的距离
    //                           .height → 盒子本身的高度 
    const rect = card.getBoundingClientRect()
    const scrollContainerRect = scrollContainer.getBoundingClientRect()
    const diff = Math.abs(rect.top + rect.height / 2   // 求 container中线 相对于屏幕位置
      - scrollContainerRect.top - scrollContainerRect.height / 2); // 求当前盒子中线相对于 container 中线的距离  
    if (diff < minDiff) {
      centerCard = card
      minDiff = diff
    }
  })
  if (centerCard) centerCard.classList.add('active');
}
// mouseenter 效果渲染
function renderMusingHover() {
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.querySelector('.Blogs_musings .content .left .active').classList.remove('active')
      card.classList.add('active');
    })
    card.addEventListener('mouseleave', () => {
      renderMusingScroll();
    })
  });
}
// 
document.addEventListener("DOMContentLoaded", function () {
  const rightBox = document.querySelector('.Blogs_musings .content .right');
  const randomTilt = Math.random(); // 生成 0 ~ 1 之间的随机数
  rightBox.style.setProperty("--tilt", randomTilt); // 设置 CSS 变量
  rightBox.classList.add('random-tilt');
});

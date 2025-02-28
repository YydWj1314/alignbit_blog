
// Message Wall 渲染
// message-container > ul > li > content(water) > div*3
fetch("../json/index_message.json")
  .then(response => response.json())
  .then(data => {
    renderMessage(data);
    updateWaters(); // 先更新 waters
    applyRandomShapes()
    renderWaterHover();
  })
  .catch(error => console.error("获取json失败", error))

function renderMessage(blogs) {
  const blogList = document.querySelector('.Blogs_message .message-container ul')
  blogList.innerHTML = ""
  blogs.slice(0, 8).forEach(blog => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="content water">
        <div class="date">${blog.date}</div>
        <div class="text">${blog.text}</div>
        <div class="uid">${blog.uname}</div>
      </div>
      `
    blogList.appendChild(li)
  })
  updateWaters();
}

// 更新waters
let waters = [];
function updateWaters() {
  waters = document.querySelectorAll('.Blogs_message ul .water');
}

function renderWaterHover(){
  waters.forEach(water => {
    water.addEventListener('mouseenter', function(){
      console.log("1") // 
      waters.forEach(w => w.classList.remove('active'));
      this.classList.add('active')
    })
  })
}

// 让所有 .water 随机形状
function randomNum() {
  return Math.floor(Math.random() * 50) + 30; // 生成 30% ~ 80% 之间的随机值
}
function getRandomBorderRadius() {
  return `${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}% / 
          ${randomNum()}% ${randomNum()}% ${randomNum()}% ${randomNum()}%`;
}
function applyRandomShapes() {
  waters.forEach(water => {
    water.style.borderRadius = getRandomBorderRadius();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWaters(); // 确保 waters 先更新
  applyRandomShapes(); // 赋予水滴随机形状
});

// Message Input 渲染
(function(){
  const txt = document.querySelector('#txt')
  const hint = document.querySelector('.hint')
  const button = document.querySelector('.input .button')
  // 1. 当 textarea 获得焦点，让 hint 显示出来
  txt.addEventListener('focus', function () {
    hint.style.opacity = 1;
  })
  // 2. 当 textarea 失焦，hint 消失
  txt.addEventListener('blur', function () {
    hint.style.opacity = 0;
  })
  // 3. 提示输入字数
  txt.addEventListener('input', function () {
    hint.innerHTML = `<span>${txt.value.length}</span>/200 words`
  })
  // 4. 单机butto n 发布评论, 并清空 textarea
  button.addEventListener('click', function () {
    // TBD 
    if (txt.value.trim() === '') { console.log("invalid message"); }
    else { console.log(txt.value.trim()); }
    txt.value = ''
  })
  
})();

// Blogs_latest 条件渲染
document.addEventListener("DOMContentLoaded", function () {

  fetch("../json/index_latest.json")  // 访问 json 目录下的 blogs.json
    .then(response => response.json())  // 解析 JSON
    .then(data => {
      // console.log("获取的数据:", data);  
      renderLatest(data);  // 调用函数渲染 HTML
    })
    .catch(error => console.error("获取 JSON 失败:", error));
  // 渲染数据的函数
  function renderLatest(blogs) {
    const blogList = document.querySelector('.Blogs_latest .latest-content ul');
    blogList.innerHTML = ""; // 清空现有内容
    blogs.slice(0, 3).forEach(blog => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="pic">
          <img src="${blog.pic}" alt="">
          <div class="cover">
            <h2>${blog.title}</h2>
            <p>${blog.date}</p>
          </div>
        </div>
        <div class="txt">
          <div class="left">
            <p>${blog.tag}</p>
          </div>
          <div class="right">
            <p>
              <i class="iconfont icon-comment-lines"></i>
              <span>${blog.comments}</span>
            </p>
            <p>
              <i class="iconfont icon-like"></i>
              <span>${blog.likes}</span>
            </p>
          </div>
        </div>
      `;
      blogList.appendChild(li);
    });
  }
});


// Blog_topics 条件渲染
(function () {
  const urls = ["../json/index_topics_arch.json",
    "../json/index_topics_ds.json",
    "../json/index_topics_web.json"]
  const uls = document.querySelectorAll('.Blogs_topics .topics-content .right ul');
  uls.forEach((ul, i) => {
    fetch(urls[i])
      .then(response => response.json())
      .then(data => {
        // console.log(`加载数据 ${i + 1}:`, data);
        renderTopics(data, ul); // 传入对应的 `ul`
      })
      .catch(error => console.error("获取失败", error));
  });

  // title click 渲染
  const titles = document.querySelector('.Blogs_topics .topics-tt .right ul')
  titles.addEventListener('click', function (e) {
    const uls = document.querySelectorAll('.Blogs_topics .topics-content .right ul')
    if (e.target.tagName === 'A') {
      e.preventDefault();

      // tag highlight
      const oldActiveTitle = document.querySelector('.Blogs_topics .section-tt .right li .active')
      console.log(oldActiveTitle);
      if (oldActiveTitle) {
        oldActiveTitle.classList.remove('active')
      }
      e.target.classList.add('active')

      // tab switch
      const i = +e.target.dataset.id
      // remove 'active'
      const oldActiveContent = document.querySelector('.Blogs_topics .topics-content .right ul.active')
      if (oldActiveContent) {
        oldActiveContent.classList.remove('active')
      }
      // add 'active'
      uls[i].classList.add('active')
    }
  });

  // 渲染数据function
  function renderTopics(blogs, blogList) {
    blogList.innerHTML = ""
    blogs.slice(0, 8).forEach(blog => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="father">
        <!-- text -->
        <div class="bottom">
        <div class="text">
        <p class="title">${blog.title}</p>
        <p class="date"> ${blog.date} </p>
        <p class="abstract">${blog.abstract}</p>
        </div>
        </div>
        <!-- image -->
        <div class="image">
        <img src="${blog.pic}" alt="">
        </div>
        </div>
        `;
      blogList.appendChild(li)
    })
  }
})();

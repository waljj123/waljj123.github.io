var posts=["2024/06/20/threadpool/","2024/06/22/mysql-engine/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
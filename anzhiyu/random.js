var posts=["2024/06/21/hello-world/","2024/06/20/threadpool/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
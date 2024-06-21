var posts=["2024/06/20/threadpool/","2024/06/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
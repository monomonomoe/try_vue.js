window.onload = function() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  app.message = 'changed';
}

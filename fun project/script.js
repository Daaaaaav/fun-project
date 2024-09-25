const header = document.querySelector('.navbar');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
class MyCustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'MyCustomError';
    }
  }
  
  try {
    throw new MyCustomError('Something went wrong!');
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }
let string = "";
let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } 
    
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    } 
    
    else if (e.target.innerHTML == '%') {
      string = string * 0.01;
      document.querySelector('input').value = string;
    } 
    
    else if (e.target.innerHTML == '00') {
      string = string + "00";
      document.querySelector('input').value = string;
    } 

    else if (e.target.innerHTML == 'X') {
        string = string + ' * ';
        document.querySelector('input').value = string
    }
    
    else {
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    };
  });
});

function freeYourMind() {
  const body = document.querySelector('body');
  let count = 0;

  body.style.fontSize = '100px';
  body.style.textAlign = 'center';


  const intervalId = setInterval(() => {
    if (count % 2 === 0) {
      body.style.backgroundColor = '#590000'; 
      body.style.color = '#FFFFFF'; 
      body.innerHTML = 'FREE YOUR MIND';
    } else {
      body.style.backgroundColor = '#999999'; 
      body.style.color = '#FF0000'; 
      body.innerHTML = '';
    }
    count++;

    
    if (count > 16) {
      clearInterval(intervalId);
      body.style.backgroundColor = '#FFFFFF'; 
      body.style.color = '#000000'; 
      body.innerHTML = ''; 
    }
  }, 500); 
}



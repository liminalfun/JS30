import '@csstools/normalize.css';

function addContent(){
    const showcase = document.getElementById('showcase');
  
    return data.map(data => {
      const render =
      `<div class='box'>
        <a target='_blank' href='${data.url}'>
          <img alt='${data.title}' src='${data.img}'>
          <div class='title-grad'>
            <span class='title'>${data.title}</span>
          </div>
        </a>
      </div>`;
  
      showcase.insertAdjacentHTML("beforeend", render);
      });
  }
  
  window.onload = addContent;
  
  const data = [
    {
      title: "JavaScript Drum Kit",
      url: "01 - JavaScript Drum Kit/index.html",
      img: "01 - JavaScript Drum Kit/image/01_port.jpg"
    }
  ];
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
    url: "01_drum/index.html",
    img: "img/01.jpg"
  },
  {
    title: "JS and CSS Clock",
    url: "02_clock/index.html",
    img: "img/02.jpg"
  },
  {
    title: "Update CSS Variables with JS",
    url: "03_cssvar/index.html",
    img: "img/03.jpg"
  },
  {
    title: "Flex Panel Gallery",
    url: "05_flex/index.html",
    img: "img/05.jpg"
  },
  {
    title: "Type Ahead",
    url: "06_type/index.html",
    img: "img/06.jpg"
  },
  {
    title: "HTML5 Canvas",
    url: "08_canvas/index.html",
    img: "img/08.jpg"
  },
  {
    title: "Hold Shift and Check Checkboxes",
    url: "10_check/index.html",
    img: "img/10.jpg"
  },
  {
    title: "Custom Video Player",
    url: "11_vid/index.html",
    img: "11 - Custom Video Player/image/11_port.jpg"
  },
  {
    title: "Key Sequence Detection",
    url: "12_keyseq/index.html",
    img: "12 - Key Sequence Detection/image/12_port.jpg"
  },
  {
    title: "Slide in on Scroll",
    url: "13_slide/index.html",
    img: "13 - Slide in on Scroll/image/13_port.jpg"
  },
  {
    title: "Local Storage",
    url: "15_localstorage/index.html",
    img: "15 - LocalStorage/image/14_port.jpg"
  },
  {
    title: "Mouse Move Shadows",
    url: "16_mousemove/index.html",
    img: "16 - Mouse Move Shadow/image/16_port.jpg"
  },
  {
    title: "Webcam Fun",
    url: "19_webcam/index.html",
    img: "19 - Webcam Fun/image/19_port.jpg"
  },
  {
    title: "Speech Detection",
    url: "20_speech/index.html",
    img: "20 - Speech Detection/image/20_port.jpg"
  },
  {
    title: "Follow Along Link Highlighter",
    url: "21_geolocation/index.html",
    img: "22 - Follow Along Link Highlighter/image/22_port.jpg"
  },
  {
    title: "Follow Along Link Highlighter",
    url: "22_followalong/index.html",
    img: "22 - Follow Along Link Highlighter/image/22_port.jpg"
  },
  {
    title: "Speech Synthesis",
    url: "23_speechsynth/index.html",
    img: "23 - Speech Synthesis/image/23_port.jpg"
  },
  {
    title: "Sticky Nav & Parallax",
    url: "24_stickynav/index.html",
    img: "24 - Sticky Nav/image/24_port.jpg"
  },
  {
    title: "Stripe Follow Along Nav",
    url: "26_followalongnav/index.html",
    img: "26 - Stripe Follow Along Nav/image/26_port.jpg"
  },
  {
    title: "Click and Drag",
    url: "27_clickdrag/index.html",
    img: "27 - Click and Drag/image/27_port.jpg"
  },
  {
    title: "Video Speed Controller",
    url: "28_vidspeed/index.html",
    img: "28 - Video Speed Controller/image/28_port.jpg"
  },
  {
    title: "Countdown Timer",
    url: "29_countdown/index.html",
    img: "29 - Countdown Timer/image/29_port.jpg"
  },
  {
    title: "Whack A Mole",
    url: "30_whackamole/index.html",
    img: "30 - Whack A Mole/image/30_port.jpg"
  }
];

var wordList = ['design', 'create', 'draw', 'think'];
var characterPosition = 0, wordPosition = 0;
var typeSpeed = 200, eraseSpeed = typeSpeed/2;

function typeWord() {
  if (characterPosition < wordList[wordPosition].length) {
    document.getElementById("title").innerHTML += wordList[wordPosition].charAt(characterPosition);
    characterPosition++;
    setTimeout(typeWord, typeSpeed);
  } else {
  	setTimeout(eraseWord, eraseSpeed);
  }
}

function eraseWord() {
	if (characterPosition >= 0) {
      var word = wordList[wordPosition].toString().substring(0, characterPosition);
      document.getElementById("title").innerHTML = word;
      characterPosition--;
      setTimeout(eraseWord, eraseSpeed);
  } else {
    wordPosition++;
    if (wordPosition >= wordList.length) wordPosition = 0;
    setTimeout(typeWord, typeSpeed);
  }
}

setTimeout(typeWord, typeSpeed);

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('.content').animate({
                scrollTop: (target.offset().top)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});

const sidebar = $('#sidebar');
const buttonSidebar = $('#button-sidebar');


buttonSidebar.click( ()=> {
    sidebar.toggleClass('sidebar--active')
})

const content = $('#content');
const buttonTop = $('#button-top');
const about= $('#about');
const porfolio = $('#portfolio');
const cover = $('#cover');


content.on("scroll", ()=>{

  if(cover.visible()){
    buttonTop.removeClass('button-top--active')
    $('#button-top-a').addClass('button-top--disable')
  }else{
    buttonTop.addClass('button-top--active')
    $('#button-top-a').removeClass('button-top--disable')
  }

});

const masonryLayout = (containerElem, itemsElemens, columns) =>{
  containerElem.classList.add('masonry-layout', `columns-${columns}`)
  let columnsElements = []

  for( let i = 1; i <= columns; i++){
    let column = document.createElement('div')
    column.classList.add('masonry-column', `column-${i}`)
    containerElem.appendChild(column)
    columnsElements.push(column)
  }

  for(let m = 0; m < Math.ceil(itemsElemens.length / columns); m++){
    for(let n = 0; n < columns; n++){
      let item = itemsElemens[ m * columns + n]
      columnsElements[n].appendChild(item)
      item.classList.add('masonry-item')
    }
  }

}

masonryLayout(document.getElementById('gallery'),
              document.querySelectorAll('.gallery-item'), 3)

// $.simpleLightbox({
//   fileExt:    'png|jpg|jpeg|gif|pdf',
// });

var gallery = $('.gallery div a.project-link').simpleLightbox({
  // fileExt:    'png|jpg|jpeg|gif|pdf',
  // additionalHtml:   '<h1>hola<h1>',
  nav:      false,
  showCounter:  false,
  enableKeyboard: false,
  alertError:     false,
  swipeTolerance: 100000,
});
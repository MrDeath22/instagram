let btnsEl = document.querySelectorAll('.nav__item-btn');

btnsEl.forEach(item => {
   item.addEventListener('click', (e) => {
      btnsEl.forEach(items => {
         items.classList.remove('active');
      })
      item.classList.add('active')
   })
})

// -------------------------------------

let postWrap = document.querySelector('.posts__wrapper');

let temp = document.querySelector('#post__temp').content;
let tempFr = document.createDocumentFragment();

function getPost() {
   for (let i of post) {
      let postTemp = temp.cloneNode(true);
      postTemp.querySelector('.post__temp-img').src = i.img;
      
      tempFr.appendChild(postTemp);
   }
   postWrap.appendChild(tempFr);
}

btnsEl[0].addEventListener('click', () => {
   postWrap.innerHTML = '';
   getPost();
})

btnsEl[1].addEventListener('click', () => {
   postWrap.innerHTML = '';
   for (let i of post) {
      if (i.name == 'vd') {
         let postTemp = temp.cloneNode(true);
         postTemp.querySelector('.post__temp-img').src = i.img;
   
         tempFr.appendChild(postTemp);
      }
   }
   postWrap.appendChild(tempFr);
})

btnsEl[2].addEventListener('click', () => {
   postWrap.innerHTML = '';
   for (let i of post) {
      if (i.name == 'img') {
         let postTemp = temp.cloneNode(true);
         postTemp.querySelector('.post__temp-img').src = i.img;
         tempFr.appendChild(postTemp);
      }
   }
   postWrap.appendChild(tempFr);
})

getPost();

// -----------------------------------------

let temp2 = document.querySelector('#post__modal-temp').content;

postWrap.addEventListener('click', (e) => {
   closeBtn.style.display = 'block';

   let modalTemp = temp2.cloneNode(true);
   modalTemp.querySelector('.modal-temp__div-img').src = e.target.src;
   modalTemp.querySelector('.modal-temp__div');
   modalTemp.querySelector('.modal-temp__bg');
   
   postWrap.appendChild(modalTemp);
})

let closeBtn = document.querySelector('.fa-times');

closeBtn.addEventListener('click', () => {
   
})







































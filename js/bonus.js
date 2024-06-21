let click = false;
let postLike = []
let bottoni = document.querySelectorAll('.js-like-button');
let likes = document.querySelectorAll('.js-likes-counter');

// funzionaligà like metti e togli   
for (let i = 0; i < bottoni.length; i++) {
    let bottone = bottoni[i];

    bottone.addEventListener('click', e =>{
        e.preventDefault();
        if(bottone.classList.contains('like-button')){

            bottone.classList.remove('like-button');
            bottone.classList.add('like-button-liked');
            let likeCounter = likes[i];
            let valoreLike = parseInt(likeCounter.innerHTML);
            likeCounter.innerHTML = ++valoreLike
        }else{
            bottone.classList.remove('like-button-liked');
            bottone.classList.add('like-button');
            let likeCounter = likes[i];
            let valoreLike = parseInt(likeCounter.innerHTML);
            likeCounter.innerHTML = --valoreLike
        }
    }) 
}
        

    
    
    
    
        
        

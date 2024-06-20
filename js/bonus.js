let click = false;
let postLike = []
let numMipiace = document.querySelectorAll('.js-likes-counter');
// trovo il mi piace e cambio la classe 
containerPost.addEventListener('click', (e) => {

    if(e.target.classList.value === 'like-button__label' || e.target.classList.value === 'like-button__icon fas fa-thumbs-up'){
        let position = parseInt(e.target.parentElement.attributes[2].value);
        if(!postLike.includes(position)){
            e.target.parentNode.classList.remove('like-button');
            e.target.parentNode.classList.add('like-button--liked');
            postLike.push(position);
            numMipiace[position].textContent = ++posts[position].likes
        }else{
            e.target.parentNode.classList.remove('like-button--liked');
            e.target.parentNode.classList.add('like-button');
            numMipiace[position].textContent = --posts[position].likes
            // creo array di appoggio per eliminare il like dall'array
            let arrayDiAppoggio = [];
            postLike.forEach(element => {
                if(element !== position){
                    arrayDiAppoggio.push(element);
                }
            });
            postLike = arrayDiAppoggio;
        }
    }
    else if(click === false && e.target.classList.value === 'like-button js-like-button'){
        let position = parseInt(e.target.attributes[2].value);
        if(!postLike.includes(position)){
            e.target.classList.remove('like-button');
            e.target.classList.add('like-button--liked');
            postLike.push(position);
            numMipiace[position].textContent = ++posts[position].likes; 
        }else{
            e.target.classList.remove('like-button--liked');
            e.target.classList.add('like-button');
            numMipiace[position].textContent = --posts[position].likes;
            // creo array di appoggio per eliminare il like dall'array
            let arrayDiAppoggio = [];
            postLike.forEach(element => {
                if(element !== position){
                    arrayDiAppoggio.push(element);
                }
            });
            postLike = arrayDiAppoggio; 
        }
       
        
        
    };

    // if(click){
    //     tolgoIlClick
    // }
    console.log(postLike)
});
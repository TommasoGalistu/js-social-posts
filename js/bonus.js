let click = false;
let postLike = []
let numMipiace = document.querySelectorAll('.js-likes-counter');
// trovo il mi piace e cambio la classe 
containerPost.addEventListener('click', (e) => {
    e.preventDefault()
    // cerco dove ho cliccato
    if(e.target.classList.value === 'like-button__label' || e.target.classList.value === 'like-button__icon fas fa-thumbs-up'){
        // cerco il valore che corrisponde alla posizione del mio oggetto
        let position = parseInt(e.target.parentElement.attributes[2].value);
        // se il numero non è incluso metto like e incremento
        if(!postLike.includes(position)){
            e.target.parentNode.classList.remove('like-button');
            e.target.parentNode.classList.add('like-button--liked');
            postLike.push(position);
            numMipiace[position].textContent = ++posts[position].likes
            // else se avevo già messo like lo tolgo
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
    // cerco dove ho cliccato, qui clicco sulla i invece che sullo span e succedono
    // le stesse identiche cose a sopra
    else if(e.target.classList.value === 'like-button js-like-button' || e.target.classList.value === 'js-like-button like-button'){
         // cerco il valore che corrisponde alla posizione del mio oggetto
        let position = parseInt(e.target.attributes[2].value);
        // se il numero non è incluso metto like e incremento
        if(!postLike.includes(position)){
            e.target.classList.remove('like-button');
            e.target.classList.add('like-button--liked');
            postLike.push(position);
            numMipiace[position].textContent = ++posts[position].likes; 
            // else se avevo già messo like lo tolgo
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
    console.log(e.target.classList.value)
    

});





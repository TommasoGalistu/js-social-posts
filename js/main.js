let containerPost = document.getElementById('container')

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
// esempio di post oggetto
// {
//     "id": 1,
//     "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//     "media": "https://unsplash.it/600/300?image=171",
//     "author": {
//         "name": "Phil Mangione",
//         "image": "https://unsplash.it/300/300?image=15"
//     },
//     "likes": 80,
//     "created": "2021-06-25"
// },

// funzione per invertire la stringa data da america a italiana
function convertDateToItalian(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

posts.forEach(post => {
    post.created = convertDateToItalian(post.created);
});



// inserisco le tutte le immagini post in maniera dinamica
posts.forEach(personPost => {
    if(!personPost.author.image){
        let arrayLettere = personPost.author.name.match(/[A-Z]/g)
        personPost.author.iniziali = `${arrayLettere[0]} ${arrayLettere[1]}`
    }
    containerPost.innerHTML += `
    <div class="post">
        <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                        <img class="profile-pic" src="${personPost.author.image}" alt="${personPost.author.iniziali}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${personPost.author.name}</div>
                            <div class="post-meta__time">${personPost.created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${personPost.content}</div>
                <div class="post__image">
                    <img src="${personPost.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta-${personPost.id}">
                            <a class="like-button js-like-button" href="#" data-postid="${personPost.id - 1}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${personPost.id}" class="js-likes-counter">${personPost.likes}</b> persone
                        </div>
                    </div>
                </div>
        </div> 
    </div>
                `
    
});

let stringa = "Questa è una Stringa con Alcune Lettere Maiuscole: ABCXYZ";
let maiuscole = stringa.match(/[A-Z]/g);
console.log();

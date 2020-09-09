// const quoteList = [
//     "Be yourself; everyone else is already taken.",
//     "So many books, so little time"
// ];


var pubList = [{
        "name": "Meow",
        "author": "Oscar Wilde"

    },
    {
        "name": "Meow2",
        "author": "Oscar Wilde2"

    }
];

// var numQuotes = quoteList.length;

// var quoteObj = quoteList[Math.floor(Math.random() * numQuotes)];


Vue.component('publication', {
    props: ['article'],
    template: `
    <span>
        <h2> {{article.name}} </h2>
        <p> {{article.author}} </p>
    </span>
    `
})

var app = new Vue({
    el: '#app',
    component: ['publication'],

    data: {
        pubs: pubList,

    },

})
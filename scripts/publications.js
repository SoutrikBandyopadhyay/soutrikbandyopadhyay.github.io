Vue.component('publication', {
    props: ['article'],
    template: `
    <span>
        <p><a :href = "article.link"> {{article.name}} </a> </p>
        <ul>
            <li v-for= "auth in article.authors"><span v-html="auth"></span> </li>
        </ul>

        <p>{{article.journal}}, Pages {{article.pages}} </p>
        <p>{{article.publisher}} , {{article.year}}</p>
        <p>{{article.abstract}} </p>


        
    </span>
    `
})

var app = new Vue({
    el: '#pubApp',
    component: ['publication'],

    data: {
        pubs: [],

    },
    mounted() {
        axios
            .get('../data/pubs.json')
            .then(response => (this.pubs = response.data))
    }
})
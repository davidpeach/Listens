import VueRouter from 'vue-router';

let routes = [
    {
        path: '/listens',
        redirect: { name: 'listen' }
    },
    {
        name: 'album',
        path: '/listens/albums/',
        component: require('./views/Albums.vue').default,
        pathToRegexpOptions: { strict: true }
    },
    {
        name: 'artist',
        path: '/listens/artists/:page*/',
        component: require('./views/Artists.vue').default,
        pathToRegexpOptions: { strict: true }
    },
    {
        name: 'listen',
        path: '/listens/',
        component: require('./views/Listens.vue').default,
        pathToRegexpOptions: { strict: true }
    }
];

export default new VueRouter({
    //mode: 'history',
    routes
});
import VueRouter from 'vue-router';

let routes = [
    {
        name: 'album',
        path: '/albums/',
        component: require('./views/Albums.vue').default,
        pathToRegexpOptions: { strict: true }
    },
    {
        name: 'artist',
        path: '/artists/:page*/',
        component: require('./views/Artists.vue').default,
        pathToRegexpOptions: { strict: true }
    },
    {
        name: 'listen',
        path: '/',
        component: require('./views/Listens.vue').default,
        pathToRegexpOptions: { strict: true }
    }
];

export default new VueRouter({
    routes
});
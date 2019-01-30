import Echo from "laravel-echo"

export default ({ app, store, redirect, axios }) => {
    window.io = require('socket.io-client');
    // Have this in case you stop running your laravel echo server
    
    if (typeof io !== 'undefined') {
      window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: `https://socket.hearts-club.com/`,
        transports: ['websocket', 'polling', 'flashsocket'],
        encrypted: false,
        auth: {
            headers: {
                Authorization: `Bearer ${store.state.auth.access.csrf}`
            },
        }
      });
    }

}
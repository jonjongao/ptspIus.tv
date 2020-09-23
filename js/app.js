Vue.component('ep2', {
    template: '<div>{{ text }}</div>',
    data() {
        return {
            text: '乘客 ep2'
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        loginName: '琪',
        ctn1: 1,
        ctn2: 1,
        ctnActiveClass: 'tabbar_active',
        ctnDeactiveClass: '',
        ctnErrorClass: '',
        trySearch: ''
    },
    methods: {
        toggle: function () {
            this.a1 = !this.a1;
        },
        onSearch: function () {
            console.log("prev " + this.$cookies.get("search"));
            console.log("hey " + this.trySearch);
            this.$cookies.set("search", this.trySearch, 10);
            if (this.trySearch == '車廂') {
                window.location.href = 'http://www.google.com';
            }
            this.trySearch = '';
        }
    }
});

Vue.$cookies.config('1d');

var showCall = false;
var options = {
    controls: true,
    width: 825,
    height: 464,
};
var player = videojs('vid1', options, function onPlayerReady() {
    videojs.log('Your player is ready!');

    // In this context, `this` is the player that was created by Video.js.
    this.play();

    // How about an event listener?
    this.on('ended', function () {
        videojs.log('Awww...over so soon?!');
    });
    this.on('timeupdate', function () {
        videojs.log(this.player_.currentTime());
        if (this.player_.currentTime() >= 10 && showCall == false) {
            videojs.log('show call');
            this.player_.pause();
            this.player_.hide();
            
            p2.player_.show();
            //p2.player_.requestFullScreen();
            p2.player_.play();
            showCall = true;
        }
    });
});

var opt2 = {
    controls: true,
    preload: 'auto'
}
var p2 = videojs('vid2', opt2, function onPlayerReady() {
    this.player_.hide();
    
    this.on('play',function(){
        
    });
});

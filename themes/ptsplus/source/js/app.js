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



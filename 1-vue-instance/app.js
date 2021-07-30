const app = Vue.createApp({
    data(){
        return {
            title : "Vue.js Bootcamp 1.gün",
            content : "Lorem ipsum dolor sit amet..." ,
            eduflow : {
                title: "Müfredat ve açıklamalar için tıklayınız",
                target : "_blank",
                url: "http://eduflow.kablosuzkedi.com",
                alt : "müfredat-kablosuzkedi-vue-bootcamp",
                owner : "pogacaa"
            },
            
        }
    }
}).mount("#app");
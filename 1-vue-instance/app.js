const app = Vue.createApp({
    data() {
      return {
        title: "Vue.js Bootcamp 1.gün",
        content: "Lorem ipsum dolor sit amet..",
        x: "0",
        y : "0",
        eduflow: {
          title: "Müfredat ve açıklamalar için tıklayınız",
          target: "_blank",
          url: "https://eduflow.kablosuzkedi.com",
          alt: "mufredat-kablosuzkedi-vue-bootcamp",
        },
        owner: "Pogaca",
        
      };
    },
    methods: {
      changeTitle(pTitle) {
        this.title = pTitle;
      },
      updateCoords(event){
         
          

          this.changeTitle(`${this.x = event.screenX},${this.y=event.screenY}`)
          
      }
    },
  }).mount("#app");
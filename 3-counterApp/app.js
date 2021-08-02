const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            counter2: 0
        }
    },
     methods : {
    //     inc(){
    //         this.counter = this.counter+1
    //     },
    //     des(){
    //         this.counter = this.counter-1

      //   }
      
     },
     computed: {
        getCounterResult(){
            console.log("Counter 1 Çalıştı")
            return this.counter > 5 ? 'Büyük' : 'Küçük'
        },
        getCounter2Result(){
          console.log("Counter 2 Çalıştı")
          return this.counter2 > 5 ? 'Büyük' : 'Küçük'
      }
     },
     watch : {
         counter(newValue, oldValue){
             console.log("Counter1",oldValue, " =>",newValue)
         },
         counter2(newValue, oldValue){
            console.log("Counter2",oldValue, " =>",newValue)
        },
        getCounterResult(newValue, oldValue){
            console.log("Result1",oldValue, " =>",newValue)
        },
        getCounter2Result(newValue, oldValue){
            console.log("Result2",oldValue, " =>",newValue)
        }
     }

}).mount('#app')
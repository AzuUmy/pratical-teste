<template>
   <div class="createIntem">
      <input type="text" v-model="name">
      <input type="text" v-model="description">
      <button @click="createItem">Criar item</button>
   </div>
    
</template>

<script>

import axios from 'axios';

export default {
   data(){
      return{
         name: "teste",
         description: "teste"
      }
   },


   methods: {
   async  createItem() {
         try {
            const response = await axios.post('http://localhost:3000/items', {
               name: this.name,
               description: this.description
            });
            console.log('Item created successfully', response.data);
         } catch(err) {
            console.error('Erro creating item', err);
         }
      }
   },

   mounted(){

   }

}
</script>


<style scoped>
.createIntem{
   display: flex;
   align-items: center;
}
</style>
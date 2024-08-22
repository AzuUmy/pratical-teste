<template>
   <button @click="createItem">Criar Item</button>
      <section>
         <div v-for="item in items" :key="item._id" class="item">
               <div v-if="!editItemId || editItemId !== item._id">
                  <h1>Item</h1>
                  <h1>{{  item.name }}</h1>
                  <h2>{{ item.description }}</h2>
                  <button @click="deleteItem(item._id)">Delete</button>
                  <button @click="editItem(item._id)">Editar</button>
               </div>
            
               <div v-if="editingItemId === item._id">
                  <input v-model="item.name" />
                  <input v-model="item.description" />
                  <button @click="saveItem(item._id)">Save</button>
                  <button @click="cancelEdit">Cancel</button>
               </div>
         </div>
      </section>
 </template>
 
 <script>
 import axios from 'axios';
 export default {

   data(){
      return {
         items: [],
         editingItemId: null
      }
   },

   methods: {
     createItem() {
       const router = this.$router;
       router.push('/create');
     },

     async getAllItems(){
         try{
            
            const response = await axios.get('http://localhost:3000/items');
            this.items = response.data;
         } catch (err) {
            console.log('Error fetching items', err);
         }
         
     },

      async deleteItem(id) {
         try {
            const response = await axios.delete(`http://localhost:3000/items/${Number(id)}`);
            if (response.status === 200) {
               this.items = this.items.filter(item => item._id !== id);
            } else {
                console.log('Failed to delete item', response);
            }
         } catch(err) {
            console.error("Erro deleting item", err)
         }
      },

      editItem(id) {
      this.editingItemId = id;
    },

    async saveItem(id) {
      try {
        const item = this.items.find(item => item._id === id);
        const response = await axios.put(`http://localhost:3000/items/${Number(id)}`, item);
        if (response.status === 200) {
          this.editingItemId = null; 
        } else {
          console.log('Failed to save item', response);
        }
      } catch (err) {
        console.error('Error saving item', err);
      }
    },

    cancelEdit() {
      this.editingItemId = null;
    },
   },

   mounted(){
      this.getAllItems();
   }
 }
 </script>


<style scoped>
.item{
   padding: 1em;
}

.item h1{
   font-size: 20px;
}

.item button {
   margin: 0 0.5em;
}
</style>
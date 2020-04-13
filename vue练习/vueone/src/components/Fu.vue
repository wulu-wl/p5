<template>
  <div>

    <!-- <ul v-for="(item,index) in student" :key="index">
      <li>name:{{item.name}}</li>
      <li>age:{{item.age}}</li>
    </ul> -->
    <div v-for="(item,index) in list" :key="index">{{item}}</div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      // student: [
      //   {
      //     name: "tom",
      //     age: 17
      //   },
      //   {
      //     name: "chris",
      //     age: 20
      //   }
      // ]
      list:[2,3,4,5]
      
    };
  },
  created:{
    
  }
};
</script>

<style  scoped>
</style>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>

        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
        </div>

        <button class="btn btn-primary" @click="saveUser">Kaydet</button>
        <button class="btn btn-success" @click="getUsers">Getir</button>
        <hr>
        
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList">
            <span>{{user.data.userName}}</span>
            <button class="btn btn-xs btn-danger" @click="deleteUser(user.key)">Sil</button>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      userName : null,  // v-modelle input a baglı
      userList : []     // boş bi dizi oluşturduk
    }
  },
  methods : {

    saveUser(){
      //alert(this.userName);

      this.$http.post("users.json", {userName : this.userName}) // input a girilen username i gönderdik
      .then((response) => {
        console.log(response);
      })

    },
    getUsers(){  //  verileri al
      this.$http.get("users.json")
      .then((response) => {
        
       // console.log(response.body);
       // console.log(response.data);

        let data = response.data;

        for(let key in data){
          console.log(data[key]);
          this.userList.push(
            {
              key : key,
              data : data[key]
            }
          );  
        }


      })
    },
    deleteUser(userKey){
      this.$http.delete("users/" + userKey + ".json")
      .then(response => {
        console.log(response);
      })
    }
  }
}
</script>

<style>
</style>

<template>
  <div class="content">
    <div class="image-person">
      <img src="images/logo.png" alt="logo.png" />
    </div>
    <form class="main" @submit.prevent="addContact">
      <h1 class="title">Contact Us</h1>
      <label>Full Name</label>
      <input type="text" v-model="contacto.fullname" />
      <label>E-mail</label>
      <input type="email" v-model="contacto.email" />
      <label>Message</label>
      <input type="text" v-model="contacto.message" />
      <button>Contact us</button>
    </form>
    <div class="all-contacts">
      <div class="contact">
        <h2>Contact</h2>
        <span>hi@feshion.com</span>
        <h2>Based in</h2>
        <span>Los Angeles, California</span>
      </div>
      <div class="emogi-contact">
        <img src="images/facebook.svg" alt="facebook.svg" />
        <img src="images/group.svg" alt="group.svg" />
        <img src="images/twitter.svg" alt="twitter.svg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";
import contacts from "./config/Contacts";

//const info = ref<string[]>[];
interface Contact {
  fullname: string;
  email: string;
  message: string;
}
let contacto = {
  id: +1,
  fullname: "",
  email: "",
  message: "",
};

function addContact(contacto: Contact) {
  contacts
    .salvar(contacto)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat;
}
.content {
  padding: 149px 118px 149px 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100vh;
  background-color: #f2ede6;
}
.image-person {
  img {
    width: 20rem;
    height: 30rem;
  }
}
label {
  color: #000;
  font-family: Montserrat;
  font-size: 20px;
  line-height: 120%; /* 38.4px */
}
.main {
  display: flex;
  flex-direction: column;
  padding: 0px 100px 110px 90px;
  width: auto 400px;
  height: auto 78px;
  font-family: Montserrat;
  gap: 8px;

  .title {
    color: #000;
    font-family: Playfair Display;
    margin: 20px 0px 40px 0;
    font-size: 60px;
    font-weight: 400;
    align-items: center;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    background-color: #f2ede6;
    font-size: 20px;
  }
  button {
    border-radius: 48px;
    color: white;
    background-color: black;
    padding: 12px;
    width: 12rem;
    margin-top: 24px;
  }
}
.all-contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding-bottom: 30px;
  span {
    margin-bottom: 50px;
  }
}
.emogi-contact {
  display: flex;
  align-items: center;
  img {
    height: 25px;
    padding-right: 20px;
    margin-left: 10px;
  }
}
</style>

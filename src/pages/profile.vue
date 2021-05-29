<template>
  <div
    class="bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
      height: 150vh;
    "
  >
    <div>
      <div class="container text-center" style="text-align: center">
        <h1 style="background-color: #F6D55C">Profile</h1>
        <img src="@/assets/me.jpg" height="400" /><br />
        <div style="background-color: #f2dac3">
          <p>Name : {{ name }}</p>
          <p>Nickname : {{ nickname }}</p>
          <p>Age : {{ age }}</p>
          <p>Hobby : {{ hobby }}</p>
          <p>Skills : {{ skill }}</p>
          <br />
        </div>
      </div>
    </div>

    <div class="container text-center" style="text-align: center">
      <center>
        <tr>
          <th>
            <p>Home</p>
            <button @click="goHome()">
              <img src="@/assets/home.png" height="45" width="45" />
            </button>
          </th>

          <h1>|</h1>

          <th>
            <p>Contact</p>
            <button @click="goContact()">
              <img src="@/assets/contact.png" height="45" width="45" />
            </button>
          </th>
        </tr>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Ponthakorn Ainphong",
    nickname: "Owan",
    age: "21",
    hobby: "Listen to music",
    skill: "SQL (Oracle SQL Developer) / HTML / CSS / bootstrap / PHP ",
  }),
  methods: {
    goContact() {
      this.$router.push("/contact");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2em;
  text-align: center;
}
p {
  font-size: 20px;
}
</style>
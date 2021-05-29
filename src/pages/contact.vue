<template>
  <div
    class="bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.jpg');
      height: 150vh;
    "
  >
    <div class="container text-center" style="text-align: center">
      <h1>Contact</h1>
      <img src="@/assets/logo4.png" height="45" width="45" />
      <p>Phone : {{ phone }}</p>
      <img src="@/assets/logo1.png" height="45" width="45" />
      <p>E-mail : {{ email }}</p>
      <img src="@/assets/logoig.png" height="45" width="45" />
      <p>Instagram : {{ instagram }}</p>
      <img src="@/assets/logo2.png" height="45" width="45" />
      <p>Facebook : {{ facebook }}</p>
      <br />

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
              <p>Profile</p>
              <button @click="goProfile()">
                <img src="@/assets/profile.png" height="45" width="45" />
              </button>
            </th>
          </tr>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "Ponthakorn-a@rmutp.ac.th",
    phone: "091-816-9667",
    instagram: "owanslothhaha",
    facebook: "Ponthakorn Owan",
  }),
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goProfile() {
      this.$router.push("/profile");
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
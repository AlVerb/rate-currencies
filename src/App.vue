<template>
  <div>
    <header class="header">
      <div class="header__inner">
        <router-link class="link" to="/">Конвертер</router-link>
        <router-link class="link" to="/rates-currencies">Курс валют</router-link>
      </div>
    </header>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>




<style>
body {
    margin: 0;
    font-family: 'Roboto', 'Arial', sans-serif;
    color: white;
    background-color: #242A38;
    font-size: 16px;
}

h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    height: 100%;
}

.title {
    font-weight: 300;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

/* HEADER */
.header {
    height: 50px;
    box-shadow: 0 0 15px #151920;
}

.header__inner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link {
    margin-right: 10px;
    text-decoration: none;
    color: #F78361;
    border: 1px solid #F78361;
    border-radius: 5px;
    padding: 5px 10px;
    transition: all .2s linear;
}

.link:last-child {
    margin-right: 0;
}

.link:hover {
    background-color: #F78361;
    color: #242A38;
}

</style>
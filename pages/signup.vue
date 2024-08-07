<template>
    <div class="container">
      <form @submit.prevent="contactForm">
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Введите ваш email"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Введите ваш пароль"
          />
          <!-- <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Повторите пароль"
          /> -->
        </div>
        <button class="notRegistr" type="submit">Зарегистрироваться!</button>
        <NuxtLink to="/signin" class="registr">Я уже зарегистрирован</NuxtLink>
      </form>
    </div>
  </template>
  

  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const email = ref('')
  const password = ref('')
  const router = useRouter()

  const contactForm = async () => {
    try {
      const res = await fetch('http://5.35.95.57:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email.value, password: password.value })
      })
      if (res.status === 200 || res.status === 201) {
        alert('Регистрация прошла успешно')
        router.push('/signin') 
      } else {
        alert('Ошибка при регистрации')
      }
    } catch (error) {
      console.error(error)
      alert('Ошибка при регистрации')
    }
  }
</script>
  
  <style scoped>
  
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    color: black;
  }
  
  div {
    margin-bottom: 1em;
  }
  
  label {
    display: block;
    margin-top: 10px;
  }
  
  input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    border: 3px solid #f3e5cc;
    border-radius: 10px;
  }
  
  .notRegistr {
    padding: 0.5em;
    background-color: #CFA55B;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .notRegistr:hover {
    background-color: #CFA55B;
  }

  .registr {
    margin: 30px;
    color: black;
  }

  .registr:hover {
    margin: 30px;
    color: #CFA55B;
  }
  </style>
  
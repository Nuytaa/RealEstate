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
      </div>
      <button type="submit">Войти</button>
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
    const res = await fetch('http://62.113.104.155:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    })
    if (res.status === 200 || res.status === 201) {
      const data = await res.json()
      localStorage.setItem('token', data.token)
      router.push('/profile') // Перенаправление на страницу профиля
    } else {
      alert('Неверный логин или пароль')
    }
  } catch (error) {
    console.error(error)
    alert('Ошибка при авторизации')
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
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  border: 3px solid #f3e5cc;
  border-radius: 10px;
}

button {
  padding: 0.5em;
  background-color: #CFA55B;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #CFA55B;
}
</style>

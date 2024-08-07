<template>
  <div v-if="user" style="color: black;">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <p>{{ user.about }}</p>
    <img :src="user.avatar" alt="Avatar" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'


definePageMeta({
  middleware: 'auth'
})

const user = ref(null)
const router = useRouter()

onMounted(async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    router.push('/signin')
  } else {
    try {
      const res = await fetch('http://5.35.95.57:3000/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      if (res.ok) {
        user.value = await res.json()
      } else {
        alert('Не удалось получить данные пользователя')
        localStorage.removeItem('token')
        router.push('/signin')
      }
    } catch (error) {
      console.error(error)
      alert('Ошибка при загрузке данных пользователя')
      localStorage.removeItem('token')
      router.push('/signin')
    }
  }
})

</script>
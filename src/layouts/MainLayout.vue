<template>
  <div class="container">
    <Header/>

    <router-view/>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/Index'
import Footer from '@/components/Footer/Index'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
}
</script>

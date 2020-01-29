<template>
  <div>
    <Search />
    <bilboard />
    <popular />
  </div>
</template>

<script>
// @ is an alias to /src
import Popular from '@/components/Popular'
import Bilboard from '@/components/Bilboard'
import Search from '@/components/Search'
export default {
  name: "home",
  components: {
    Popular,
    Bilboard,
    Search
  }
};
</script>
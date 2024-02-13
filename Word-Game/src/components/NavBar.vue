<script setup>
import { RouterLink} from 'vue-router';
</script>
<template>
  <header>
    <nav>
      <div>
        <ul>
          <li>
            <RouterLink to="/"> Dictionary </RouterLink>
          </li>
          <li>
            <RouterLink to="/Game"> The Game </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

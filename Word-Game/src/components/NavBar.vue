<script setup>
import { RouterLink} from 'vue-router';
</script>
<template>
  <header>
    <nav>
      <div>
        <ul>
          <li>
            <RouterLink to="/"> Definition </RouterLink>
          </li>
          <li>
            <RouterLink to="/Game"> The Game </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

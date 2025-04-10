<script lang="ts">
    import Event from '../components/Event.svelte';
    import type { PageServerData } from './$types';
  
    export let data: PageServerData;
  </script>
  
  <div class="home-page">
    <navbar class="navbar">
        <p class="nav-item">Calendar</p>
        <p class="nav-item">Programs</p>
        <p class="nav-item">About</p>
        <p class="nav-item">Get Tickets</p>
    </navbar>
  
    {#each data.events_list as event}
      <Event event={event}/>
    {/each}
  </div>
  
  <style>
    .navbar {
        display: flex;
        width: 100%;
        gap: 2rem;
        justify-content: end;
        padding: 1rem;
    }

    .nav-item {
        font-weight: 700;
        font-size: 18px;
        font-family: Rubik;
    }
    .home-page {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
    }
  </style>

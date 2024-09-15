<script>
  import CreateUser from './components/CreateUser.svelte';
  import CreatePoll from './components/CreatePoll.svelte';
  import VoteOnPoll from './components/VoteOnPoll.svelte';
  import DisplayPolls from './components/DisplayPolls.svelte';
  
  let currentPage = 'home';
</script>

<nav>
  <button on:click={() => currentPage = 'createUser'}>Create User</button>
  <button on:click={() => currentPage = 'createPoll'}>Create Poll</button>
  <button on:click={() => currentPage = 'vote'}>Vote on Poll</button>
  <button on:click={() => currentPage = 'displayPolls'}>Display Polls</button>
</nav>

<main>
  {#if currentPage === 'createUser'}
    <CreateUser />
  {/if}
  {#if currentPage === 'createPoll'}
    <CreatePoll />
  {/if}
  {#if currentPage === 'vote'}
    <VoteOnPoll />
  {/if}
  {#if currentPage === 'displayPolls'}
    <DisplayPolls />
  {/if}
</main>

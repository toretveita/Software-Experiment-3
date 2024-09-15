<script>
  let username = "";
  let email = "";

async function createUser() {
    const res = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email })
    });

    if (res.ok) {
      alert("User created!");
    } else {
      alert("Failed to create user");
    }
}

</script>

<div>
  <h2>Create User</h2>
  <input type="text" placeholder="Username" bind:value={username} />
  <input type="email" placeholder="Email" bind:value={email} />
  <button on:click={createUser}>Create User</button>
</div>

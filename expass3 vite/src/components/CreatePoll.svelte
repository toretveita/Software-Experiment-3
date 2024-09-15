<script>
  let question = "";
  let option1 = "";
  let option2 = "";

  async function createPoll() {
    const pollData = {
      question,
      voteOptions: [
        { caption: option1 },
        { caption: option2 }
      ]
    };

    const res = await fetch('http://localhost:8080/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pollData)
    });

    if (res.ok) {
      alert("Poll created!");
    } else {
      alert("Failed to create poll");
    }
  }
</script>

<div>
  <h2>Create Poll</h2>
  <input type="text" placeholder="Poll Question" bind:value={question} />
  <input type="text" placeholder="Option 1" bind:value={option1} />
  <input type="text" placeholder="Option 2" bind:value={option2} />
  <button on:click={createPoll}>Create Poll</button>
</div>

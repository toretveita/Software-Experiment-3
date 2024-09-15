<script>
    import { onMount } from 'svelte';

    let polls = [];
    let selectedPoll = null;
    let voteOptions = [];
    let selectedVoteOption = null;
    let userId = 1;

    onMount(async () => {
        const response = await fetch("http://localhost:8080/polls");
        if (response.ok) {
            polls = await response.json();
        }
    });

    async function fetchVoteOptions(pollId) {
        if (pollId) {
            const response = await fetch(`http://localhost:8080/polls/${pollId}/voteOptions`);
            if (response.ok) {
                voteOptions = await response.json();
            } else {
                console.error("Failed to fetch vote options:", response.statusText);
            }
        } else {
            voteOptions = [];
        }
    }

    async function vote() {
        try {
            const response = await fetch("http://localhost:8080/votes", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId,
                    pollId: selectedPoll.id,
                    voteOptionId: selectedVoteOption.id
                })
            });
            if (response.ok) {
                alert("Vote cast successfully");
            } else {
                console.error("Failed to cast vote:", response.statusText);
            }
        } catch (error) {
            console.error("Error casting vote:", error);
        }
    }
</script>

<label for="polls">Select a Poll:</label>
<select id="polls" bind:value={selectedPoll} on:change={() => fetchVoteOptions(selectedPoll.id)}>
    <option value="">Select a Poll</option>
    {#each polls as poll}
        <option value={poll.id}>{poll.question}</option>
    {/each}
</select>

<label for="vote-options">Select an Option:</label>
<select id="vote-options" bind:value={selectedVoteOption}>
    <option value="">Select an Option</option>
    {#each voteOptions as option}
        <option value={option.id}>{option.caption}</option>
    {/each}
</select>

<button on:click={vote}>Vote</button>

<script>
    let polls = [];

    async function fetchPolls() {
        try {
            const response = await fetch("http://localhost:8080/polls");
            if (response.ok) {
                polls = await response.json();
            } else {
                console.error(`Failed to fetch polls: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error fetching polls: ${error.message}`);
        }
    }

   
    fetchPolls();
</script>

<ul>
    {#each polls as poll}
        <li>{poll.question}</li>
    {/each}
</ul>

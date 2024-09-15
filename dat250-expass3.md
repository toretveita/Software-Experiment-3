## DAT250: Software Technology Experiment Assignment 3

# Step 1:

This went without issue, I followed the steps in the problem description. However I kept some of the code pre-generated from the starter code, just the css file for styling the page a bit.

# Step 2:

When creating the components, I decided to create 4 components:
- CreatePoll
- CreateUser
- DisplayPolls
- VoteOnPoll
I decided to use Svelte, as it was shown in the lectures and I dont really have experience with any other framework for this.

This should make it able to make requests on users, polls, votes and vote options. And it will also show the result of adding polls or voting directly in the SPA, without having to manually check the url of polls or votes. The components follow simple templates for creating interface components.

# Step 3:

This was done simply adding the @CrossOrigin annotation to the controller classes, this went without issue.

# Step 4:

When integreting the frontend and backend via fetch() I added the funtionality in the interface components to fetch the data from the correct url relative to the object it is sending a request.

This worked as intended for POST and GET on users, polls and voteOptions, however I couldnt get the voting to work properly. This seems to be a issue carried over from last weeks assignment, where I had issues with testing userVotesOnPoll() not passing. I have attempted to implement the function correctly in the frontend, but as it is now it doesnt correctly add votes on a poll.

# Step 5:

I simply followed the instructions of adding the static assets to the Spring Boot application. This resulted in accessing http://localhost:8080/ showing the SPA application I built, insted of having to go to http://localhost:5173/.

Step 6 is not completed.

- User stories
  - As a user, I want to be able to log into my Spotify account to join a group queue.
  - As a user, I want to be able to be able to enter a code to join a specific queue.
  - As a host, I want to create a group queue and display a code to join it.
  - As a host, I want to be able to delete songs from the queue.
  - As a user, I want to upvote a song so that it moves up in the queue as well as be able to remove the vote.
- What issues your team planned to address
  - Set up the Spotify SDK to be able to play music in the browser
  - Retrieve playlist information and complete authorization flow/user login
- Which ones were successfully completed
  - The Spotify SDK was initialized.
  - Retrieve playlist information
- Which ones didn't and why?
  - Although the Spotify SDK is initialized, it is not connected and set up to play music in browser. Also the user interface is extremely simple currently.
    We spent most of our time trying to set up the Spotify SDK to play music, which left the user interface bare. This issue was a little ambitious for the first
    sprint.
  -  we could not complete the user login because the redirected url displays a message saying the client_id parameter is missing, which may indicate a missing value somewhere. 

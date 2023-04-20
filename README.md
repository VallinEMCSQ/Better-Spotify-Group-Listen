# Groupify
By: Sammy Clark, Cameron Vallin, Michelle Vu, Teresa Vu
## Description
Groupify is a web application that plays music from a shared queue to which anyone can add songs using a displayed code. Spotify has a feature called Group Session that is similar to this one; however, it is available only on mobile or tablet and is limited in its uses. Groupify expands on this idea with other features, such as song upvoting, group minigames, and song approval.

The web application will be built to play music within the browser using the Spotify Web Playback SDK, a JavaScript library that allows for the creation of a Spotify Player. 

The group minigame will begin with a category being randomly generated. Then, each member of the group can add a song to the queue that fits within the chosen category. The queue will then play each song anonymously. By the end of the queue, members will vote on which song to eliminate, thereby eliminating the corresponding player, and reveal who queued each song. The next round will randomly generate a new category and the rounds will continue until there is one person left. 

The front-end of this project will be handled by Cameron Vallin and Teresa Vu, while the back-end will be handled by Michelle Vu and Sammy Clark.  

## Installation
To run this program, you need to have both GOLANG and Angular.

To download Angular, visit 
[here](https://code.visualstudio.com/docs/nodejs/angular-tutorial).

To download Golang, visit 
[here](https://go.dev/doc/install). 

-After following the steps to download Angular, cd to the client folder in a terminal and run the following command

`ng add @angular/material`

## Running



## Authentication

We use Spotify's own authetication and authorization methods that can be called upon using the Spotify API. The Authentication is done behind the scenes by simply logging into your own spotify account.

## Ideas: 
       Democratic song upvoting or Queue leader(Leader must approve queued songs) 
       Mini-Games: Guessing who queued a song, voting for worst song
       


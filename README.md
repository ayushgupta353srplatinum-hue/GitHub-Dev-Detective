# GitHub User Search App 

A modern GitHub User Search application built using HTML, CSS, and JavaScript.  
This project uses GitHub’s public REST API to fetch and display user profile details along with their top repositories.

# Features
Search any GitHub username
Display user profile details:
Avatar
Name
Bio
Join Date
GitHub Profile Link
Fetch and display Top 5 latest repositories
Clickable repository links (open in new tab)
Loading state while fetching data
Error handling for invalid usernames (404)
Modern, responsive UI design

# Tech Stack
HTML
CSS
JavaScript
Fetch API
GitHub REST API

# API Used
User Profile API  

# User Profile API 
https://api.github.com/users/%7Busername%7D

# User Repositories API  
https://api.github.com/users/%7Busername%7D/repos

# How It Works

1. User enters a GitHub username  
2. Application fetches user profile data from GitHub API  
3. From the profile response, repositories URL is extracted  
4. A second API call fetches repositories  
5. Top 5 repositories are displayed on the UI

# Live Demo
https://git-hub-dev-detective.vercel.app/

# Youtube Link 
https://youtu.be/UFYzq1OXguw?si=GOEEgqhL10NKJ95U

# Screenshots
![Home Screen](Week-3Screenshot.png)




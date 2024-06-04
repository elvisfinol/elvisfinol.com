#!/bin/zsh

# Prompt user to enter commit message
vared -p "Enter commit message: " -c message

# Display message indicating project is being built
printf "\e[33m\nBuilding project...\e[39m\n"

# Display message indicating pushing to repository
printf "\e[33m\nPushing to elvis.finol.github.io repository...\e[39m\n"

# Add all changes to git
git add .

# Commit changes with the entered message
git commit -m "$message"

# Push changes to the main branch of origin
git push origin main

# Display message indicating successful deployment
printf "\e[33m\nSuccessfully deployed!\e[39m\n"
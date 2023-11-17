#!/bin/bash
set +e  # Continue on errors

export NODE_ENV=development
if [ -f "yarn.lock" ]; then
   echo "Installing Yarn Dependencies"
   yarn
else 
   if [ -f "package.json" ]; then
      echo "Installing NPM Dependencies"
      npm install
   fi
fi

COLOR_BLUE="\033[0;94m"
COLOR_GREEN="\033[0;92m"
COLOR_RESET="\033[0m"

# Print useful output for user
echo -e "${COLOR_BLUE}
  _          _                                 _   _            
 | |        | |                               | | (_)           
 | | ___   _| |__   ___ _ __ _ __   __ _ _   _| |_ _  ___ ___   
 | |/ / | | | '_ \ / _ \ '__| '_ \ / _\` | | | | __| |/ __/ __|  
 |   <| |_| | |_) |  __/ |  | | | | (_| | |_| | |_| | (__\__ \_ 
 |_|\_\\\\__,_|_.__/ \___|_|  |_| |_|\__,_|\__,_|\__|_|\___|___(_)
${COLOR_RESET}"


echo -e "Welcome to the Kubernautics development container!

This is how you can work with it:
- Project files will be synchronized between your local machine and this container
- The kubernautics dashboard is exposed at http://localhost:3000
- Run \`${COLOR_GREEN}npm run dev${COLOR_RESET}\` to start the application
- To exit the container, run \`${COLOR_BLUE}exit${COLOR_RESET}\`
"

# Set terminal prompt
export PS1="\[${COLOR_BLUE}\]devspace\[${COLOR_RESET}\] ./\W \[${COLOR_BLUE}\]\\$\[${COLOR_RESET}\] "
if [ -z "$BASH" ]; then export PS1="$ "; fi

# Include project's bin/ folder in PATH
export PATH="./bin:$PATH"

# Open shell
bash --norc

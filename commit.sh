git status
git add --a
echo Enter your commit message
read message
git commit -m "$message"
echo Commited: $message

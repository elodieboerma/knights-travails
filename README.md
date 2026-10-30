This project calculates the shortest pathway (fewest number of moves) for a chess knight from its current position to any other position on a standard 8x8 chess board. There is no GUI; it was created with the graph of the chess board in mind. Each possible space is a vertex, and each connection between the knight's current spot and a possible destination is an edge.

    *1 (install it if images are referenced directly in HTML file) npm install --save-dev html-loader*
    *2 (once git push origin main has been run once):
        git branch gh-pages
        --don't forget to switch source branch to this in github pages*
    *3 (to run ESLint on any file or directory): npx eslint yourfile.js*
    *4 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"
    *5 (ensure everyone is using Pretter; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check
    *6 (run to automatically run tests upon file saves): npm run watch
    *7 (change file names in eslint.config.js to match test files)

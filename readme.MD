# readme for `bluetail-globals` package.

Everything in this folder is intended to be sharable across both FE and BE projects.

```
"dependencies": {
  "bluetail-globals": "github:Bluetail-aero/bluetail-globals#0.3.0"
}
```

As such, everything in this project is designed to be pure Javascript that could work in both BE and FE.

# Design/development guidelines:

1. Limit external dependencies.  What this means is that the code in here can only require('') packages deployed to NPM, or to some other file that is INSIDE of this package.

2. All modules in here should maintain a comment in the header (take a look at the existing files for the example)

3. INSTRUCTIONS TO MAINTAINERS: 
  1. BEFORE you make changes, please plan those will all other developers. Changes are hard to reverse. A good place to discuss would be #backends on Slack.
  2. Update the CHANGE HISTORY when you make changes.
  3. Do not introduce breaking changes.  You will need to maintain backward compatability for a while 
  4. Do not introduce bugs ;p 
  5. Notify everyone of changes made once they are committed to the repo.

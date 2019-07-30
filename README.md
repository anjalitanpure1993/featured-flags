# featured-flags
To handle our module with feature toggles in Angular applications.
This repo is implementation of feature flags to switch a feature on or off completely using 'ngx-feature-flags'.


# Why feature flags ?
 - To hide partly built features: If you are releasing into production every two weeks, but need to build a feature that's going to take three months to complete. Then you can use feature flags.
- When building large scale applications that deploy to a variety of environments with different audiences, we often need the ability to show/hide certain features in the UI, at that time we can use feature flags.

# Basic Idea
The basic idea is to have a configuration file that defines a bunch of toggles for various features you have pending. The running application then uses these toggles in order to decide whether or not to show the new feature.

# Development
This project uses Angular CLI as base. That means you just need to run npm start and access the link http://localhost:4200 in your browser

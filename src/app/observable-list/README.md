# Inspiration
This pattern was inspired by Cory Rylan's [Angular 2 Observable Data Services](https://coryrylan.com/blog/angular-2-observable-data-services)
article so be sure to check it out.

# Pattern Breakdown
While Cory's pattern is works pretty well I couldn't help think about times
I might want to have different list instances that update themselves.  

This is a pattern experiment to try and replicate the ability to have a list
update itself after transactions while still giving you the ability to keep
seperate lists.

# What I Like
The ability to create multiple lists that are able to emit to their specific
observables.

# What I Don't Like
In an implementation where this implements a service this will essentially 
sit between your service and the caller.
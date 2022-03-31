# React File Structure and CSS
 

 This app provides an example of React file structure, including the structure and use of plain CSS files.

 There are many acceptable and logical ways to structure a React app - this is just one method / technique.

 The most important aspect of file structure is consistency. If you find a preferred method, be sure to use that throughout your file structure.
 
 ## File Structure 
 
 ### Components and Pages
 
If you've worked with React in any capacity, you're likely familiar with the idea of "components". Components are what make React so powerful - they allow you to separate different portions of your webpage into reusable code files, which can be used across your website. Components help ensure DRY code (Don't Repeat Yourself) and make it easier to organize and separate different pieces of website functionality. 
 
However, you may not yet be familiar with the concept of "pages". Pages are still components, but they're components with a specific purpose - they serve as parent components for a specific page view. 

Let's imagine, for instance, that you have a "Home" page view that you've drawn up for your website. You've created all of your separate components you want to use on that Home page (top NavBar, SideBar, Main Display, etc.), but you don't currently have anywhere to put them yet.

That's where parent components - pages - come in. You may have already been creating these parent components alongside your other components and storing them in the same directory. This definitely works, but thinking of these parent components as "pages" - separate from individual website components - allows us to institute a new type of organization. Instead of keeping these parent components in our "components" folder, we'll store them in a separate, adjacent folder labelled "pages".

This also gives us a clear component hierarchy. App is imported into index, pages are imported into App, and components are imported into specific page views. React is all about modularity and separation of concerns - implementing pages as an organizational tool is a continuation of those core philosophies.

### Nested Folders

In general, you'll want to avoid excessive nesting of folders in your React app. Nesting things too deeply can make tracking down and importing files a pain. However, a certain amount of nesting can be really helpful for organizing. Just know that if you're nesting more than 



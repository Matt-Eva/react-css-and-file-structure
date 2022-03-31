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

In general, you'll want to avoid excessive nesting of folders in your React app. Nesting things too deeply can make tracking down and importing files a pain. However, a certain amount of nesting can be really helpful for organizing. Just know that if you're nesting more than 3 levels deep, you're probably starting to incorporate too much nesting.

It is helpful to implement nesting for specific pages and components within your "pages" and "components" folders. If you check out the file structure for this application, you'll see that "Home" and "About" both have their own folders within the "pages" folder. In each folder are the corresponding JS and CSS files.  

A similar strategy has been employed with components. However, you'll notice that the "Content" folder has more than one component file and more than one CSS file inside of it. We've grouped them together because our "ContentCard" component will be a child of our "ContentBox" component. It's often helpful to group similar components together in this manner. If you have a number of form components, for instance, it could be helpful to group them all within a folder called "Forms". The same could be true of different NavBar components, like the NavBar container component itself, User Profile components, or other navigational components that will appear in NavBar. There is not strict rule as to how you should group similar components - as before, consistency is the most important feature. 

Notice that parent components are not always worthy of being treated as "pages". ContentBox, for example, is a parent component to ContentCard (it serves as ContentCard's container), but it's still only meant to take up a portion of an overall page. The status of "page" is reserved for components that will serve as containers for an entire webpage.

### Including CSS Files

There are a few different convetions for including CSS files in your React application. In this example, I've placed CSS files alongside their respective components and pages in a combined folder. Another common convention is to place CSS files in a separate folder from components and pages - often called "styles" or "assets". Both are perfectly acceptable, and may be more suitable for certain types or sizes of applications. I prefer using this method, as I feel it's easier to quickly locate and edit CSS for a particular page or component.

## Using CSS in React

### CSS by component

When using plain CSS in React, the general convention is to create a separate CSS file for each component in your application, which you then import at the top of your component. This method helps maintain the modular design that makes React so useful, and allows you to neatly synchronize your styling structure to match your component structure. It makes it easier to reference and manipulate styles for a specific component, since the styles included in the corresponding CSS file are for that component only (no more scrolling through massive CSS files looking for the right selector for that one specific <h1> tag).

### Specificity and Hierarchy
 
 

# React File Structure and CSS
 

This app provides an example of React file structure, including the structure and use of plain CSS files. This app employs the BEM technique for classnames.

There are many acceptable and logical ways to structure a React app - this is just one method / technique.

The most important aspect of file structure is consistency. If you find a preferred method, be sure to use that throughout your file structure.

I'd recommend forking, cloning, and opening this app while reading through the README. You can reference the code in our files as examples of the concepts discussed in this README.
 
 ## File Structure 
 
 ### Components and Pages
 
If you've worked with React in any capacity, you're likely familiar with the idea of "components". Components are what make React so powerful - they allow you to separate different portions of your webpage into reusable code files, which can be used across your website. Components help ensure DRY code (Don't Repeat Yourself) and make it easier to organize and separate different pieces of website functionality. 
 
However, you may not yet be familiar with the concept of "pages". Pages are still components, but they're components with a specific purpose - they serve as parent components for a specific page view. 

Let's imagine, for instance, that you have a "Home" page view that you've drawn up for your website. You've created all of your separate components you want to use on that Home page (top NavBar, SideBar, Main Display, etc.), but you don't currently have anywhere to put them yet.

That's where parent components - pages - come in. You may have already been creating these parent components alongside your other components and storing them in the same directory. This definitely works, but thinking of and organizing these parent components as "pages" - separate from individual website components - allows us to institute a new type of organization. Instead of keeping these parent components in our "components" folder, we'll store them in a separate, adjacent folder labelled "pages".

This also gives us a clear component hierarchy. App is imported into index, pages are imported into App, and components are imported into specific page views. React is all about modularity and separation of concerns - implementing pages as an organizational tool is a continuation of those core philosophies.

This may seem like a minor change, but its merit becomes more and more apparent when your apps start to scale. Remember, the human side of programming - legibility, organizational clarity, ease of use, scalability - is just as important as writing functional code.

### Nested Folders

In general, you'll want to avoid excessive nesting of folders in your React app. Nesting things too deeply can make tracking down and importing files a pain. However, a certain amount of nesting can be really helpful for organizing. Just know that if you're nesting more than 3 levels below your `src` folder, you're probably starting to incorporate too much nesting.

It is helpful to implement nesting for specific pages and components within your "pages" and "components" folders. If you check out the file structure for this application, you'll see that "Home" and "About" both have their own folders within the "pages" folder. In each folder are the corresponding JS and CSS files.  

A similar strategy has been employed with components. However, you'll notice that the "Content" folder has more than one component file and more than one CSS file inside of it. We've grouped them together because our "ContentCard" component will be a child of our "ContentBox" component. It's often helpful to group similar components together in this manner. If you have a number of form components, for instance, it could be helpful to group them all within a folder called "Forms". The same could be true of different NavBar components, like the NavBar container component itself, User Profile components, or other navigational components that will appear in NavBar. You can also create a unique folder for each component, its corresponding CSS file, and any other related files, which will generate more folders but may make it easier to locate the correct folder for a specific component. There is no single rule regarding how you should group similar components - as before, consistency is the most important feature. 

Note: notice that parent components are not always worthy of being treated as "pages". ContentBox, for example, is a parent component to ContentCard (it serves as ContentCard's container), but it's still only meant to take up a portion of an overall page. The status of "page" is reserved for components that will serve as containers for an entire webpage view.

### Including CSS Files

There are a few different convetions for including CSS files in your React application. In this example, I've placed CSS files alongside their respective components and pages in a combined folder. Another common convention is to place CSS files in a separate folder from components and pages - often called "styles" or "assets". Both are perfectly acceptable, and may be more suitable for certain types or sizes of applications. I prefer using the method demonstrated in this example, as I feel it's easier to quickly locate and edit CSS for a particular page or component.

## Using CSS in React

### CSS by component

When using plain CSS in React, the general convention is to create a separate CSS file for each component in your application, which you then import at the top of your component. This method helps maintain the modular design that makes React so useful, and allows you to neatly synchronize your styling structure to match your component structure. It also makes it easier to reference and manipulate styles for a specific component, since the styles included in the corresponding CSS file are for that component only (no more scrolling through massive CSS files looking for the right selector for that one specific h1 tag).

### Specificity and Hierarchy
 
The rules of CSS specificity and hierarchy still apply. That means that the styles of parent compenents will have a role in determining the styles of child components. This is great news, especially if you're trying to implement a grid or flexbox in a parent component to to control the layout of child components, but it does mean you're going to need to keep track of styling effects across multiple files. This is really not so bad, especially when the alternative involves endless back and forth scrolling, but it's something to keep in mind if you're getting weird behavior when adjusting the styles for a specific component (maybe its parent element has specific styles that you've forgotten about).
 
 ### CSS Modules

As developers, we typically like to style things using class names. That way, if we need to extend a set of styles to multiple components, we can easily just include the class name we want to use. They're more flexible than IDs, but can still be used to style just a single element if need be.

The problem is, we'll be working in a lot of CSS files in a React application (or a lot of CSS at the very least). What if we accidentally use the same classname twice in our application?

This is where CSS Module files come in. Instead of just name a file with the regular `.css` extension, we'll create a file using the `module.css` extension: `my-file.module.css`. You can include this file adjacent to your component file, as we discussed earlier. That will automatically make any classes within that file unique throughout your application. 

The main difference is how we access these files. Instead of just writing `import './myStyles.css'` at the top of our component, we'll run `import styles from './myStyles.css'`.

Then, when we want to assign a className, we'll use `styles.className` notation:

```jsx
<p style={styles.myClass}
```

And Voila! Unique classnames for every CSS file!
 
 ## Mini-Assignment
 
 We're going to be creating an About page for our website. The routes are all currently set up, and the About page can be accessed using the "about" link in the NavBar. Your job is to build out the About page and all of its necessary components! Your final product should look similar to this:
 
 When screen size is below 700px (user should be able to scroll through values while still seeing the header and mission statement): 
 
 <img width="499" alt="Screen Shot 2022-04-11 at 11 48 51 AM" src="https://user-images.githubusercontent.com/89106805/162809138-acdc1cc2-cb48-4d35-8d4c-badc8a8290fc.png">

 When screen size is above 700px (user should be able to scroll through values while still seeing the header and mission statement):
 
 <img width="1146" alt="Screen Shot 2022-04-11 at 11 49 32 AM" src="https://user-images.githubusercontent.com/89106805/162809207-2c014ef5-0734-4751-bf8d-a46e8f7602e7.png">

 ### Deliverables
 
We'll be using the values and mission from our "assets" folder - they're already being exported, so you'll just need to import them into the right components.
 
This assignment doesn't require use of state or props, although you will have to set up, design, and implement your own components. You can follow these steps to give your process a little more structure:
 
 <ol>
   <li> We'll be creating a new page view. What should we call the parent component for our new page view? Where should we put it within our file structure?
  </li>
  <li> Now that we've created our most parent component, let's think about what other components we need to make / include.
    <ul>
     <li>We'll be including our Header in our new page view.</li>
     <li>We need to display our mission statement.</li>
     <li>We need to create cards displaying each of our company values along with their corresponding images and descriptions. We'll want to be able to scroll through these cards while our mission statement and our header remain static on our page.</li>
     <li>(Hint: I made three new components to handle these different needs)</li>
     <li>Once we've created these components, we'll need to make sure we're including them in our new page view.</li>
    </ul>
  </li>
  <li>Great! We want viewers to be able to visit this page when they visit the /about route in our application. Let's look at our App component - what code do we need to comment back in? What do we need to add to our App component?</li>
  <li>Now it's time to give our new page view some styling attributes. What styles should we give our parent component?
   <ul>
    <li>What type of file will we need to create to set styles for our page? What do we need to do to make sure those styles actually apply to our page? How should we select our different JSX elements in order to apply styles to them? (Hint: remember BEM.)</li>
    <li>Our page is going to need some structure. What CSS styling attribute will it need to give its display a good structure?</li>
   </ul>
  </li>
  <li>Now that we've given our page a basic structure, we need to make sure our different components fit into their appropriate spot inside of our page structure. How will we tell them to do that?
  </li>
  <li>Now that you've given everything its appropriate place on the page, it's time to start styling our specific components. Let's take a look at our Mission Statement.
   <ul>
   <li>We'll want our Mission Statement to have a distinct background color.</li>
   <li>We'll need to create an element to display the text of our mission statement. We want that element to be centered vertically and horizontally within our component.</li>
    <li>We also want to make sure the text is centered within the element we're using to display our mission statement.</li>
   </ul>
  </li>
  <li>Now let's move onto our component we're using to hold our cards.
   <ul>
    <li>We want our cards to display one after another, vertically. What display attribute can we give our container to ensure this happens?</li>
    <li>We also want to make sure our cards are centered horizontally on our screen. What styling attribute can we use to ensure that they stay centered?</li>
    <li>We don't want our cards to overflow our container - instead, we want to scroll down within our contain to view unseen cards. What styling attribute can we use to ensure that happens?</li>
   </ul>
  </li>
  <li>Finally, it's time to style our cards. Let start by designing for the small view (remember: Mobile First).
   <ul>
    <li>We want our card to be 90% of the width of the viewport.</li>
    <li>We want different JSX elements to stack on top of each other. We also want our card to be able to flex in order to accomodate for longer or shorter value statements. What styling attributes can we give our card to help ensure both of these happen?</li>
    <li>We want each card to have a border.</li>
    <li>We want each card to have a padding of 10 pixels, and to be separated vertically from other cards by 10 pixels.</li>
    <li>We want each image to be 200px tall and as wide as the card itself (not including padding).</li>
     <li>We also want to make sure our images are cropped instead of distorted. We can do this using the "object-fit" property and setting it to "cover".</li>
    <li>Finally, we want to give our images a border that is only 1 pixel wide</li>
   </ul>
  </li>
  <li>Now that we've set our default small screen styles, we want to start working on styles for our big screen (over 700px)
   <ul>
    <li>What are we going to need to wrap these new styles inside of?</li>
    <li>We now want our picture to sit next to our value title and our value description, which stack on top of each other. What kind of display attribute would make this type of thing easy to do?</li>
    <li>We'll probably need to give our image, title, and description new style directions to tell them what part of the layout they belong to.</li>
    <li>We want our cards to not exceed more than 1000px (in case they're appearing on really large screens).</li>
    <li>We want our images to be 200px tall and be 100% the width of they're portion of the card.</li>
   </ul>
  </li>
  </li>
 </ol>
 
 If you've managed to get through all of these deliverables, your app should be looking very similar to the photos above. Feel free to continue to play around with it and make it look better!

 ### Extra Bonus
 
 There's some code commented out in the original components of this application. Uncommenting them will get the sidebar toggle (visible on small screens) and the "toggle modal" button working. However, our About section we just created will need new code as well. Can you get it working?

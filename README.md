# Hayley Taylor - Project Two
### GA SEI FLEX - Git This Bread
***
## Shopping List App
### Link to Heroku: (Heroku Hayley Taylor - Project Two] (https://hayley-shopping-list.herokuapp.com/)
### Link to GitHub: [GitHub Hayley Taylor - Project Two] (https://github.com/hayleytaylor29/Project2-Copy)
##### HTML, CSS, JavaScript, NodeJS, EJS, Express, Mongo and Mongoose
***
The perfect app for creating, editing, viewing and deleting shopping lists! <br>
Have you ever been out shopping and forgotten the one important thing you were supposed to get? Are all your lists in different places, creating a disorganized mess?

If so, this is definitely the app for you!

### Step 1:
* Choose the store for which you want to make your list.

### Step 2:
* Input all of your list information and click "Create List".

### Step 3:
* View your lists details by clicking on the list's name under "Saved Lists".

### Step 4:
* Click "Edit" under the list you would like to update, and make your necessary changes. Click "Update List" to save your changes and be redirected back to the home page.

### Step 5:
* Click "Delete" to remove the list from your "Saved Lists".

### Strategies Used
1. After deciding how I wanted the user to experience my app and what I wanted it to look like, I set up my folder structure and installed all the necessary dependencies (ejs, express, mongo, mongoose, method-override and dotenv).
2. Next I wanted to make sure my database and schema was set up and connected correctly so that my foundation was set before I started to build my routes. Then I set up my controllers and other necessary middleware.
3. After my database was connected correctly through mongo and had my port set up, I started to build each of the 7 routes (index, new, create, show, edit, update and destroy). I created 2 lists as my seed data, which show on the index page upon loading. These two routes use the "get" method.
4. I created a form for each of the stores that I wanted to offer and after the user inputs their list data and clicks "create list", they will be redirected back to the index page.  Their new list will be added to the list of "saved lists" at the bottom of the page. This form and the create route use the "post" method.
5. When the user clicks on the name of one of their saved lists, they are taken to the lists show page, and can see all the details of what they have input. This route uses the "get" method.
6. If the user clicks "edit", they are taken to another form where their input is already pre-loaded into the form, there they can edit whatever information they'd like. When they click "update list", they will be redirected back to the index page and their list will now be updated with the new information. This route uses the "put" method.
7. When the user clicks delete, that list will be deleted from the page and database and the page will be refreshed, no longer showing it on the index page. This route uses the "delete" method.
8. After I had all of my functionality working properly, I created a separate CSS file that holds all the my apps CSS, and linked all of my pages to that file.
9. Lastly, I deployed my app to Heroku through my GitHub account and adjusted my server file to be able to run on either my local server or Heroku.

***
### Project Two Challenges & Stretch Goals:
#### * This project definitely presented a lot of challenges. One of the biggest challenges I faced was getting my routes to work correctly without any errors in my terminal. The most frustrating part about one of the errors I was getting frequently, was that my page still worked and loaded correctly. I ran into the same issue several times, and in trying to debug my code, I've definitely learned a lot about how I should tackle problems and the best ways to prevent them from happening again.
#### * I also really struggled with getting my application to deploy to Heroku. After spending hours on trying to debug and do research, it ended up being a small change that needed to be made in my server file. This taught me to always go back to the beginning and take things slow, to look over every single line before making any other big changes that may not be necessary. No need to rush through, when doing so can actually cost you a lot more time than it should.
#### * The last challange I faced was CSS. In the past, I always really enjoyed the visual aspect of code. On this project, however, I felt very frustrated in trying to display my content the way I had envisioned. The most trouble I had was with the background image, as I had originally wanted it to be blurred out, without saving the photo and blurring it through a photo editor and hard coding it in. I thought that aesthetically that would be more pleasing to the eye and would make the text more legible, however, I found this to be more difficult than iniitally expected.
#### * For a stretch goal, I would love to be able to spend more time doing research on CSS and trying to get my image filters working correctly. I also had initially had a store option for "other". In the very beginning, I was getting a lot of errors for my "other" option, that I could not debug. I had all my files identical and it still was not working. I tried removing the "other" option and then everything worked perfectly. If given more time, I would like to be able to add that feature back into my app, so the user is not restricted to just using one of the three stores listed. For an extreme stretch, I thought about using authentication to allow different users to sign in and view their own lists, which would only be accessible to the user when they are logged in. I felt like this feature would not be as practical or useful in a real-life scenario, so I decided to put more focus onto polishing my project and making it as complete as I could.


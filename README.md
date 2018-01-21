# vue-appetizer
Just for personal workout.

## Vue Essential Note
- The v-if directive accomplishes conditional rendering.

- The v-for directive creates dynamic lists.

- V-on allows interactivity by binding instance methods to the click handler of elements.

- Components in Vue encapsulate HTML with Vue interactivity and create reusable code.

- V-models map data to pieces of HTML to allow two-way data binding.

- Computed properties use complex logic to return modified pieces of data.

- Lifecycle hooks like created, mounted, and updated allow vue instances to run specific code throughout its lifespan.

- Props is an array. Data can pass down to the child components.

[Reference from Vue JS 2.0 - Mastering Web Apps by 
David Katz in Udemy]

## Tools
#### vue-cli (Module System)
- A simple CLI(Command Line Interface) for scaffolding Vue.js projects. Creating Vue project quickly.
- Install
``` bash
$ npm install vue-cli -g
```
- Usage
``` bash
$ vue init <template-name> <project-name>
$ vue init webpack-simple <project-name>
$ vue init webpack my-project
```
- Run webpack web server. 
``` bash
$ npm run dev
```
- Install vue-router
-- save flag will update our package.json. 
``` bash
$ npm install vue-router -- save
```

## vue-router
``` js
    //main.js
    // 0. Import VueRouter and call Vue.use
    Vue.use(VueRouter)

    // 1. Define routes
    // Each route map to one componment
    // Pattern : /data/:type => /data/food, /data/beverage
            //  /data/:type/post/:post_id => /data/food/post/123
    const routes =[
        {path:'/data/:type', componment:Data}
    ]

    // 2. Create the router instance and pass the routes that you have defined
    const router = new VueRouter({
        routes
    })

    // 3. Inside the componement.
    // Use this.$router/this.$route to injecting router
    this.$route.params.type
```
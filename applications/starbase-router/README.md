# starbase-router

> A Vue.js project

## vue-router (Example app : starbase-router)
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

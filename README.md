# Note about project

At current state, project may seem too complicated and too spread out for it small and very simple functionalities, but it was prepared for future expansions and adding more functionalities. The "base" of this project was settled, and adding more features should be much easier.

## Posible imporvements

-   Adding thunk to `articlesSlice.ts` for featchnig articles. Ommiting that solution was big mistake, and this should be done at the beggining. Thats might give global request status ('loading', 'idle', 'finished' and 'error'), thats might affect on other components, eg. showing "skeletons" of articles when loading.
-   Unit and integration tests for components, and end-to-end test (eg. with Cypress) for whole app.
-   All filters should be featched from another api endpoint, and generated automaticly.

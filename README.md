Redux Recipes
===============
The recipe app constructed with Redux.

Exercises To Cover
------------------

### 1 - State

* read docs
* Application State Object
    * Show Multiple items in one object
    * Show UI state (selected or collapsed), editing, something

* State Data Tricks


### 2 - Actions

* read docs
* Example Action for Submitting Form
* Example Action for Uploading an Image

### 3 - Reducers

* read docs
* Example : Ingredient Reducer
    * NEW_INGREDIENT
    * PURCHASE_INGREDIENT
    * PREP_INGREDIENT
* Example : Test Ingredient Reducer
* Example : Ingredients
    * ADD_INGREDIENT
    * EDIT_INGREDIENT
    * REMOVE_INGREDIENT
* Example : Recipes
    * SELECT_RECIPE
    * EXPAND_RECIPE
* Example : Shop
    * SELECT_RECIPES (initial)
    * SHOP
    * PURCHASE_INGREDIENT
* Example : Combine Reducers
    * Ingredients
    * Recipes
    * Shopping
    
### 4 - The Store

* read docs
* Example : Recipes Store
    * Create Store
    * Listen To Store
    * Dispatch Action
    * Add initial data to store    
    
### 5 - React-Redux

* read docs
* Example : Passing Store Down Component Tree
* Example : Containers
    * Separate Container and UI
    * Include Context Types in Container
* Example : Connect
    * Take Previous Component and Connect it
    
### 5 - Middleware

* read docs
* Example : Simple Logger
    * Create and Add logger middleware
    
### 6 - Action Creators
   
* read docs
* Example : Upgrade to Action Creator
    * Define Action Creator
    * Dispatch Action Creator
* Example : Extracting away Logic
    * Unique ID's
    * Default Values
* Example : Additional Logic
    * Save and Load from Webstorage
* Example : Synch Data with redux-thunk
    * Load data from backend
    * Sync PUT requests wiht Rest
    * Apply Redux-Thunk middleware
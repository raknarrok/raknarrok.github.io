'use strict'

// Shopping Cart Variable
const shoppingCart = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : []
const checkOut = sessionStorage.getItem('checkOut') ? JSON.parse(sessionStorage.getItem('checkOut')) : []
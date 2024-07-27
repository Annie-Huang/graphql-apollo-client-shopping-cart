// Reactive Var

import { makeVar, InMemoryCache } from '@apollo/client';

export const cartItemsVar = makeVar([]);

// cartItemsVar(); // Return the current value of the cart
// cartItemsVar([item1, item2, item3]); // Set the cartItemsVar to the array we gave

export const CustomInMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar;
          },
        },
      },
    },
  },
});

/*// we will ask the cartItems value to be replaced by what's in our client and so this is what it means by fields as we are in the
// query and what fields the query do we need to kind of have a value well we want cart items to have a value.
query {
  cartItems @client
}*/

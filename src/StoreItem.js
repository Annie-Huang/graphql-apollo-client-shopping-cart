import { cartItemsVar } from './cache';
import { useReactiveVar } from '@apollo/client';
import { Button, GridItem, Text } from '@chakra-ui/react';

function StoreItem({ item }) {
  console.log(item);

  const CartItems = useReactiveVar(cartItemsVar);
  const id = item.id;
  // if the item was IN the cart, show 'Remove from cart"
  // if the items was NOT IN the cart, show "Add to cart"
  let isInCart = CartItems.some((item) => item.id === id); // Check if an item in the cart matches our item

  return (
    <GridItem bg='blue.700' p='4'>
      <Text>{item.name}</Text>
      <Text fontSize='xs'>{item.description}</Text>
      <Text fontSize='xs'>Price: ${item.price}.00</Text>
      <Button
        onClick={() =>
          cartItemsVar(
            isInCart
              ? CartItems.filter((item) => item.id !== id)
              : [...CartItems, item]
          )
        }
        size='xs'
        textColor='black'
      >
        {isInCart ? 'Remove from cart' : 'Add to cart'}
      </Button>
    </GridItem>
  );
}

export default StoreItem;

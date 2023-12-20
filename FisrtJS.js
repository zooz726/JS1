const Books = [
    [1, 'You dont know JS' , 'Kyle Simpson', 39.9, 9 ],
    [2,'Clean Code', 'Robert Cecil Martin', 50.0, 5  ],
    [3,'But how do it know', 'J. Clark Scott', 59.9, 22 ],
    [4, 'Start with why', 'Simon Sinek', 80.0, 13],
    [5, 'Zero to One', 'Peter Thiel', 45.0, 12]  ];
  
  function AddBook(bookId, title, author, price, quantity) {
    Books.push([bookId, title, author, price, quantity]);
    console.log(`Book added successfully: ${title}`);
  }
  
  function BookQuery(id, title, author) {
    const result = [];
    Books.forEach(book => {
      if ((id && book[0] === id) || (title && book[1] === title) || (author && book[2] === author)) {
        result.push(book);
      }
    });
  
    return result;
  }
  
  function SellBook(title, quantity, balance) {
    const Book = BookQuery(null, title, null)[0];
  
    if (Book) {
      const bookId = Book[0];
      const bookPrice = Book[3];
      const availableQuantity = Book[4];
  
      if (availableQuantity >= quantity) {
        const totalPrice = bookPrice * quantity;
        if (balance >= totalPrice) {
          Book[4] -= quantity;
          balance -= totalPrice;
  
          console.log(`Invoice for Book: ${title}`);
          console.log(`Book ID: ${bookId}`);
          console.log(`Quantity: ${quantity}`);
          console.log(`Total Price: ${totalPrice}`);
          console.log(`Remaining Balance: ${balance}`);
        } else {
          console.log('There is no balance enough to buy the item.');
        }
      } else {
        console.log('The requared quantity is not available.');
      }
    } else {
      console.log('The required book is not available.');
    }
  }
  
 
  AddBook(6, 'White Book', 'Khaled Omar', 87.0, 7);
  console.log(BookQuery(6, null, null));
  SellBook('Zero to One', 12, 50);
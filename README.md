# Lab 5 - Starter
Sean Ting

Benjamin Nhan

[expose.html](https://sjting8.github.io/Lab5_Starter/expose.html)
[explore.html](https://sjting8.github.io/Lab5_Starter/explore.html)

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

  No, unit tests can only test individual parts of the code and are used to debug on a small scale. Testing the "message" feature would be beyond the scope of a unit test since it would involve how multiple components interact with each other (sending, receiving, etc.).
  
2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

  Yes, the "max message length" feature can be tested with a unit test since unit tests are meant for debugging individual components on a small scale. We could write a unit test to return true if the "max message length" was acceptable and false if it was exceeded.

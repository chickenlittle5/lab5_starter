# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Ethan Tran

https://chickenlittle5.github.io/Lab5_Starter/

1. I would not use only a unit test to test the full "message" feature of a messaging application because sending a message has many steps that work together in tandem. For example, the text input, send button, database, and the users receiving the message. The unit test could test one feature or a small part of a feature but not the full message feature because that would be tested with an integration or end-to-end test.

2. I would use a unit test to test the "max message length" feature. This is a small, specific rule that states, "the message should not be longer than 80 characters". A unit test is good for checking that the function or input validation correctly accepts messages with 80 or fewer characters and rejects or blocks messages over 80 characters.
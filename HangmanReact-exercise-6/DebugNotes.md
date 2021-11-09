# Debug notes Martin de Bes

1. Testing the bug indeed revealed that once you have guessed a letter and you guess that number again, it will deduct a number of attempts. This should not be the case.
2. Let's dig into the code and find out where the deducting is taking place.
3. It is in de geussedLetterHandler. The letter should be tested wehter it should be included or not.
4. wrote an extra test on that and included the test in the if statement where the setState is done.
5. DONE.

1. create funcion called getComputerChoice which will return either Rock, Paper or Scissors.(check if it returns ecpected values)

2. create a funcion playRound that will play single round, should have 2 parameters playerSelection and computerSelection - then return a string that declares a winner with "You lose! x beats y

3. Make player selection case-insensitive

4. Return the results of the funcion not console.log it

5. Write a new funcion called game() call the playRound inside of this to play a 5 round game

6. keep score and report a winner or loser at the end.

7. now to diplay results you can use console.log

-------------------------------------------------------------------------------------------------
ADDING UI

1. replace the alert prompt with button selection.
2. connect playround()result to the result text(use text.content)
3. figure out how to make placeholder for playground icons, and how to replace them on condition(each element has 2 jpg states: won, lost), make lost state for both if draw.
4. after each lost round delete <li> heart content from lost side // NOT ON A DRAW
5. Play around with animations:
- make result text resize after each round.
- display first 'VS' and then instantiate growing chosen warrior
- Best if after one side losing last heart display pop-up with final result, reset button(this is more about polishing stuff)
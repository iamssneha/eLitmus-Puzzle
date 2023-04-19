# eLitmus-Puzzle-Application-Assignment

### Tech Stack Used
1. Python
2. Flask
3. Flask-Login
4. SQLAlchemy

### Hosted On - https://elitmus-puzzle.onrender.com/
<hr>

## The Treasure Hunt Game:-

The town of Silverwood was known for its quiet streets and peaceful atmosphere, but all that changed when an old man named John Mathews arrived in town. John was a reclusive figure who rarely ventured out of his small cabin in the woods. He was rumored to have spent his entire life exploring the world and uncovering hidden treasures. John had a wooden box in which he kept all his lifetime earnings and treasure.

One day, when he was walking through the woods, two mysterious men came out of nowhere. They stabbed him revealing themselves to be a part of underground org that were after John's treasure. John was badly injured but managed to beat the men and run from the point towards the town.

You happened to be walking by the road when John appeared in front of you. He tells you about his lifelong treasure location. He hands you a box and gave you a location stating you would find a map on the point - a map that will lead you on a wild adventure : through the forest across the town, as they piece together a series of cryptic clues that led you closer to the treasure.

But, to find that treasure box is not so easy , you have to encounter strange puzzles and riddles that test your wits and ingenuity to reach to the final treasure. So, are you ready to test your presence of mind with a sharp analytical approach at different levels to solve the puzzle and find the epic treasure at the end of the game !!!!

## Level wise Logic

### Level 1- Crack the Lock
#### Skills assessed  : Curiosity and Attention to detail 

**Prompt**
You decide to follow John's advice and go to the loaction he mentioned. As you reach the place you find yourself in front of a large gate. There is a lock on the gate that asks you for the entry pass key
You decide to open up the box. Inside you find two items
1. A picture of key with some text below it
2. A envelope with Open for Answer written on it

You open up the envelope and find Look Below the Key written on a paper inside the envelope
You are now wondering what will be the key to this lock. Determine the code to unlock the gate

**Hints**: 

- Hint 1 : Read the note 
- Hint 2 : The note is the answer 

**Solution** : Type "Look Below the Key" (Without Quotes)

**How soft sklls is measured**

- The user curiosity and eye to detail is measured on the basis if he/she can identify the required code by correctlt interpreting the words

### Level 2 - Cryptic Code
##### Skills asseses : Curiosity, Eye to detail, Problem Solving
**Prompt**

You successfully open the gate and entered the place. It is a long hallway with a lots of doors. You try to open a door but its locked. You start exploring the hallway.
You observe that a door is unlocked and inside lies a computer. As you sit on the chair, you are presented with the webpage as below.

Figure out the code to get a step closer to the treasure


**Hint** : 
- Code lies in the code

**Dead-End** ; The user cannot figure out to inspect the code

**Solution** :  
1. Inspect the code
2. Expand all the code under the body tag
3. The answer is present in a comment

**How soft sklls is measured**

The user curiosity and eye to detail is measured on the basis if he/she can identify the required code by correctlt interpreting the words
It also measures problem solving as user must open up the html code to get the correct code

#### Level 3 -The Old Man's Color Puzzle
##### Skills assesses  : Concentration, Focus, Reaction Time, Quick Thinking

**Prompt**: 

You found the code and entered it in the system. The systems does a variety of automated tasks and boots up. It then opens up a puzzle for you.
Solve the puzzle to proceed to the next level
Guess the Color
What color is the text?
10 attempts. Score 6 or the map is lost forever

**Hint** : 
- Type the color ot the text, not the text

**Dead-End**: The user cannot solve the game

**Solution**: 
Correct color of solution is entered 5 times

**How soft sklls is measured**

It is measured by how much quick the user can put out the answer and also how accurate his concentration is. Brain will process the word not the color and thus it helps to understand concentration


#### Level 4 -Unlocking the Gate Again!
##### Skills assesses  : Concentration, Focus, Reaction Time, Quick Thinking

**Prompt**

You completed the puzzle and the computer presented you with the exact map location of the treasure. But before you could leave to find the treaure, there is a loud slam. The gate has closed itself. And the computer shuts down.
You reach near the door and find a similar lock to the one you found at entry. You must solve this to move forward.

Rules :
1. For red arrow, press the arrow key same as arrow direction
2. For blue arrow, press the arrow key same as direction arrow moves
3. A wrong combination and you are stuck forever inside

Solve the door code to proceed to the next level

**Hint** : 
- Read the rules again

**Dead-End**: The user presses wrong key

**Solution** : 5 Consecutive times correct key is pressed

**How soft sklls is measured**

It is measured by how much quick the user can put out the answer and also how accurate his concentration is. The arrow direction and movement of direction will cause confusion and thus it measures the concentration, focus and reaction time 

#### Level 5 - Crossing the River!
##### Skills assesses : Problem Solving and critical analytical approach

**Prompt**

You cracked the code again. Trusting the old man and the clues you found, you take the risk of reaching the location. As you follow the map directions you reach a river. At the other end lies the treasure. There is a raft present on the shore. But there is a twist. The river is dangerous and poisonous. You caannot touch the water
How will you cross the river?

**Hint** : Think Outside the Box

**DeadEnd** : Player uses the raft

**Solution**: Go around the blue box to the treasure button

**How soft sklls is measured**

It is measured by how much the user can think out of the box. It encorages out of the box thinking by provding unconvential solution

<hr>


The whole treasure Hunt Puzzle game assesses different soft skills of  the player to find the epic treasure at the end of the game. There are different  hints and dead ends present in the game with a final solution. Each level stores the number of tries of the user that he took to solve the level.


## Features
- User Authentication and Authorization
- Login and Signup
- Level Based Approach
- Lot of soft skills assessed
- Admin Panel for User Stats
- Retry approach to figure out solution again
- Hints available for all rounds
- Test coverage

## How to Run Locally
1. Clone the repo
2. Create and activate virtual env
3. Install all requirements with `pip install -r requirements.txt`
4. Add all the environment variables or use the given ones with `source.env`
5. Run the app with `flask run`

### Other Tools
#### 1. Admin Creation
It can be done by running `python manage.py create-admin`

#### 2. Admin Login
Admin login to view stats can be done via
```
email : admin@test.com
pass : admin123
```
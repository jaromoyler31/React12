let verb = {
    all: [
        "Moving Dirt around Trying To Find Something",
        "Eat A bunch of Carrots off The Ground",
        "Running Around In Circles ",
        "Worshiping a Object or landMark",
        "Jumping Up and Down",
        "Staring Straight at you With out Blinking",
        "Sleeping",
        "Looking at the ground and Sniffing",
        "on High Alert Look For People",
        "Chasing Someone",  
        "Digging a hole",
        "Gaurding Its Treasure",
        "Migrating South",
        "Migrating North",
        "They Are Search For Food",
        "Fleeing from Near By Danger",
        "Traped In a Bone Cage",
        "Exploring The Area",
        "Looking For Lover",
        "Cleaning ThemSelves",
        "Waiting To Ambush The Next Person to Enter The Area",
        "Searching For the Party",
        "Close to Death",
        "Eating",
        "Fleeing a Near By Disater"

    ],

    humanoid : [
        "Singing Country Road",
        "Gathering Up Supplys and Movimng Them to A Cart",
        "playing With a Pet",
        "Following a map that to Cave",
        "Throwing Rocks into a Bucket",
        "Stirring a Empty pot with a Wood Spoon",
        "Talking To The Group (If no One Talking to them Self",
        "Holding a small Tin cup Asking For Money",
        "Siting On A rock Paint Mountains ",
        "Selling a Bunch of Swords",
        "Making Music",
        "Sing Sweet Caraloine",
        "Reading A book",
        "Waiting For Someone",
        "Playing A Card game",
        "Investigating a dead body",
        "Screaming For help",
        "Holding a Wedding",
        "Hunting a Beast That as Been Attacking The Area",
        "Worshiping The LandMark"
        



    ]

}

let character = {
    monster : {
        M1_5 : [
            "Boar",//Start of Challenge 1/4 Ratings
            "Goblin",
            "Panther",
            "Skeleton",
            "Wolf",
            "Zombie",

            "Black Bear",//Start of Challenge 1/2 Ratings
            "Fire Imp",
            "Giant Goat",
            "Gnoll",
            "Gray Ooze",
            "Hobgoblin",
            "Lizardfolk",
            "Orc",
            "Shadow",
            
            "Dire Wolf", //Start of Challenge 1 Ratings
            "Goblin",
            "HobGoblin",
            "Animated Armor",
            "Brown Bear",
            "Bugbear",
            "Dryad",
            "Duergar",
            "Giant Spider",
            "Harpy",
            "Imp",
            "Tiger",

            "Awakened Tree",//Start of Challenge 2 Ratings 
            
        ],
        M6_10: [

        ],
        M11_15:[],
    },
    npc : [
        "Spy",
        "Corpse Thief",
        "Scout",
        "Thug",
        "Bandit",
        "Assassin",
        "Bandit Captain",
        "Berserker",
        "Commoner",
        "Cultist",
        "Druid",
        "Gladiator",
        "Guard",
        "Knight",
        "Mage",
        "Noble",
        "Priest",
        "Scout",
        "Tribal Warrior",
        "Veteran"
    ]
}

let curses =[
    "The character cannot turn right until the curse is lifted.",
    "A player must close every door they walk through, even if there are people behind them.",
    "A player is stalked by an imp, who simply follows him, saying nothing, always staring. No one else can see the imp.",
    "The next item the cursed player grabs is bound to them forever, they can never get rid of it.",
    "Character takes on the appearance and smell of being undead, but isn't.",
    "Characters must only answer questions with lies, unless they are asked about the reason for their behaviour (ex: 'are you cursed?' 'Are you lying on purpose?') In which case they must respond in the affirmative.",
    "Characters must agree to every suggestion or request made within 30 feet of them. Curse is broken after a week.",
    "The cursed character takes 1 damage whenever a creature within 30 feet of them takes any damage.",
    "Character becomes incapable of visually perceiving living creatures.",
    "A thunderous voice narrates everything the cursed does, says, or thinks for the next d4 hours.",
    "Everytime a player deals damage the same amount is reflected back to a random party member.",
    "The player becomes magnetic.",
    "The character perceives traps everywhere where none exist.",
    "Boots squeak loudly with each step.",
    "The character believes themselves to have swapped bodies with the nearest person. Nothing has happened.",
    "The character is unable to sleep when others are sleeping in a 60' radius.",
    "Makes an unarmed attack against themselves whenever they say 'what'.",
    "PCs teeth are as weak as glass.",
    "PCs weapon changes to the next material they touch.",
    "PC is followed by all bugs within 20 yards. (Bonus points if there are ant hills around).",
    "All plants the PC touches turn to dust for the next week. (Bonus points if a druid gets this)",
    "The next person the PC touches switches all clothes.",
    "When Ever Player Touches Another Player They Switch Clothes Can only happen once per person each Day.",
    "The next person the PC touches switches all items.",
    "Whenever the character physically harms another sentient being the character must apologize.",
    "This player has been cursed to be afraid of the sun.",
    "This curse makes the player compelled to hug all characters they come across, even if it would be inappropriate or awkward.",
    "You are cursed to always be ten minutes late.",
    "The gender of the cursed is randomly determined each morning.",
    "The Players Gendar Switch to The Gendar of Person he Touches",
    "The cursed will always close their eyes in the presence of fire.",
    "You Grow a Extra Finger on Your Left Hand",
    ""

]

let treasure ={
    One_Five : [
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +1)) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (50GP each)",
        ((Math.floor(Math.random() *5) +1)) + " gems (50GP each)",
        ((Math.floor(Math.random() *5) +1)*3) + " GP",
        ((Math.floor(Math.random() *5) +1)*3) + " GP",
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        ((Math.floor(Math.random() *5) +1)*1) + " GP " ,
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        "3d6 X 100 (1050) SP",
        //Magic Item
        //Magic Item
        //Magic Item
        //Magic Item
        //Magic Item
        "4d6 (14) SP",
        "4d6 (14) SP",
        "2d6 X 10 (70) GP + 3d6 X 100 (1050) SP",
        "2d6 X 10 (70) GP + 3d6 X 100 (1050) SP", 
        " 3d6 X 100 (1050) SP", //And Magic Item
        "Potion of healing", //Grab it from APi
        "Bag of holding", //Grab it from API
        "Potion of Growth",
        "Potion of Resistance",
        "Potion of Water Breathing",
    ],
    Six_Ten: [],
    Eleven_Fifteen: [],
}

let landMarks = {
    all: [
        {
           main: "Stone Statue Holding Up a Stone Pineapple",
           Effect: null,
           
        },
        {
            main: "A Tree That Glows Gold with Purple Fruit",
            Effect: "If You eat The Fruit Get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)],
        },
        {
            main: "You Enter into A Open Clearing Surrounded By Trees",
            Effect: "If you walk into the center You get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)],
        },
        {
            main: "A ring Of Mushrooms Circling A Burning Red Flower",
            Effect: "When you See the flower You get This Sudden Urge to Eat It. If You Eat it You gain The Ability to use Burning Hands 2 times",
            
        },
        {
            main: "A Gaint Boulder is blocking You on It you See A Smile drawn onto It",
            Effect: null,
            
        },
        {
            main: "A Gaint Boulder is blocking your Way",
            Effect: null,
        },
        {
            main: "Marble White Fountain with a Fish on Top Spitting Out A silver Liquid",
            Effect: "If You Touch The Liquid You Get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)],
        },
        {
            main: "In Front of You There a Opening That Leads to a Cave",
            Effect: null,
        },
        {
            main: "To The side of You ther is A Wagon Full With Trading Goods",
            Effect: "Anything You Buy is cursed To Dispare in a Day",

        },
        {
            main: "A Circle Of Trees and In the Very Center There Is a Statue of Imps",
            Effect: null,
            
        },
        {
            main: "There Is a Old Dead tree That looks Like It was Structed By Lighting",
            Effect: "If Any Creature Was Killed Near the Tree Get This Curse: "+ curses[Math.floor(Math.random() * curses.length+1)],
            
        },
        {
            main: "Shifting blue flame that is moving in place ",
            Effect: "If you touch The Flame Take 2d6 fire Damage"
            
        },
        {
            main: "A Lonly Old Tower That Looks Like It Might collapse",
            Effect: null
             
        },
        {
            main: "A Lonly Meadow Surrounded By Long Grass",
            Effect: null
             
        },
        {
            main: "A Gaint Stone Dog Stands Gaurd Of A Cave ",
            Effect: "Entering The Cave The dog Will Cumble and Block The Enterence. Anyone Who gets hit by a rock gets delt by 2d6 Bludgering Damage"
             
        },
        {
            main: "Walk Accross a Black Brick road",
            Effect: "This Road Takes them to Where Ever There Going But There are always Ambushes Await For Travelers. "
             
        },
        {
            main: "There are 7 Sword in The Ground",
            Effect: "To Pull The Swords Out You need to Make a Athletics Check of 17. The Sword Gives You a plus 2 to Attack roll And Dice But it Also Has this Curse Attached to It: " +curses[Math.floor(Math.random() * curses.length+1)] + " If You Get Rid of the Sword The Curse Stays With You."
             
        },
        {
            main: "You In a green Meadow That Shines with sparkling Dust everywhere",
            Effect: "If You Are in There For More Then 6 minutes Then You go Back in time six Mintues and and Start The Encounter"
             
        },
        {
            main: "You see A White chalk Circle on The Ground",
            Effect: "If You Enter The Chalk Circle Everything Goes Black And you See Color Balls flying around in the Circle"
             
        },
        {
            main: "Theres a Gaint Black Berry Bush Blocking Your Way",
            Effect: null
             
        }, 
         
        
    ]
    

}



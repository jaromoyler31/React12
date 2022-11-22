 

export let verb = {
    all: [
        "Moving Dirt around Trying To Find Something",
        "Eat A bunch of Carrots off The Ground",
        "Running Around In Circles ",
        "Worshiping a Object or landMark",
        "Jumping Up and Down",
        "Staring Straight at you With out Blinking",
        "Sleeping",
        "on High Alert Look For People",
        "Chasing Someone",  
        "Digging a hole",
        "Gaurding Its Treasure",
        "Migrating South",
        "Migrating North",
        "Search For Food",
        "Fleeing from Near By Danger",
        "Traped In a Bone Cage",
        "Exploring The Area",
        "Looking For Lover",
        "Cleaning ThemSelves",
        "Waiting To Ambush The Next Person to Enter The Area",
        "Searching For the Party",
        "Close to Death",
        "Eating",
        "Fleeing a Near By Disater",
        "Being Noisy",
        "guarding the local area",
        "Searching For Water",
        "Shultering from a Storm",
        "Stuck In Mud",
        "Attempting to Catch Fish",
        "hiding from a nearby threat",
    ],

    humanoid : [
        "Singing Country Road",
        "Gathering Up Supplys and Movimng Them to A Cart",
        "playing With a Pet",
        "Following a map that leads to a Cave",
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
        "Worshiping The LandMark",
        "guarding the local area",
        "Looking For Gold",
        "Driving a Wagon",
        "looking at stone markings",
        "Folowing a Guide",
        "Fishing",
        "Pull out there Sword ready to fight",
        ""

        
    ]

}

export let character = {
    monster : {
        M1_5 : [
            "Boar",//Start of Challenge 1/4 Ratings
            "Panther",
            "Wolf",
            "Goblin",
            "Skeleton",
            "Zombie",

            "Black Bear",//Start of Challenge 1/2 Ratings
            "Fire Imp",
            "Giant Goat",
            "Gnoll",
            "Gray Ooze",
            "Hobgoblin",
            "Lizardfolk",
            "Orc",
            
            
            "Dire Wolf", //Start of Challenge 1 Ratings
            "Animated Armor",
            "Brown Bear",
            "Bugbear",
            "Dryad",
            "Duergar",
            "Giant Spider",
            "Harpy",
            "Imp",
            "Tiger",
            
        ],
        M6_10: [
            "Dire Wolf", //Start of Challenge 1 Ratings
            "Animated Armor",
            "Bugbear",
            "Giant Spider",
            "Duergar",

            "Awakened Tree",//Start of Challenge 2 Ratings 
            "Centaur",
            "Ghast",
            "Giant Ant",
            "Grick",
            "Griffon",
            "Minotaur Skeleton",
            "Ogre",
            "Pegasus",
            "Rug of Smothering",
            "Wererat",
            "White Dragon Wyrmling",
            
            
            "Bearded Devil", //Start of Challenge 3 Ratings
            "Bearfolk",
            "Giant Scorpion", 
            "Manticore",
            "Minotaur",
            "Mummy",
            "Owlbear",
            "Werewolf",
            
            "Ghost", //Start of Challenge 4 Ratings
            "Red Dragon Wyrmling",
            "Wereboar",
            "Weretiger",
            
            "Air Elemental",//Start of Challege 5 Rating
            "Earth Elemental",
            "Fire Elemental",
            "Hill Giant",
            "Troll",
            "Unicorn",
            "Werebear",
            "Wraith", 
           
            "Drider", //Start of Challege 6 Ratings
            "Wyvern",
            
            "Shield Guardian",//Start of Number 7
            "Stone Giant",
            "Young Black Dragon",

        ],
        M11_15:[

            "Air Elemental",//Start of Challege 5 Rating
            "Earth Elemental",
            "Fire Elemental",
            "Hill Giant",
            "Troll",
            "Unicorn",
            "Werebear",
            "Wraith", 
           
            "Drider", //Start of Challege 6 Ratings
            "Wyvern",
            
            "Shield Guardian",//Start of Number 7
            "Stone Giant",
            "Young Black Dragon",

            "Frost Giant", //Start of Number 8
            "Young Bronze Dragon",
            
            "Clay Golem", //start of number 9
            "Cloud Giant", 
            "Young Silver Dragon",
            
            "Guardian Naga", //start of 10
            "Young Gold Dragon",
            
            "Chain Devil", //start of 11
            "Djinni",
            "Roc",
            
            "Bone Devil",//start of 12
            
            "Adult Brass Dragon",//start of 13
            "Storm Giant",
            "Vampire",

            "Adult Black Dragon",//start of 14
            "Adult Copper Dragon",

            "Adult Bronze Dragon",//start of 15
            "Adult Green Dragon",
            "Mummy Lord",
            "Purple Worm",
        ],
    },
    npc : [
        "Spy",
        "Corpse Thief",
        "Scout",
        "Thug",
        "Bandit",
        "Assassin",
        "Bandit Captain",
        "Cult Fanatic",
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
        "Veteran",
        "Half-Red Dragon Veteran"
    ]
}

export let curses =[
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
    "You Grow an Extra Toe on Your Right Foot Any shoes tat would have fit that foot no long do"

]



export let treasure ={
    One_Five : [
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each)",
        (Math.floor(Math.random() *5) +1) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (50GP each)",
        (Math.floor(Math.random() *5) +1) + " gems (50GP each)",
        ((Math.floor(Math.random() *5) +1)*3) + " GP",
        ((Math.floor(Math.random() *5) +1)*3) + " GP",
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        ((Math.floor(Math.random()*5) +1)*2) + " GP " ,
        ((Math.floor(Math.random() *5) +1)*2) + " GP",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        ((Math.floor(Math.random() *5) +1)*6) + " SP",
        ((Math.floor(Math.random() *5) +1)*6) + " SP",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each) + " + ((Math.floor(Math.random() *5) +1)*6) + " SP" ,
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each) + " + (Math.floor(Math.random() *5) +1) + " gems (50GP each)",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each) + " + ((Math.floor(Math.random() *5) +1)*2) + " GP",
        ((Math.floor(Math.random()*6+1)*100)*3) + " SP + "+((Math.floor(Math.random()*6+1)*10)*2)+" GP ",
        ((Math.floor(Math.random()*6+1)*100)*3) + " SP + "+((Math.floor(Math.random()*6+1)*10)*2)+" GP ", 
        ((Math.floor(Math.random()*6+1)*100)*3) + " SP",
        ((Math.floor(Math.random() *6) +1)*7) + " CP",
        "Potion of healing", //Grab it from APi
        "Bag of holding", //Grab it from API
        "Potion of Growth",
        "Potion of Resistance",
        "Potion of Water Breathing",
        "Wand of Magic Missiles",
        "Winged Boots",
        "Cloak of Protection",
        "Dust of Disappearance",
        "Stone of Good Luck (Luckstone)",
        "Immovable Rod",
    ],
    Six_Ten: [
        ((Math.floor(Math.random() *5) +1)*2) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +2)*2) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +3)*2) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (50GP each)",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        (((Math.floor(Math.random() *5) +1)*2)*10) + " GP",
        (((Math.floor(Math.random() *6) +1)*3)*10) + " GP",
        (((Math.floor(Math.random() *6) +1)*3)*10) + " GP",
        (((Math.floor(Math.random() *6) +1)*3)*10) + " GP",
        (((Math.floor(Math.random() *6) +1)*3)) + " PP",
        (((Math.floor(Math.random() *6) +1)*3)) + " PP",
        (((Math.floor(Math.random() *6) +1)*3)) + " PP",
        ((Math.floor(Math.random() *5) +1)*10) + " SP",
        ((Math.floor(Math.random() *5) +1)*10) + " SP",
        ((Math.floor(Math.random() *6) +10)*100) + " CP",
        ((Math.floor(Math.random() *6) +10)*100) + " CP",
        ((Math.floor(Math.random() *8) +10)*100) + " CP",
        ((Math.floor(Math.random() *6) +1)) + " gems (100GP each)",
        ((Math.floor(Math.random() *6) +1)*3) + " gems (100GP each)",
        ((Math.floor(Math.random() *5) +1)*3) + " gems (50GP each) + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        ((Math.floor(Math.random() *5) +1)*3) + " gems (50GP each) + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        ((Math.floor(Math.random() *5) +1)*4) + " gems (10GP each) + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        "Sword of Wounding",
        "Sword of Wounding",
        "Adamantine Armor",
        "Cloak of Protection",
        "Potion of healing",
        "Potion of healing",
        "Potion of Water Breathing",
        "Potion of Heroism",
        "Immovable Rod",
        "Bracers of Archery",
        "Winged Boots",
        "Restorative Ointment",
        "Ring of Evasion",


    ],
    Eleven_Fifteen: [
        ((Math.floor(Math.random() *5) +1)*3) + " gems (50GP each) + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        ((Math.floor(Math.random() *5) +1)*4) + " gems (10GP each) + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        ((Math.floor(Math.random() *12) +15)*100) + " CP + " + ((Math.floor(Math.random() *5) +1)*5) + " GP",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (100GP each) + ", ((Math.floor(Math.random() *12) +15)*110) + " CP",
        ((Math.floor(Math.random() *12) +15)*100) + " CP",
        ((Math.floor(Math.random() *12) +15)*110) + " CP",
        (((Math.floor(Math.random() *6) +1)*10)) + " PP",
        (((Math.floor(Math.random() *6) +1)*10)) + " PP",
        (((Math.floor(Math.random() *6) +1)*5)*10) + " GP",
        (((Math.floor(Math.random() *6) +1)*7)*11) + " GP",
        ((Math.floor(Math.random() *5) +1)*3) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +2)*4) + " gems (10GP each)",
        ((Math.floor(Math.random() *5) +1)*2) + " gems (100GP each)",
        ((Math.floor(Math.random() *5) +1)) + " gems (500GP each)",
        ((Math.floor(Math.random() *5) +2)*2) + " gems (50GP each)",
        ((Math.floor(Math.random() *5) +1)*10) + " SP + " + (((Math.floor(Math.random() *6) +1)*3)) + " PP" ,
        "Gem of Seeing",
        "Potion of healing",
        "Potion of Heroism",
        "Giant Slayer",
        "Immovable Rod",
        "Berserker Axe",
        "Boots of Speed",
        "Brazier of Commanding Fire Elementals",
    ],
}

export let landMarks = {
    all: [
        {
           main: "Stone Statue Holding Up a Stone Pineapple",
           Effect: null,
           
        },
        {
            main: "A Tree That Glows Gold with Purple Fruit",
            Effect: "If You eat The Fruit Get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)]
        },
        {
            main: "You Enter into A Open Clearing Surrounded By Trees",
            Effect: "If you walk into the center You get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)]
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
            Effect: "If You Touch The Liquid You Get This Curse: " + curses[Math.floor(Math.random() * curses.length+1)]
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
            main: "A Circle Of Trees and In the Very Center There Is a Statue of Imp",
            Effect: null,
        },
        {
            main: "There Is a Old Dead tree That looks Like It was Structed By Lighting",
            Effect: "If Any Creature Was Killed Near the Tree Get This Curse: "+ curses[Math.floor(Math.random() * curses.length+1)]
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
            main: "A green Meadow That Shines with sparkling Dust everywhere",
            Effect: "If You Are in There For More Then 6 minutes Then You go Back in time six Mintues and and Start The Encounter"
        },
        {
            main: "A White chalk Circle on The Ground",
            Effect: "If You Enter The Chalk Circle Everything Goes Black And you See Color Balls flying around in the Circle"
        },
        {
            main: "A Gaint Black Berry Bush Blocking Your Way",
            Effect: null
        }, 
        {
            main: "A Gaint Golden Berry Bush Blocking Your Way",
            Effect: "There A 50 percent chance you get healed up all the way. And 50 percent chance you get this curse: "+curses[Math.floor(Math.random() * curses.length+1)]
        },
        {
            main: "A Gaint Corn Maze in Front Of You ",
            Effect: "Any Monster or NPC or Treasure will be in the Corn Maze " 
        },
        {
            main: "A Billboard with wanted posters with one of the players faces",
            Effect: null
        },
        {
            main: "A Pool surrounded by Mushrooms of all Size the Biggest one being Six feet tall",
            Effect: "If you drink the water makes you grow to times your size for 1 hour"
        },
        {
            main: "A Old Smithy You Can Hear The Sound of Metal hitting Metal ",
            Effect: null
        },
        {
            main: "A old Ship Pirate Ship is in The Middle of there Path",
            Effect: "If you touch any Of the treasure In the area you get this Curse: "+curses[Math.floor(Math.random() * curses.length+1)]
        },
        {
            main: "A purple River is to The side of the Group on the Water is a empty row boat",
            Effect: "If you touch The Water you get this Curse: "+curses[Math.floor(Math.random() * curses.length+1)]
        },
        {
            main: "An Abandon Ferry over the River It has 3 broken rowboats still there",
            Effect: null
        },
        {
            main: "A few Hardy Cacti A realse a Fog that Covers The area for 160ft",
            Effect: "When walking in the fog for more then 10 minute you get light headed and goes away 10 after you leave the fog"
        },
        {
            main: "A lonely Hill With a Small Water fall Coming from the Top of it ",
            Effect: null
        },
        {
            main: "A Gaint Sand Dune Stretches Ahead of You ",
            Effect: null
        },
        {
            main: "a pile of debris by a heap of bones Outside Of a Cave",
            Effect: "Any Monster And Treasure Will Be In The Cave"
        },
        {
            main: "A Old And Breaking Temple That Has vines and Moss All Over It",
            Effect: "Any Monster And Treasure Will Be In The Temple"
        },
        {
            main: "A Bambo Forest With A sign at The Entrance saying 'Do Not Enter'",
            Effect: "The Bambo Forest is A Maze and Is shifting and moves around you Will Find any Monster NPC and Treasure in The Bambo Forest"
        },
        {
            main: "A Bambo Forest",
            Effect: null            
        },
        {
            main: "Abandon Wagon With Arrows and Blood All Over It",
            Effect: null            
        },
        {
            main: "Abandon Wagon With Arrows and Blood All Over It",
            Effect: null            
        },
        {
            main: "A bridge. there is a sign warning of dangerous magic",
            Effect: "Monster or NPC Is Gaurding the Bridge"    
        },
        {
            main:"Theres a Pile of Gleaming Stones That Make a shap of a target ",
            Effect: "The Stones Glow with a white light"
        },
        {
            main:"A Farm A Cactus and A Gaint Sign Saying 'Buy your Cactus Juice' ",
            Effect: "The Cactus Juice Has Alchol in It so If You Drink it you Becomes a bit Slugish"
        },
        {
            main:"A low wall made out of brike past the wall you can see a House and its Farm ",
            Effect:null
        },
        {
            main:"A Gaint Hots Springs And Mud Baths",
            Effect:null
        },
        {
            main:"A Gaint Mill With that Has a gaint hole in it and Corn Pour out ",
            Effect:null
        },
        {
            main:"A Gaint mist Storm Wraps You and your Group",
            Effect: "Any Player Who does not get out of the miss soon enough will get this curse: " + curses[Math.floor(Math.random() * curses.length+1)]
        },

        
    ]
    
}





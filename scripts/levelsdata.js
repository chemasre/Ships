    var levelCount = 21;
	
	var _null = 0;
	var _jump = 1;
	var _back = 2;
	var _wave = 3;
    var _end = 4;
	
	// var levelMessages =
	// [
		// "",
        // "\"Even small actions can have purpose.\"",
        // "\"You served the tea, and now we can talk.\"",
        // "\"It's serving the tea less important than our words?\"",
        // "\"Doesn't both serve to the same purpose?\"",
        // "\"Don't laugh at... Oh! You never listen.\"",
        
        // "\"I feel like nothing changes\"",
        // "\"Yet time keeps moving me forward\"",
        // "\"I keep looking back\"",
        // "\"\"",
        
        // "That I cannot live looking back We move forward, yet we look back",
        // "We see no purpose, yet we go through",
        // "But even small actions can have purpose",
        // "See? You have reached this point",
        // "Now go further",
        // "You have something to say",
        // "Time got frozen for you?",
        // "What you did you do?",
        // "After that day, time got frozen",
        // "It ",
        // "Either way, I could not stop it",
        // "We move forward, even when time has frozen for ourselves",        
        // "We move forward, even when we do not expect anything good to happen",        
        // "We move forward, even when we do not expect anything good CAN happen",        
        // "We move forward, even when we know our needs will never fulfilled",
        // "But even small actions have purpose",
        // "You have reached this point",
        // "No person lives or die in vain",        
        // "That day time got frozen",
		// "Everything started moving forward but me",
		// "I kept contemplating ",
		// "I have been lost since then",
		// "No compass can help me",
		// "Unable to find the words that ",
		// "8:",
		// "7:",
		// "6:",
		// "5:",
		// "4:",
		// "3:",
	// ];

	// var levelMessages =
	// [
		// "",
        // "1: Part1: Jump1",
        // "2: Part1: Jump2",
        // "3: Part1: Jump3",
        // "4: Part1: Jump4",
        // "5: Part1: Dialogs1",
        // "6: Part1: Background1",
        // "7: Part1: Background2",
        // "8: Part1: Background3",
        // "9: Part1: Waves",
        // "10: Part1: Dialogs2",
        // "11",
        // "12",
        // "13",
        // "14",
	// ];

	var levelMessages =
	[
		/*  0 */ "",        
        /*  1 : Recess  */ "When our dreams have been shattered",
        /*  2 : Jump    */ "even small actions can have purpose",
        /*  3 : Jump    */ "That was easy",
        /*  4 : Jump    */ "Now a little faster",
        /*  5 : Jump    */ "You got this",
        /*  6 : Recess  */ "Sometimes we can overcome our problems",
        /*  7 : Back    */ "yet others we must step aside",
        /*  8 : Back    */ "Now you must be quicker",
        /*  9 : Back    */ "",
        /* 10 : Waves   */ "Be careful!",
        /* 11 : Recess  */ "This is halfway through",
        /* 12 : Jump    */ "Go find your purpose",
        /* 13 : Back    */ "",
        /* 14 : Jump    */ "",
        /* 15 : Back    */ "",
        /* 16 : Back    */ "",
        /* 17 : Jump    */ "",
        /* 18 : Wave    */ "",
        /* 19 : Recess  */ "",
	    /* 20 : End     */ "",
	];

	// var levelMessages =
	// [
		// /*  0 */ "",
        // /*  1 */ "Even small actions can have purpose.",
        // /*  2 */ "You reached this far. Now you can go further.",
        // /*  3 */ "There is a rythm in all things.",
        // /*  4 */ "Do you see? You found it.",
        // /*  5 */ "I will be waiting for you.",
        // /*  6 */ "You see no reason, yet you go through.",
        // /*  7 */ "Sometimes there is another way.",
        // /*  8 */ "7: Part1: Background2.",
        // /*  9 */ "8: Part1: Background3.",
        // /* 10 */ "9: Part1: Waves.",
        // /* 11 */ "You are half way through.",
        // /* 12 */ "11",
        // /* 13 */ "12",
        // /* 14 */ "13",
        // /* 15 */ "14",
        // /* 16 */ "15",
        // /* 17 */ "16",
        // /* 18 */ "17",
	    // /* 19 */ "18",
	    // /* 20 */ "19"
	// ];

	// SpawnGroupChances  1 -> 100%  2-> 50%  3-> 33% ...
		
	// Stick group separation 80
	
	// 1 Tutorial jump. Individual sticks very separated
	// 2 Easy jump. Individual sticks less separated but with gaps
	// 3 Medium jump. Groups up to two very separated 
	// 4 Medium jump closer. Groups up to two less separated
	
	// 6 Medium background. Individual sticks medium separation, long series allowed
	// 7 Medium background closer. Individual sticks less separated, long seris allowed
	// 8 Medium background short series. Groups up to two sticks less separated, shorter series
	
	// 9 Waves easy.
	
	// 11 Hard jump closer faster. Groups up to three very separated.
	// 12 

    //                                            0         1        2        3        4        5        6        7       8          9      10       11       12        13      14        15       16      17       18      19          20 
    //                                            0      Dialog   Tutorial  Easy    Medium   Medium   Dialog   Medium   Medium    Medium  Waves    Dialog    Hard      Hard    Hard      VHard   VVHard   Hard    Waves    Dialog       12 
    //                                            0                Jump     Jump     Jump     Jump              Back     Back      Back    Easy              Jump      Back    Jump      Back     Back    Jump     Hard                 12 
    //                                            0                                          Closer                     Closer    Narrow     3              Closer    Narrow  Closer    Narrow   Narrow  Closer      3                  12 
    var levelModes                           = [ _null  , _null  , _jump  , _jump  , _jump  , _jump  , _null  , _back  , _back  , _back  , _wave  , _null  , _jump  , _back  , _jump  , _back  , _back  , _jump  , _wave  , _null  ,  _end ];
    var levelDuration                        = [     1  ,     1  ,    12  ,    16  ,    16  ,    16  ,     1  ,    16  ,    16  ,    16  ,    32  ,     1  ,    16  ,    16  ,    16  ,    16  ,    16  ,    16  ,    64  ,     2  ,    20 ];
    var levelMessageDurations                = [     0  ,     2  ,     2  ,     3  ,     3  ,     3  ,     4  ,     3  ,     3  ,     0  ,     3  ,     4  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3 ];
    var levelSpeedX                          = [  -100  ,  -360  ,  -360  ,  -360  ,  -460  ,  -460  ,  -460  ,  -460  ,  -460  ,  -460  ,  -400  ,  -400  ,  -500  ,  -500  ,  -500  ,  -500  ,  -560  ,  -560  ,  -560  ,  -150  ,  -100 ];
    var levelStickSpawnGroupSeparation       = [     0  ,     0  ,   920  ,   550  ,   550  ,   550  ,     0  ,   550  ,   280  ,   340  ,     0  ,     0  ,   480  ,   280  ,   380  ,   280  ,   340  ,   380  ,     0  ,     0  ,   300 ];
    var levelStickSpawnGroupChances          = [     0  ,     0  ,   100  ,    50  ,   100  ,    50  ,     0  ,    50  ,   100  ,   100  ,     0  ,     0  ,    60  ,    80  ,    75  ,    80  ,   100  ,    90  ,     0  ,     0  ,    50 ];
    var levelStickSpawnMaxChanceHits         = [     0  ,     0  ,     3  ,     3  ,     3  ,     3  ,     0  ,     3  ,     3  ,     3  ,     0  ,     0  ,     3  ,     3  ,     3  ,     4  ,  1000  ,     3  ,     0  ,     0  ,     0 ];
    var levelStickSpawnMaxChanceMisses       = [     0  ,     0  ,     3  ,     2  ,     2  ,     2  ,     0  ,     2  ,     2  ,     2  ,     0  ,     0  ,     3  ,     3  ,     3  ,     2  ,  1000  ,     3  ,     0  ,     0  ,     0 ];
    var levelStickSpawnGroupMaxMembers       = [     0  ,     0  ,     1  ,     1  ,     2  ,     2  ,     0  ,     1  ,     1  ,     2  ,     0  ,     0  ,     3  ,     1  ,     3  ,     1  ,     2  ,     4  ,     0  ,     0  ,     1 ];
    var levelStickSpawnGroupMemberSeparation = [     0  ,     0  ,    80  ,    80  ,    60  ,    60  ,     0  ,    80  ,    80  ,    80  ,     0  ,     0  ,    60  ,    80  ,    60  ,    80  ,    80  ,    56  ,     0  ,     0  ,    80 ];
    var levelStickSpawnBackgroundMaxSerie    = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     3  ,     3  ,     2  ,     0  ,     0  ,     0  ,     4  ,     0  ,     1  ,     2  ,     0  ,     0  ,     0  ,     0 ];
    var levelStickTopPosY                    = [     0  ,     0  ,   290  ,   280  ,   280  ,   280  ,     0  ,   230  ,   230  ,   230  ,     0  ,     0  ,   270  ,   230  ,   270  ,   230  ,   230  ,   270  ,     0  ,     0  ,   290 ];
	var levelWavesSeparationMin			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   450  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   320  ,     0  ,     0 ];
	var levelWavesSeparationMax			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   600  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   480  ,     0  ,     0 ];
	var levelWavesPositionXMin			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  -300  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  -300  ,     0  ,     0 ];
	var levelWavesPositionXMax			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   300  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   300  ,     0  ,     0 ];
	var levelWavesSpeedMin			         = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    50  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    55  ,     0  ,     0 ];
	var levelWavesSpeedMax			         = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    60  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    65  ,     0  ,     0 ];
	var levelWavesChangeIntervalMin          = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     2  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     1  ,     0  ,     0 ];
	var levelWavesChangeIntervalMax          = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     4  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     3  ,     0  ,     0 ];
	var levelGlowBackground                  = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   0.3  ,   0.3  ,   0.3  ,   0.5  ,   0.5  ,   0.5  ,   0.7  ,   0.7  ,   0.7  ,   0.9 ];
    var levelGlowForeground                  = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  0.04  ,  0.04  ,  0.04  ,  0.08  ,  0.08  ,  0.08  ,  0.12  ,  0.12  ,  0.12  ,  0.20 ];
    var levelAmbientMusicVolume              = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  0.05  ,  0.05  ,  0.05  ,  0.10  ,  0.15  ,  0.20  ,  0.25  ,  0.30  ,  0.35  ,   0.5 ];
    var levelAmbientWindVolume               = [   0.1  ,  0.10  ,  0.10  ,  0.10  ,  0.20  ,  0.20  ,  0.30  ,  0.30  ,  0.30  ,  0.30  ,   0.4  ,   0.5  ,  0.40  ,  0.40  ,  0.40  ,  0.40  ,  0.50  ,  0.50  ,   0.5  ,     0  ,     0 ];
    var levelAmbientWaterVolume              = [  0.05  ,  0.05  ,  0.05  ,  0.05  ,  0.05  ,  0.05  ,  0.05  ,  0.07  ,  0.07  ,  0.07  ,   0.5  ,  0.10  ,  0.10  ,  0.10  ,  0.10  ,  0.15  ,  0.15  ,  0.15  ,   0.7  ,     0  ,     0 ];



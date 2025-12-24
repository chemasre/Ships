    var levelCount = 15;
	
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

	var levelMessages =
	[
		"",
        "1: Part1: Jump1",
        "2: Part1: Jump2",
        "3: Part1: Jump3",
        "4: Part1: Jump4",
        "5: Part1: Dialogs1",
        "6: Part1: Background1",
        "7: Part1: Background2",
        "8: Part1: Background3",
        "9: Part1: Waves",
        "10: Part1: Dialogs2",
        "11",
        "12",
        "13",
        "14",
	];

	// SpawnGroupChances  1 -> 100%  2-> 50%  3-> 33% ...
	
	// Stick group separation 80
	
	// 1 Tutorial jump. Individual sticks very separated
	// 2 Easy jump. Individual sticks less separated but with gaps
	// 3 Medium jump. Groups up to two very separated 
	// 4 Medium jump closer. Groups up to two less separated
	

    //                                            0         1        2        3        4        5        6       7          8       9       10      11      12      13      14 
    //                                            0      Tutorial  Easy    Medium   Medium   Dialog   Medium   Medium    Medium  Waves    Dialog      3        4      5        6       7      8       9       10      11      12      13      14 
    //                                            0       Jump     Jump     Jump     Jump              Back     Back      Back    Easy                3        4      5        6       7      8       9       10      11      12      13      14 
    //                                            0                                 Closer                     Closer    Narrow     3                 3        4      5        6       7      8       9       10      11      12      13      14 
    var levelModes                           = [ _null  , _jump  , _jump  , _jump  , _jump  , _null  , _back  , _back  , _back  , _wave  , _null  , _wave  , _back  , _jump  , _back  , _null  , _null  , _null  , _null  , _null  , _null  , _null  , _null  ,  _end   ];
    var levelDuration                        = [     2  ,    12  ,    16  ,    16  ,    16  ,     2  ,    16  ,    16  ,    16  ,    32  ,     2  ,    20  ,    20  ,   20   ,    20  ,     5  ,     5  ,     5  ,     5  ,     5  ,     5  ,     5  ,     2  ,    20   ];
    var levelMessageDurations                = [     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,    3   ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3  ,     3   ];
    var levelSpeedX                          = [  -100  ,  -360  ,  -360  ,  -360  ,  -360  ,  -100  ,  -360  ,  -360  ,  -360  ,  -400  ,  -100  ,  -500  ,  -500  , -700   ,  -700  ,  -100  ,  -100  ,  -100  ,  -100  ,  -100  ,  -100  ,  -100  ,  -100  ,  -100   ];
    var levelStickSpawnGroupSeparation       = [     0  ,   920  ,   550  ,   920  ,   550  ,     0  ,   550  ,   280  ,   280  ,     0  ,     0  ,   400  ,   400  ,  500   ,   500  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   300   ];
    var levelStickSpawnGroupChances          = [     0  ,     1  ,     2  ,     1  ,     1  ,     0  ,     2  ,     1  ,     1  ,     0  ,     0  ,     0  ,     3  ,    4   ,     4  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     2   ];
    var levelStickSpawnGroupMaxMembers       = [     0  ,     1  ,     1  ,     2  ,     2  ,     0  ,     1  ,     1  ,     2  ,     0  ,     0  ,     0  ,     3  ,    4   ,     4  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     1   ];
    var levelStickSpawnGroupMemberSeparation = [     0  ,    80  ,    80  ,    60  ,    60  ,     0  ,    80  ,    80  ,    80  ,     0  ,     0  ,     0  ,    80  ,   80   ,    80  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    80   ];
    var levelStickSpawnBackgroundMaxSerie    = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     3  ,     3  ,     2  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ,    0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
    var levelStickTopPosY                    = [     0  ,   290  ,   290  ,   290  ,   290  ,     0  ,   290  ,   290  ,   290  ,     0  ,     0  ,     0  ,   280  ,  270   ,   270  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   290   ];
	var levelWavesSpeed						 = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    10  ,     0  ,    30  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesSeparationMin			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   450  ,     0  ,   250  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesSeparationMax			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   600  ,     0  ,   600  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesPositionXMin			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  -300  ,     0  ,  -300  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesPositionXMax			     = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,   300  ,     0  ,   300  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesSpeedMin			         = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    50  ,     0  ,    50  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesSpeedMax			         = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,    60  ,     0  ,   100  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesChangeIntervalMin          = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     2  ,     0  ,     1  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelWavesChangeIntervalMax          = [     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     4  ,     0  ,     3  ,     0  ,    0   ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0   ];
	var levelGlowBackground                  = [     0  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,     0  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,     0  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,   0.3   ,  0.3   ,  0.3  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,   0.9   ];
    var levelGlowForeground                  = [     0  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,     0  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,     0  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04   ];
    var levelAmbientMusicVolume              = [     0  ,  0.10  ,  0.10  ,  0.10  ,  0.10  ,     0  ,  0.10  ,  0.10  ,  0.10  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  0.30   ];
    var levelAmbientSoundVolume              = [   0.3  ,  0.30  ,  0.30  ,  0.30  ,  0.30  ,   0.3  ,  0.30  ,  0.30  ,  0.30  ,     0  ,   0.3  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,     0  ,  0.10   ];


		// "oh yes! they float, Georgie.",
		// "those aren't mountains"

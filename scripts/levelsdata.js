    var levelCount = 14;
	
	var _null = 0;
	var _jump = 1;
	var _back = 2;
	var _wave = 3;
    var _end = 4;
	
	var levelMessages =
	[
		"",
        "Even small actions can have purpose",
        "See? You have reached this point",
        "Sometimes we become sailors of the mist",
        "We move forward, yet time has frozen for us",
        "We move forward, yet we look back",
        "We see no purpose, yet we go through",
        "But even small actions can have purpose",
        "See? You have reached this point",
        "Now go further",
        "You have something to say",
        "Time got frozen for you?",
        "What you did you do?",
        "After that day, time got frozen",
        "It ",
        "Either way, I could not stop it",
        "We move forward, even when time has frozen for ourselves",        
        "We move forward, even when we do not expect anything good to happen",        
        "We move forward, even when we do not expect anything good CAN happen",        
        "We move forward, even when we know our needs will never fulfilled",
        "But even small actions have purpose",
        "You have reached this point",
        "No person lives or die in vain",        
        "That day time got frozen",
		"Everything started moving forward but me",
		"I kept contemplating ",
		"I have been lost since then",
		"No compass can help me",
		"Unable to find the words that ",
		"8:",
		"7:",
		"6:",
		"5:",
		"4:",
		"3:",
	];
	
	// SpawnGroupChances  1 -> 100%  2-> 50%  3-> 33% ...
	
    var levelModes                           = [ _null  , _jump  ,  _end  , _wave  , _back  , _jump , _back , _null , _null , _null , _null , _null , _null , _null , _null ];
    var levelDuration                        = [     2  ,     5  ,    20  ,    20  ,    20  ,   20  ,    20 ,     5 ,     5 ,     5 ,     5 ,     5 ,     5 ,     5 ,     2 ];
    var levelSpeedX                          = [  -100  ,  -400  ,  -400  ,  -500  ,  -500  , -700  ,  -700 ,  -100 ,  -100 ,  -100 ,  -100 ,  -100 ,  -100 ,  -100 ,  -100 ];
    var levelStickSpawnGroupSeparation       = [     0  ,   300  ,   300  ,   400  ,   400  ,  500  ,   500 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
    var levelStickSpawnGroupChances          = [     0  ,     2  ,     2  ,     0  ,     3  ,    4  ,     4 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
    var levelStickSpawnGroupMaxMembers       = [     0  ,     1  ,     1  ,     0  ,     3  ,    4  ,     4 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
    var levelStickSpawnGroupMemberSeparation = [     0  ,    80  ,    80  ,     0  ,    80  ,   80  ,    80 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];    
    var levelStickTopPosY                    = [     0  ,   290  ,   290  ,     0  ,   280  ,  270  ,   270 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesSpeed						 = [     0  ,     0  ,     0  ,    30  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesSeparationMin			     = [     0  ,     0  ,     0  ,   250  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesSeparationMax			     = [     0  ,     0  ,     0  ,   600  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesPositionXMin			     = [     0  ,     0  ,     0  ,  -300  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesPositionXMax			     = [     0  ,     0  ,     0  ,   300  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesSpeedMin			         = [     0  ,     0  ,     0  ,    50  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesSpeedMax			         = [     0  ,     0  ,     0  ,   100  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesChangeIntervalMin          = [     0  ,     0  ,     0  ,     1  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelWavesChangeIntervalMax          = [     0  ,     0  ,     0  ,     3  ,     0  ,    0  ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ,     0 ];
	var levelGlowBackground                  = [     0  ,   0.3  ,   0.3  ,   0.3  ,   0.3  ,   0.3 ,   0.3 ,   0.3 ,   0.3  ,  0.3  ,  0.3 ,   0.3 ,   0.3 ,   0.3 ,   0.3 ];
    var levelGlowForeground                  = [     0  ,  0.04  ,  0.04  ,  0.04  ,  0.04  ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ,  0.04 ];


		// "oh yes! they float, Georgie.",
		// "those aren't mountains"

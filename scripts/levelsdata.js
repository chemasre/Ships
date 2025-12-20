    var levelCount = 5;
	
	var _null = 0;
	var _jump = 1;
	var _back = 2;
	var _wave = 3;
	
	var levelMessages =
	[
		"",
		"I've been lost in this mist for so long...",
		"I don't know what to tell myself",
		"Everything just moves forward",
		"No compass can help me",
		"9:",
		"8:",
		"7:",
		"6:",
		"5:",
		"4:",
		"3:",
	];
	
	// SpawnGroupChances  1 -> 100%  2-> 50%  3-> 33% ...
	
    var levelModes                           = [ _null  , _jump  , _wave  , _back  , _jump , _back  ];
    var levelDuration                        = [     2  ,    20  ,    20  ,    20  ,   20  ,    20  ];
    var levelSpeedX                          = [  -100  ,  -400  ,  -500  ,  -500  , -700  ,  -700  ];
    var levelStickSpawnGroupSeparation       = [     0  ,   300  ,   400  ,   400  ,  500  ,   500  ];
    var levelStickSpawnGroupChances          = [     0  ,     2  ,     0  ,     3  ,    4  ,     4  ];
    var levelStickSpawnGroupMaxMembers       = [     0  ,     1  ,     0  ,     3  ,    4  ,     4  ];
    var levelStickSpawnGroupMemberSeparation = [     0  ,    80  ,     0  ,    80  ,   80  ,    80  ];    
    var levelStickTopPosY                    = [     0  ,   290  ,     0  ,   280  ,  270  ,   270  ];
	var levelWavesSpeed						 = [     0  ,     0  ,    30  ,     0  ,    0  ,     0  ];
	var levelWavesSeparationMin			     = [     0  ,     0  ,   250  ,     0  ,    0  ,     0  ];
	var levelWavesSeparationMax			     = [     0  ,     0  ,   600  ,     0  ,    0  ,     0  ];
	var levelWavesPositionXMin			     = [     0  ,     0  ,  -300  ,     0  ,    0  ,     0  ];
	var levelWavesPositionXMax			     = [     0  ,     0  ,   300  ,     0  ,    0  ,     0  ];
	var levelWavesSpeedMin			         = [     0  ,     0  ,    50  ,     0  ,    0  ,     0  ];
	var levelWavesSpeedMax			         = [     0  ,     0  ,   100  ,     0  ,    0  ,     0  ];
	var levelWavesChangeIntervalMin          = [     0  ,     0  ,     1  ,     0  ,    0  ,     0  ];
	var levelWavesChangeIntervalMax          = [     0  ,     0  ,     3  ,     0  ,    0  ,     0  ];


		// "oh yes! they float, Georgie.",
		// "those aren't mountains"

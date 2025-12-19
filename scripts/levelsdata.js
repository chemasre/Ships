    var levelCount = 5;
	
	var _jump = 0;
	var _back = 1;
	var _wave = 2;
	
	var levelMessages =
	[
		"",
		"those aren't mountains",
		"no compass can help me",
		"oh yes! they float, Georgie",
		"those aren't mountains"
	];
	
	
    var levelModes                           = [ _jump  , _wave  , _back  , _jump , _back  ];
    var levelDuration                        = [     3  ,   100  ,    10  ,   10  ,    10  ];
    var levelSpeedX                          = [  -400  ,  -500  ,  -500  , -700  ,  -700  ];
    var levelStickSpawnGroupSeparation       = [   300  ,   400  ,   400  ,  500  ,   500  ];
    var levelStickSpawnGroupChances          = [     2  ,     0  ,     3  ,    4  ,     4  ];
    var levelStickSpawnGroupMaxMembers       = [     2  ,     0  ,     3  ,    4  ,     4  ];
    var levelStickSpawnGroupMemberSeparation = [    80  ,    80  ,    80  ,   80  ,    80  ];    
    var levelStickTopPosY                    = [   290  ,   280  ,   280  ,  270  ,   270  ];
	var levelWavesSpeed						 = [     0  ,    30  ,    30  ,    0  ,     0  ];
	var levelWavesSeparationMin			     = [     0  ,   250  ,     0  ,    0  ,     0  ];
	var levelWavesSeparationMax			     = [     0  ,   600  ,     0  ,    0  ,     0  ];
	var levelWavesPositionXMin			     = [     0  ,  -300  ,     0  ,    0  ,     0  ];
	var levelWavesPositionXMax			     = [     0  ,   300  ,     0  ,    0  ,     0  ];
	var levelWavesSpeedMin			         = [     0  ,    50  ,     0  ,    0  ,     0  ];
	var levelWavesSpeedMax			         = [     0  ,   100  ,     0  ,    0  ,     0  ];
	var levelWavesChangeIntervalMin          = [     0  ,     1  ,     0  ,    0  ,     0  ];
	var levelWavesChangeIntervalMax          = [     0  ,     3  ,     0  ,    0  ,     0  ];

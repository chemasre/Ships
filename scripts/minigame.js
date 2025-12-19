    // Minigame
    
    var minigameFps = 60;
    var minigameTimeStep;
    
    var minigamePoints;
    var minigamePointsPerDistance = 0.1;
    var minigamePointsPerStick = 0;
	
	var minigameRecordPoints;
	var minigameRecordExists;
    
    var level = 0;
    var levelCount = 5;
	var levelMessages = ["", "those aren't mountains", "no compass can help me", "oh yes! they float, Georgie", "those aren't mountains"];
    
    var lmJump = 0;
    var lmBack = 1;
    var lmWaves = 2;

    var levelModes                           = [ lmJump,lmWaves, lmBack, lmJump, lmBack];
    var levelDuration                        = [    3  ,  100  ,   10  ,   10  ,   10  ];
    var levelSpeedX                          = [ -400  , -500  , -500  , -700  , -700  ];
    var levelStickSpawnGroupSeparation       = [  300  ,  400  ,  400  ,  500  ,  500  ];
    var levelStickSpawnGroupChances          = [    2  ,    0  ,    3  ,    4  ,    4  ];
    var levelStickSpawnGroupMaxMembers       = [    2  ,    0  ,    3  ,    4  ,    4  ];
    var levelStickSpawnGroupMemberSeparation = [   80  ,   80  ,   80  ,   80  ,   80  ];    
    var levelStickTopPosY                    = [  290  ,  280  ,  280  ,  270  ,  270  ];
	var levelWavesSpeed						 = [    0  ,   30  ,   30  ,    0  ,    0  ];
	var levelWavesSeparationMin			     = [    0  ,  250  ,    0  ,    0  ,    0  ];
	var levelWavesSeparationMax			     = [    0  ,  600  ,    0  ,    0  ,    0  ];
	var levelWavesPositionXMin			     = [    0  , -300  ,    0  ,    0  ,    0  ];
	var levelWavesPositionXMax			     = [    0  ,  300  ,    0  ,    0  ,    0  ];
	var levelWavesSpeedMin			         = [    0  ,   50  ,    0  ,    0  ,    0  ];
	var levelWavesSpeedMax			         = [    0  ,  100  ,    0  ,    0  ,    0  ];
	var levelWavesChangeIntervalMin          = [    0  ,    1  ,    0  ,    0  ,    0  ];
	var levelWavesChangeIntervalMax          = [    0  ,    3  ,    0  ,    0  ,    0  ];
    
	
	var levelChangeDuration = 3;
	
	var levelStatePlaying = 0;
    var levelStateChanging = 1;
	var levelStateStopped = 2;
    
	var levelState;
	
    var levelTimer;
    
    var pointsElement;
    var messageElement;
    
    var minigameState;
    var minigameStateWelcome    = 0;
    var minigameStatePlay       = 1;
    var minigameStateGameOver   = 2;
	
	var minigameSwitchNoSticks = false;
	var minigameSwitchNoSound = false;
    
    // Menus
    var gameOverElement;
    var gameOverScore;
    var gameOverRestart;
	var gameOverRestartBlinkOn;
	var gameOverRestartBlinkTimer;
    
    var gameOverRestartTimer;
    var gameOverRestartDelay = 0.5;
    
    var welcomeElement;
	var welcomeScore;
	var welcomeStart;
	var welcomeStartBlinkOn;
	var welcomeStartBlinkTimer;
	

	var menuBlinkInterval = 0.6;
    
    // Input
    
    var inputActionWasPressed;
    
    // Sound
    
    var soundIsPlaying;
    var soundAmbientMusicVolume = 0.3;
    var soundAmbientMusicElement;
    var soundJumpVolume = 0.15;
    var soundJumpElement;    
    var soundAmbientVolume = 1;
    var soundAmbientElement;
    
    // Scene
    
    var sceneTargetSpeedX;
    var sceneAccelerationX = 200;
    var sceneSpeedX;
    
    var sceneWidth = 900;
    var sceneHeight = 360;
    
    // Parallax
    
    var parallaxObjectElements;
    var parallaxObjectsX;
    var parallaxObjectsSpeedFactor;
	var parallaxObjectsSpeedFactorMin = 0.5;
	var parallaxObjectsSpeedFactorMax = 1.5;
    var parallaxNumObjects = [4, 2];
    var parallaxNumPlanes = 2;
    
    var parallaxMinSeparation = [600, 700];
    var parallaxMaxSeparation = [1200, 1500];
    var parallaxSeparation = [0, 0];
    
    var parallaxSpeedFactor = [0.2, 0.05];
    
    var parallaxLastSpawnX = [0, 0];
    
    
    // Ship

    var shipStartPosX = 130;
    var shipStartPosY = 260;
    
    var shipJumping;
    var shipJumpSpeed = -650;
    var shipJumpBackgroundSpeed = -250;
    var shipSpeedY = 0;
    var shipGravity = 2000.0;
    
    var shipInForeground;
    var shipForegroundFilter = "sepia(0%) saturate(100%) brightness(100%) hue-rotate(0deg)";
    var shipForegroundTransform = "translate(0%, 0%)";
    var shipBackgroundFilter = "sepia(10%) saturate(30%) brightness(40%) hue-rotate(50deg)";
    var shipBackgroundTransform = "translate(10%, 10%) scale(80%)";
	
	var shipJumpForwardSpeedX = 200;
	var shipJumpForwardSpeedY = -100;
	
	var shipReturnSpeedX = -100;
	
	var shipSpeedX = 0;
    
    var shipPosX;
    var shipPosY;
    var shipWidth = 147;
    var shipHeight = 68;
    
    var shipCollisionWidth = 30
    var shipDead;
    var shipSinkSpeed = 100;
    
    var shipElement;
    
    // Sticks
    
    var stickKillDistance = 1200;
    
    var stickSpawnGroupMaxMissedChances = 3;

    var stickElements;
    var numSticks = 20;
    var stickWidth = 51;
    var stickHeight = 155;
    
    var stickPositionsX;
    var stickPositionsY;

    var stickInForeground;    
    var stickForegroundFilter = "sepia(0%) saturate(100%) brightness(100%) hue-rotate(0deg)";
    var stickForegroundTransform = "translate(0%, 0%)";
    var stickBackgroundFilter = "sepia(10%) saturate(30%) brightness(80%) hue-rotate(50deg)";
    var stickBackgroundTransform = "translate(5%, 5%) scale(98%)";

    var stickLastSpawnGroupChanceX;
    var stickSpawnGroupMissedChances;
    
    // Waves
    
    var waveElements;
    var numWaves = 2;
    var numWaveFrames = 3;
	var waveActive;
    var waveAnimationTimers;
    var waveAnimationIntervalMin = 0.2;
    var waveAnimationIntervalMax = 0.2;
    var waveMainFrameOpacity = 1.0;
    var waveOtherFrameOpacity = 0;    
    var waveFrames;
	var waveScaleFactor = 0.7;
	var waveWidth = 543;
	
	var wavesStartPositionX = -300;
	var wavesStartSeparation = 900;
	
    var wavesPositionX = 0;
    var wavesSeparation = 0;
	
	var wavesTargetPositionX = -300;
	var wavesTargetSeparation = 1200;
	var wavesCollisionOffset = 307 * 0.7;
	var wavesCollisionWidth = 100 * 0.7;
	var wavesSpeed = 10;
	var wavesChangeTimer = 2;
    
    var shipElement;
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// PLAY STATE //////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    
    function MinigameInitPlay()
    {
		var storedRecord = localStorage.getItem("record");
		console.log("Recovered record " + storedRecord);
		
		if(storedRecord != null) { minigameRecordPoints = parseInt(storedRecord); minigameRecordExists = true; }
		else { minigameRecordPoints = 0; minigameRecordExists = false; }
		
        pointsElement = document.getElementById("points");
        messageElement = document.getElementById("message");
        shipElement = document.getElementById("ship");
        

        stickElements = new Array();
        stickPositionsX = new Array();
        stickPositionsY = new Array();
        stickInForeground = new Array();
        
        for(var i = 0; i < numSticks; i++)
        {
            stickElements.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX.push(0);
            stickPositionsY.push(0);
            stickInForeground.push(true);
            
            stickElements[i].style.display = "none";
        }
        
        parallaxObjectElements = new Array();
        parallaxObjectsX = new Array();
        parallaxObjectsSpeedFactor = new Array();
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxObjectElements.push(new Array());
            parallaxObjectsX.push(new Array());
            parallaxObjectsSpeedFactor.push(new Array());
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjectElements[i].push(document.getElementById("parallax" + (i + 1) + "Object" + (j + 1)));
                
                parallaxObjectElements[i][j].style.display = "none";
                parallaxObjectsX[i][j] = 0;
				parallaxObjectsSpeedFactor[i][j] = 0;
            }
        }
        
        waveElements = new Array();
        waveAnimationTimers = new Array();
		waveActive = new Array();
        waveFrames = new Array();
        for(var i = 0; i < numWaves; i++)
        {
			waveActive.push(false);
            waveElements.push(new Array());
            for(var j = 0; j < numWaveFrames; j++)
            {
                waveElements[i].push(document.getElementById("wave" + (i + 1) + "" + (j + 1)));
				
                waveElements[i][j].style.display = "none";
            }
        }
        
        pointsElement.style.opacity = 0;            
        messageElement.style.opacity = 0;            
            
    }
    
    function MinigameEnterPlay()
    {
        // Init minigame
        
        level = 0;
        levelTimer = levelDuration[0];
		
		levelState = levelStatePlaying;
    
        minigamePoints = 0;
        pointsElement.innerHTML = 0;        
        pointsElement.style.opacity = 1;
		
		messageElement.style.opacity = 0;
        
        // Init scene 
        
        sceneSpeedX = 0;
        sceneTargetSpeedX = levelSpeedX[0];        
        
        // Init parallax
        
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxLastSpawnX[i] = 0;

            parallaxSeparation[i] = MinigameRandomRange(parallaxMinSeparation[i], parallaxMaxSeparation[i]);
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjectElements[i][j].style.display = "none";
            }
        }

        // Init ship
        
        shipElement.style.display = "block";
        
        shipPosX = shipStartPosX;
        shipPosY = shipStartPosY;
        
        shipElement.style.left = shipPosX + "px";
        shipElement.style.top = shipPosY + "px";
        
        shipJumping = false;
        shipSpeedY = 0;
        shipElement.style.rotate = "0deg"; 
        
        MinigameSetShipInForeground(true);

        shipDead = false;

        // Init sticks
        
        for(var i = 0; i < numSticks; i++)
        {
            stickElements.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX[i] = sceneWidth;
            stickPositionsY[i] = levelStickTopPosY[level];
            
            stickElements[i].style.left = stickPositionsX[i] + "px";
            stickElements[i].style.top = stickPositionsY[i] + "px";
            
            stickElements[i].style.display = "none";
            
        }
        
        stickElements[0].style.display = "block";
        if(minigameSwitchNoSticks) { stickElements[0].style.display = "none"; }
        stickPositionsX[0] = sceneWidth;
        stickPositionsY[0] = levelStickTopPosY[level];
        stickInForeground[0] = true;
        stickElements[0].style.filter = stickForegroundFilter;
        stickElements[0].style.transform = stickForegroundTransform;
        stickElements[0].style.zIndex = 0;        
        
        stickLastSpawnGroupChanceX = sceneWidth;
        stickSpawnGroupMissedChances = 0;
        
        // Init waves

        for(var i = 0; i < numWaves; i++)
        {
			waveActive[i] = false;
            for(var j = 0; j < numWaveFrames; j++)
            {
                waveElements[i][j].style.display = "block";
				waveElements[i][j].style.transform = "scale(0%)";
            }
        }
        
        
    
    }
    
    function MinigameExitPlay()
    {
        shipElement.style.display = "none";
        shipElement.style.rotate = "0deg";
        
        pointsElement.style.opacity = 0;
		
		var storeRecord = false;
        
        if(minigameRecordExists)
        {
            if(minigamePoints > minigameRecordPoints)
            {
				storeRecord = true;
            }
        }
		else
		{
			storeRecord = true;
		}
		
		if(storeRecord)
		{
			localStorage.setItem("record", minigamePoints.toString());
			console.log("Stored: " + minigamePoints.toString());
			
		}

		// Finish waves
		
		for(var i = 0; i < numWaves; i++)
        {
			waveActive[i] = false;
            for(var j = 0; j < numWaveFrames; j++)
            {
                waveElements[i][j].style.display = "none";
            }
        }
	
		ApplyCSSChangesNow();
    }
	
	function ApplyCSSChangesNow()
	{
		// See https://stackoverflow.com/questions/45319754/restart-css-transition
		ship.getBoundingClientRect();		
	}
    
    function MinigameSetShipInForeground(value)
    {
        if(value)
        {
            shipElement.style.filter = shipForegroundFilter;
            shipElement.style.transform = shipForegroundTransform;
            shipElement.style.zIndex = 0;
        }
        else
        {
            shipElement.style.filter = shipBackgroundFilter;
            shipElement.style.transform = shipBackgroundTransform;
            shipElement.style.zIndex = -1;            
        }
        
        shipInForeground = value;
        
    }
	    
    function MinigameFindRandomSpawnable(array)
    {
		return MinigameFindSpawnableElementFrom(array, MinigameRandomRangeInt(0, array.length));
    }

    function MinigameFindSpawnableElementFrom(array, fromIndex)
    {
        var found = false;
        var i = 0;
        var result = -1;
        while(!found && i < array.length)
        {
			var index = (fromIndex + i) % array.length;
			
            if(array[index].style.display == "none")
            {
                found = true;
                result = index;
            }
            else
            {
                i++;
            }
        }
        
        return result;
    }

    function MinigameFindSpawnableElement(array)
    {
        return MinigameFindSpawnableElementFrom(array, 0);
    }

    function MinigameUpdatePlay()
    {
        // Update level
        
        if(shipDead)
        {
            messageElement.style.opacity = 0;
            levelState = levelStateStopped;
        }
        else if(level < levelCount - 1)
        {
            if(levelState == levelStatePlaying)
            {
                levelTimer -= minigameTimeStep;
                if(levelTimer < 0)
                {
                    levelState = levelStateChanging;
					levelTimer = levelChangeDuration;
					messageElement.style.opacity = 1;
					messageElement.innerHTML = "<div style='font-size:30px'>" + levelMessages[level + 1] + "</div>"
                    console.log("Changing level");
					
					if(levelModes[level] == lmWaves)
					{
						// Exit wave mode level
						
						for(var i = 0; i < numWaves; i++)
						{				
							waveActive[i] = false;
							
							for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
							{
								waveElements[i][frameIndex].style.transform = "scale(0%)";
							}		
						}
						
					}					
                }

            }
            else if(levelState == levelStateChanging)
            {
				var levelMode = levelModes[level];
				
                levelTimer -= minigameTimeStep;
				
                if(((levelMode == lmBack || levelMode == lmJump) && stickLastSpawnGroupChanceX < -stickWidth ||
				     levelMode == lmWaves) && levelTimer <= 0)
                {
					messageElement.style.opacity = 0;
                    levelState = levelStatePlaying;
                    levelTimer = levelDuration[level + 1];
                    sceneTargetSpeedX = levelSpeedX[level + 1];
					
					if(levelModes[level + 1] == lmWaves)
					{
						// Enter wave mode level
						
						wavesPositionX = wavesStartPositionX;
						wavesSeparation = wavesStartSeparation;
						
						wavesTargetPositionX = wavesStartPositionX;
						wavesTargetSeparation = wavesStartSeparation;
						wavesChangeTimer = MinigameRandomRange(levelWavesChangeIntervalMin[level + 1], levelWavesChangeIntervalMax[level + 1]);  
						
						for(var i = 0; i < numWaves; i++)
						{
							waveActive[i] = true;
							
							waveAnimationTimers[i] = MinigameRandomRange(waveAnimationIntervalMin, waveAnimationIntervalMax);
							waveFrames[i] = MinigameRandomRangeInt(0, numWaveFrames);
							
							for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
							{
								waveElements[i][frameIndex].style.display = "block";
								waveElements[i][frameIndex].style.opacity = (frameIndex == waveFrames[i] ? waveMainFrameOpacity : waveOtherFrameOpacity);                
								waveElements[i][frameIndex].style.left = wavesPositionX - waveWidth / 2 * (1 - waveScaleFactor) + (i * wavesSeparation) + "px";
								waveElements[i][frameIndex].style.transform = "scale(" + (waveScaleFactor * 100) + "%)";
							}		
						}

					}
					
                    level ++;
                    
                    
                    console.log("Increased level");
                }
                            
            }

        }
        
        // Update points
        
        if(!shipDead)
        {
            minigamePoints += minigamePointsPerDistance *
                              Math.abs(sceneSpeedX) * minigameTimeStep;
                              
            pointsElement.innerHTML = Math.floor(minigamePoints / 10) * 10;
        }
        
        // Update scene
        
        if(sceneSpeedX < sceneTargetSpeedX)
        {
            sceneSpeedX += sceneAccelerationX * minigameTimeStep;
            if(sceneSpeedX > sceneTargetSpeedX) { sceneSpeedX = sceneTargetSpeedX; }
        }
        else if(sceneSpeedX > sceneTargetSpeedX)
        {
            sceneSpeedX -= sceneAccelerationX * minigameTimeStep;
            if(sceneSpeedX < sceneTargetSpeedX) { sceneSpeedX = sceneTargetSpeedX; }
        }
                              
        
        // Update parallax
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxLastSpawnX[i] += sceneSpeedX * parallaxSpeedFactor[i] * minigameTimeStep;
            
            if(sceneWidth - parallaxLastSpawnX[i] > parallaxSeparation[i])
            {				
                var index = MinigameFindRandomSpawnable(parallaxObjectElements[i]);
                
                if(index >= 0)
                {
                    console.log("Spawning object at plane " + (i + 1));
                    
                    parallaxObjectsX[i][index] = sceneWidth;
					parallaxObjectsSpeedFactor[i][index] = MinigameRandomRange(parallaxObjectsSpeedFactorMin, parallaxObjectsSpeedFactorMax);
                    parallaxObjectElements[i][index].style.display = "block";
                    
                    parallaxLastSpawnX[i] = sceneWidth;
                    
                    parallaxSeparation[i] = MinigameRandomRange(parallaxMinSeparation[i], parallaxMaxSeparation[i]);

                }
                
            }
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                if(parallaxObjectElements[i][j].style.display != "none")
                {
                    parallaxObjectsX[i][j] += sceneSpeedX * parallaxSpeedFactor[i] * parallaxObjectsSpeedFactor[i][j] * minigameTimeStep;
                    
                    if(parallaxObjectsX[i][j] < -900) { parallaxObjectElements[i][j].style.display = "none"; }
                    
                    parallaxObjectElements[i][j].style.left = parallaxObjectsX[i][j] + "px";
                }
            }
        }

        
        // Update ship
        
        var isBackgroundMode = (levelModes[level] == lmBack);
		var isWavesMode = (levelModes[level] == lmWaves);
		var isJumpMode = (levelModes[level] == lmJump);
        
        if(inputActionWasPressed && !shipJumping && !shipDead)
        {
			if(isJumpMode)
			{
				shipSpeedY = shipJumpSpeed;
				shipElement.style.rotate = "-10deg";  
			}
			else if(isBackgroundMode)
			{
				shipSpeedY = shipJumpBackgroundSpeed;
				shipElement.style.rotate = "-10deg";  
			}
			else // isWavesMode
			{
				shipSpeedX = shipJumpForwardSpeedX;
				shipSpeedY = shipJumpForwardSpeedY;
				shipElement.style.rotate = "-3deg";  
			}
			
            shipJumping = true;
            soundJumpElement.play();

            if(shipInForeground) { MinigameSetShipInForeground(false); }
            else { MinigameSetShipInForeground(true); }
			

        }    
        
        if(!shipInForeground && !isBackgroundMode) 
        {
            MinigameSetShipInForeground(true);
        }
		
		shipPosX += shipSpeedX * minigameTimeStep;			
		if(shipPosX < shipStartPosX) { shipPosX = shipStartPosX; shipSpeedX = 0; }
	

        if(shipJumping)
        {		
            shipPosY += shipSpeedY * minigameTimeStep;
            shipSpeedY += shipGravity * minigameTimeStep;
            
            if(shipSpeedY >= 0 && shipPosY > shipStartPosY)
            {
                shipPosY = shipStartPosY;
                shipSpeedY = 0;

                shipJumping = false;
                shipElement.style.rotate = "0deg";
				
				if(isWavesMode)
				{
					shipSpeedX = shipReturnSpeedX;
				}

            }
        }
        else if(shipDead)
        {
			if(shipPosY < sceneHeight)
			{
				shipPosY += shipSinkSpeed * minigameTimeStep;
				shipElement.style.rotate = "70deg";
			}
        }
        
		if(!shipDead)
		{
			var shipCollided = false;
			
			for(var i = 0; i < numSticks; i++)
			{
				if(stickElements[i].style.display != "none")
				{
					if(Math.abs(stickPositionsX[i] + stickWidth / 2 - (shipPosX + shipWidth / 2)) < shipCollisionWidth &&
						shipPosY + shipHeight >= stickPositionsY[i] && shipInForeground == stickInForeground[i])
					{
						shipCollided = true;
					}
						
				}
			}
			
			for(var i = 0; i < numWaves; i++)
			{
				if(waveActive[i])
				{
					var waveLeft = wavesPositionX + (i * wavesSeparation) + wavesCollisionOffset - wavesCollisionWidth / 2;
					var waveRight = waveLeft + wavesCollisionWidth;
					var shipLeft = shipPosX + shipWidth / 2 - shipCollisionWidth / 2;
					var shipRight = shipLeft + shipCollisionWidth;
					
					
					if(!(shipLeft > waveRight || shipRight < waveLeft))
					{
						shipCollided = true;
					}
				}
			}
			
			if(shipCollided)
			{
				shipDead = true;
				if(shipSpeedY < 0) { shipSpeedY = Math.abs(shipSpeedY); }
				sceneTargetSpeedX = 0;
				minigameState = minigameStateGameOver;
				MinigameEnterGameOver();
				
			}

		}
        
        shipElement.style.left = shipPosX + "px";
        shipElement.style.top = shipPosY + "px";    

        // Update sticks
		
		if(levelModes[level] == lmJump || levelModes[level] == lmBack)
		{
			var spawnGroupChance = Math.floor((Math.random() * 1000)) % levelStickSpawnGroupChances[level];

			if(sceneWidth - stickLastSpawnGroupChanceX > levelStickSpawnGroupSeparation[level] && levelState == levelStatePlaying)
			{
				var spawnableIndex = MinigameFindSpawnableElement(stickElements);
				
				if(spawnableIndex >= 0)
				{
					if((spawnGroupChance == 0 || stickSpawnGroupMissedChances >= stickSpawnGroupMaxMissedChances))
					{
						var spawnInForeground = isBackgroundMode ? (MinigameRandomRangeInt(0, 2) == 0) : true;
						
						stickElements[spawnableIndex].style.display = "block";
						if(minigameSwitchNoSticks) { stickElements[spawnableIndex].style.display = "none"; }

						var groupMembers = Math.floor((Math.random() * 1000)) % levelStickSpawnGroupMaxMembers[level];
						
						//console.log("Spawned group with " + (groupMembers + 1) + " members");
						
						for(var i = 0; i < groupMembers; i++)
						{
							var groupMemberIndex = MinigameFindSpawnableElement(stickElements);
							if(groupMemberIndex >= 0)
							{
								stickPositionsX[groupMemberIndex] = sceneWidth + levelStickSpawnGroupMemberSeparation[level] * (i + 1);
								stickPositionsY[groupMemberIndex] = levelStickTopPosY[level];   
								stickInForeground[groupMemberIndex] = spawnInForeground;
								stickElements[groupMemberIndex].style.filter = spawnInForeground ? stickForegroundFilter : stickBackgroundFilter;
								stickElements[groupMemberIndex].style.transform = spawnInForeground ? stickForegroundTransform : stickBackgroundTransform;
								stickElements[groupMemberIndex].style.zIndex = spawnInForeground ? 0 : -1;
								stickElements[groupMemberIndex].style.display = "block";
								if(minigameSwitchNoSticks) { stickElements[groupMemberIndex].style.display = "none"; }
							}
						}
						
						stickSpawnGroupMissedChances = 0;
					}
					else
					{
						stickElements[spawnableIndex].style.display = "none";
						
						stickSpawnGroupMissedChances ++;
					}
					stickPositionsX[spawnableIndex] = sceneWidth;
					stickPositionsY[spawnableIndex] = levelStickTopPosY[level];
					stickInForeground[spawnableIndex] = spawnInForeground;
					stickElements[spawnableIndex].style.filter = spawnInForeground ? stickForegroundFilter : stickBackgroundFilter;
					stickElements[spawnableIndex].style.transform = spawnInForeground ? stickForegroundTransform : stickBackgroundTransform;
					stickElements[spawnableIndex].style.zIndex = spawnInForeground ? 0 : -1;
					stickLastSpawnGroupChanceX = sceneWidth;
				}
			
			}

			stickLastSpawnGroupChanceX += sceneSpeedX * minigameTimeStep;
			
			for(var i = 0; i < numSticks; i++)
			{
				if(stickElements[i].style.display != "none")
				{
					var behindShipBefore = (stickPositionsX[i] < shipPosX);
				
					stickPositionsX[i] += sceneSpeedX * minigameTimeStep;
				
					var behindShipAfter = (stickPositionsX[i] < shipPosX);
					
					if(!behindShipBefore && behindShipAfter && !shipDead) { minigamePoints += minigamePointsPerStick; }

					if(stickPositionsX[i] <= -stickKillDistance)
					{
						stickElements[i].style.display = "none";
					}
					else
					{
						stickElements[i].style.left = stickPositionsX[i] + "px";
						stickElements[i].style.top = stickPositionsY[i] + "px";
					}
				}
			}
		}

        
        // Update waves
        
		if(levelModes[level] == lmWaves)
		{
			wavesChangeTimer -= minigameTimeStep;
			
			if(wavesChangeTimer <= 0)
			{
				wavesTargetPositionX = MinigameRandomRange(levelWavesPositionXMin[level], levelWavesPositionXMax[level]);
				wavesTargetSeparation = MinigameRandomRange(levelWavesSeparationMin[level], levelWavesSeparationMax[level]);
				wavesSpeed = MinigameRandomRange(levelWavesSpeedMin[level], levelWavesSpeedMax[level]);
				wavesChangeTimer = MinigameRandomRange(levelWavesChangeIntervalMin[level], levelWavesChangeIntervalMax[level]);
			}
			
			if(wavesPositionX < wavesTargetPositionX)
			{
				wavesPositionX += wavesSpeed * minigameTimeStep;
				if(wavesPositionX > wavesTargetPositionX) { wavesPositionX = wavesTargetPositionX; }
			}
			else if(wavesPositionX > wavesTargetPositionX)
			{
				wavesPositionX -= wavesSpeed * minigameTimeStep;
				if(wavesPositionX < wavesTargetPositionX) { wavesPositionX = wavesTargetPositionX; }			
			}
			
			if(wavesSeparation < wavesTargetSeparation)
			{
				wavesSeparation += wavesSpeed * minigameTimeStep;
				if(wavesSeparation > wavesTargetSeparation) { wavesSeparation = wavesTargetSeparation; }
			}
			else if(wavesSeparation > wavesTargetSeparation)
			{
				wavesSeparation -= wavesSpeed * minigameTimeStep;
				if(wavesSeparation < wavesTargetSeparation) { wavesSeparation = wavesTargetSeparation; }			
			}

			for(var i = 0; i < numWaves; i++)
			{
				// Update wave position

				for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
				{
					waveElements[i][frameIndex].style.left = wavesPositionX - waveWidth / 2 * (1 - waveScaleFactor) + (i * wavesSeparation) + "px";
					
				}
				
				// Update wave animation
				
				waveAnimationTimers[i] -= minigameTimeStep;
				if(waveAnimationTimers[i] < 0)
				{
					waveFrames[i]++;
					if(waveFrames[i] >= numWaveFrames) { waveFrames[i] = 0; }
					
					for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
					{
						waveElements[i][frameIndex].style.opacity = (frameIndex == waveFrames[i] ? waveMainFrameOpacity : waveOtherFrameOpacity);
						
					}

					waveAnimationTimers[i] = MinigameRandomRange(waveAnimationIntervalMin, waveAnimationIntervalMax);
				}
			}
		}
		
    
    }    

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// WELCOME STATE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    
    function MinigameInitWelcome()
    {
        welcomeElement = document.getElementById("welcome");
        welcomeElement.style.opacity = 0;
		
        welcomeScore = document.getElementById("welcomeScore");

		welcomeStart = document.getElementById("welcomeStart");
		welcomeStart.style.opacity = 0;
    }
    
    function MinigameEnterWelcome()
    {  
		welcomeStartBlinkOn = true;
		welcomeStartBlinkTimer = menuBlinkInterval;
	
        welcomeElement.style.opacity = 1;

		if(minigameRecordExists)
		{
			welcomeScore.style.display = "block";
			welcomeScore.innerHTML = "farthest " + (Math.floor(minigameRecordPoints / 10) * 10);
		}
		else
		{
			welcomeScore.style.display = "none";			
		}
        
        welcomeStart.style.opacity = 1;
    }
    
    function MinigameFinishWelcome()
    {
        welcomeElement.style.opacity = 0;
        console.log("Finishing welcome");
    }
    
    function MinigameUpdateWelcome()
    {
		if(welcomeStartBlinkOn) { welcomeStart.style.opacity = 1; }
		else { welcomeStart.style.opacity = 0.6; }
		welcomeStartBlinkTimer -= minigameTimeStep;
		if(welcomeStartBlinkTimer <= 0)
		{   welcomeStartBlinkOn = !welcomeStartBlinkOn;
			welcomeStartBlinkTimer = menuBlinkInterval;
		}
				
        if(inputActionWasPressed)
        {
            MinigameFinishWelcome();
            MinigameEnterPlay();
            minigameState = minigameStatePlay;
            
            if(!soundIsPlaying)
            {
                soundAmbientMusicElement.play();
                soundAmbientElement.play();
                soundIsPlaying = true;
            }

        }
    }
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// GAMEOVER STATE //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////    
    
    function MinigameInitGameOver()
    {
        gameOverElement = document.getElementById("gameOver");
        gameOverScore = document.getElementById("gameOverScore");
        gameOverRestart = document.getElementById("gameOverRestart");
        gameOverElement.style.opacity = 0;
        gameOverRestart.style.opacity = 0;
    }
        
    function MinigameEnterGameOver()
    {
	    pointsElement.style.opacity = 0;            
	
        gameOverElement.style.opacity = 1;        
        gameOverScore.innerHTML = "sailed " + (Math.floor(minigamePoints / 10) * 10);

		gameOverRestartBlinkOn = true;
		gameOverRestartBlinkTimer = menuBlinkInterval;

        gameOverRestart.style.opacity = 0;
		
		console.log("Entering game over");
        
        gameOverRestartTimer = gameOverRestartDelay;
                             
    
    }
    
    function MinigameExitGameOver()
    {
        gameOverElement.style.opacity = 0;
        gameOverRestart.style.opacity = 0;
    }
        
    
    function MinigameUpdateGameOver()
    {
        if(shipPosY > sceneHeight)
        {
            shipElement.style.rotate = "0deg";
			
            if(gameOverRestartTimer > 0)
            {
                gameOverRestartTimer -= minigameTimeStep;
            }
            else
            {
				if(gameOverRestartBlinkOn) { gameOverRestart.style.opacity = 1; }
				else { gameOverRestart.style.opacity = 0.6; }
				gameOverRestartBlinkTimer -= minigameTimeStep;
				if(gameOverRestartBlinkTimer <= 0)
				{   gameOverRestartBlinkOn = !gameOverRestartBlinkOn;
					gameOverRestartBlinkTimer = menuBlinkInterval;
				}
                
                if(inputActionWasPressed)
                {
                    MinigameExitPlay();
                    MinigameExitGameOver();
                    minigameState = minigameStatePlay;
                    MinigameEnterPlay();
                    console.log("Going to play");
                }
                
            }
        }
    }    
    
    
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////// MINIGAME /////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////    
    
    
    function MinigameInit()
    {    
        
        soundJumpElement = document.getElementById("jumpSound");
        soundJumpElement.volume = soundJumpVolume;
		
		if(minigameSwitchNoSound) { soundJumpElement.volume = 0; }

        soundAmbientMusicElement = document.getElementById("ambientMusic");
        soundAmbientMusicElement.volume = soundAmbientMusicVolume;
        soundAmbientMusicElement.loop = true;

        soundAmbientElement = document.getElementById("ambientSound");
        soundAmbientElement.volume = soundAmbientVolume;
        soundAmbientElement.loop = true;

		if(minigameSwitchNoSound)
        {
            soundAmbientMusicElement.volume = 0;
            soundAmbientElement.volume = 0;
        }

        soundIsPlaying = false;
        
        MinigameInitPlay();        
        MinigameInitWelcome();
        MinigameInitGameOver();
        
        MinigameEnterWelcome();
        minigameState = minigameStateWelcome;
        
        document.addEventListener('keydown', MinigameOnKeyDown);
        document.addEventListener('click', MinigameOnClick);
        
        
        minigameTimeStep = 1.0 / minigameFps;
        window.setTimeout(MinigameUpdate, 1000.0 / minigameFps );
    }
   
    function MinigameUpdate()
    {
        if(minigameState == minigameStateWelcome)
        {
            MinigameUpdateWelcome();  
        }
        else if(minigameState == minigameStatePlay)
        {
            MinigameUpdatePlay();
        }
        else // minigameState == minigameStateGameOver
        {
            MinigameUpdatePlay();
            MinigameUpdateGameOver();
        }
    
        inputActionWasPressed = false;

        window.setTimeout(MinigameUpdate, 1000.0 / minigameFps );
    }
    
    function MinigameOnKeyDown(e)
    {
        if(e.key == " ")
        {
            inputActionWasPressed = true;
        }
    }
    
    function MinigameOnClick(e)
    {
        inputActionWasPressed = true;
    }
	
	function MinigameRandomRange(a, b)
	{
		return a + (b - a) * Math.random();		
	}

	function MinigameRandomRangeInt(a, b)
	{
		var r = a + Math.floor((b - a) * Math.random());
		
		if(r == b) { r = r - 1; }
		
		return r;
		
	}

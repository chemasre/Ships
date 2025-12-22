    // Minigame
    
    var minigameFps = 60;
    var minigameTimeStep;
    
    var minigamePoints;
    var minigamePointsPerDistance = 0.1;
    var minigamePointsPerStick = 0;
	
	var minigameRecordPoints;
	var minigameRecordExists;
    
    var level = 0;
    
    var lmNull = 0;
    var lmJump = 1;
    var lmBack = 2;
    var lmWaves = 3;
    var lmEnding = 4;
	
	var levelMessageDuration = 3;  
	
	var levelStatePlaying = 0;
    var levelStateMessage = 1;
    var levelStateWait = 2;
	var levelStateStopped = 3;
    
	var levelState;
	
    var levelTimer;
    
    var pointsElement;
    var messageElement;
    var helpElement;
        
    var helpImageElements;
    var helpDisplayed;
    var helpTextElement;
    var helpTimer;
    
    var helpDuration = 3;
    
    var waitDuration = 1.5;
    
    var helpTexts = ["Click to jump", "Click to switch plane", "Click to go forward"];

    var minigameState;
    var minigameStateWelcome    = 0;
    var minigameStatePlay       = 1;
    var minigameStateGameOver   = 2;
	
    var minigameSwitchFastForward = true;
    var minigameSwitchNoDamage = false;
	var minigameSwitchNoSticks = false;
	var minigameSwitchNoSound = false;
    
    var minigameSwitchFastForwardPressed;
    var minigameSwitchFastForwardSavedTimeStep;
    var minigameSwitchFastForwardMultiplier = 3;
    
    var zIndexParallaxObject = -2;
    var zIndexShipForeground = 0;
    var zIndexShipBackground = -1;
    var zIndexSticksForeground = 0;    
    var zIndexSticksBackground = -1;    
    
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
    var welcomeDisclaimer;
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
    
    // Glow
    
    var glowBackgroundElement;
    var glowForegroundElement;
    
    // Parallax
    
    var parallaxObjectElements;
    var parallaxObjectsX;
    var parallaxObjectsSpeedFactor;
	var parallaxObjectsSpeedFactorMin = 0.5;
	var parallaxObjectsSpeedFactorMax = 1.5;
    
    var parallaxThemeFair = 0;
    
    var parallaxNumThemes = 1;
    
    var parallaxMinSeparation = [1200, 1600];
    var parallaxMaxSeparation = [2400, 3200];
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
    
    // Ending
    
    var endingHopeElement;
	var endingHopePositionX;
	var endingHopePositionXLeft = 347;
	var endingHopePositionXRight = 900;
	var endingHopeDone = false;
	var endingShipSpeedX = 150;
	var endingShipPositionXRight = 327;
	var endingLetterElement;	
    var endingLetterPositionY;
    var endingLetterPositionYLow = 236;
    var endingLetterPositionYHigh = -440;
    var endingLetterSpeed = -20;
	var endingLetterDone = false;

    var endingLetterWait = 3;
	var endingLetterWaitDone = false;

	var endingLetterFadeDuration = 1.0;
	var endingLetterFadeDone = false;
    var endingHopeHandPositionX;
    
    var endingStateHope = 0;
	var endingStateShip = 1;
    var endingStateLetter = 2;
    var endingStateDone = 3;
    
    var endingState;
    
    var endingTimer;
	
	// Fader
	
	var faderElement;
	var fadeTimer;
	var fadeOpacity = 0.5;
	var fadeDuration = 0.5;
    
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
        helpElement = document.getElementById("help");
        
        helpImageElements = new Array()
        
        helpImageElements.push(document.getElementById("help1"));
        helpImageElements.push(document.getElementById("help2"));
        helpImageElements.push(document.getElementById("help3"));
        
        helpDisplayed = new Array();
        
        helpDisplayed.push(false);
        helpDisplayed.push(false);
        helpDisplayed.push(false);
        
        for(var i = 0; i < helpImageElements.length; i++)
        {
            helpImageElements[i].style.display = "none";
        }
        
        helpTextElement = document.getElementById("helpText");
        
        
        // Init sticks

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
        
        glowForegroundElement = document.getElementById("glowForeground");
        glowBackgroundElement = document.getElementById("glowBackground");
        
        glowForegroundElement.style.opacity = 0;        
        glowBackgroundElement.style.opacity = 0;        
        
        
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
                
                parallaxObjectElements[i][j].style.transformOrigin = parallaxObjectsCenterX[i][j] + "px " + parallaxObjectsCenterY[i][j] + "px";
                
                parallaxObjectElements[i][j].style.display = "none";
                parallaxObjectsX[i][j] = 0;
				parallaxObjectsSpeedFactor[i][j] = 0;
            }
        }
        
        // Init waves
        
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
        
        // Init ending 
        
        endingHopeElement = document.getElementById("hope");
        endingLetterElement = document.getElementById("letter");
        
        endingHopeElement.style.display = "none";
        endingHopeElement.style.opacity = 0;

        endingLetterElement.style.display = "none";
        endingLetterElement.style.opacity = 0;
        
        pointsElement.style.opacity = 0;            
        messageElement.style.opacity = 0;            
        helpElement.style.opacity = 0;            
            
    }
    
    function MinigameEnterPlay()
    {
        // Start minigame
        
        level = 0;
        levelTimer = levelDuration[0];
		
		levelState = levelStatePlaying;
    
        minigamePoints = 0;
        pointsElement.innerHTML = 0;        
        pointsElement.style.opacity = 1;
		
		messageElement.style.opacity = 0;
        
        
        helpElement.style.opacity = 0;            
        
        for(var i = 0; i < helpDisplayed.length; i++)
        {
            helpDisplayed[i] = false;
        }

        // Start scene 
        
        sceneSpeedX = 0;
        sceneTargetSpeedX = levelSpeedX[0];        
        
        // Start Glow
        
        glowForegroundElement.style.opacity = levelGlowForeground[0];
        glowBackgroundElement.style.opacity = levelGlowBackground[0];
        
        // Start parallax
        
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxLastSpawnX[i] = 0;

            parallaxSeparation[i] = MinigameRandomRange(parallaxMinSeparation[i], parallaxMaxSeparation[i]);
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjectElements[i][j].style.display = "none";
            }
        }

        // Start ship
        
        shipElement.style.display = "block";
		shipElement.style.opacity = 1;
        
        shipPosX = shipStartPosX;
        shipPosY = shipStartPosY;
        
        shipElement.style.left = shipPosX + "px";
        shipElement.style.top = shipPosY + "px";
        
        shipJumping = false;
        shipSpeedY = 0;
        shipElement.style.rotate = "0deg"; 
        
        MinigameSetShipInForeground(true);

        shipDead = false;

        // Start sticks
        
        for(var i = 0; i < numSticks; i++)
        {
            stickElements.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX[i] = sceneWidth;
            stickPositionsY[i] = levelStickTopPosY[level];
            
            stickElements[i].style.left = stickPositionsX[i] + "px";
            stickElements[i].style.top = stickPositionsY[i] + "px";
            
            stickElements[i].style.display = "none";
            
        }       
        
        // Start waves

        for(var i = 0; i < numWaves; i++)
        {
			waveActive[i] = false;
            for(var j = 0; j < numWaveFrames; j++)
            {
                waveElements[i][j].style.display = "block";
				waveElements[i][j].style.transform = "scale(0%)";
            }
        }
        
        // Start ending
        
        endingHopeElement.style.display = "block";
        endingHopeElement.style.opacity = 0;

        endingLetterElement.style.display = "block";
        endingLetterElement.style.opacity = 0;
        
		
		ApplyCSSChangesNow();
        
    
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

		// Exit waves
		
		for(var i = 0; i < numWaves; i++)
        {
			waveActive[i] = false;
            for(var j = 0; j < numWaveFrames; j++)
            {
                waveElements[i][j].style.display = "none";
            }
        }
        
        glowForegroundElement.style.opacity = 0;
        glowBackgroundElement.style.opacity = 0;
        
        // Exit ending
        
        endingHopeElement.style.display = "none";
        endingHopeElement.style.opacity = 0;

        endingLetterElement.style.display = "none";
        endingLetterElement.style.opacity = 0;        
	
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
            shipElement.style.zIndex = zIndexShipForeground;
        }
        else
        {
            shipElement.style.filter = shipBackgroundFilter;
            shipElement.style.transform = shipBackgroundTransform;
            shipElement.style.zIndex = zIndexShipBackground;            
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
        
        if(shipDead || levelModes[level] == lmEnding)
        {
            messageElement.style.opacity = 0;
            helpElement.style.opacity = 0;
            levelState = levelStateStopped;
        }
        else if(level < levelCount - 1)
        {
            if(levelState == levelStatePlaying)
            {
                levelTimer -= minigameTimeStep;
                if(levelTimer < 0)
                {
                    levelState = levelStateMessage;
					levelTimer = levelMessageDuration;

					messageElement.style.opacity = 1;
					messageElement.innerHTML = "<div style='font-size:30px'>" + levelMessages[level + 1] + "</div>"

                    glowForegroundElement.style.opacity = levelGlowForeground[level + 1];
                    glowBackgroundElement.style.opacity = levelGlowBackground[level + 1];

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
            else if(levelState == levelStateMessage)
            {
				var levelMode = levelModes[level];
				
                levelTimer -= minigameTimeStep;
                
                if(((levelMode == lmBack || levelMode == lmJump) && stickLastSpawnGroupChanceX < -stickWidth ||
				     levelMode == lmWaves || levelMode == lmNull) && levelTimer <= 0)
                {                   
					messageElement.style.opacity = 0;
                    
                    levelState = levelStateWait;
                    
                    levelTimer = waitDuration;
                }
            }
            else if(levelState == levelStateWait)
            {
                var helpIndex = levelModes[level + 1] - lmJump;
                var helpRequired = (levelModes[level + 1] >= lmJump && levelModes[level + 1] <= lmWaves && !helpDisplayed[helpIndex]);

                if(!helpRequired) { levelTimer = 0; }
                
                levelTimer -= minigameTimeStep;
                
                if(levelTimer <= 0)
                {                   
                    levelState = levelStatePlaying;
                    levelTimer = levelDuration[level + 1];
                    sceneTargetSpeedX = levelSpeedX[level + 1];
                    
                    if(levelModes[level + 1] >= lmJump && levelModes[level + 1] <= lmWaves && !helpDisplayed[helpIndex])
                    {
                        for(var i = 0; i < helpImageElements.length; i++)
                        {
                            helpImageElements[i].style.display = "none";
                        }
                    
                        helpImageElements[helpIndex].style.display = "inline";
                        helpTextElement.innerHTML = helpTexts[helpIndex];
                        helpTimer = helpDuration;
                        
                        helpElement.style.opacity = 1;

                        helpDisplayed[helpIndex] = true;
                    }                          
					
					if(levelModes[level + 1] == lmJump || levelModes[level + 1] == lmBack)
					{
						// Enter jump or back mode level

						stickElements[0].style.display = "block";
						if(minigameSwitchNoSticks) { stickElements[0].style.display = "none"; }
						stickPositionsX[0] = sceneWidth;
						stickPositionsY[0] = levelStickTopPosY[level + 1];
						stickInForeground[0] = true;
						stickElements[0].style.filter = stickForegroundFilter;
						stickElements[0].style.transform = stickForegroundTransform;
						stickElements[0].style.zIndex = zIndexSticksForeground;        
						
						stickLastSpawnGroupChanceX = sceneWidth;
						stickSpawnGroupMissedChances = 0;
		
					}					
					else if(levelModes[level + 1] == lmWaves)
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
                    else if(levelModes[level + 1] == lmEnding)
                    {
                        // Enter ending
                        
                        endingState = endingStateHope;
        
                        endingHopeElement.style.display = "block";
                        endingHopeElement.style.opacity = 1;
												
						endingHopePositionX = endingHopePositionXRight;
						endingHopeElement.style.left = endingHopePositionX + "px";
						
						endingHopeDone = false;
						endingLetterDone = false;
						endingLetterWaitDone = false;
						
                        pointsElement.style.opacity = 0;                        
                        
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
        
        // Update help
        
        if(helpTimer > 0)
        {
            helpTimer -= minigameTimeStep;
            
            if(helpTimer <= 0)
            {
                helpElement.style.opacity = 0;
            }
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
                    parallaxObjectElements[i][index].style.top = MinigameRandomRange(parallaxObjectsYMin[i][index], parallaxObjectsYMax[i][index]) + "px";
                    parallaxObjectElements[i][index].style.rotate = MinigameRandomRange(parallaxObjectsRotationMin[i][index], parallaxObjectsRotationMax[i][index]) + "deg";
                    parallaxObjectElements[i][index].style.zIndex = zIndexParallaxObject;

                    
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
		var isJumpMode = (levelModes[level] == lmJump || levelModes[level] == lmNull);
        
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
			else if(isWavesMode)
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
        
		if(!shipDead && !minigameSwitchNoDamage)
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
								stickElements[groupMemberIndex].style.zIndex = spawnInForeground ? zIndexSticksForeground : zIndexSticksBackground;
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
		
        // Update ending
        
        if(levelModes[level] == lmEnding)
        {
            if(endingState == endingStateHope)
            {          

				if(!endingHopeDone)
				{
					endingHopePositionX += sceneSpeedX * minigameTimeStep;
					
					if(endingHopePositionX <= endingHopePositionXLeft)
					{
						endingHopePositionX = endingHopePositionXLeft;
						sceneSpeedX = 0;
						sceneTargetSpeedX = 0;
						endingHopeDone = true;
					}
					
					endingHopeElement.style.left = endingHopePositionX + "px";
				}
				else
				{
					shipPosX += endingShipSpeedX * minigameTimeStep;
					
					if(shipPosX >= endingShipPositionXRight)
					{
						shipPosX = endingShipPositionXRight;
						
						endingHopeElement.style.opacity = 0;
						shipElement.style.opacity = 0;
						
						endingLetterElement.style.display = "block";
						endingLetterPositionY = endingLetterPositionYLow;
						endingLetterElement.style.top = endingLetterPositionY + "px";
						endingLetterElement.style.opacity = 1;
						
						endingState = endingStateLetter;
						
					}
				}
				

		
            }
            else if(endingState == endingStateLetter)
            {
				if(!endingLetterDone)
				{
					endingLetterPositionY += endingLetterSpeed * minigameTimeStep;

					if(endingLetterPositionY <= endingLetterPositionYHigh)
					{
						endingLetterPositionY = endingLetterPositionYHigh;
						endingTimer = endingLetterWait;
						endingLetterDone = true;
					}
					
					endingLetterElement.style.top = endingLetterPositionY + "px";
				}
				else if(!endingLetterWaitDone)
				{
					endingTimer -= minigameTimeStep;

					if(endingTimer <= 0)
					{       
						endingLetterElement.style.opacity = 0;

						endingTimer = endingLetterFadeDuration;
						endingLetterWaitDone = true;						
					}
				}
				else if(!endingLetterFadeDone)
				{
					endingTimer -= minigameTimeStep;

					if(endingTimer <= 0)
					{       
						endingLetterFadeDone = true;						
					}
				}
				else
				{
					endingState = endingStateDone;
					
					MinigameExitPlay();                    
					minigameState = minigameStateWelcome;
					MinigameEnterWelcome();
					
					//minigameState = minigameStateGameOver;
					//MinigameEnterGameOver();                    
					
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

		welcomeDisclaimer = document.getElementById("welcomeDisclaimer");
        welcomeDisclaimer.style.opacity = 0;
    }
    
    function MinigameEnterWelcome()
    {  
		MinigameStartFade();
	
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
        
        welcomeDisclaimer.style.opacity = 0.6;
		
		shipElement.style.display = "block";
        shipElement.style.rotate = "0deg";
		shipElement.style.opacity = 1;
		shipElement.style.left = shipStartPosX + "px";
    }
    
    function MinigameFinishWelcome()
    {
        welcomeElement.style.opacity = 0;
        welcomeDisclaimer.style.opacity = 0;
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
        gameOverText = document.getElementById("gameOverText");
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
        if(levelModes[level] == lmEnding || shipPosY > sceneHeight)
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
					MinigameStartFade();					
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
		
		faderElement = document.getElementById("fader");
		faderElement.style.opacity = 0;
		faderElement.style.display = "none";
        
        MinigameInitPlay();        
        MinigameInitWelcome();
        MinigameInitGameOver();
        
        MinigameEnterWelcome();
        minigameState = minigameStateWelcome;
        
        document.addEventListener('keydown', MinigameOnKeyDown);
        document.addEventListener('click', MinigameOnClick);

        minigameTimeStep = 1.0 / minigameFps;
        
        if(minigameSwitchFastForward)
        {
            document.addEventListener('keyup', MinigameOnKeyUp);
            minigameSwitchFastForwardPressed = false;
            
            minigameSwitchFastForwardSavedTimeStep = minigameTimeStep;
        }
        
        window.setTimeout(MinigameUpdate, 1000.0 / minigameFps );
    }
   
    function MinigameUpdate()
    {

		if(fadeTimer > 0)
		{
			fadeTimer -= minigameTimeStep;			
			faderElement.style.opacity = (fadeTimer / fadeDuration) * fadeOpacity;			
		}
		else
		{
			faderElement.style.display = "none";
		}
		
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
        
        if(minigameSwitchFastForward && minigameSwitchFastForwardPressed)
        {
            minigameTimeStep = minigameSwitchFastForwardSavedTimeStep * minigameSwitchFastForwardMultiplier;
        }
        else
        {
            minigameTimeStep = minigameSwitchFastForwardSavedTimeStep;
        }

        window.setTimeout(MinigameUpdate, 1000.0 / minigameFps );
    }
    
    function MinigameOnKeyDown(e)
    {
        if(e.key == " ")
        {
            inputActionWasPressed = true;
        }
        else if(e.key == "f" && minigameSwitchFastForward)
        {
            minigameSwitchFastForwardPressed = true;
            console.log("FF on");
        }
    }
    
    function MinigameOnKeyUp(e)
    {
        if(e.key == "f" && minigameSwitchFastForward)
        {
            minigameSwitchFastForwardPressed = false;
            console.log("FF off");
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
	
	function MinigameStartFade()
	{
		fadeTimer = fadeDuration;
		faderElement.style.display = "block";
		faderElement.style.opacity = fadeOpacity;
	}

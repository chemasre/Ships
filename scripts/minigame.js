    // Minigame
    
    var minigameFps = 60;
    var minigameTimeStep;
    
    var minigamePoints;
    var minigamePointsPerDistance = 0.1;
    var minigamePointsPerStick = 0;
	
	var minigameRecordPoints;
	var minigameRecordExists;
    
    var minigameLevel = 0;
    var minigameLevelDuration = 10;
    var minigameNumLevels = 4;
	var minigameLevelMessages = ["", "no compass can help me", "oh yes! they float, Georgie", "those aren't mountains"];
    var minigameLevelModeJump = 0;
    var minigameLevelModeBackground = 1;
    var minigameLevelModes = [minigameLevelModeJump, minigameLevelModeBackground, minigameLevelModeJump, minigameLevelModeBackground];
    var minigameLevelChanging;
    
    var minigameLevelTimer;
    
    var points;
    var message;
    
    var minigameState;
    var minigameStateWelcome    = 0;
    var minigameStatePlay       = 1;
    var minigameStateGameOver   = 2;
	
	var minigameSwitchNoSticks = false;
	var minigameSwitchNoSound = false;
    
    // Menus
    var gameOver;
    var gameOverScore;
    var gameOverRestart;
	var gameOverRestartBlinkOn;
	var gameOverRestartBlinkTimer;
    
    var gameOverRestartTimer;
    var gameOverRestartDelay = 0.5;
    
    var welcome;
	var welcomeScore;
	var welcomeStart;
	var welcomeStartBlinkOn;
	var welcomeStartBlinkTimer;
	

	var menuBlinkInterval = 0.6;
    
    // Input
    
    var inputJumpWasPressed;
    
    // Sound
    
    var soundIsPlaying;
    var soundAmbientMusicVolume = 0.3;
    var soundAmbientMusic;
    var soundJumpVolume = 0.15;
    var soundJump;    
    var soundAmbientVolume = 1;
    var soundAmbient;
    
    // Scene
    
    var sceneLevelSpeedX = [-400, -500, -700, -700];
    var sceneTargetSpeedX;
    var sceneAccelerationX = 200;
    var sceneSpeedX;
    
    var sceneWidth = 900;
    var sceneHeight = 360;
    
    // Parallax
    
    var parallaxObjects;
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
    
    var shipPosX;
    var shipPosY;
    var shipWidth = 147;
    var shipHeight = 68;
    
    var shipCollisionWidth = 30
    var shipDead;
    var shipSinkSpeed = 100;
    
    var ship;
    
    // Sticks
    
    var stickKillDistance = 1200;
    
    var stickSpawnGroupSeparation = [300, 400, 500, 500];
    var stickSpawnGroupChances = [2, 3, 4, 4];
    var stickSpawnGroupMaxMissedChances = 3;
    var stickSpawnGroupMaxMembers = [2, 3, 4, 4];
    var stickSpawnGroupMemberSeparation = [80, 80, 80, 80];
    
    var stickTopPosY = [290, 280, 270, 270];

    var sticks;
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
    
    var waves;
    var numWaves = 2;
    var numWaveFrames = 3;
    var waveTimers;
    var waveFrameIntervalMin = 0.2;
    var waveFrameIntervalMax = 0.2;
    var waveMainFrameOpacity = 1.0;
    var waveOtherFrameOpacity = 0;    
    var waveFrames;
    var wavesPositionX = -300;
    var waveSeparation = 700;
    
    var ship;
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// PLAY STATE //////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    
    function MinigameInitPlay()
    {
		var storedRecord = localStorage.getItem("record");
		console.log("Recovered record " + storedRecord);
		
		if(storedRecord != null) { minigameRecordPoints = parseInt(storedRecord); minigameRecordExists = true; }
		else { minigameRecordPoints = 0; minigameRecordExists = false; }
		
        points = document.getElementById("points");
        message = document.getElementById("message");
        ship = document.getElementById("ship");
        

        sticks = new Array();
        stickPositionsX = new Array();
        stickPositionsY = new Array();
        stickInForeground = new Array();
        
        for(var i = 0; i < numSticks; i++)
        {
            sticks.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX.push(0);
            stickPositionsY.push(0);
            stickInForeground.push(true);
            
            sticks[i].style.display = "none";
        }
        
        parallaxObjects = new Array();
        parallaxObjectsX = new Array();
        parallaxObjectsSpeedFactor = new Array();
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxObjects.push(new Array());
            parallaxObjectsX.push(new Array());
            parallaxObjectsSpeedFactor.push(new Array());
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjects[i].push(document.getElementById("parallax" + (i + 1) + "Object" + (j + 1)));
                
                parallaxObjects[i][j].style.display = "none";
                parallaxObjectsX[i][j] = 0;
				parallaxObjectsSpeedFactor[i][j] = 0;
            }
        }
        
        waves = new Array();
        waveTimers = new Array();
        waveFrames = new Array();
        for(var i = 0; i < numWaves; i++)
        {
            waves.push(new Array());
            for(var j = 0; j < numWaveFrames; j++)
            {
                waves[i].push(document.getElementById("wave" + (i + 1) + "" + (j + 1)));
                
                waves[i][j].style.display = "none";
            }
        }
        
        points.style.opacity = 0;            
        message.style.opacity = 0;            
            
    }
    
    function MinigameEnterPlay()
    {
        // Init minigame
        
        minigameLevel = 0;
        minigameLevelTimer = minigameLevelDuration;
        minigameLevelChanging = false;
    
        minigamePoints = 0;
        points.innerHTML = 0;        
        points.style.opacity = 1;
		
		message.style.opacity = 0;
        
        // Init scene 
        
        sceneSpeedX = 0;
        sceneTargetSpeedX = sceneLevelSpeedX[0];        
        
        // Init parallax
        
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxLastSpawnX[i] = 0;

            parallaxSeparation[i] = MinigameRandomRange(parallaxMinSeparation[i], parallaxMaxSeparation[i]);
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjects[i][j].style.display = "none";
            }
        }

        // Init ship
        
        ship.style.display = "block";
        
        shipPosX = shipStartPosX;
        shipPosY = shipStartPosY;
        
        ship.style.left = shipPosX + "px";
        ship.style.top = shipPosY + "px";
        
        shipJumping = false;
        shipSpeedY = 0;
        ship.style.rotate = "0deg"; 
        
        MinigameSetShipInForeground(true);

        shipDead = false;

        // Init sticks
        
        for(var i = 0; i < numSticks; i++)
        {
            sticks.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX[i] = sceneWidth;
            stickPositionsY[i] = stickTopPosY[minigameLevel];
            
            sticks[i].style.left = stickPositionsX[i] + "px";
            sticks[i].style.top = stickPositionsY[i] + "px";
            
            sticks[i].style.display = "none";
            
        }
        
        sticks[0].style.display = "block";
        if(minigameSwitchNoSticks) { sticks[0].style.display = "none"; }
        stickPositionsX[0] = sceneWidth;
        stickPositionsY[0] = stickTopPosY[minigameLevel];
        stickInForeground[0] = true;
        sticks[0].style.filter = stickForegroundFilter;
        sticks[0].style.transform = stickForegroundTransform;
        sticks[0].style.zIndex = 0;        
        
        stickLastSpawnGroupChanceX = sceneWidth;
        stickSpawnGroupMissedChances = 0;
        
        // Init waves

        for(var i = 0; i < numWaves; i++)
        {
            waves.push(new Array());
            for(var j = 0; j < numWaveFrames; j++)
            {
                waves[i][j].style.display = "block";
            }

            waveTimers[i] = MinigameRandomRange(waveFrameIntervalMin, waveFrameIntervalMax);
            waveFrames[i] = MinigameRandomRangeInt(0, numWaveFrames);
            
            for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
            {
                waves[i][frameIndex].style.display = "block";
                waves[i][frameIndex].style.opacity = (frameIndex == waveFrames[i] ? waveMainFrameOpacity : waveOtherFrameOpacity);                
                waves[i][frameIndex].style.left = wavesPositionX + (i * waveSeparation) + "px";
                waves[i][frameIndex].style.transform = "scale(0%)";
            }
            

        }
        
        
    
    }
    
    function MinigameExitPlay()
    {
        ship.style.display = "none";
        ship.style.rotate = "0deg";
        
        points.style.opacity = 0;
		
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
    }
    
    function MinigameSetShipInForeground(value)
    {
        if(value)
        {
            ship.style.filter = shipForegroundFilter;
            ship.style.transform = shipForegroundTransform;
            ship.style.zIndex = 0;
        }
        else
        {
            ship.style.filter = shipBackgroundFilter;
            ship.style.transform = shipBackgroundTransform;
            ship.style.zIndex = -1;            
        }
        
        shipInForeground = value;
        
    }
	    
    function MinigameFindRandomSpawnable(array)
    {
		return MinigameFindSpawnableFrom(array, MinigameRandomRangeInt(0, array.length));
    }

    function MinigameFindSpawnableFrom(array, fromIndex)
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

    function MinigameFindSpawnable(array)
    {
        return MinigameFindSpawnableFrom(array, 0);
    }

    function MinigameUpdatePlay()
    {
        // Update level
        
        if(shipDead)
        {
            message.style.opacity = 0;
            minigameLevelChanging = false;
        }
        else if(minigameLevel < minigameNumLevels - 1)
        {
            if(!minigameLevelChanging)
            {
                minigameLevelTimer -= minigameTimeStep;
                if(minigameLevelTimer < 0)
                {
                    minigameLevelChanging = true;
					message.style.opacity = 1;
					message.innerHTML = "<div style='font-size:30px'>" + minigameLevelMessages[minigameLevel + 1] + "</div>"
                    console.log("Changing level");
                }

            }
            else
            {
                if(stickLastSpawnGroupChanceX < -stickWidth)
                {
					message.style.opacity = 0;
                    minigameLevelChanging = false;
                    minigameLevelTimer = minigameLevelDuration;
                    sceneTargetSpeedX = sceneLevelSpeedX[minigameLevel + 1];
                    minigameLevel ++;
                    
                    
                    console.log("Increased level");
                }
                            
            }

        }
        
        // Update points
        
        if(!shipDead)
        {
            minigamePoints += minigamePointsPerDistance *
                              Math.abs(sceneSpeedX) * minigameTimeStep;
                              
            points.innerHTML = Math.floor(minigamePoints / 10) * 10;
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
                var index = MinigameFindRandomSpawnable(parallaxObjects[i]);
                
                if(index >= 0)
                {
                    console.log("Spawning object at plane " + (i + 1));
                    
                    parallaxObjectsX[i][index] = sceneWidth;
					parallaxObjectsSpeedFactor[i][index] = MinigameRandomRange(parallaxObjectsSpeedFactorMin, parallaxObjectsSpeedFactorMax);
                    parallaxObjects[i][index].style.display = "block";
                    
                    parallaxLastSpawnX[i] = sceneWidth;
                    
                    parallaxSeparation[i] = MinigameRandomRange(parallaxMinSeparation[i], parallaxMaxSeparation[i]);

                }
                
            }
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                if(parallaxObjects[i][j].style.display != "none")
                {
                    parallaxObjectsX[i][j] += sceneSpeedX * parallaxSpeedFactor[i] * parallaxObjectsSpeedFactor[i][j] * minigameTimeStep;
                    
                    if(parallaxObjectsX[i][j] < -900) { parallaxObjects[i][j].style.display = "none"; }
                    
                    parallaxObjects[i][j].style.left = parallaxObjectsX[i][j] + "px";
                }
            }
        }

        
        // Update ship
        
        var isBackgroundMode = (minigameLevelModes[minigameLevel] == minigameLevelModeBackground);
        
        if(inputJumpWasPressed && !shipJumping && !shipDead)
        {
            shipSpeedY = !isBackgroundMode ? shipJumpSpeed : shipJumpBackgroundSpeed;
            shipJumping = true;
            soundJump.play();
            ship.style.rotate = "-10deg";  

            if(shipInForeground) { MinigameSetShipInForeground(false); }
            else { MinigameSetShipInForeground(true); }
        }    
        
        if(!shipInForeground && !isBackgroundMode) 
        {
            MinigameSetShipInForeground(true);
        }

        if(shipJumping)
        {
            shipPosY += shipSpeedY * minigameTimeStep;
            shipSpeedY += shipGravity * minigameTimeStep;
            
            if(shipSpeedY >= 0 && shipPosY > shipStartPosY)
            {
                shipPosY = shipStartPosY;
                shipSpeedY = 0;

                shipJumping = false;

                ship.style.rotate = "0deg";        
            }
        }
        else if(shipDead)
        {
			if(shipPosY < sceneHeight)
			{
				shipPosY += shipSinkSpeed * minigameTimeStep;
				ship.style.rotate = "70deg";
			}
        }
        
		if(!shipDead)
		{
			for(var i = 0; i < numSticks; i++)
			{
				if(sticks[i].style.display != "none")
				{
					if(Math.abs(stickPositionsX[i] + stickWidth / 2 - (shipPosX + shipWidth / 2)) < shipCollisionWidth &&
						shipPosY + shipHeight >= stickPositionsY[i] && shipInForeground == stickInForeground[i])
					{
						shipDead = true;
						if(shipSpeedY < 0) { shipSpeedY = Math.abs(shipSpeedY); }
						sceneTargetSpeedX = 0;
						minigameState = minigameStateGameOver;
						MinigameEnterGameOver();
					}
						
				}
			}
		}
        
        ship.style.left = shipPosX + "px";
        ship.style.top = shipPosY + "px";    

        // Update sticks

        var spawnGroupChance = Math.floor((Math.random() * 1000)) % stickSpawnGroupChances[minigameLevel];

        if(sceneWidth - stickLastSpawnGroupChanceX > stickSpawnGroupSeparation[minigameLevel] && !minigameLevelChanging)
        {
            var spawnableIndex = MinigameFindSpawnable(sticks);
            
            if(spawnableIndex >= 0)
            {
                if((spawnGroupChance == 0 || stickSpawnGroupMissedChances >= stickSpawnGroupMaxMissedChances))
                {
                    var spawnInForeground = isBackgroundMode ? (MinigameRandomRangeInt(0, 2) == 0) : true;
                    
                    sticks[spawnableIndex].style.display = "block";
					if(minigameSwitchNoSticks) { sticks[spawnableIndex].style.display = "none"; }

                    var groupMembers = Math.floor((Math.random() * 1000)) % stickSpawnGroupMaxMembers[minigameLevel];
                    
                    //console.log("Spawned group with " + (groupMembers + 1) + " members");
                    
                    for(var i = 0; i < groupMembers; i++)
                    {
                        var groupMemberIndex = MinigameFindSpawnable(sticks);
                        if(groupMemberIndex >= 0)
                        {
                            stickPositionsX[groupMemberIndex] = sceneWidth + stickSpawnGroupMemberSeparation[minigameLevel] * (i + 1);
                            stickPositionsY[groupMemberIndex] = stickTopPosY[minigameLevel];   
                            stickInForeground[groupMemberIndex] = spawnInForeground;
                            sticks[groupMemberIndex].style.filter = spawnInForeground ? stickForegroundFilter : stickBackgroundFilter;
                            sticks[groupMemberIndex].style.transform = spawnInForeground ? stickForegroundTransform : stickBackgroundTransform;
                            sticks[groupMemberIndex].style.zIndex = spawnInForeground ? 0 : -1;
                            sticks[groupMemberIndex].style.display = "block";
							if(minigameSwitchNoSticks) { sticks[groupMemberIndex].style.display = "none"; }
                        }
                    }
                    
                    stickSpawnGroupMissedChances = 0;
                }
                else
                {
                    sticks[spawnableIndex].style.display = "none";
                    
                    stickSpawnGroupMissedChances ++;
                }
                stickPositionsX[spawnableIndex] = sceneWidth;
                stickPositionsY[spawnableIndex] = stickTopPosY[minigameLevel];
                stickInForeground[spawnableIndex] = spawnInForeground;
                sticks[spawnableIndex].style.filter = spawnInForeground ? stickForegroundFilter : stickBackgroundFilter;
                sticks[spawnableIndex].style.transform = spawnInForeground ? stickForegroundTransform : stickBackgroundTransform;
                sticks[spawnableIndex].style.zIndex = spawnInForeground ? 0 : -1;
                stickLastSpawnGroupChanceX = sceneWidth;
            }
        
        }

        stickLastSpawnGroupChanceX += sceneSpeedX * minigameTimeStep;
        
        for(var i = 0; i < numSticks; i++)
        {
            if(sticks[i].style.display != "none")
            {
                var behindShipBefore = (stickPositionsX[i] < shipPosX);
            
                stickPositionsX[i] += sceneSpeedX * minigameTimeStep;
            
                var behindShipAfter = (stickPositionsX[i] < shipPosX);
                
                if(!behindShipBefore && behindShipAfter && !shipDead) { minigamePoints += minigamePointsPerStick; }

                if(stickPositionsX[i] <= -stickKillDistance)
                {
                    sticks[i].style.display = "none";
                }
                else
                {
                    sticks[i].style.left = stickPositionsX[i] + "px";
                    sticks[i].style.top = stickPositionsY[i] + "px";
                }
            }
        }
        
        // Update waves
        
        for(var i = 0; i < numWaves; i++)
        {
            waveTimers[i] -= minigameTimeStep;
            if(waveTimers[i] < 0)
            {
                waveFrames[i]++;
                if(waveFrames[i] >= numWaveFrames) { waveFrames[i] = 0; }
                
                for(var frameIndex = 0; frameIndex < numWaveFrames; frameIndex ++)
                {
                    waves[i][frameIndex].style.opacity = (frameIndex == waveFrames[i] ? waveMainFrameOpacity : waveOtherFrameOpacity);
                    waves[i][frameIndex].style.transform = "scale(70%)";
                    
                }

                waveTimers[i] = MinigameRandomRange(waveFrameIntervalMin, waveFrameIntervalMax);
            }
            
        }
    
    }    

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// WELCOME STATE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    
    function MinigameInitWelcome()
    {
        welcome = document.getElementById("welcome");
        welcome.style.opacity = 0;
		
        welcomeScore = document.getElementById("welcomeScore");

		welcomeStart = document.getElementById("welcomeStart");
		welcomeStart.style.opacity = 0;
    }
    
    function MinigameEnterWelcome()
    {  
		welcomeStartBlinkOn = true;
		welcomeStartBlinkTimer = menuBlinkInterval;
	
        welcome.style.opacity = 1;

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
        welcome.style.opacity = 0;
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
				
        if(inputJumpWasPressed)
        {
            MinigameFinishWelcome();
            MinigameEnterPlay();
            minigameState = minigameStatePlay;
            
            if(!soundIsPlaying)
            {
                soundAmbientMusic.play();
                soundAmbient.play();
                soundIsPlaying = true;
            }

        }
    }
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// GAMEOVER STATE //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////    
    
    function MinigameInitGameOver()
    {
        gameOver = document.getElementById("gameOver");
        gameOverScore = document.getElementById("gameOverScore");
        gameOverRestart = document.getElementById("gameOverRestart");
        gameOver.style.opacity = 0;
        gameOverRestart.style.opacity = 0;
    }
        
    function MinigameEnterGameOver()
    {
	    points.style.opacity = 0;            
	
        gameOver.style.opacity = 1;        
        gameOverScore.innerHTML = "sailed " + (Math.floor(minigamePoints / 10) * 10);

		gameOverRestartBlinkOn = true;
		gameOverRestartBlinkTimer = menuBlinkInterval;

        gameOverRestart.style.opacity = 0;
		
		console.log("Entering game over");
        
        gameOverRestartTimer = gameOverRestartDelay;
                             
    
    }
    
    function MinigameExitGameOver()
    {
        gameOver.style.opacity = 0;
        gameOverRestart.style.opacity = 0;
    }
        
    
    function MinigameUpdateGameOver()
    {
        if(shipPosY > sceneHeight)
        {
            ship.style.rotate = "0deg";
			
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
                
                if(inputJumpWasPressed)
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
        
        soundJump = document.getElementById("jumpSound");
        soundJump.volume = soundJumpVolume;
		
		if(minigameSwitchNoSound) { soundJump.volume = 0; }

        soundAmbientMusic = document.getElementById("ambientMusic");
        soundAmbientMusic.volume = soundAmbientMusicVolume;
        soundAmbientMusic.loop = true;

        soundAmbient = document.getElementById("ambientSound");
        soundAmbient.volume = soundAmbientVolume;
        soundAmbient.loop = true;

		if(minigameSwitchNoSound)
        {
            soundAmbientMusic.volume = 0;
            soundAmbient.volume = 0;
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
    
        inputJumpWasPressed = false;

        window.setTimeout(MinigameUpdate, 1000.0 / minigameFps );
    }
    
    function MinigameOnKeyDown(e)
    {
        if(e.key == " ")
        {
            inputJumpWasPressed = true;
        }
    }
    
    function MinigameOnClick(e)
    {
        inputJumpWasPressed = true;
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

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
    var minigameNumLevels = 3;
	var minigameLevelMessages = ["", "no compass can help me", "they all float"];
    var minigameLevelChanging;
    
    var minigameLevelTimer;
    
    var points;
    var message;

    
    var minigameState;
    var minigameStateWelcome    = 0;
    var minigameStatePlay       = 1;
    var minigameStateGameOver   = 2;
    
    // Menus
    var gameOver;
    var gameOverScore;
    var gameOverRestart;
    
    var gameOverRestartTimer;
    var gameOverRestartDelay = 2.0;
    
    var welcome;
    
    
    // Input
    
    var inputJumpWasPressed;
    
    // Sound
    
    var soundIsPlaying;
    var soundBackgroundMusicVolume = 0.5;
    var soundBackgroundMusic;
    var soundJumpVolume = 0.15;
    var soundJump;
    
    // Scene
    
    var sceneLevelSpeedX = [-400, -500, -700];
    var sceneTargetSpeedX;
    var sceneAccelerationX = 200;
    var sceneSpeedX;
    
    var sceneWidth = 900;
    var sceneHeight = 360;
    
    // Parallax
    
    var parallaxObjects;
    var parallaxObjectsX;
    var parallaxNumObjects = [3, 2];
    var parallaxNumPlanes = 2;
    
    var parallaxMinSeparation = [600, 1200];
    var parallaxMaxSeparation = [1200, 5000];
    var parallaxSeparation = [0, 0];
    
    var parallaxSpeedFactor = [0.2, 0.05];
    
    var parallaxLastSpawnX = [0, 0];
    
    
    // Ship

    var shipStartPosX = 130;
    var shipStartPosY = 260;
    
    var shipJumping;
    var shipJumpSpeed = -650;
    var shipSpeedY = 0;
    var shipGravity = 2000.0;
    
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
    
    var stickSpawnGroupSeparation = [300, 400, 500];
    var stickSpawnGroupChances = [2, 3, 4];
    var stickSpawnGroupMaxMissedChances = 3;
    var stickSpawnGroupMaxMembers = [2, 3, 4];
    var stickSpawnGroupMemberSeparation = [80, 80, 80];
    
    var stickTopPosY = [290, 280, 270];

    var sticks;
    var numSticks = 20;
    var stickWidth = 51;
    var stickHeight = 155;
    
    var stickPositionsX;
    var stickPositionsY;
    
    var stickLastSpawnGroupChanceX;
    var stickSpawnGroupMissedChances;
    
    var ship;
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// PLAY STATE //////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    
    function MinigameInitPlay()
    {
		var storedRecord = localStorage.getItem("record");
		console.log("Record stored " + storedRecord);
		
		if(storedRecord != null) { minigameRecordPoints = parseInt(storedRecord); minigameRecordExists = true; }
		else { minigameRecordPoints = 0; minigameRecordExists = false; }
		
        points = document.getElementById("points");
        message = document.getElementById("message");
        ship = document.getElementById("ship");
        

        sticks = new Array();
        stickPositionsX = new Array();
        stickPositionsY = new Array();
        
        for(var i = 0; i < numSticks; i++)
        {
            sticks.push(document.getElementById("stick" + (i + 1)));            
           
            stickPositionsX.push(0);
            stickPositionsY.push(0);
            
            sticks[i].style.display = "none";
        }
        
        parallaxObjects = new Array();
        parallaxObjectsX = new Array();
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxObjects.push(new Array());
            parallaxObjectsX.push(new Array());
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                parallaxObjects[i].push(document.getElementById("parallax" + (i + 1) + "Object" + (j + 1)));
                
                parallaxObjects[i][j].style.display = "none";
                parallaxObjectsX[i][j] = 0;
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
            parallaxLastSpawnX[i] = sceneWidth;

            parallaxSeparation[i] = parallaxMinSeparation[i] + (parallaxMaxSeparation[i] - parallaxMinSeparation[i]) * Math.random();
            
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
        stickPositionsX[0] = sceneWidth;
        stickLastSpawnGroupChanceX = sceneWidth;
        stickSpawnGroupMissedChances = 0;
    
    }
    
    function MinigameExitPlay()
    {
        ship.style.display = "none";
        ship.rotate = "0deg";
        
        points.style.opacity = 0;
        
        if(minigameRecordExists)
        {
            if(minigamePoints > minigameRecordPoints)
            {
                localStorage.setItem("record", minigamePoints.toString());
                console.log("Stored: " + minigamePoints.toString());
            }
        }
    }
    
    function MinigameFindSpawnable(array)
    {
        var found = false;
        var i = 0;
        var result = -1;
        while(!found && i < array.length)
        {
            if(array[i].style.display == "none")
            {
                found = true;
                result = i;
            }
            else
            {
                i++;
            }
        }
        
        return result;
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
            parallaxLastSpawnX[i] += sceneSpeedX * minigameTimeStep;
            
            if(parallaxLastSpawnX[i] < -parallaxSeparation[i])
            {
                var index = MinigameFindSpawnable(parallaxObjects[i]);
                
                if(index >= 0)
                {
                    console.log("Spawning object at plane " + (i + 1));
                    
                    parallaxObjectsX[i][index] = sceneWidth;
                    parallaxObjects[i][index].style.display = "block";
                    
                    parallaxLastSpawnX[i] = sceneWidth;
                    
                    parallaxSeparation[i] = parallaxMinSeparation[i] + (parallaxMaxSeparation[i] - parallaxMinSeparation[i]) * Math.random();

                }
                
            }
            
            for(var j = 0; j < parallaxNumObjects[i]; j++)
            {
                if(parallaxObjects[i][j].style.display != "none")
                {
                    parallaxObjectsX[i][j] += sceneSpeedX * parallaxSpeedFactor[i] * minigameTimeStep;
                    
                    if(parallaxObjectsX[i][j] < -900) { parallaxObjects[i][j].style.display = "none"; }
                    
                    parallaxObjects[i][j].style.left = parallaxObjectsX[i][j] + "px";
                }
            }
        }

        
        // Update ship
        
        if(inputJumpWasPressed && !shipJumping)
        {
            shipSpeedY = shipJumpSpeed;
            shipJumping = true;
            soundJump.play();
            ship.style.rotate = "-10deg";        
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
            shipPosY += shipSinkSpeed * minigameTimeStep;
            ship.style.rotate = "70deg";
        }
        
        for(var i = 0; i < numSticks; i++)
        {
            if(sticks[i].style.display != "none")
            {
                if(Math.abs(stickPositionsX[i] + stickWidth / 2 - (shipPosX + shipWidth / 2)) < shipCollisionWidth &&
                    shipPosY + shipHeight >= stickPositionsY[i])
                {
                    shipDead = true;
                    if(shipSpeedY < 0) { shipSpeedY = Math.abs(shipSpeedY); }
                    sceneTargetSpeedX = 0;
                    minigameState = minigameStateGameOver;
                    MinigameEnterGameOver();
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
                    sticks[spawnableIndex].style.display = "block";
                    
                    var groupMembers = Math.floor((Math.random() * 1000)) % stickSpawnGroupMaxMembers[minigameLevel];
                    
                    console.log("Spawned group with " + (groupMembers + 1) + " members");
                    
                    for(var i = 0; i < groupMembers; i++)
                    {
                        var groupMemberIndex = MinigameFindSpawnable(sticks);
                        if(groupMemberIndex >= 0)
                        {
                            stickPositionsX[groupMemberIndex] = sceneWidth + stickSpawnGroupMemberSeparation[minigameLevel] * (i + 1);
                            stickPositionsY[groupMemberIndex] = stickTopPosY[minigameLevel];   
                            sticks[groupMemberIndex].style.display = "block";
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
    
    }    

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// WELCOME STATE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    
    function MinigameInitWelcome()
    {
        welcome = document.getElementById("welcome");
        welcome.style.opacity = 0;
    }
    
    function MinigameEnterWelcome()
    {       
        welcome.innerHTML = "<div style='font-size:50px'>Sailor of the Myst</div>" +
							(minigameRecordExists ? "<div style='font-size:16px; margin-top:20px'>farthest " + (Math.floor(minigameRecordPoints / 10) * 10) + "</div>":"") +
                            "<div style='font-size:20px; margin-top:20px'>Click to start</div>";
        
        welcome.style.opacity = 1;
    }
    
    function MinigameFinishWelcome()
    {
        welcome.style.opacity = 0;
        console.log("Finishing welcome");
    }
    
    function MinigameUpdateWelcome()
    {
        if(inputJumpWasPressed)
        {
            MinigameFinishWelcome();
            MinigameEnterPlay();
            minigameState = minigameStatePlay;
            
            if(!soundIsPlaying)
            {
                soundBackgroundMusic.play();
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
        gameOver.style.opacity = 1;        
        gameOverScore.innerHTML = "sailed " + (Math.floor(minigamePoints / 10) * 10);
        gameOverRestart.style.opacity = 0;
        
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
            ship.rotate = "0deg";

            if(gameOverRestartTimer > 0)
            {
                gameOverRestartTimer -= minigameTimeStep;
            }
            else
            {
                gameOverRestart.style.opacity = 1;
                
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

        soundBackgroundMusic = document.getElementById("backgroundMusic");
        soundBackgroundMusic.volume = soundBackgroundMusicVolume;
        soundBackgroundMusic.loop = true;

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
            console.log("update welcome");
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

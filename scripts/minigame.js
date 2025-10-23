    // Minigame
    
    var minigameFps = 60;
    var minigameTimeStep;
    
    var minigamePoints;
    var minigamePointsPerDistance = 0.1;
    var minigamePointsPerStick = 100;
    
    var minigameLevel = 0;
    var minigameLevelDuration = 10;
    var minigameNumLevels = 3;
    var minigameLevelChanging;
    
    var minigameLevelTimer;
    
    var points;
    
    var minigameState;
    var minigameStateWelcome    = 0;
    var minigameStatePlay       = 1;
    var minigameStateGameOver   = 2;
    
    // Menus
    var gameOver;
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
    
    var sceneSpeedX = [-400, -500, -700];
    
    var sceneWidth = 900;
    
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
    
    var shipCollisionWidth = 30;
    
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
        points = document.getElementById("points");
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

        points.style.display = "none";            
            
    }
    
    function MinigameEnterPlay()
    {
        // Init minigame
        
        minigameLevel = 0;
        minigameLevelTimer = minigameLevelDuration;
        minigameLevelChanging = false;
    
        minigamePoints = 0;
        points.innerHTML = 0;        
        points.style.display = "block";
        
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
        
        shipPosX = shipStartPosX;
        shipPosY = shipStartPosY;
        
        ship.style.left = shipPosX + "px";
        ship.style.top = shipPosY + "px";
        
        shipJumping = false;
        shipSpeedY = 0;
        ship.style.rotate = "0deg";   

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
        points.style.display = "none";
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
        
        if(minigameLevel < minigameNumLevels - 1)
        {
            if(!minigameLevelChanging)
            {
                minigameLevelTimer -= minigameTimeStep;
                if(minigameLevelTimer < 0)
                {
                    minigameLevelChanging = true;
                    console.log("Changing level");
                }

            }
            else
            {
                if(stickLastSpawnGroupChanceX < -stickWidth)
                {
                    minigameLevelChanging = false;
                    minigameLevelTimer = minigameLevelDuration;
                    minigameLevel ++;
                    console.log("Increased level");
                }
                            
            }

        }
        
        // Update points
        
        minigamePoints += minigamePointsPerDistance *
                          Math.abs(sceneSpeedX[minigameLevel]) * minigameTimeStep;
                          
        points.innerHTML = Math.floor(minigamePoints / 10) * 10;
        
        // Update parallax
        
        for(var i = 0; i < parallaxNumPlanes; i++)
        {
            parallaxLastSpawnX[i] += sceneSpeedX[minigameLevel] * minigameTimeStep;
            
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
                    parallaxObjectsX[i][j] += sceneSpeedX[minigameLevel] * parallaxSpeedFactor[i] * minigameTimeStep;
                    
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
        
        for(var i = 0; i < numSticks; i++)
        {
            if(sticks[i].style.display != "none")
            {
                if(Math.abs(stickPositionsX[i] + stickWidth / 2 - (shipPosX + shipWidth / 2)) < shipCollisionWidth &&
                    shipPosY + shipHeight >= stickPositionsY[i])
                {
                    MinigameExitPlay();
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

        stickLastSpawnGroupChanceX += sceneSpeedX[minigameLevel] * minigameTimeStep;
        
        for(var i = 0; i < numSticks; i++)
        {
            if(sticks[i].style.display != "none")
            {
                var behindShipBefore = (stickPositionsX[i] < shipPosX);
            
                stickPositionsX[i] += sceneSpeedX[minigameLevel] * minigameTimeStep;
            
                var behindShipAfter = (stickPositionsX[i] < shipPosX);
                
                if(!behindShipBefore && behindShipAfter) { minigamePoints += minigamePointsPerStick; }

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
        welcome.style.display = "none";
    }
    
    function MinigameEnterWelcome()
    {       
        welcome.innerHTML = "<div style='font-size:50px'>Sailor of the Myst</div>" +
                            "<div style='font-size:20px; margin-top:20px'>Click to start</div>";
        
        welcome.style.display = "block";
    }
    
    function MinigameFinishWelcome()
    {
        welcome.style.display = "none";
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
        gameOver.style.display = "none";
    }
        
    function MinigameEnterGameOver()
    {
        gameOver.style.display = "block";
        
        gameOver.innerHTML = "<div>Game Over!</div><div style='font-size:30px'>points " + (Math.floor(minigamePoints / 10) * 10) +                     "</div>" + "<div style='font-size:20px; margin-top:20px'>Click to play again</div>"
    
    }
    
    function MinigameExitGameOver()
    {
        gameOver.style.display = "none";    
    }
        
    
    function MinigameUpdateGameOver()
    {
        if(inputJumpWasPressed)
        {
            MinigameExitGameOver();
            minigameState = minigameStatePlay;
            MinigameEnterPlay();
            console.log("Going to play");
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

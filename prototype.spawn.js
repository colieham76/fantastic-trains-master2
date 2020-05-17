var listOfRoles = ['extractor', 'harvester', 'lorry', 'towerlorry','claimer', 'rampartrepairer', 'catalyst', 'hydrogenlorry',
                   'upgrader', 'repairer', 'builder', 'oxygenlorry', 'wallRepairer', 'terminalory', 'rangedattacker', 'storagelorry',
		  'hydroxidelorry', 'lemergiumlorry', 'utriumlorry', 'zkul', 'reservists1'];// 'powerSourceLorry', 'powerSourceHealer',
		 //  'powerSourceAttacker'];
//c = longDistanceHarvester
//c2701 = builder
//c2702 = miner
//2703 = reservists1
//2704 = lorry
//2705 = towerlorry
//2706 = smallupgrader
 //  Kill all Creeps
/*
for(var name in Game.creeps) { 
          Game.creeps[name].suicide(); 
         } 
let creepsInRoom = Game.rooms['W62N69'].find(FIND_MY_CREEPS);  
    for (let i = 0; i<10; i++) { 
        let creep = creepsInRoom[i]; 
            if (creep.memory.role == 'rampartrepairer') { 
                console.log(creep.name,creep.suicide()) 
            } 
    } */

//W65N63 - containers
Game.spawns.Spawn14.memory.minCreeps = {lorry: 2, wallRepairer: 0, rampartrepairer: 1, towerlorry: 1, utriumlorry: 0};
Game.spawns.Spawn1.memory.minCreeps = {extractor: 0, wallRepairer: 0, rampartrepairer: 0, lemergiumlorry: 1,
				       harvester: 1, repairer: 0, builder: 0, lorry: 3, towerlorry: 2, upgrader: 0};
Game.spawns.Spawn14.memory.minsmallUpgraders = {W65N63: 1};

Game.spawns.Spawn14.memory.minbigUpgraders = {W65N63: 0};
Game.spawns.Spawn14.memory.minLongDistanceHarvesters = {W64N63: 2};
Game.spawns.Spawn21.memory.minLongDistanceHarvesters = {W65N62: 2};
Game.spawns.Spawn1.memory.minbigUpgraders = {W65N63: 0};
Game.spawns.Spawn21.memory.minCreeps = {extractor: 0, wallRepairer: 0, builder: 0, rampartrepairer: 0,
    hydrogenlorry: 0, hydroxidelorry: 0, zkul: 0};

// W63N64   - containers
Game.spawns.Spawn2.memory.minCreeps = {extractor: 0, repairer: 0, builder: 0, lorry: 2, towerlorry: 1, upgrader: 0,
                                        wallRepairer: 0, rampartrepairer: 0, terminalory: 0};
Game.spawns.Spawn10.memory.minCreeps = {extractor: 0, repairer: 0, builder: 0, lorry: 2, towerlorry: 2, upgrader: 1,
                                       wallRepairer: 1, rampartrepairer: 0};
Game.spawns.Spawn10.memory.minsmallUpgraders = {W63N64: 1};
//Game.spawns.Spawn10.memory.minrangedattackers = {W63N63: 0};
//Game.spawns.Spawn2.memory.minrangedattackers = {W63N65: 0};
Game.spawns.Spawn2.memory.minLongDistanceHarvesters = {W63N65: 1};
Game.spawns.Spawn10.memory.minLongDistanceHarvesters = {W62N63: 2};
Game.spawns.Spawn2.memory.minLongDistanceHarvesters = {W63N63: 1};

//W63N66 - containers
Game.spawns.Spawn3.memory.minCreeps = {extractor: 0, harvester: 0, repairer: 0, builder: 0, lorry: 2, wallRepairer: 0,
                                       towerlorry: 1, upgrader: 1, ghodiumacid: 0, terminalory: 0, rampartrepairer: 0};
Game.spawns.Spawn11.memory.minCreeps = {extractor: 0, harvester: 0, repairer: 0, builder: 0, lorry: 1, wallRepairer: 2,
                                       towerlorry: 0, upgrader: 0, ghodiumacid: 0, terminalory: 0, rampartrepairer: 0};
Game.spawns.Spawn3.memory.minLongDistanceHarvesters = {W63N67: 2};
Game.spawns.Spawn3.memory.minLongDistanceHarvesters = {W65N65: 0};
Game.spawns.Spawn11.memory.minLongDistanceHarvesters = {W62N66: 2};
Game.spawns.Spawn3.memory.minbigUpgraders = {W63N66: 0};
Game.spawns.Spawn11.memory.minsmallUpgraders = {W63N66: 1};

//W62N61 - containers
Game.spawns.Spawn4.memory.minCreeps = {extractor: 0, wallRepairer: 2, builder: 0, lorry: 0,
				       upgrader: 0, harvester: 0, rampartrepairer: 0};
Game.spawns.Spawn13.memory.minCreeps = {lorry: 0, rampartrepairer: 0, builder: 0, towerlorry: 1, storagelorry: 0,
				       terminalory: 0, upgrader: 0, harvester: 0};
Game.spawns.Spawn23.memory.minCreeps = {lorry: 2, harvester: 0}
Game.spawns.Spawn23.memory.minsmallUpgraders = {W62N61: 1};
Game.spawns.Spawn4.memory.minLongDistanceHarvesters = {W63N61: 2};
Game.spawns.Spawn4.memory.minLongDistanceHarvesters = {W62N62: 2};
Game.spawns.Spawn13.memory.minLongDistanceHarvesters = {W61N61: 2};
//Game.spawns.Spawn13.memory.minrangedattackers = {W63N61: 0}; //A3
//Game.spawns.Spawn4.memory.minrangedattackers = {W61N61: 0}; //A4
//Game.spawns.Spawn13.memory.minrangedattackers = {W62N62: 0}; //A5

//Game.spawns.Spawn13.memory.minbigUpgraders = {W63N61: 0};

//W61N68 containers
Game.spawns.Spawn5.memory.minCreeps = {wallRepairer: 0, harvester: 0, builder: 2, terminalory: 0, rampartrepairer: 0,
                                        lorry: 2, towerlorry: 1, upgrader: 0, extractor: 0};
Game.spawns.Spawn5.memory.minsmallUpgraders = {W61N68: 1};
Game.spawns.Spawn12.memory.minCreeps = {harvester: 0, lorry: 1, builder: 1, repairer: 0, 
                                          rampartrepairer: 0, terminalory: 0};
Game.spawns.Spawn24.memory.minCreeps = {lorry: 0};
Game.spawns.Spawn5.memory.minLongDistanceHarvesters = {W61N67: 2};
Game.spawns.Spawn12.memory.minLongDistanceHarvesters = {W61N69: 2};
//w62n69
Game.spawns.Spawn6.memory.minCreeps = {extractor: 0, repairer: 0, wallRepairer: 0, terminalory: 0,
                                       harvester: 0, rampartrepairer: 0, lorry: 2, towerlorry: 2,
                                       builder: 0, upgrader: 1};
Game.spawns.Spawn6.memory.minsmallUpgraders = {W62N69: 1};
Game.spawns.Spawn16.memory.minLongDistanceHarvesters = {W63N69: 2};
Game.spawns.Spawn16.memory.minLongDistanceHarvesters = {W63N68: 2};
Game.spawns.Spawn6.memory.minLongDistanceHarvesters = {W62N68: 2};
Game.spawns.Spawn6.memory.minLongDistanceHarvesters = {W62N67: 2};
Game.spawns.Spawn16.memory.minCreeps = {lorry: 0, builder: 0, upgrader: 1, rampartrepairer: 0, terminalory: 0};
//W71N69 - containers
Game.spawns.Spawn18.memory.minCreeps = {extractor: 0, lorry: 0, repairer: 0, rampartrepairer: 0};
Game.spawns.Spawn7.memory.minCreeps = {lorry: 2, builder: 0, upgrader: 0, repairer: 0, towerlorry: 2, 
                                       wallRepairer: 0, harvester: 0, terminalory: 0, rampartrepairer: 0};
Game.spawns.Spawn15.memory.minCreeps = {lorry: 0, builder: 0, upgrader: 0, repairer: 0, towerlorry: 1, 
                                       wallRepairer: 0, harvester: 0, terminalory: 0, rampartrepairer: 0};
Game.spawns.Spawn15.memory.minbigUpgraders = {W71N69: 0};
Game.spawns.Spawn7.memory.minbigUpgraders = {W71N69: 0};
Game.spawns.Spawn7.memory.minLongDistanceHarvesters = {W71N68: 1};
Game.spawns.Spawn15.memory.minsmallUpgraders = {W71N69: 1};

//W77N69 - containers
Game.spawns.Spawn8.memory.minCreeps = {builder: 0, lorry: 2, upgrader:0, towerlorry: 1, wallRepairer: 0,
				      harvester: 0, repairer: 0};
Game.spawns.Spawn9.memory.minCreeps = {repairer: 0, towerlorry: 0, harvester: 0, terminalory: 0, builder: 2,
                                       wallRepairer: 0, extractor: 0};
Game.spawns.Spawn9.memory.minsmallUpgraders = {W77N69: 1};
Game.spawns.Spawn8.memory.minLongDistanceHarvesters = {W77N68: 2};
Game.spawns.Spawn9.memory.minLongDistanceHarvesters = {W78N69: 2};
Game.spawns.Spawn9.memory.minLongDistanceHarvesters = {W76N69: 2};

//W79N63
Game.spawns.Spawn17.memory.minCreeps = {lorry: 4, towerlorry: 4, harvester: 0, upgrader: 0,terminalory: 0,
                                       wallRepairer: 0, builder: 0, repairer: 0, rampartrepairer:0};
Game.spawns.Spawn19.memory.minCreeps = {lorry: 3, rampartrepairer: 0, towerlorry: 3, harvester: 0, upgrader: 0,
                                      wallRepairer: 0, builder: 0, repairer: 0, extractor: 0};
Game.spawns.Spawn17.memory.minsmallUpgraders = {W79N63: 1};
Game.spawns.Spawn17.memory.minLongDistanceHarvesters = {W79N62: 3};
Game.spawns.Spawn19.memory.minLongDistanceHarvesters = {W79N61: 1};

//W79N64
Game.spawns.Spawn22.memory.minCreeps = {wallRepairer: 1, extractor: 0, lorry: 2, rampartrepairer: 1, towerlorry: 1,
				       oxygenlorry: 0, hydrogenlorry: 0, hydroxidelorry: 0, harvester: 0, terminalory: 1};
Game.spawns.Spawn20.memory.minCreeps = {wallRepairer: 0, towerlorry: 1, lorry: 1, builder: 0,
					upgrader: 0, rampartrepairer: 1 };
Game.spawns.Spawn20.memory.minsmallUpgraders = {W79N64: 1};
Game.spawns.Spawn20.memory.minbigUpgraders = {W79N64: 0};
Game.spawns.Spawn22.memory.minLongDistanceHarvesters = {W78N64: 2};
Game.spawns.Spawn20.memory.minLongDistanceHarvesters = {W79N65: 2};

//Game.creeps['Isabelle'].memory.target = 'W79N64'
//Game.market.outgoingTransactionsarray

// Function to create creeps with names
Spawn.prototype.getCreepName = function(role){
            var creepName = role + '_0';
            for (i = 0; i < 9999 ; i++) {
                creepName = role + '_' + i;
                if (Game.creeps[creepName] === undefined
                  || Game.creeps[creepName] === null)
                  break;
            }
            return creepName;
        }

 // Function to get serial number
 Spawn.prototype.getSerial = function(role) {
            var creepName = role + '_0';
            for (i = 0; i < 9999 ; i++) {
                creepName = role + '_' + i;
                if (Game.creeps[creepName] === undefined
                  || Game.creeps[creepName] === null)
                  break;
            }
            return i;
        }

// create a new function for StructureSpawn
StructureSpawn.prototype.spawnCreepsIfNecessary =
    function () {
        /** @type {Room} */
        let room = this.room;
        // find all creeps in room
        /** @type {Array.<Creep>} */
        let creepsInRoom = room.find(FIND_MY_CREEPS);
        
        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        /** @type {Object.<string, number>} */
        let numberOfCreeps = {};
        for (let role of listOfRoles) {
            numberOfCreeps[role] = _.sum(creepsInRoom, (c) => c.memory.role == role);
        }
        let maxEnergy = room.energyCapacityAvailable;
        let name = undefined;

        // if no harvesters are left AND either no miners or no lorries are left
        //  create a backup creep
        if (numberOfCreeps['harvester'] == 0 && numberOfCreeps['lorry'] == 0) {
            // if there are still miners or enough energy in Storage left
            if (numberOfCreeps['miner'] > 0 ||
                (room.storage != undefined && room.storage.store[RESOURCE_ENERGY] >= 150 + 550)) {
                // create a lorry
                name = this.createLorry(150);
            }
            // if there is no miner and not enough energy in Storage left
      /*      else {
                // create a harvester because it can work on its own
                name = this.createCustomCreep(room.energyAvailable, 'harvester');
            } */
        }
        // if no backup creep is required
        else {
            // check if all sources have miners
            let sources = room.find(FIND_SOURCES);
            // iterate over all sources
            for (let source of sources) {
                // if the source has no miner
                if (!_.some(creepsInRoom, c => c.memory.role == 'miner' && c.memory.sourceId == source.id)) {
                    // check whether or not the source has a container
                    /** @type {Array.StructureContainer} */
                    let containers = source.pos.findInRange(FIND_STRUCTURES, 1, {
                        filter: s => s.structureType == STRUCTURE_CONTAINER
                    });
                    // if there is a container next to the source
                    if (containers.length > 0) {
                       // if (numberOfCreeps['miner'] < 3 )

                        // spawn a miner
                        name = this.createMiner(source.id);
                        break;
                    }                
                }
            }
        }

        // if none of the above caused a spawn command check for other roles
        if (name == undefined) {
            for (let role of listOfRoles) {
                // check for claim order
                if (role == 'claimer' && this.memory.claimRoom != undefined) {
                    // try to spawn a claimer
                    name = this.createClaimer(this.memory.claimRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the claim order
                        delete this.memory.claimRoom;
                    }
                }
		    // check for reservists1 order
                if (role == 'reservists1' && this.memory.reserveRoom != undefined) {
                    // try to spawn a claimer
                    name = this.createReserver(this.memory.reserveRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the reserve order
                        delete this.memory.reserveRoom;
                    }
                }
                // check for mug order
                if (role == 'mugger' && this.memory.mugRoom != undefined) {
                    // try to spawn a mugger
                    name = this.createMugger(this.memory.mugRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the claim order
                        delete this.memory.mugRoom;
                    }
                }
		    // check for rangedattacker order
                if (role == 'rangedattacker' && this.memory.rangedattackerRoom != undefined) {
                    // try to spawn a rangedattacker
                    name = this.createrangedattacker(this.memory.rangedattackerRoom);
                    // if that worked
                    if (name != undefined && _.isString(name)) {
                        // delete the rangedattacker order
                        delete this.memory.rangedattackerRoom;
                    }
                }
                   		 
                // if no claim order was found, check other roles
                else if (numberOfCreeps[role] < this.memory.minCreeps[role]) {
                    if (role == 'lorry') {
                        name = this.createLorry(150);
                    }
                    else{
                        name = this.createCustomCreep(maxEnergy, role);
                    }
                    if (role == 'towerlorry') {
                        name = this.createtowerLorry(250);
                    }
                    if (role == 'lemergiumlorry') {
                        name = this.createlemergiumlorry(150);
                       }
                    if (role == 'terminalory') {
                       name = this.createterminalory(150);
                         }
                    if (role == 'utriumlorry') {
                        name = this.createutriumLorry(150);
                    }
                    if (role == 'keaniumlorry') {
                        name = this.createkeaniumLorry(150);
                    }
                    if (role == 'zynthiumlorry') {
                        name = this.createzynthiumLorry(150);
                    }               
                    if (role == 'oxygenlorry') {
                            name = this.createoxygenLorry(150);
                    }                              
                    if (role == 'hydroxidelorry') {
                            name = this.createhydroxidelorry(150);
                    }
                    if (role == 'hydrogenlorry') {
                        name = this.createhydrogenlorry(150);
                    }
                    if (role == 'zkul') {
                        name = this.createzkullorry(150);
                    }
                    if (role == 'ghodiumlorry') {
                        name = this.createghodiumLorry(150);
                    }
                    if (role == 'ghodiumacid') {
                        name = this.createghodiumacid(150);
                    }
		   if (role == 'ghodiumacidlorry') {
                        name = this.createghodiumacidlorry(150);
                    }
                   if (role == 'catalyst') {
                        name = this.createcatalyst(150);
                    }
		    if (role == 'extractor') {
                        name = this.createextractor(150);
                    }
		   if (role == 'storagelorry') {
                        name = this.createstoragelorry(150);
                    }      
                    break;
                   }
                }  
}

        // if none of the above caused a spawn command check for rangedattackers
        /** @type {Object.<string, number>} */
        let numberOfRangedAttackers = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minrangedattackers) {
                numberOfRangedAttackers[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'rangedattacker' && c.memory.target == roomName);

                if (numberOfRangedAttackers[roomName] < this.memory.minrangedattackers[roomName]) {
                    name = this.createrangedattacker(room.name, roomName)}
            }
        }
        // if none of the above caused a spawn command check for LongDistanceHarvesters
        /** @type {Object.<string, number>} */
        let numberOfLongDistanceHarvesters = {};
        if (name == undefined) {
            // count the number of long distance harvesters globally
            for (let roomName in this.memory.minLongDistanceHarvesters) {
                numberOfLongDistanceHarvesters[roomName] = _.sum(Game.creeps, (c) =>
                    c.memory.role == 'longDistanceHarvester' && c.memory.target == roomName);

                if (numberOfLongDistanceHarvesters[roomName] < this.memory.minLongDistanceHarvesters[roomName]) {
                    name = this.createLongDistanceHarvester(maxEnergy, 2, room.name, roomName, 0);
                }
            }
        }
	
// if none of the above caused a spawn command check for smallUpgraders
        /** @type {Object.<string, number>} */
        let numberOfsmallUpgraders = {};
        if (name == undefined) {
            // count the number of small Upgraders globally
          
        for (let roomName in this.memory.minsmallUpgraders) {
              numberOfsmallUpgraders[roomName] = _.sum(Game.creeps, (c) =>
                  c.memory.role == 'smallUpgrader' && c.memory.target == roomName);
            
          if (numberOfsmallUpgraders[roomName] < this.memory.minsmallUpgraders[roomName]) {
                    name = this.createsmallUpgrader(maxEnergy, 2, room.name, roomName, 0); 
                }
            }
        }
	 	
// if none of the above caused a spawn command check for extractors
        /** @type {Object.<string, number>} */
let numberOfextractors = {};
        if (name == undefined) {
         
// count the number of extractors globally
        for (let roomName in this.memory.minextractors) {
              numberOfextractors[roomName] = _.sum(Game.creeps, (c) =>
                  c.memory.role == 'extractor' && c.memory.target == roomName);
            
          if (numberOfextractors[roomName] < this.memory.minextractors[roomName]) {
                    name = this.createextractor(maxEnergy, 10, room.name, roomName, 0);
                }
            }
        }

  // print name to console if spawning was a success
        if (name != undefined && _.isString(name)) {
            console.log(this.name + " spawned new creep: " + name + " (" + Game.creeps[name].memory.role + ")");
            for (let role of listOfRoles) {
                console.log(role + ": " + numberOfCreeps[role]);
            }
            for (let roomName in numberOfextractors) {
                console.log("extractor" + roomName + ": " + numberOfextractors[roomName]);
            }
        }
};

// create a new function for StructureSpawn
StructureSpawn.prototype.createCustomCreep =
    function (energy, roleName) {
    
        // create a balanced body as big as possible with the given energy
        var numberOfParts = Math.floor(energy / 200);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body and the given role
        return this.createCreep(body, undefined, { role: roleName, working: false });
	//return this._createCreep(body, name, memory, { role: roleName, working: false });
    };

//create a new function fo bigupgrader
StructureSpawn.prototype.createbigUpgrader =
  function (energy, numberOfbigWorkParts, home, target, sourceIndex, getBoost) {
  // create a body
    var bigbody = [];
    for (let i = 0; i < numberOfbigWorkParts; i++) {
    bigbody.push(WORK);
    }
  
  // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
  //  energy -= 150 * numberOfbigWorkParts;
    var numberOfBigBodyParts = Math.floor(energy / 200);
    
  // creep not too big more than 60 parts
    numberOfBigBodyParts = Math.min(numberOfBigBodyParts, Math.floor(50/2));
    
    for (let i = 0; i < numberOfBigBodyParts; i++) {
    bigbody.push(CARRY);
    }  
    for (let i = 0; i < 10; i++) {
    bigbody.push(MOVE);
}
   
  // create BigUpgrader
  return this.createCreep(bigbody, undefined, {role: 'bigUpgrader', 
                                              home: home,
                                              target: target,
                                              sourceIndex: sourceIndex,
                                              working: false,
					      getBoost: false
                                              });
};

// create a new function for StructureSpawn
StructureSpawn.prototype.createLongDistanceHarvester =
    function (energy, numberOfWorkParts, home, target, sourceIndex) {
        // create a body with the specified number of WORK parts and one MOVE part per non-MOVE part
        var body = [];
        for (let i = 0; i < numberOfWorkParts; i++) {
            body.push(WORK);
        }
        // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
        energy -= 150 * numberOfWorkParts;

        var numberOfParts = Math.floor(energy / 100);
        
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor((40 - numberOfWorkParts * 2) / 2));
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts + numberOfWorkParts; i++) {
            body.push(MOVE);
        }
       // for (let i = 0; i < 3; i++) {
        //    body.push(RANGED_ATTACK);
       // }
     
        // create creep with the created body
  
         return this.createCreep(body, Spawn.prototype.getCreepName('c'), {
                    role: 'longDistanceHarvester',
		    home: home,
                    serial: Spawn.prototype.getSerial('c'),
		    target: target,
		    sourceIndex: sourceIndex,
                    working: false
                });
    };

// create a new function for StructureSpawn
StructureSpawn.prototype.createClaimer =
    function (target) {
        return this.createCreep([MOVE, MOVE, CLAIM, CLAIM], Spawn.prototype.getCreepName('claimer'), {
                    role: 'claimer',
                    serial: Spawn.prototype.getSerial('claimer'),
		    target: target
                });
};
				
// create a new function for StructureSpawn
StructureSpawn.prototype.createReserver =
    function (target) {
        return this.createCreep([MOVE, MOVE, CLAIM, CLAIM], Spawn.prototype.getCreepName('2703'), {
                    role: '2703',
                    serial: Spawn.prototype.getSerial('reservists1'),
		    target: target
                });
    };

// create a new function for StructureSpawn
StructureSpawn.prototype.createMugger =
    function (target, target2) {
        return this.createCreep([MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK  ], undefined, { role: 'mugger', target: target, target2: target2 });
    };

// create a new function for StructureSpawn
StructureSpawn.prototype.createrangedattacker =
    function (home, target, getBoostkh) {

        let homeRm = this.room.name;

        return this.createCreep([
ATTACK, ATTACK, ATTACK, ATTACK,
MOVE, MOVE, MOVE, MOVE, MOVE,
], undefined, { role: 'rangedattacker',
	      homeRm: homeRm,
	      target: target, 
	  getBoostkh: false
	      });
    };

  // Function for spawning a Builder
        StructureSpawn.prototype.spawnBuilder = function(energy, operation) {
            var body = [];
            var maxSegments = 10;
            var numberOfSegments = Math.min(maxSegments, Math.floor(energy / 200));
            for (i = 0; i < numberOfSegments; i++) {
                body.push(WORK);
                body.push(CARRY);
                body.push(MOVE);
            }
            return this.createCreep(
                body, Spawn.prototype.getCreepName('c2701'), {
                    role: 'builder',
                    serial: Spawn.prototype.getSerial('c2701'),
                    origin: this.room.name,
                    operation: operation,
                    task: '',
                    target: ''
                }
            )
        }




// create a new function for StructureSpawn
StructureSpawn.prototype.createLorry =
    function (energy) {
        // create a body with twice as many CARRY as MOVE parts
        var numberOfParts = Math.floor(energy / 100);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts * 4; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body and the role 'lorry'
        return this.createCreep(body, Spawn.prototype.getCreepName('2704'), {
                    role: 'lorry',
                    serial: Spawn.prototype.getSerial('2704'),
		    working: false
                });
};

// create a new function for StructureSpawn
StructureSpawn.prototype.createtowerLorry =
    function (energy) {
        // create a body with twice as many CARRY as MOVE parts
        var numberOfParts = Math.floor(energy / 100);
        // make sure the creep is not too big (more than 50 parts)
        numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
        var body = [];
        for (let i = 0; i < numberOfParts * 2; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }

        // create creep with the created body and the role 'lorry'
        return this.createCreep(body, Spawn.prototype.getCreepName('2705'), {
                    role: 'towerlorry',
                    serial: Spawn.prototype.getSerial('2705'),
		    working: false
                });
};				
  // create a new function for StructureSpawn
  StructureSpawn.prototype.createutriumLorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'utriumlorry'
          return this.createCreep(body, Spawn.prototype.getCreepName('utriumlorry'), {
                    role: 'utriumlorry',
                    serial: Spawn.prototype.getSerial('utriumlorry'),
		    working: false
                });
  };
	
  // create a new function for StructureSpawn
 StructureSpawn.prototype.createlemergiumlorry =
      function (energy) {
          
          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'lemergiumlorry'
          return this.createCreep(body, undefined, {role: 'lemergiumlorry', working: false});   
      };
// create a new function for StructureSpawn
 StructureSpawn.prototype.createterminalory =
      function (energy) {
          
          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts * 3; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'terminalory'
          return this.createCreep(body, undefined, {role: 'terminalory', working: false});
};
// create a new function for StructureSpawn
  StructureSpawn.prototype.createkeaniumLorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'keaniumlorry'
          return this.createCreep(body, undefined, {role: 'keaniumlorry', working: false});
      };
// create a new function for StructureSpawn
  StructureSpawn.prototype.createzynthiumLorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'zynthiumlorry'
          return this.createCreep(body, undefined, {role: 'zynthiumlorry', working: false});
      };
// create a new function for StructureSpawn
  StructureSpawn.prototype.createoxygenLorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'oxygenlorry'
          
              return this.createCreep(body, undefined, {role: 'oxygenlorry', working: false});
          
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createhydrogenlorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'hydrogenlorry'
          return this.createCreep(body, undefined, {role: 'hydrogenlorry', working: false});
      };

// create a new function for StructureSpawn
 StructureSpawn.prototype.createhydroxidelorry =
      function (energy) {
          
          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'hydroxidelorry'
          
          return this.createCreep(body, undefined, {role: 'hydroxidelorry', working: false});
};


// create a new function for StructureSpawn
  StructureSpawn.prototype.createghodiumLorry =
      function (energy) {

          // create a body with CARRY and MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'ghodiumlorry'
          return this.createCreep(body, undefined, {role: 'ghodiumlorry', working: false});
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createghodiumacid =
      function (energy) {

          // create a body with CARRY and MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'ghodiumacid'
          return this.createCreep(body, undefined, {role: 'ghodiumacid', working: false});
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createghodiumacidlorry =
      function (energy) {

          // create a body with CARRY and MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'ghodiumacidlorry'
          return this.createCreep(body, undefined, {role: 'ghodiumacidlorry', working: false});
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createcatalyst =
      function (energy) {

          // create a body with CARRY and MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'catalyst'
          return this.createCreep(body, undefined, {role: 'catalyst', working: false});
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createzkullorry =
      function (energy) {

          // create a body with twice as many CARRY as MOVE parts
          var numberOfParts = Math.floor(energy / 100);
          // make sure the creep is not too big (more than 50 parts)
          numberOfParts = Math.min(numberOfParts, Math.floor(50 / 3));
          var body = [];
          for (let i = 0; i < numberOfParts; i++) {
              body.push(CARRY);
          }
          for (let i = 0; i < numberOfParts; i++) {
              body.push(MOVE);
          }
          // create creep with the created body and the role 'hydrogenlorry'
          return this.createCreep(body, undefined, {role: 'zkul', working: false});
      };

// create a new function for StructureSpawn
  StructureSpawn.prototype.createstoragelorry =
      function (energy, numberOfbigWorkParts) {
// create a body
    var bigbody = [];
    for (let i = 0; i < numberOfbigWorkParts; i++) {
    bigbody.push(WORK);
    }

// 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    energy -= 150 * numberOfbigWorkParts;
    var numberOfBigBodyParts = Math.floor(energy / 100);

// creep not too big more than 60 parts
    numberOfBigBodyParts = Math.min(numberOfBigBodyParts, Math.floor((50 - numberOfbigWorkParts * 2) / 2));

    for (let i = 0; i < numberOfBigBodyParts; i++) {
    bigbody.push(CARRY);
    }
    for (let i = 0; numberOfbigWorkParts + numberOfbigWorkParts; i++) {
    bigbody.push(MOVE);
}

  // create storagelorry  
          return this.createCreep(bigbody, undefined, {role: 'storagelorry', working: false});
}; 


         //create a new function for extractor
StructureSpawn.prototype.createextractor =
  function (energy, numberOfbigWorkParts, home, target, sourceIndex) {
  // create a body
    var bigbody = [];
    for (let i = 0; i < numberOfbigWorkParts; i++) {
    bigbody.push(WORK);
    }

  // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    energy -= 150 * numberOfbigWorkParts;
    var numberOfBigBodyParts = Math.floor(energy / 100);

  // creep not too big more than 60 parts
    numberOfBigBodyParts = Math.min(numberOfBigBodyParts, Math.floor((50 - numberOfbigWorkParts * 2) / 2));

    for (let i = 0; i < numberOfBigBodyParts; i++) {
    bigbody.push(CARRY);
    }
    for (let i = 0; numberOfbigWorkParts + numberOfbigWorkParts; i++) {
    bigbody.push(MOVE);
}

  // create extractor
	
  return this.createCreep(bigbody, undefined, {role: 'extractor',
                                              home: home,
                                              target: target,
                                              sourceIndex: sourceIndex,
                                              working: false
                                              });
	
}; 

//create a new function fo smallupgrader
StructureSpawn.prototype.createsmallUpgrader =
  function (energy, numberOfsmallWorkParts, home, target, sourceIndex) {
  // create a body
    var smallbody = [];
    for (let i = 0; i < numberOfsmallWorkParts; i++) {
    smallbody.push(WORK);
    }
  
  // 150 = 100 (cost of WORK) + 50 (cost of MOVE)
    energy -= 150 * numberOfsmallWorkParts;
    var numberOfsmallBodyParts = Math.floor(energy / 200);
    
  // creep not big
    numberOfsmallBodyParts = Math.min(numberOfsmallBodyParts, Math.floor((40 - numberOfsmallWorkParts) / 3));
    
    for (let i = 0; i < numberOfsmallBodyParts; i++) {
    smallbody.push(CARRY);
    }  
    for (let i = 0; i < 2; i++) {
    smallbody.push(MOVE);
}
   
  // create smallUpgrader
  return this.createCreep(smallbody, Spawn.prototype.getCreepName('2706'), {
          role: 'smallUpgrader',
	  home: home,
          serial: Spawn.prototype.getSerial('2706'),
          target: target,
	  sourceIndex: sourceIndex,
	  working: false
          });
};

// create a new function for StructureSpawn
StructureSpawn.prototype.createMiner =
    function (sourceId) {
        return this.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE],
		Spawn.prototype.getCreepName('c2702'), {
                    role: 'miner',
                    serial: Spawn.prototype.getSerial('c2702'),
		    sourceId: sourceId
                });
    };	

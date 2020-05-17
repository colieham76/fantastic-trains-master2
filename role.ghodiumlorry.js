

module.exports = {
  // a function to run the logic for this role
  /** @param {Creep} creep */
  run: function(creep) {
            const visualPath = {
            fill: 'transparent',
            stroke: '#fff511',
            lineStyle: 'continuous',
            strokeWidth: .1,
            opacity: .3
            }
    /*if (creep.memory.target != undefined && creep.room.name != creep.memory.target &&
        creep.carryCapacity == _.sum(creep.carry)) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));            
            // return the function to not do anything else
            return;
    }*/
  
      if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && 0 == _.sum(creep.carry)) {
            creep.memory.working = true;
        }
        var resourceTypes = [
            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE
            RESOURCE_GHODIUM
        ];
     if (creep.memory.working) { // mineral from lab or terminal
       
    var ghodiumlab = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5b779d8adf624f7cfecb64e9') //W12N88 lab to terminal
                    //&& s.mineralAmount < s.mineralCapacity
            });
       
       var ghodiumterminal = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TERMINAL
                    && (s.id == '5b6bfddbf134e14c2b6e83dd' || s.mineralType === RESOURCE_GHODIUM) //W11N88 terminal to lab
                    //&& s.mineralAmount < s.mineralCapacity      
            });
            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.withdraw(ghodiumlab[i], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {//W12N88 lab to terminal
                    creep.moveTo(ghodiumlab[i], {visualizePathStyle: visualPath});
                }          
            }
       for (let j = 0, K = resourceTypes.length; j < K; j++) {
                if (creep.withdraw(ghodiumterminal[j], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {  //W11N88 terminal to lab
                    creep.moveTo(ghodiumterminal[j], {visualizePathStyle: visualPath});         
                }          
            }
       
        } else { // mineral to lab or terminal
          
          if(creep.carryCapacity == _.sum(creep.carry)) {

          var ghodiumterminalW12N88 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TERMINAL
                    && (s.id == '5b21e9ce852b8c09368709ae') //W12N88 lab to terminal
                    //&& s.mineralAmount < s.mineralCapacity      
            });
          for (let d = 0, E = resourceTypes.length; d < E; d++) {
          if (creep.transfer(ghodiumterminalW12N88[d], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) { //W12N88 lab to terminal
                    creep.moveTo(ghodiumterminalW12N88[d], {visualizePathStyle: visualPath});
                }
            }
          var ghodiumlabW11N88 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5c0b9a71e34234554f7c6561') //W12N88 & W11N88 lab to terminal
                    //&& s.mineralAmount < s.mineralCapacity
            });
          for (let b = 0, C = resourceTypes.length; b < C; b++) {
                if (creep.transfer(ghodiumlabW11N88[b], RESOURCE_GHODIUM) == ERR_NOT_IN_RANGE) {//W12N88 & W11N88 lab to terminal
                    creep.moveTo(ghodiumlabW11N88[b], {visualizePathStyle: visualPath});
                }          
            }
          }  
        }
    }
} 

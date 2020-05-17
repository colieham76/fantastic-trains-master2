var roleBuilder = require('role.builder');

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {

/*
if (!creep.memory.claimFlag7) {
            creep.moveTo(Game.flags['claimFlag7']);
            if (creep.pos.isNearTo(Game.flags['claimFlag7'])) {
                creep.memory.claimFlag7 = true;
            }
            return;
         }
        else
        if (!creep.memory.claimFlag6) {
            creep.moveTo(Game.flags['claimFlag6']);
            if (creep.pos.isNearTo(Game.flags['claimFlag6'])) {
                creep.memory.claimFlag6 = true;
            }
            return;
         }
          if (!creep.memory.claimFlag5) {
            creep.moveTo(Game.flags['claimFlag5']);
            if (creep.pos.isNearTo(Game.flags['claimFlag5'])) {
                creep.memory.claimFlag5 = true;
            }
            return;
        }
       else
        if (!creep.memory.claimFlag4) {
            creep.moveTo(Game.flags['claimFlag4']);
            if (creep.pos.isNearTo(Game.flags['claimFlag4'])) {
                creep.memory.claimFlag4 = true;
            }
            return;
         }
        else
        if (!creep.memory.claimFlag3) {
            creep.moveTo(Game.flags['claimFlag3']);
            if (creep.pos.isNearTo(Game.flags['claimFlag3'])) {
                creep.memory.claimFlag3 = true;
            }
            return;
         }
        else
         if (!creep.memory.claimFlag2) {
            creep.moveTo(Game.flags['claimFlag2']);
            if (creep.pos.isNearTo(Game.flags['claimFlag2'])) {
                creep.memory.claimFlag2 = true;
            }
            return;
         }       
        else
             if (!creep.memory.claimFlag1) {
            creep.moveTo(Game.flags['claimFlag1']);
            if (creep.pos.isNearTo(Game.flags['claimFlag1'])) {
                creep.memory.claimFlag1 = true;
            }
            return;
      }   

*/

        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
                                                  && s.structureType != STRUCTURE_RAMPART           
            });

            // if we find one
            if (structure != undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            }
        }
        // if creep is supposed to get energy
        else {
            creep.getEnergy(true, true);
        }
    }
};

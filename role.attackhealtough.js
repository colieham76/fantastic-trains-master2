/*
module.exports = {

/** @param {Creep} creep **/
    run: function (creep) {

/*
    if (creep.memory.getBoost) {
                      if (creep.room.name == 'W15N89') {     
                                let lab = Game.getObjectById('5c2f27108f353d75981d2f79');
                                let labx = Game.getObjectById('5c4e2e25801ac231f21b3e83');
                                let boost = lab.boostCreep(creep);
                                let boostx = labx.boostCreep(creep);
         
                                if (boost == ERR_NOT_IN_RANGE)
                                    creep.moveTo(lab);
                                if (boost == OK)
                                    creep.memory.getBoost = false;
                          
         
                              if(lab.mineralAmount < 500)
                                if (boostx == ERR_NOT_IN_RANGE)
                                    creep.moveTo(labx);
                                if (boostx == OK)
                                    creep.memory.getBoost = false;
                          return;
                       }    
                        }

 if (!creep.memory.atCheck) { 
            creep.moveTo(Game.flags['AttackFlag1']); 
             if (creep.pos.isNearTo(Game.flags['AttackFlag1'])) { 
                 creep.memory.atCheck = true; 
             } 
             return; 
         } 

 var targetHeal = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function (object) {
                    return object.hits < object.hitsMax;
                }
            });
            if (targetHeal) {
                if (creep.pos.isNearTo(targetHeal)) {
                    creep.heal(targetHeal);
                }
                else {
                    creep.rangedHeal(targetHeal);
                }
            }

 var targets = [];
        if (creep.memory.role == 'attackerM' || creep.memory.role == 'attackerR') {
            //attack within range

            //attack creeps in range (ranged)
            if (creep.getActiveBodyparts(RANGED_ATTACK)) {
                targets = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 3);
                if (targets.length > 0) {
                    attacked = creep.rangedAttack(targets[0]);
                    if (targets.length > 2)
                        creep.rangedMassAttack();

                    //run if melee attacker is close
                    let isNear = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 2, { filter: i => i.getActiveBodyparts(ATTACK) > 0 });
                    if (isNear.length) {
                        creep.moveTo(isNear[0], { maxRooms: 1, flee: true });
                        return;
                    }
                }

*/
}


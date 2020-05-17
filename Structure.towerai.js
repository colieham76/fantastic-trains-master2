Object.assign(component, {

  tower: {

    /**
     * @see http://support.screeps.com/hc/en-us/articles/203339002-Defending-your-room
     */

    routine: function (entity) {

      var targets = {};
      var room = entity.room;

      /**
       * priority order
       */

      // things to always shoot at
      if (entity.energy > 0) {

        targets = room.find(FIND_HOSTILE_CREEPS);
        if (targets.length) {
          this.attackClosestTarget(entity, targets);
          return;
        }
  
        // repair roads
        targets = room.find(FIND_STRUCTURES, {
          filter: function(structure) {
            return structure.structureType == STRUCTURE_ROAD && structure.hitsMax > structure.hits;
          },
        });
        if (targets.length) {
          this.repairClosestTarget(entity, targets);
          return;
        }

        // if we're not building anything, distribute between walls and ramparts
        var constructions = room.find(FIND_CONSTRUCTION_SITES);
        if(constructions.length < 1) {

          // repair ramparts and walls
          targets = room.find(FIND_STRUCTURES, {
            filter: function (structure) {
              return (
                  structure.structureType == STRUCTURE_RAMPART ||
                  structure.structureType == STRUCTURE_WALL
                ) && structure.hits < structure.hitsMax;
            }
          });
          if (targets.length) {
            this.repairLowestTarget(entity, targets);
            return;
          }

        }

      }

    },

    attackClosestTarget: function (entity, targets) {
      var target = entity.pos.findClosestByRange(targets);
      //console.log('attacking: ' + JSON.stringify(target));
      var attackCode = entity.attack(target);
      if (attackCode != 0) {
        console.log('Attacking failed, for unknown reason with code: ' + attackCode);
      }
    },

   
    repairLowestTarget: function (entity, targets) {
      var target = _.min(targets, target => target.hits);
      var repairCode = entity.repair(target);
      if (repairCode != 0) {
        console.log('Repairing failed, for unknown reason with code: ' + repairCode);
      }
    },

  },

});


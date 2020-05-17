// create a new function for StructureTower
StructureTower.prototype.defend =
    function () {
        // find closes hostile creep
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var structure = this.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL &&
            s.structureType != STRUCTURE_RAMPART //&& s.structureType != STRUCTURE_ROAD
        })


        if (this.energy <= 0) {
            return;
        }

        let best = null;
        let lowest = 99999999;
        let largest = 0;

        //look for enemy creeps with attack power first
        const enemies = this.room.find(FIND_HOSTILE_CREEPS, {
            filter: (obj) => {
                return (obj.getActiveBodyparts(HEAL) + obj.getActiveBodyparts(ATTACK)) > 0
            }
        });
        if (enemies.length > 0) {
            for (let i = 0; i < enemies.length; i++) {
                if (enemies[i].getActiveBodyparts(HEAL) + enemies[i].getActiveBodyparts(ATTACK) > largest) {
                    best = enemies[i];
                    largest = enemies[i].getActiveBodyparts(HEAL) + enemies[i].getActiveBodyparts(ATTACK);
                }
            }

            if (best) {
                this.attack(best);
            }
        } else {// if enemy is found...
            if (target != undefined) {
                // ...FIRE!
                this.attack(target);
            } else {
                this.repair(structure);
            }
        }
    };

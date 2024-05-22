// AutoSacrifice
// by 9025
//
// Modified for CCSE by Dallin Lauritzen
//
// Original Source: https://drive.google.com/drive/folders/13cQW4jAhlYSo23E9BdUkfblJIAjczY3T

if (AutoSacrifice === undefined) var AutoSacrifice = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

AutoSacrifice.name = 'AutoSacrifice';
AutoSacrifice.version = '1.55';
AutoSacrifice.GameVersion = '2.052'; // TODO: Check changelog from 2.048 for potential problems.

AutoSacrifice.launch = function () {

    AutoSacrifice.seed_order =
        [
            "meddleweed",

            "bakeberry",
            "thumbcorn",
            "cronerice",

            "crumbspore",
            "brownMold",
            "whiteMildew",
            "chocoroot",
            "queenbeet",
            "queenbeetLump",

            "gildmillet",
            "clover",
            "greenRot",
            "shimmerlily",

            "elderwort",

            "keenmoss",
            "drowsyfern",
            "wardlichen",

            "whiteChocoroot",
            "tidygrass",

            "everdaisy",
            "ichorpuff",

            "doughshroom",
            "wrinklegill",
            "glovemorel",
            "cheapcap",
            "foolBolete",

            "whiskerbloom",
            "chimerose",
            "nursetulip",

            "duketater",
            "shriekbulb",

            "goldenClover"
        ];


    // The type is 0 for 2x of one plant, 1 for 2 different plants, and 2 for a weird setup that must be explicitly defined.
    AutoSacrifice.mutation_setups =
    {
        thumbcorn:
        {
            id: 1,
            type: 0,
            parents: ["bakerWheat"]
        },

        bakeberry:
        {
            id: 8,
            type: 0,
            parents: ["bakerWheat"],
            try_without_replanting: ["queenbeet"],
            try_without_replanting_partner: ["chocoroot"]
        },

        whiteMildew:
        {
            id: 11,
            type: 0,
            parents: ["brownMold"]
        },

        doughshroom:
        {
            id: 24,
            type: 0,
            parents: ["crumbspore"]
        },

        duketater:
        {
            id: 22,
            type: 0,
            parents: ["queenbeet"]
        },

        nursetulip:
        {
            id: 16,
            type: 0,
            parents: ["whiskerbloom"]
        },

        goldenClover:
        {
            id: 5,
            type: 0,
            parents: ["clover"],

            tiles: [[0, 0], [0, 2], [0, 5], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 0], [2, 1], [3, 4], [3, 5], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [5, 0], [5, 3], [5, 5]],

            empty_tiles: [[0, 1], [0, 3], [0, 4], [1, 0], [2, 2], [2, 3], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 3], [4, 5], [5, 1], [5, 2], [5, 4]]
        },

        queenbeetLump:
        {
            id: 21,
            type: 0,
            parents: ["queenbeet"],

            tiles: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 2], [1, 4], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [3, 2], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],

            empty_tiles: [[1, 1], [1, 3], [3, 1], [3, 3]]
        },

        shriekbulb:
        {
            id: 30,
            type: 0,
            parents: ["duketater"],
        },



        cronerice:
        {
            id: 2,
            type: 1,
            parents: ["thumbcorn", "bakerWheat"],
            try_without_replanting: ["gildmillet"],
            try_without_replanting_partner: ["thumbcorn"]
        },

        gildmillet:
        {
            id: 3,
            type: 1,
            parents: ["thumbcorn", "cronerice"],
            try_without_replanting: ["clover"],
            try_without_replanting_partner: ["bakerWheat"]
        },

        chocoroot:
        {
            id: 9,
            type: 1,
            parents: ["bakerWheat", "brownMold"],
            try_without_replanting: ["whiteChocoroot"],
            try_without_replanting_partner: ["whiteMildew"]
        },

        wrinklegill:
        {
            id: 28,
            type: 1,
            parents: ["brownMold", "crumbspore"]
        },

        glovemorel:
        {
            id: 25,
            type: 1,
            parents: ["thumbcorn", "crumbspore"]
        },

        clover:
        {
            id: 4,
            type: 1,
            parents: ["bakerWheat", "gildmillet"],
            try_without_replanting: ["shimmerlily", "greenRot"],
            try_without_replanting_partner: ["gildmillet", "whiteMildew"]
        },

        queenbeet:
        {
            id: 20,
            type: 1,
            parents: ["chocoroot", "bakeberry"]
        },

        whiteChocoroot:
        {
            id: 10,
            type: 1,
            parents: ["whiteMildew", "chocoroot"]
        },

        wardlichen:
        {
            id: 18,
            type: 1,
            parents: ["keenmoss", "cronerice"]
        },

        shimmerlily:
        {
            id: 6,
            type: 1,
            parents: ["gildmillet", "clover"]
        },

        tidygrass:
        {
            id: 31,
            type: 1,
            parents: ["bakerWheat", "whiteChocoroot"]
        },

        greenRot:
        {
            id: 29,
            type: 1,
            parents: ["whiteMildew", "clover"]
        },

        elderwort:
        {
            id: 7,
            type: 1,
            parents: ["shimmerlily", "cronerice"]
        },

        whiskerbloom:
        {
            id: 14,
            type: 1,
            parents: ["whiteChocoroot", "shimmerlily"]
        },

        cheapcap:
        {
            id: 26,
            type: 1,
            parents: ["shimmerlily", "crumbspore"]
        },

        keenmoss:
        {
            id: 19,
            type: 1,
            parents: ["greenRot", "brownMold"]
        },

        foolBolete:
        {
            id: 27,
            type: 1,
            parents: ["greenRot", "doughshroom"]
        },

        chimerose:
        {
            id: 15,
            type: 1,
            parents: ["shimmerlily", "whiskerbloom"]
        },

        drowsyfern:
        {
            id: 17,
            type: 1,
            parents: ["chocoroot", "keenmoss"]
        },

        ichorpuff:
        {
            id: 33,
            type: 1,
            parents: ["crumbspore", "elderwort"],

            fast_tiles: [[1, 1], [1, 4], [5, 1], [5, 4]],

            slow_tiles: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]],

            empty_tiles: [[1, 0], [1, 2], [1, 3], [1, 5], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [5, 0], [5, 2], [5, 3], [5, 5]]
        },

        everdaisy:
        {
            id: 32,
            type: 1,
            parents: ["tidygrass", "elderwort"],

            fast_tiles: [[1, 0], [1, 2], [1, 3], [1, 5], [2, 0], [2, 2], [2, 5], [4, 0], [4, 5], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]],

            slow_tiles: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5]],

            empty_tiles: [[1, 1], [1, 4], [2, 1], [2, 3], [2, 4], [4, 1], [4, 2], [4, 3], [4, 4]]
        },



        bakerWheat:
        {
            id: 0
        },

        meddleweed:
        {
            id: 13,
            type: 2,
            parents: []
        },

        brownMold:
        {
            id: 12,
            type: 2,
            parents: ["meddleweed"],
            try_without_replanting: ["whiteMildew"],
            try_without_replanting_partner: [""]
        },

        crumbspore:
        {
            id: 23,
            type: 2,
            parents: ["meddleweed"],
            try_without_replanting: ["wrinklegill", "glovemorel"],
            try_without_replanting_partner: ["brownMold", "thumbcorn"]
        }
    };

    AutoSacrifice.init = function () {
        AutoSacrifice.isLoaded = 1;
        AutoSacrifice.config = AutoSacrifice.defaultConfig();

        AutoSacrifice.fertilizer_ticks = 0;
        AutoSacrifice.woodchips_ticks = 0;
        AutoSacrifice.last_fertilizer_ticks = 0;
        AutoSacrifice.last_woodchips_ticks = 0;
        AutoSacrifice.num_iterations = -1;
        AutoSacrifice.ticks_until_fast_plants = -1;
        AutoSacrifice.need_woodchips_for_secondary_target = false;
        AutoSacrifice.last_notification = "";
        AutoSacrifice.notified_jqb = false;
        AutoSacrifice.fertilizer_requests = 0;

        AutoSacrifice.hook_added = false;
        AutoSacrifice.last_time_called_from_buff_end = 0;
        AutoSacrifice.seed_to_unlock = "";
        AutoSacrifice.secondary_targets = {};

        AutoSacrifice.SetupMenu();
        AutoSacrifice.SetupBuffs();

        CCSE.customSave.push(AutoSacrifice.save);
        CCSE.customLoad.push(AutoSacrifice.load);

        // Game.Notify('Auto Sacrifice Loaded!',
        //     `Enable it with the button at the bottom of the options menu.`,
        //     [16, 6],
        //     5);
    }

    AutoSacrifice.SetupMenu = function () {
        Game.customOptionsMenu.push(function () {
            CCSE.AppendCollapsibleOptionsMenu(AutoSacrifice.name, AutoSacrifice.getMenuString());
        });
        Game.customStatsMenu.push(function () {
            CCSE.AppendStatsVersionNumber(AutoSacrifice.name, AutoSacrifice.version);
        });
    }

    AutoSacrifice.SetupBuffs = function () {
        let originalUpdateBuffs = Game.updateBuffs;
        Game.updateBuffs = function () {
            let buffsCopy = Game.buffs.filter(() => true); // Shallow copy before update
            originalUpdateBuffs();
            // Check for expired buffs and run logic.
            for (var i in buffsCopy) {
                var buff = buffsCopy[i];
                if (buff.time <= 0) {
                    if (AutoSacrifice.config.auto_sac_enabled && Date.now() - AutoSacrifice.last_time_called_from_buff_end > 10000) {
                        AutoSacrifice.last_time_called_from_buff_end = Date.now();

                        AutoSacrifice.post_tick_logic();
                    }
                }
            }
        }
    }

    AutoSacrifice.add_hook = function () {
        if (AutoSacrifice.hook_added) {
            return;
        }

        AutoSacrifice.hook_added = true;

        CCSE.MinigameReplacer(function () {
            let originalBuildPlot = Game.customMinigame['Farm'].buildPlot;

            Game.customMinigame['Farm'].buildPlot = function () {
                originalBuildPlot();

                if (AutoSacrifice.config.auto_sac_enabled) {
                    AutoSacrifice.post_tick_logic();
                }
            };
        }, 'Farm');
    };

    AutoSacrifice.togglePref = function (prefName, button, on, off, invert) {
        if (AutoSacrifice.config[prefName]) {
            AutoSacrifice.config[prefName] = false;

            // Disable dependent settings.
            if (prefName == 'auto_sac_enabled') {
                AutoSacrifice.config['do_convert'] = false;
                AutoSacrifice.config['avoid_cps_buffs'] = false;
                AutoSacrifice.config['allow_frenzies'] = false;
            } else if (prefName == 'avoid_cps_buffs') {
                AutoSacrifice.config['allow_frenzies'] = false;
            }
        } else {
            AutoSacrifice.config[prefName] = true;

            if (prefName == 'auto_sac_enabled') { // Mod enabled. Add hooks.
                AutoSacrifice.add_hook();
            }
        }
    }

    AutoSacrifice.getMenuString = function () {
        let m = CCSE.MenuHelper;
        var str = m.Header(AutoSacrifice.name);
        str += '<div class="listing">'
            + m.ToggleButton(AutoSacrifice.config,
                'auto_sac_enabled',
                'auto-sac-button',
                'AutoSacrifice ON',
                'AutoSacrifice OFF',
                'AutoSacrifice.togglePref')
            + '<label>(the global on/off switch for the AutoSacrifice mod. Makes the garden fully automatic, from planting to harvesting to sacrificing. None of the below four options have any effect if this is off.)</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.ToggleButton(AutoSacrifice.config,
                'do_convert',
                'do-convert-button',
                'Auto convert ON',
                'Auto convert OFF',
                'AutoSacrifice.togglePref')
            + '<label>(automatically convert the garden; turn off if you want the seeds but not the lumps)</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.ToggleButton(AutoSacrifice.config,
                'avoid_cps_buffs',
                'avoid-cps-buffs-button',
                'Avoid CpS buffs ON',
                'Avoid Cps buffs OFF',
                'AutoSacrifice.togglePref')
            + '<label>(skip planting seeds if a buff is currently active; ignores loans)</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.ToggleButton(AutoSacrifice.config,
                'allow_frenzies',
                'allow-frenzies-button',
                'Tolerate frenzies ON',
                'Tolerate frenzies OFF',
                'AutoSacrifice.togglePref')
            + '<label>(still plant seeds during regular 7x frenzies; has no effect if the previous option is off)</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.ToggleButton(AutoSacrifice.config,
                'do_soil_rotation',
                'do-soil-rotation-button',
                'Auto rotate soil ON',
                'Auto rotate soil OFF',
                'AutoSacrifice.togglePref')
            + '<label>(automatically switch between fertilizer and wood chips)</label>'
            + '</div>';
        return str;
    }

    AutoSacrifice.defaultConfig = function () {
        return {
            auto_sac_enabled: false,
            do_convert: false,
            avoid_cps_buffs: false,
            allow_frenzies: false,
            do_soil_rotation: false,
        };
    }

    AutoSacrifice.save = function () {
        CCSE.config.OtherMods.AutoSacrifice = {
            config: AutoSacrifice.config,
            fertilizer_ticks: AutoSacrifice.fertilizer_ticks,
            woodchips_ticks: AutoSacrifice.woodchips_ticks,
        };
    }

    AutoSacrifice.load = function () {
        if (CCSE.config.OtherMods.AutoSacrifice) {
            AutoSacrifice.config = CCSE.config.OtherMods.AutoSacrifice.config;
            AutoSacrifice.fertilizer_ticks = CCSE.config.OtherMods.AutoSacrifice.fertilizer_ticks;
            AutoSacrifice.woodchips_ticks = CCSE.config.OtherMods.AutoSacrifice.woodchips_ticks;
        } else {
            AutoSacrifice.config = AutoSacrifice.defaultConfig();
            AutoSacrifice.fertilizer_ticks = 0;
            AutoSacrifice.woodchips_ticks = 0;
        }

        if (AutoSacrifice.config.auto_sac_enabled) {
            AutoSacrifice.add_hook();
        }
    }

    AutoSacrifice.post_tick_logic = function () {
        let M = Game.customMinigame['Farm'];
        if (M.soil === 1) {
            AutoSacrifice.fertilizer_ticks++;
        } else {
            AutoSacrifice.woodchips_ticks++;
        }

        if (AutoSacrifice.ticks_until_fast_plants > 0) {
            AutoSacrifice.ticks_until_fast_plants--;
        }

        // If we find what we're looking for, we switch to fertilizer, and then clear the plot.
        let found_target = AutoSacrifice.find_target();

        if (found_target) {
            AutoSacrifice.change_soil(1);

            AutoSacrifice.ticks_until_fast_plants = -1;
        }

        AutoSacrifice.handle_secondary_targets();
        AutoSacrifice.add_elderwort();
        AutoSacrifice.select_next_target();

        let arg = AutoSacrifice.seed_to_unlock === "queenbeetLump" ? 1 : 0;
        if (arg) {
            AutoSacrifice.fertilizer_requests = 0;
        }

        AutoSacrifice.remove_unlocked_plants(false, arg);
        AutoSacrifice.remove_non_unlocked_duplicates();

        // Sometimes we may be in a state where we don't have the ability to grow anything cause we're waiting on a ton of stuff to grow.
        if (AutoSacrifice.seed_to_unlock === "") {
            // If there's only one seed to unlock and it's present, change to fertilizer and return.
            let num_not_unlocked = 0;

            for (let i = 0; i < AutoSacrifice.seed_order.length; i++) {
                if (!M.plants[AutoSacrifice.seed_order[i]].unlocked) {
                    num_not_unlocked++;
                }
            }

            if (num_not_unlocked === 1) {
                let id = AutoSacrifice.mutation_setups[AutoSacrifice.seed_order[i]].id;

                let currently_growing = false;

                for (let i = 0; i < 6; i++) {
                    for (let j = 0; j < 6; j++) {
                        if (M.plot[i][j][0] - 1 === id) {
                            currently_growing = true;

                            break;
                        }
                    }

                    if (currently_growing) {
                        break;
                    }
                }

                if (currently_growing) {
                    AutoSacrifice.change_soil(1);
                }
            }

            return;
        }



        let setup = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock];

        if (setup.type === 0) {
            AutoSacrifice.unlock_type_0_logic(...(setup.parents));
        }

        else if (setup.type === 1) {
            AutoSacrifice.unlock_type_1_logic(...(setup.parents));
        }



        if (AutoSacrifice.seed_to_unlock === "meddleweed") {
            AutoSacrifice.unlock_meddleweed_logic();
        } else if (AutoSacrifice.seed_to_unlock === "crumbspore" || AutoSacrifice.seed_to_unlock === "brownMold") {
            AutoSacrifice.unlock_crumbspore_brownMold_logic();

            AutoSacrifice.remove_non_unlocked_duplicates();
        } else if (AutoSacrifice.seed_to_unlock === "shriekbulb") {
            AutoSacrifice.change_soil(4);
        } else if (AutoSacrifice.seed_to_unlock === "queenbeetLump") {
            if (!M.plants["elderwort"].unlocked) {
                AutoSacrifice.select_next_target(true);

                if (AutoSacrifice.seed_to_unlock === "") {
                    if (AutoSacrifice.fertilizer_requests > 0) {
                        AutoSacrifice.change_soil(1);
                    }

                    return;
                }

                AutoSacrifice.remove_unlocked_plants(false, 2);

                let setup = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock];

                if (setup.type === 0) {
                    AutoSacrifice.unlock_type_0_logic(...(setup.parents), [[0, 5], [2, 5], [4, 5], [5, 0], [5, 2], [5, 4]], [[1, 5], [3, 5], [5, 1], [5, 3], [5, 5]]);
                }

                else if (setup.type === 1) {
                    AutoSacrifice.unlock_type_1_logic(...(setup.parents), [[0, 5], [4, 5], [5, 2]], [[2, 5], [5, 0], [5, 4]], [[1, 5], [3, 5], [5, 1], [5, 3], [5, 5]]);
                }

                if (AutoSacrifice.fertilizer_requests === 2) {
                    AutoSacrifice.change_soil(1);
                }
            }
        }



        // Update the garden text.
        let elements = document.querySelectorAll("#AUTOSAC-new-line-break, #AUTOSAC-garden-text");

        let text = AutoSacrifice.seed_to_unlock === "" ? "Nothing" : M.plants[AutoSacrifice.seed_to_unlock].name;

        if (elements.length < 2) {
            try {
                document.querySelector("#gardenSeeds").insertAdjacentHTML("afterend", `<div id="AUTOSAC-new-line-break" class="line"></div><div id="AUTOSAC-garden-text" class="title gardenPanelLabel">Targeting ${text}</div>`);
            } catch (ex) { }
        } else {
            elements[1].textContent = `Targeting ${text}`;
        }
    };

    // Deals with plants where we attempt to parlay them directly into new mutations.
    AutoSacrifice.handle_secondary_targets = function () {
        AutoSacrifice.need_woodchips_for_secondary_target = false;

        let M = Game.customMinigame['Farm'];

        for (let key in AutoSacrifice.secondary_targets) {
            let source_tile = AutoSacrifice.secondary_targets[key].source_tile;
            let source_key = AutoSacrifice.secondary_targets[key].source_key;



            let mutation_tiles = AutoSacrifice.secondary_targets[key].mutation_tiles;

            let mutation_happened = false;

            for (let i = 0; i < mutation_tiles.length; i++) {
                let id = M.plot[mutation_tiles[i][0]][mutation_tiles[i][1]][0] - 1;

                if (id === AutoSacrifice.mutation_setups[key].id) {
                    mutation_happened = true;
                    break;
                }
            }



            if (mutation_happened || M.plants[key].unlocked || M.plot[source_tile[0]][source_tile[1]][0] - 1 !== AutoSacrifice.mutation_setups[source_key].id) {
                delete AutoSacrifice.secondary_targets[key];
                continue;
            }

            if (AutoSacrifice.secondary_targets[key].ticks_to_wait !== 0) {
                AutoSacrifice.secondary_targets[key].ticks_to_wait--;
            }

            if (AutoSacrifice.secondary_targets[key].ticks_to_wait === 0) {
                let tiles = AutoSacrifice.secondary_targets[key].tiles;
                let key_to_plant = AutoSacrifice.secondary_targets[key].key_to_plant;

                if (key_to_plant === "") {
                    continue;
                }

                for (let i = 0; i < tiles.length; i++) {
                    if (M.plot[tiles[i][0]][tiles[i][1]][0] === 0) {
                        AutoSacrifice.plant_seed(AutoSacrifice.mutation_setups[key_to_plant].id, tiles[i][1], tiles[i][0]);
                    }
                }
            }

            if (M.plot[source_tile[0]][source_tile[1]][1] >= M.plants[source_key].mature) {
                let mature = 0;

                let tiles = AutoSacrifice.secondary_targets[key].tiles;
                let key_to_plant = AutoSacrifice.secondary_targets[key].key_to_plant;

                if (key_to_plant === "") {
                    continue;
                }

                for (let i = 0; i < tiles.length; i++) {
                    if (M.plot[tiles[i][0]][tiles[i][1]][1] === M.plants[key_to_plant].mature) {
                        mature++;
                    }
                }

                if (mature > tiles.length / 2) {
                    AutoSacrifice.need_woodchips_for_secondary_target = true;
                    AutoSacrifice.change_soil(4);
                }
            }
        }
    };

    // When there's just a JQB or Everdaisy left growing, surround it with Elderwort.
    AutoSacrifice.add_elderwort = function () {
        let M = Game.customMinigame['Farm'];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                let id = M.plot[i][j][0] - 1;

                if (id === AutoSacrifice.mutation_setups["queenbeetLump"].id) {
                    // These two never occur in the outer edge of the garden, so we can skip inbounds checks.
                    for (let k = -1; k <= 1; k++) {
                        for (let l = -1; l <= 1; l++) {
                            if (M.plot[i + k][j + l][0] === 0) {
                                AutoSacrifice.plant_seed(AutoSacrifice.mutation_setups["elderwort"].id, j + l, i + k);
                            }
                        }
                    }
                }
            }
        }
    };



    //Find the first non-unlocked seed and target it.
    AutoSacrifice.select_next_target = function (ignore_jqb = false) {
        let M = Game.customMinigame['Farm'];
        AutoSacrifice.seed_to_unlock = "";

        for (let i = 0; i < AutoSacrifice.seed_order.length; i++) {
            if (M.plants[AutoSacrifice.seed_order[i]].unlocked) {
                continue;
            }

            if (ignore_jqb && (AutoSacrifice.seed_order[i] === "shriekbulb" || typeof AutoSacrifice.mutation_setups[AutoSacrifice.seed_order[i]].empty_tiles !== "undefined")) {
                continue;
            }



            let parents = AutoSacrifice.mutation_setups[AutoSacrifice.seed_order[i]].parents;

            if (parents.length > 0 && !M.plants[parents[0]].unlocked) {
                continue;
            }

            if (parents.length > 1 && !M.plants[parents[1]].unlocked) {
                continue;
            }

            let id = AutoSacrifice.mutation_setups[AutoSacrifice.seed_order[i]].id;

            let currently_growing = false;

            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 6; j++) {
                    if (M.plot[i][j][0] - 1 === id) {
                        currently_growing = true;

                        break;
                    }
                }

                if (currently_growing) {
                    break;
                }
            }

            if (currently_growing) {
                continue;
            }

            AutoSacrifice.seed_to_unlock = AutoSacrifice.seed_order[i];

            if (AutoSacrifice.seed_to_unlock !== AutoSacrifice.last_notification) {
                if (AutoSacrifice.seed_to_unlock === "queenbeetLump") {
                    if (AutoSacrifice.notified_jqb) {
                        return;
                    }

                    AutoSacrifice.notified_jqb = true;
                }

                AutoSacrifice.last_notification = AutoSacrifice.seed_to_unlock;

                Game.Notify('Auto Sacrifice', `Targeting ${M.plants[AutoSacrifice.seed_order[i]].name}`, [15, 6], Infinity);

                AutoSacrifice.ticks_until_fast_plants = -1;

                //An unfortunate edge case: we go from all wheat to half corn and half wheat, and so without this, we have to wait for the wheat to decay first.
                if (AutoSacrifice.seed_to_unlock === "cronerice") {
                    AutoSacrifice.remove_unlocked_plants(true);
                }
            }

            break;
        }



        if (AutoSacrifice.seed_to_unlock === "" && !ignore_jqb) {
            //Possibly time to sacrifice!
            for (let i = 0; i < AutoSacrifice.seed_order.length; i++) {
                if (!M.plants[AutoSacrifice.seed_order[i]].unlocked) {
                    return;
                }
            }

            if (!AutoSacrifice.do_convert) {
                return;
            }

            M.convert();

            AutoSacrifice.seed_to_unlock = "meddleweed";



            AutoSacrifice.mutation_setups["queenbeetLump"] =
            {
                id: 21,
                type: 0,
                parents: ["queenbeet"],

                tiles: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 0], [1, 2], [1, 4], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [3, 2], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]],

                empty_tiles: [[1, 1], [1, 3], [3, 1], [3, 3]]
            };



            AutoSacrifice.num_iterations++;

            if (AutoSacrifice.num_iterations === 0) {
                AutoSacrifice.fertilizer_ticks = 0;
                AutoSacrifice.woodchips_ticks = 0;
            }

            else {
                console.log(`Sacrificed in ${AutoSacrifice.fertilizer_ticks - AutoSacrifice.last_fertilizer_ticks} fertilizer ticks and ${AutoSacrifice.woodchips_ticks - AutoSacrifice.last_woodchips_ticks} woodchips ticks. Current average of ${AutoSacrifice.num_iterations} runs: ${Math.round(AutoSacrifice.fertilizer_ticks / AutoSacrifice.num_iterations)}, ${Math.round(AutoSacrifice.woodchips_ticks / AutoSacrifice.num_iterations)}`);

                AutoSacrifice.last_fertilizer_ticks = AutoSacrifice.fertilizer_ticks;
                AutoSacrifice.last_woodchips_ticks = AutoSacrifice.woodchips_ticks;
            }

            Game.Notify('Auto Sacrifice', `Targeting ${M.plants[AutoSacrifice.seed_order[0]].name}`, [15, 6], Infinity);
        }
    };

    // Harvests plants that are not unlocked and either about to die or mature without a parlay. If there is a parlay, it sets that up.
    AutoSacrifice.find_target = function () {
        let M = Game.customMinigame['Farm'];
        let found_target = false;

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                let tile = M.plot[i][j];

                if (tile[0] === 0) {
                    continue;
                }

                let plant = M.plantsById[tile[0] - 1];

                if (plant.key === AutoSacrifice.seed_to_unlock) {
                    found_target = true;
                }



                if (!M.plants[plant.key].unlocked && tile[1] >= plant.mature && (tile[1] >= 85 || typeof AutoSacrifice.mutation_setups[plant.key].try_without_replanting === "undefined" || AutoSacrifice.mutation_setups[plant.key].try_without_replanting.length === 0)) {
                    AutoSacrifice.harvest_plant(j, i);
                }

                else if (typeof AutoSacrifice.mutation_setups[plant.key].try_without_replanting !== "undefined" && AutoSacrifice.mutation_setups[plant.key].try_without_replanting.length !== 0) {
                    for (let k = 0; k < AutoSacrifice.mutation_setups[plant.key].try_without_replanting.length; k++) {
                        let key = AutoSacrifice.mutation_setups[plant.key].try_without_replanting[k];

                        if (typeof AutoSacrifice.secondary_targets[key] === "undefined") {
                            let tiles = [];

                            if (AutoSacrifice.mutation_setups[plant.key].try_without_replanting.length === 1) {
                                tiles = [[i - 2, j], [i + 2, j], [i, j - 2], [i, j + 2]];
                            }

                            else if (k === 0) {
                                tiles = [[i - 2, j], [i + 2, j]];
                            }

                            else {
                                tiles = [[i, j - 2], [i, j + 2]];
                            }



                            for (let l = 0; l < tiles.length; l++) {
                                if (tiles[l][0] < 0 || tiles[l][0] > 5 || tiles[l][1] < 0 || tiles[l][1] > 5) {
                                    tiles.splice(l, 1);
                                    l--;
                                }
                            }

                            //This is a little annoying -- it's hard to not get duplicates, so we need an intermediate step.
                            let mutation_tiles_validity = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

                            for (let l = 0; l < tiles.length; l++) {
                                mutation_tiles_validity[(tiles[l][0] - i) / 2 + 1][(tiles[l][0] - j) / 2 + 1] = 1;
                            }

                            let mutation_tiles = [];

                            for (let l = 0; l < 3; l++) {
                                for (let m = 0; m < 3; m++) {
                                    let row = i + l - 1;
                                    let col = j + m - 1;

                                    if (mutation_tiles_validity[l][m] && row >= 0 && row < 5 && col > 0 && col < 5) {
                                        mutation_tiles.push([row, col]);
                                    }
                                }
                            }



                            let key_to_plant = AutoSacrifice.mutation_setups[plant.key].try_without_replanting_partner[k];

                            let ticks_to_wait = 0;

                            if (key_to_plant !== "") {
                                let fast_ticks = M.plants[key_to_plant].mature / (M.plants[key_to_plant].ageTick + M.plants[key_to_plant].ageTickR / 2);

                                let slow_ticks = M.plants[plant.key].mature / (M.plants[plant.key].ageTick + M.plants[plant.key].ageTickR / 2);

                                ticks_to_wait = Math.max(Math.floor(slow_ticks - fast_ticks), 0);
                            }



                            AutoSacrifice.secondary_targets[key] = {
                                source_tile: [i, j],
                                source_key: plant.key,
                                tiles: tiles,
                                ticks_to_wait: ticks_to_wait,
                                key_to_plant: key_to_plant,
                                mutation_tiles: mutation_tiles
                            };
                        }
                    }
                }
            }
        }

        return found_target;
    };


    // Removes all plants that have been unlocked, aren't currently being used as parents, and aren't part of a parlay. If jqb_section is 1, only the top 5x5 is considered, and if it's 2, only the 11 other spaces are.
    AutoSacrifice.remove_unlocked_plants = function (ignore_parents = false, jqb_section = 0) {
        let M = Game.customMinigame['Farm'];
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if ((jqb_section === 1 && (i === 5 || j === 5)) || (jqb_section === 2 && !(i === 5 || j === 5))) {
                    continue;
                }



                let tile = M.plot[i][j];

                if (tile[0] === 0) {
                    continue;
                }

                let plant = M.plantsById[tile[0] - 1];



                let is_secondary_unlock = false;

                for (let key in AutoSacrifice.secondary_targets) {
                    if (plant.key === AutoSacrifice.secondary_targets[key].key_to_plant) {
                        for (let k = 0; k < AutoSacrifice.secondary_targets[key].tiles.length; k++) {
                            if (AutoSacrifice.secondary_targets[key].tiles[k][0] === i && AutoSacrifice.secondary_targets[key].tiles[k][1] === j) {
                                is_secondary_unlock = true;

                                break;
                            }
                        }

                        if (is_secondary_unlock) {
                            break;
                        }
                    }
                }



                if (M.plants[plant.key].unlocked && (ignore_parents || AutoSacrifice.seed_to_unlock === "" || AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].parents.indexOf(plant.key) === -1) && !is_secondary_unlock) {
                    AutoSacrifice.harvest_plant(j, i);
                }
            }
        }
    };

    AutoSacrifice.remove_non_unlocked_duplicates = function () {
        let M = Game.customMinigame['Farm'];
        let non_unlocked_plants = {};

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                let tile = M.plot[i][j];

                if (tile[0] === 0) {
                    continue;
                }

                let plant = M.plantsById[tile[0] - 1];

                if (!M.plants[plant.key].unlocked) {
                    if (typeof non_unlocked_plants[plant.key] === "undefined") {
                        non_unlocked_plants[plant.key] = [];
                    }

                    non_unlocked_plants[plant.key].push([i, j]);
                }
            }
        }

        for (let key in non_unlocked_plants) {
            if (non_unlocked_plants[key].length > 1) {
                let max_age = 0;

                for (let i = 0; i < non_unlocked_plants[key].length; i++) {
                    let row = non_unlocked_plants[key][i][0];
                    let col = non_unlocked_plants[key][i][1];

                    let tile = M.plot[row][col];

                    max_age = Math.max(max_age, tile[1]);
                }

                for (let i = 0; i < non_unlocked_plants[key].length; i++) {
                    let row = non_unlocked_plants[key][i][0];
                    let col = non_unlocked_plants[key][i][1];

                    let tile = M.plot[row][col];

                    if (tile[1] < max_age) {
                        AutoSacrifice.harvest_plant(col, row);
                    }
                }
            }
        }
    };

    AutoSacrifice.unlock_type_0_logic = function (parent, tiles_override = 0, empty_tiles_override = 0) {
        let M = Game.customMinigame['Farm'];
        let id = AutoSacrifice.mutation_setups[parent].id;
        let plant = M.plantsById[id];

        let intact = 0;
        let possibly_intact = 0;

        let tiles = [];
        let empty_tiles = [];

        if (empty_tiles_override !== 0) {
            tiles = tiles_override;
            empty_tiles = empty_tiles_override;
        }

        else if (typeof AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].tiles !== "undefined") {
            tiles = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].tiles;

            empty_tiles = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].empty_tiles;
        }

        else {
            tiles = [[0, 1], [1, 1], [2, 1], [4, 1], [5, 1], [0, 4], [1, 4], [3, 4], [4, 4], [5, 4]];

            empty_tiles = [[0, 0], [0, 2], [0, 3], [0, 5], [1, 0], [1, 2], [1, 3], [1, 5], [2, 0], [2, 2], [2, 3], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 5], [4, 0], [4, 2], [4, 3], [4, 5], [5, 0], [5, 2], [5, 3], [5, 5]];
        }

        //If more than half the plants are missing, we scrap and replant.
        for (let i = 0; i < tiles.length; i++) {
            if (M.plot[tiles[i][0]][tiles[i][1]][0] - 1 === id) {
                intact++;
            }

            else if (M.plot[tiles[i][0]][tiles[i][1]][0] === 0) {
                if (typeof plant.contam !== "undefined" && plant.contam !== 0) {
                    if (AutoSacrifice.is_valid_for_dangerous_plant(tiles[i][1], tiles[i][0])) {
                        possibly_intact++;
                    }
                }

                else {
                    possibly_intact++;
                }
            }
        }

        if ((AutoSacrifice.seed_to_unlock !== "queenbeetLump" && intact < possibly_intact) || (AutoSacrifice.seed_to_unlock === "queenbeetLump" && possibly_intact >= 2)) {
            //Easy -- just plant a bunch.
            let arg = AutoSacrifice.seed_to_unlock === "queenbeetLump" ? 1 : 0;

            if (empty_tiles_override !== 0) {
                arg = 2;
            }

            if (arg === 1 && M.plants["elderwort"].unlocked) {
                arg = 0;
            }

            AutoSacrifice.remove_unlocked_plants(true, arg);



            //The JQB setup is so time-consuming that we wait to plant them until the area is clear.
            if (AutoSacrifice.seed_to_unlock === "queenbeetLump") {
                intact = 0;

                for (let i = 0; i < tiles.length; i++) {
                    if (M.plot[tiles[i][0]][tiles[i][1]][0] !== 0) {
                        intact++;
                    }
                }

                if (intact !== 0) {
                    return;
                }

                //If we've got elderwort, it's time to switch to a 6x6.
                if (M.plants["elderwort"].unlocked) {
                    if (AutoSacrifice.mutation_setups.queenbeetLump.empty_tiles[3][0] === 3) {
                        //We also scrap *everything* so we don't get stuck targeting old plants.
                        for (let i = 0; i < 6; i++) {
                            for (let j = 0; j < 6; j++) {
                                M.harvest(j, i, true);
                            }
                        }
                    }

                    AutoSacrifice.mutation_setups.queenbeetLump =
                    {
                        id: 21,
                        type: 0,
                        parents: ["queenbeet"],

                        tiles: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 0], [1, 2], [1, 3], [1, 5], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [4, 0], [4, 2], [4, 3], [4, 5], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]],

                        empty_tiles: [[1, 1], [1, 4], [4, 1], [4, 4]]
                    };
                }
            }



            for (let i = 0; i < tiles.length; i++) {
                if (M.plot[tiles[i][0]][tiles[i][1]][0] === 0) {
                    AutoSacrifice.plant_seed(id, tiles[i][1], tiles[i][0]);
                }
            }
        }



        //In the unique case where the slow plant is immortal, we should always try to fill gaps.
        if (M.plants[parent].immortal) {
            for (let i = 0; i < tiles.length; i++) {
                if (M.plot[tiles[i][0]][tiles[i][1]][0] === 0) {
                    AutoSacrifice.plant_seed(id, tiles[i][1], tiles[i][0]);
                }
            }
        }



        let mature = 0;

        for (let i = 0; i < tiles.length; i++) {
            if (M.plot[tiles[i][0]][tiles[i][1]][0] !== 0 && M.plot[tiles[i][0]][tiles[i][1]][1] >= plant.mature) {
                mature++;
            }
        }

        if (mature >= tiles.length / 3) {
            AutoSacrifice.change_soil(4);
        }

        else {
            if (empty_tiles_override === 0 && (AutoSacrifice.seed_to_unlock !== "queenbeetLump" || AutoSacrifice.seed_to_unlock === "queenbeetLump" && M.plants["elderwort"].unlocked)) {
                AutoSacrifice.change_soil(1);
            }

            else {
                AutoSacrifice.fertilizer_requests++;
            }
        }



        //If we've reached this point, we know that the targeted plant is not here yet. Therefore, any unlocked plants not in the setup should be cleared.
        for (let i = 0; i < empty_tiles.length; i++) {
            let id = M.plot[empty_tiles[i][0]][empty_tiles[i][1]][0] - 1;

            if (id === -1) {
                continue;
            }

            let plant = M.plantsById[id];



            let is_secondary_unlock = false;

            for (let key in AutoSacrifice.secondary_targets) {
                if (plant.key === AutoSacrifice.secondary_targets[key].key_to_plant) {
                    for (let k = 0; k < AutoSacrifice.secondary_targets[key].tiles.length; k++) {
                        if (AutoSacrifice.secondary_targets[key].tiles[k][0] === empty_tiles[i][0] && AutoSacrifice.secondary_targets[key].tiles[k][1] === empty_tiles[i][1]) {
                            is_secondary_unlock = true;

                            break;
                        }
                    }

                    if (is_secondary_unlock) {
                        break;
                    }
                }
            }



            if (M.plants[plant.key].unlocked && !is_secondary_unlock) {
                AutoSacrifice.harvest_plant(empty_tiles[i][1], empty_tiles[i][0]);
            }
        }
    };

    AutoSacrifice.unlock_type_1_logic = function (fast_parent, slow_parent,
        fast_tiles_override = 0,
        slow_tiles_override = 0,
        empty_tiles_override = 0) {
        let M = Game.customMinigame['Farm'];
        let fast_id = AutoSacrifice.mutation_setups[fast_parent].id;
        let slow_id = AutoSacrifice.mutation_setups[slow_parent].id;

        let fast_plant = M.plantsById[fast_id];
        let slow_plant = M.plantsById[slow_id];

        let fast_tiles = [];
        let slow_tiles = [];

        let empty_tiles = [];



        if (empty_tiles_override !== 0) {
            fast_tiles = fast_tiles_override;
            slow_tiles = slow_tiles_override;
            empty_tiles = empty_tiles_override;
        }

        else if (typeof AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].empty_tiles !== "undefined") {
            fast_tiles = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].fast_tiles;
            slow_tiles = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].slow_tiles;

            empty_tiles = AutoSacrifice.mutation_setups[AutoSacrifice.seed_to_unlock].empty_tiles;
        }

        else {
            fast_tiles = [[0, 1], [2, 1], [5, 1], [1, 4], [4, 4]];
            slow_tiles = [[1, 1], [4, 1], [0, 4], [3, 4], [5, 4]];

            empty_tiles = [[0, 0], [0, 2], [0, 3], [0, 5], [1, 0], [1, 2], [1, 3], [1, 5], [2, 0], [2, 2], [2, 3], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 5], [4, 0], [4, 2], [4, 3], [4, 5], [5, 0], [5, 2], [5, 3], [5, 5]];
        }



        //If more than half the slow plants are missing, we should replant everything.
        let intact = 0;
        let possibly_intact = 0;

        for (let i = 0; i < slow_tiles.length; i++) {
            if (M.plot[slow_tiles[i][0]][slow_tiles[i][1]][0] - 1 === slow_id) {
                intact++;
            }

            else if (M.plot[slow_tiles[i][0]][slow_tiles[i][1]][0] === 0) {
                //Here we have to double check that this is actually a spot that could be planted in.
                if (typeof slow_plant.contam !== "undefined" && slow_plant.contam !== 0) {
                    if (AutoSacrifice.is_valid_for_dangerous_plant(slow_tiles[i][1], slow_tiles[i][0])) {
                        possibly_intact++;
                    }
                }

                else {
                    possibly_intact++;
                }
            }
        }

        if (intact < possibly_intact) {
            //We start with the slow ones.
            let arg = AutoSacrifice.seed_to_unlock === "queenbeetLump" ? 1 : 0;

            if (empty_tiles_override !== 0) {
                arg = 2;
            }

            AutoSacrifice.remove_unlocked_plants(true, arg);

            for (let i = 0; i < slow_tiles.length; i++) {
                if (M.plot[slow_tiles[i][0]][slow_tiles[i][1]][0] === 0) {
                    AutoSacrifice.plant_seed(slow_id, slow_tiles[i][1], slow_tiles[i][0]);
                }
            }

            AutoSacrifice.ticks_until_fast_plants = -1;
        }

        //In the unique case where the slow plant is immortal, we should always try to fill gaps.
        if (M.plants[slow_parent].immortal) {
            for (let i = 0; i < slow_tiles.length; i++) {
                if (M.plot[slow_tiles[i][0]][slow_tiles[i][1]][0] === 0) {
                    AutoSacrifice.plant_seed(slow_id, slow_tiles[i][1], slow_tiles[i][0]);
                }
            }
        }



        let mature = 0;

        for (let i = 0; i < slow_tiles.length; i++) {
            if (M.plot[slow_tiles[i][0]][slow_tiles[i][1]][0] !== 0 && M.plot[slow_tiles[i][0]][slow_tiles[i][1]][1] >= slow_plant.mature) {
                mature++;
            }
        }

        //At this point, the slow plants are guaranteed to be intact, so we can test if it's the right time to plant the fast ones.
        if (AutoSacrifice.ticks_until_fast_plants === -1) {
            if (mature === 0) {
                let fast_ticks = M.plants[fast_plant.key].mature / (M.plants[fast_plant.key].ageTick + M.plants[fast_plant.key].ageTickR / 2);

                let slow_ticks = M.plants[slow_plant.key].mature / (M.plants[slow_plant.key].ageTick + M.plants[slow_plant.key].ageTickR / 2);

                AutoSacrifice.ticks_until_fast_plants = Math.max(Math.floor(slow_ticks - fast_ticks), 0);
            }

            else {
                AutoSacrifice.ticks_until_fast_plants = 0;
            }
        }



        intact = 0;

        for (let i = 0; i < fast_tiles.length; i++) {
            if (M.plot[fast_tiles[i][0]][fast_tiles[i][1]][0] - 1 === fast_id) {
                intact++;
            }
        }

        //Testing if this is zero and not just low is important for everdaisies and isn't a big inefficiency.
        if (intact === 0 && AutoSacrifice.ticks_until_fast_plants === 0) {
            for (let i = 0; i < fast_tiles.length; i++) {
                if (M.plot[fast_tiles[i][0]][fast_tiles[i][1]][0] === 0) {
                    AutoSacrifice.plant_seed(fast_id, fast_tiles[i][1], fast_tiles[i][0]);
                }
            }
        }



        mature = 0;

        for (let i = 0; i < fast_tiles.length; i++) {
            if (M.plot[fast_tiles[i][0]][fast_tiles[i][1]][0] !== 0 && M.plot[fast_tiles[i][0]][fast_tiles[i][1]][1] >= fast_plant.mature) {
                mature++;
            }
        }

        if (mature >= fast_tiles.length / 3) {
            AutoSacrifice.change_soil(4);
        }

        else {
            if (empty_tiles_override === 0 && (AutoSacrifice.seed_to_unlock !== "queenbeetLump" || AutoSacrifice.seed_to_unlock === "queenbeetLump" && M.plants["elderwort"].unlocked)) {
                AutoSacrifice.change_soil(1);
            }

            else {
                AutoSacrifice.fertilizer_requests++;
            }
        }



        //If we've reached this point, we know that the targeted plant is not here yet. Therefore, any unlocked plants not in the setup should be cleared.
        for (let i = 0; i < empty_tiles.length; i++) {
            let id = M.plot[empty_tiles[i][0]][empty_tiles[i][1]][0] - 1;

            if (id === -1) {
                continue;
            }

            let plant = M.plantsById[id];



            let is_secondary_unlock = false;

            for (let key in AutoSacrifice.secondary_targets) {
                if (plant.key === AutoSacrifice.secondary_targets[key].key_to_plant) {
                    for (let k = 0; k < AutoSacrifice.secondary_targets[key].tiles.length; k++) {
                        if (AutoSacrifice.secondary_targets[key].tiles[k][0] === empty_tiles[i][0] && AutoSacrifice.secondary_targets[key].tiles[k][1] === empty_tiles[i][1]) {
                            is_secondary_unlock = true;

                            break;
                        }
                    }

                    if (is_secondary_unlock) {
                        break;
                    }
                }
            }



            if (M.plants[plant.key].unlocked && !is_secondary_unlock) {
                AutoSacrifice.harvest_plant(empty_tiles[i][1], empty_tiles[i][0]);
            }
        }
    };

    // Apply fertilizer and wait.
    AutoSacrifice.unlock_meddleweed_logic = function () {
        AutoSacrifice.change_soil(1);
    };

    // Grow a full plot of meddleweed and harvest when very old.
    AutoSacrifice.unlock_crumbspore_brownMold_logic = function () {
        let M = Game.customMinigame['Farm'];
        AutoSacrifice.change_soil(1);

        //Remove any non-weed.
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                let tile = M.plot[i][j];

                if (tile[0] === 0) {
                    //Plant meddleweed.
                    AutoSacrifice.plant_seed(AutoSacrifice.mutation_setups.meddleweed.id, j, i);

                    continue;
                }

                let plant = M.plantsById[tile[0] - 1];

                if ((plant.key === "meddleweed" && tile[1] > 85) || (plant.key !== "meddleweed" && M.plants[plant.key].unlocked)) {
                    AutoSacrifice.harvest_plant(j, i);
                }
            }
        }
    };

    AutoSacrifice.change_soil = function (id) {
        let M = Game.customMinigame['Farm'];
        if (!AutoSacrifice.do_soil_rotation) {
            return;
        }

        if ((id === 1 && Game.ObjectsById[2].amount < 50) || (id === 4 && Game.ObjectsById[2].amount < 300)) {
            return;
        }

        //Shriekbulbs mutate from Duketaters at any age.
        if (AutoSacrifice.seed_to_unlock === "shriekbulb" && M.soil === 4) {
            return;
        }

        if (AutoSacrifice.need_woodchips_for_secondary_target && M.soil === 4) {
            return;
        }

        if (M.soil !== id && M.nextSoil <= Date.now()) {
            M.soil = id;

            M.nextSoil = Date.now() + 600000;

            try {
                if (id === 1) {
                    l("gardenSoil-1").classList.add("on");
                    l("gardenSoil-4").classList.remove("on");
                }

                else {
                    l("gardenSoil-4").classList.add("on");
                    l("gardenSoil-1").classList.remove("on");
                }
            }

            catch (ex) { }
        }
    };

    AutoSacrifice.is_valid_for_dangerous_plant = function (x, y) {
        let M = Game.customMinigame['Farm'];
        let tiles = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];

        for (let i = 0; i < 4; i++) {
            let row = tiles[i][0];
            let col = tiles[i][1];

            if (row < 0 || row > 5 || col < 0 || col > 5) {
                continue;
            }

            let adj_id = M.plot[col][row][0] - 1;

            if (adj_id === -1) {
                continue;
            }

            let adj_plant = M.plantsById[adj_id];

            //It's okay to plant dangerous plants next to other dangerous ones.
            if (typeof adj_plant.contam !== "undefined" && adj_plant.contam !== 0) {
                continue;
            }

            //But it's not okay to plant to susceptible ones.
            if (typeof adj_plant.noContam === "undefined" || !adj_plant.noContam) {
                return false;
            }
        }

        return true;
    };

    AutoSacrifice.plant_seed = function (id, x, y) {
        let M = Game.customMinigame['Farm'];
        if (AutoSacrifice.avoid_cps_buffs) {
            for (let key in Game.buffs) {
                if (typeof Game.buffs[key].multCpS !== "undefined" && Game.buffs[key].multCpS > 1 && Game.buffs[key].name.toLowerCase().slice(0, 4) !== "loan" && (!AutoSacrifice.allow_frenzies || Game.buffs[key].name !== "Frenzy")) {
                    Game.Notify('Auto Sacrifice', `Skipping planting due to active buff`, [6, 29], 5);

                    return;
                }
            }
        }

        if (M.plot[y][x][0] !== 0) {
            return;
        }



        let key = M.plantsById[id].key;

        //Don't plant contaminating plants near susceptible ones.
        let plant = M.plants[key];

        if (typeof plant.contam !== "undefined" && plant.contam !== 0) {
            if (!AutoSacrifice.is_valid_for_dangerous_plant(x, y)) {
                return;
            }
        }

        if (plant.unlocked) {
            M.useTool(id, x, y);
        }
    };

    AutoSacrifice.harvest_plant = function (j, i) {

        let M = Game.customMinigame['Farm'];
        let plant_id = M.plot[i][j][0] - 1;

        if (plant_id === AutoSacrifice.mutation_setups["elderwort"].id && M.plants["elderwort"].unlocked) {
            //Elderwort next to a JQB is never removed.
            let found_target = false;

            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    if ((k === 0 && l === 0) || i + k < 0 || i + k > 5 || j + l < 0 || j + l > 5) {
                        continue;
                    }

                    let id = M.plot[i + k][j + l][0] - 1;

                    if (id === -1) {
                        continue;
                    }

                    if (id === AutoSacrifice.mutation_setups["queenbeetLump"].id) {
                        found_target = true;

                        break;
                    }
                }

                if (found_target) {
                    break;
                }
            }

            if (found_target) {
                return;
            }
        }

        M.harvest(j, i, true);
    };

    if (CCSE.ConfirmGameVersion(AutoSacrifice.name, AutoSacrifice.version, AutoSacrifice.GameVersion)) {
        Game.registerMod(AutoSacrifice.name, AutoSacrifice); // AutoSacrifice.init();
    }
}

if (!AutoSacrifice.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        AutoSacrifice.launch();
    }
    else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(AutoSacrifice.launch);
    }
}

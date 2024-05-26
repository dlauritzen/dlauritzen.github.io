//
// Stock Market logic taken from CUnleash - https://controlc.com/e8cf655a
// 

if (CUnleash === undefined) var CUnleash = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

CUnleash.name = 'CUnleash';
CUnleash.version = '7.2';
CUnleash.GameVersion = '2.052';

CUnleash.launch = function () {

    CUnleash.intervals = {};
    CUnleash.intervalNames = {
        auto_click: 'AutoClicker',
        auto_golden: 'Golden AutoClicker',
        auto_news_fortune: 'Fortune AutoClicker',
        auto_reindeer: 'Reindeer AutoClicker',
        auto_stock: 'Stock Trader',
        auto_wrath: 'Wrath AutoClicker',
        auto_wrinkler: 'Wrinkler Pruner',
    };

    CUnleash.init = function () {
        CUnleash.isLoaded = 1;
        CUnleash.config = CUnleash.defaultConfig();

        CCSE.customSave.push(CUnleash.save);
        CCSE.customLoad.push(CUnleash.load);
        CUnleash.load();

        Game.customOptionsMenu.push(function () {
            CCSE.AppendCollapsibleOptionsMenu(CUnleash.name, CUnleash.getMenuString());
        });
        Game.customStatsMenu.push(function () {
            CCSE.AppendStatsVersionNumber(CUnleash.name, CUnleash.version);
        });
    }

    CUnleash.defaultConfig = function () {
        return {
            auto_click: false,
            auto_golden: false,
            auto_news_fortune: false,
            auto_reindeer: false,
            auto_stock: false,
            auto_wrath: false,
            auto_wrinkler: false,
        };
    }

    CUnleash.save = function () {
        CCSE.config.OtherMods.CUnleash = CUnleash.config;
    }

    CUnleash.load = function () {
        if (CCSE.config.OtherMods.CUnleash) {
            CUnleash.config = CCSE.config.OtherMods.CUnleash;
            for (var key in CUnleash.config) CUnleash.hook(key);
        }
    }

    CUnleash.getMenuString = function () {
        let m = CCSE.MenuHelper;
        var str = '';

        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_click', 'auto-click-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Auto-Clicker</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_golden', 'auto-golden-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Click golden cookies.</label>'
            + '</div>';
            str += '<div class="listing">'
                + m.CheckBox(CUnleash.config,
                    'auto_wrath', 'auto-wrath-btn', '', '',
                    'CUnleash.togglePref')
                + '<label>Click wrath cookies.</label>'
                + '</div>';
        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_news_fortune', 'auto-news_fortune-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Click news ticker fortunes.</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_reindeer', 'auto-reindeer-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Click reindeer.</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_stock', 'auto-stock-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Manage my stonks.</label>'
            + '</div>';
        str += '<div class="listing">'
            + m.CheckBox(CUnleash.config,
                'auto_wrinkler', 'auto-wrinkler-btn', '', '',
                'CUnleash.togglePref')
            + '<label>Harvest spare wrinklers.</label>'
            + '</div>';

        return str;
    }

    CUnleash.togglePref = function (prefName, button, on, off, invert) {
        if (CUnleash.config[prefName]) {
            l(button).removeAttribute('checked');
            l(button + '_label').innerHTML = off;
            CUnleash.config[prefName] = false;
        } else {
            l(button).setAttribute('checked', 'checked')
            l(button + '_label').innerHTML = on;
            CUnleash.config[prefName] = true;
        }
        CUnleash.hook(prefName);
    }

    CUnleash.hook = function (key) {
        var name = CUnleash.intervalNames[key];
        if (CUnleash.config[key]) {
            eval('CUnleash.enable_' + key + '()');
            Game.Notify(name + ' started.', '', '', 1, 1);
        } else {
            if (key === 'auto_stock') {
                // Stock market has multiple intervals.
                CUnleash.disable_auto_stock();
            } else {
                clearInterval(CUnleash.intervals[key]);
                delete CUnleash.intervals[key];
            }
            Game.Notify(name + ' stopped.', '', '', 1, 1);
        }
    }

    // ========================================================================
    // #region Stocks

    // Announce transactions in game notifications
    const stockerTransactionNotifications = true

    // Make regular profit reports
    const stockerActivityReport = true
    // How often to make regular reports in ms (one hour by default)
    const stockerActivityReportFrequency = 1000 * 60 * 60

    // Make game notifications fade away on their own
    const stockerFastNotifications = false

    // Use console.log for more detailed info on trends
    const stockerConsoleAnnouncements = true

    // Logic loop frequency; do not touch it unless you are cheating.
    const stockerLoopFrequency = 1000 * 30

    // The cheat itself. Rolls the cycle every time logic loop triggers
    const stockerForceLoopUpdates = false

    const stockerGreeting = 'click clack you are now in debt'

    CUnleash.stockList = {
        check: 'dump eet',
        goods: [],
        sessionStart: new Date(),
        sessionProfits: 0,
        sessionPurchases: 0,
        sessionSales: 0,
        stocksRising: 0
    };

    var modeDecoder = ['stable', 'slowly rising', 'slowly falling', 'rapidly rising', 'rapidly falling', 'fluctuating'] // meanings of each market trend (good.mode)
    var goodIcons = [[2, 33], [3, 33], [4, 33], [15, 33], [16, 33], [17, 33], [5, 33], [6, 33], [7, 33], [8, 33], [13, 33], [14, 33], [19, 33], [20, 33], [32, 33], [33, 33], [34, 33]];

    CUnleash.stockerTimeBeautifier = function (duration) {
        // var milliseconds = Math.floor((duration % 1000) / 100);
        // var seconds = Math.floor((duration / 1000) % 60);
        var minutes = Math.floor((duration / (1000 * 60)) % 60);
        var hours = Math.floor((duration / (1000 * 60 * 60))); //% 24);
        // var days = Math.floor((duration / (1000 * 60 * 60 * 24)));

        if (hours > 0) {
            if (hours == 1) {
                hours = hours + ' hour'
            }
            else hours = hours + ' hours'
        }
        else hours = -1;

        if (minutes >= 1) {
            minutes = (minutes == 1) ? minutes + ' minute' : minutes + ' minutes';
        }
        else minutes = -1;

        if ((hours != -1) && (minutes != -1)) { return hours + ' and ' + minutes; }
        else if ((hours == -1) && (minutes != -1)) { return minutes; }
        else if ((hours != -1) && (minutes == -1)) { return hours; }
        else if ((hours == -1) && (minutes == -1)) { return 'not that long actually'; }
    }

    CUnleash.initStockMarket = function () {
        let objKey = 'Bank';
        CCSE.MinigameReplacer(function () {
            let M = Game.ObjectsById[5].minigame; // Game.customMinigame[objKey];
            CUnleash.StockMarket = M;
            console.log(M);
            var market = M.goodsById;
            console.log('Reading the market:');
            console.log(market);
            CUnleash.stockList = {
                check: 'dump eet',
                goods: [],
                sessionStart: new Date(),
                sessionProfits: 0,
                sessionPurchases: 0,
                sessionSales: 0,
                stocksRising: 0
            };
            CUnleash.stockList.startingProfits = M.profit;
            for (let i = 0; i < market.length; i++) {
                CUnleash.stockList.goods.push({
                    name: market[i].name,
                    stock: market[i].stock,
                    restingPrice: 10 * (i + 1) + Game.ObjectsById[i].level - 1,
                    currentPrice: market[i].val,
                    mode: market[i].mode,
                    lastMode: market[i].mode,
                    priceBought: -1,
                });
                console.log('Stock: ' + market[i].name + ' Status: ' + modeDecoder[market[i].mode]);
            }
            if (stockerActivityReport) {
                CUnleash.launchStockActivityReport();
            }
            CUnleash.launchStockTrader();
        }, objKey);
    }

    CUnleash.launchStockActivityReport = function () {
        clearInterval(CUnleash.intervals.stock_activity_report);
        var func = function () {
            var stockerUptime = new Date() - CUnleash.stockList.sessionStart;
            if ((CUnleash.stockList.sessionPurchases + CUnleash.stockList.sessionSales) == 0) {
                Game.Notify(
                    'CookiStocker report',
                    'This session has been running for ' + stockerTimeBeautifier(stockerUptime) +
                    ', but no good investment opportunities were detected! Luck is not on our side, yet.'
                    , [26, 7], stockerFastNotifications
                );
            } else {
                Game.Notify(
                    'CookiStocker report',
                    'This session has been running for ' + stockerTimeBeautifier(stockerUptime) +
                    ', and has made ' + CUnleash.stockList.sessionProfits.toFixed(0) +
                    '$ in ' + CUnleash.stockList.sessionPurchases + ' purchases and ' + CUnleash.stockList.sessionSales + ' sales.'
                    , [26, 7], stockerFastNotifications
                );
            }
        };
        CUnleash.intervals.stock_activity_report = setInterval(func, stockerActivityReportFrequency);
    }

    CUnleash.launchStockTrader = function () {
        clearInterval(CUnleash.intervals.stock_trader);
        let M = CUnleash.StockMarket;
        var func = function () {
            if (stockerForceLoopUpdates) M.tick();
            // setting stockerForceLoopUpdates to true will make the logic loop force the market to tick every time it triggers,
            // making this an obvious cheat, and i will personally resent you.

            // but
            // if you backup your save and set stockerLoopFrequency to like 10 milliseconds it looks very fun and effective.
            // yes, this is how i made the gif on the steam guide page.


            var stockList = CUnleash.stockList;
            var market = M.goodsById;

            stockList.stocksRising = 0;
            for (let i = 0; i < market.length; i++) {
                //let i = 3;

                // update stockList
                stockList.goods[i].stock = market[i].stock;
                stockList.goods[i].currentPrice = market[i].val;
                stockList.goods[i].mode = market[i].mode;

                let md = stockList.goods[i].mode;
                let lmd = stockList.goods[i].lastMode;

                if (
                    (md != lmd) && (Game.ObjectsById[i + 2].amount > 0)   // new trend detected in a stock that is active
                ) {
                    if (stockerConsoleAnnouncements) {
                        console.log(stockList.goods[i].name + ' has changed the mode from [' + modeDecoder[lmd] + '] to [' + modeDecoder[md] + ']');
                    }

                    if (lmd != 5 && md == 5) {  // ignore unstable stocks
                        if (stockerTransactionNotifications) Game.Notify(stockList.goods[i].name + ' went unstable', 'Ignoring the stock for a time', [1, 33], stockerFastNotifications);
                    }

                    if (    // buy conditions
                        (
                            (lmd == 2) && ((md != 4) && (md != 5)) ||  // slow fall stopped
                            (lmd == 4) && ((md != 2) && (md != 5)) ||  // fast fall stopped
                            (lmd == 5) && ((md != 2) && (md != 4))     // chaotic stopped
                        )
                        &&
                        (stockList.goods[i].currentPrice < stockList.goods[i].restingPrice) // only if the price is lower than resting price
                    ) {
                        // buying
                        stockList.goods[i].priceBought = stockList.goods[i].currentPrice;
                        M.buyGood(i, 10000);
                        stockList.sessionPurchases++;
                        if (stockerTransactionNotifications) Game.Notify('Buying ' + stockList.goods[i].name, 'The price has stopped ' + modeDecoder[stockList.goods[i].lastMode] + ' at ' + Math.floor(stockList.goods[i].priceBought) + '$ per unit, and is ' + modeDecoder[stockList.goods[i].mode] + ' now.', goodIcons[i], stockerFastNotifications);
                        if (stockerConsoleAnnouncements) console.log('=====$$$== Buying ' + stockList.goods[i].name);
                    }

                    if (    // sell conditions
                        (stockList.goods[i].stock > 0)  // only if the stock is present
                        &&
                        (
                            (lmd == 1) && ((md != 3) && (md != 5)) ||  // slow rise stopped
                            (lmd == 3) && ((md != 1) && (md != 5)) ||  // fast rise stopped
                            (lmd == 5) && ((md != 1) && (md != 3))     // chaotic stopped
                        )
                        && (stockList.goods[i].currentPrice > stockList.goods[i].priceBought)   // only if the price is higher than the price it was bought at
                    ) {
                        // selling
                        stockList.goods[i].priceBought = -1;
                        M.sellGood(i, 10000);
                        stockList.sessionSales++;
                        if (stockerTransactionNotifications) Game.Notify('Selling ' + stockList.goods[i].name, 'At a profit of ' + Math.floor(stockList.goods[i].currentPrice - stockList.goods[i].priceBought) + '$ per unit (total ' + Math.floor(stockList.goods[i].currentPrice - stockList.goods[i].priceBought) * stockList.goods[i].stock + '$ profit), and is ' + modeDecoder[stockList.goods[i].mode] + ' now.', goodIcons[i], stockerFastNotifications);
                        if (stockerConsoleAnnouncements) ('=====$$$== Selling ' + stockList.goods[i].name + ' at a profit of ' + (stockList.goods[i].currentPrice - stockList.goods[i].priceBought).toFixed(2));

                    }

                    stockList.sessionProfits = M.profit - stockList.startingProfits;
                    stockList.goods[i].lastMode = stockList.goods[i].mode   // update last mode
                }
            }
        };
        CUnleash.intervals.stock_trader = setInterval(func, stockerLoopFrequency);
    }

    // #endregion

    // ========================================================================
    // #region Hooks

    CUnleash.enable_auto_click = function () {
        clearInterval(CUnleash.intervals.auto_click);
        var func = function () {
            Game.ClickCookie();
        };
        CUnleash.intervals.auto_click = setInterval(func, 4);
    }

    CUnleash.enable_auto_golden = function () {
        clearInterval(CUnleash.intervals.auto_golden);
        var func = function () {
            Game.shimmers.forEach(function (shimmer) {
                if (shimmer.type == "golden" && shimmer.wrath == 0) {
                    shimmer.pop();
                }
            });
        };
        CUnleash.intervals.auto_golden = setInterval(func, 500);
    }

    CUnleash.enable_auto_news_fortune = function () {
        clearInterval(CUnleash.intervals.auto_news_fortune);
        var func = function () {
            if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') {
                Game.tickerL.click();
            }
        };
        CUnleash.intervals.auto_news_fortune = setInterval(func, 1000);
    }

    CUnleash.enable_auto_reindeer = function () {
        clearInterval(CUnleash.intervals.auto_reindeer);
        var func = function () {
            Game.shimmers.forEach(function (shimmer) {
                if (shimmer.type == "reindeer") {
                    shimmer.pop();
                }
            });
        };
        CUnleash.intervals.auto_reindeer = setInterval(func, 500);
    }

    CUnleash.enable_auto_stock = function () {
        CUnleash.initStockMarket();
    }

    CUnleash.disable_auto_stock = function () {
        clearInterval(CUnleash.intervals.stock_activity_report);
        delete CUnleash.intervals.stock_activity_report;
        clearInterval(CUnleash.intervals.stock_trader);
        delete CUnleash.intervals.stock_trader;
    }

    CUnleash.enable_auto_wrath = function () {
        clearInterval(CUnleash.intervals.auto_wrath);
        var func = function () {
            Game.shimmers.forEach(function (shimmer) {
                if (shimmer.type == "golden" && shimmer.wrath == 1) {
                    shimmer.pop();
                }
            });
        };
        CUnleash.intervals.auto_wrath = setInterval(func, 500);
    }

    CUnleash.enable_auto_wrinkler = function () {
        clearInterval(CUnleash.intervals.auto_wrinkler);
        var func = function () {
            var wrinkCount = 0,
                wrinkEaten = 0,
                wrinkIndex = Game.wrinklers.length; // value for max shinies test

            for (var i in Game.wrinklers) {
                // count number of eating wrinks
                if (Game.wrinklers[i].sucked > 0) {
                    wrinkCount += 1;
                }
                // find top wrink index, ignoring shiny wrinklers
                if (Game.wrinklers[i].sucked > wrinkEaten && Game.wrinklers[i].type == 0) {
                    wrinkEaten = Game.wrinklers[i].sucked;
                    wrinkIndex = i;
                }
            }
            // pop top wrinkler if 10 eating, unless all 12 are shiny
            if (wrinkCount > 10 && wrinkIndex != Game.wrinklers.length) {
                Game.wrinklers[wrinkIndex].hp = 0;
            }
        };
        CUnleash.intervals.auto_wrinkler = setInterval(func, 10 * 1000);
    }

    // #endregion

    if (CCSE.ConfirmGameVersion(CUnleash.name, CUnleash.version, CUnleash.GameVersion)) {
        CUnleash.init();
    }
}

if (!CUnleash.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        CUnleash.launch();
    }
    else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(CUnleash.launch);
    }
}

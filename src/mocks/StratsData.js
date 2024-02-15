import { ArrowUpIcon, StarIcon } from "@heroicons/react/24/outline";

export const strats = [
    { id: 1, name: "ICT Method", market: "forex", winrate: "64,3%", riskToReward: 2.5, profit: "350%", votes: 1024, hotStrat: true, tags: ["tranding", "top"] },
    { id: 2, name: "KRK Method", market: "crypto", winrate: "64,1%", riskToReward: 2.2, profit: "301%", votes: 905, hotStrat: false, tags: [] },
    { id: 3, name: "KRK Method", market: "crypto", winrate: "64,1%", riskToReward: 2.2, profit: "301%", votes: 905, hotStrat: false, tags: [] },
    { id: 4, name: "KRK Method", market: "crypto", winrate: "64,1%", riskToReward: 2.2, profit: "301%", votes: 2500, hotStrat: false, tags: [] }
]
// popis, timeframe, rules, příklady, backtest - grafy  

export const tags = {
    top: {
        tooltip: "Most viewed strat this month",
        icon: <StarIcon className="w-4 h-4" />,
        color: "amber"
    },
    tranding: {
        tooltip: "Strat with most gained upvotes this week",
        icon: <ArrowUpIcon className="w-4 h-4" />,
        color: "blue"
    }
}

// const TABLE_HEAD = ["Name", "Market", "Winrate", "Risk To Reward", "Profit", "Votes", ""];
export const TABLE_HEAD = [
    { id: 1, name: "Name", tooltip: "" },
    { id: 2, name: "Market", tooltip: "" },
    { id: 3, name: "Winrate", tooltip: "" },
    { id: 4, name: "R-T-R", tooltip: "Risk To Reward" },
    { id: 5, name: "Profit", tooltip: "How much you would earn using this method on back-test data" },
    { id: 6, name: "Votes", tooltip: "User votes" }
];
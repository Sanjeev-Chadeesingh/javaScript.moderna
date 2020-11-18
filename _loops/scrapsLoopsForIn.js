// 8-5-2020 for...in
const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};
let total = 0;
for(let key in jeopardyWinnings) {
    console.log(key);
    total += jeopardyWinnings[key];
}
console.log(total);

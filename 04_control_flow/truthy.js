// NUll colescing operator (??)

// dono me se ek koi value ko le leta hai agar kahi null aa rha ho toh use rejecect kr degaa un dono value me se

const val = null ?? 4;
const vall = 12 ?? 5; // iss case me vall pahli value ko le lega donome se 
const valll = undefined ?? 6;
const vallll = undefined ?? null; // yaha null ko le lega
console.log(val)
console.log(vall)
console.log(vallll)
console.log(valll)
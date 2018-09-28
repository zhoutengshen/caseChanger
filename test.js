const { camal2kebab } = require("./caseChanger");
let a = {
    a_a_00: {
        a_a: "1",
        C_b_a:{
            c_b_:"123",
            c_c:[1,2,3],
            a_a:{
                _f:{}
            }
        }
    },
    bA_f: [
        {a_a:1}
    ],
    c_F_f: function () { console.log("<<<") }
}


console.log(camal2kebab(a));
console.log(camal2kebab(a).aA00.CBA.cC);

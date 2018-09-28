const { camal2kebab, kebab2camal } = require("./caseChanger");
let a = {
    hei_boy: {
        my_coutes:[1,2,{a_a:"J"}],
        my_name: {
            my_age: {
                my_gender: {
                    h_u: { a: "" }
                }
            }
        }
    }
}
console.log(kebab2camal(a));
console.log(a);
console.log(camal2kebab(kebab2camal(a)))

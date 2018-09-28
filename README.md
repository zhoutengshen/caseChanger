# caseChanger
用于转换不同的命名法

## use

const { camal2snake,... } = require("./caseChanger");

var a = {...}; 

var b = camal2snake(a);

## example
    const { camal2snake, snake2camal } = require("./caseChanger");
    let a = {
        hei_boy: {
            my_coutes:[1,2,{a_a:"J"}],
                my_name: {
                    my_age: {
                        my_gender: {
                            h_u: {
                                a: "" 
                            }
                    }
                }
            }
        }
    }
    console.log(snake2camal(a));             //{ heiBoy: { myCoutes: [ 1, 2, [Object] ], myName: { myAge: [Object] } } }
    console.log(a);                          //{ hei_boy: { my_coutes: [ 1, 2, [Object] ], my_name: { my_age: [Object] } } }
    console.log(camal2snake(snake2camal(a))) //{ hei_boy: { my_coutes: [ 1, 2, [Object] ], my_name: { my_age: [Object] } } }
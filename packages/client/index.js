import hello from "../server/index.js";
import _ from "lodash";

console.log('Inside the client - update');
hello();

const check = _.includes([1, 2, 3], 1);
console.log(check);
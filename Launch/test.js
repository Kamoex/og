"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lm_1 = require("./message/lm");
const protobuf = require("protobufjs");
//import { lm } from "../Launch/message/lmssage/lm";
// import * as im_helloworld from "./message/lm";
// var a = im_helloworld;
new lm_1.lm.helloword();
class Test {
    constructor() {
    }
    create_proto() {
        var msg = lm_1.lm.helloword.create();
        msg.id = 100;
        msg.str = "123456";
        console.log(msg);
        lm_1.lm.helloword.encode(msg);
    }
}
var t = new Test();
t.create_proto();
var aaa = 1;
protobuf.loadSync('./Launch/message/a.js');
//# sourceMappingURL=test.js.map
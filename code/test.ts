import { lm } from "./message/lm";

 class Test {
     public create_proto() : void {
        var msg = lm.helloword.create();
        msg.id = 100;
        msg.str = "123456";
        console.log(msg);
        lm.helloword.encode(msg);
     }
 }

  var t = new Test();
  t.create_proto();



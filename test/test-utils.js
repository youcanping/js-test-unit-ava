import test from "ava";
import add from "../src/utils";


test("test add 1+1",t => {
    t.is(add(1,1),2);
})
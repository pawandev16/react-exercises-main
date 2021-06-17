import { observable, action } from "mobx";

const Counts = observable({
  count: 0,
  decrement: action("dsd", function () {
    if (Counts.count > 0) {
      Counts.count -= 1;
    } else {
      Counts.count=0;
    }
  }),
  increment: action(function () {
    Counts.count += 1;
  }),
});
export default Counts;

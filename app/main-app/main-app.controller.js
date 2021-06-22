import myModule from "../app.module.js";

export default myModule.controller("MainController", [
  "$scope",
  "MyService",
  function ($scope, MyService) {
    console.log("Controller created!");
    var self = this;
    self.myModel = "The sum of 2 + 2 is " + MyService.add(2, 2);
  },
]);

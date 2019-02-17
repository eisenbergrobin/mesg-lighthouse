const mesg = require("mesg-js").service();

mesg
  .listenTask({
    runLighthouseAudit: require("./tasks/runLighthouseAudit")
  })
  .on("error", error => console.error(error));

mesg
  .emitEvent("started", { success: true })
  .catch(error => console.error(error));

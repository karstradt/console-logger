const consoleLogger = require('../src/main');

consoleLogger.logSpreaded({
    profile: {
        personal: {
            name: "John Doe"
        },
        professional: {
            designation: "Lead Developer"
        }
    }
});
consoleLogger.logInfo("This is an info");
consoleLogger.logSuccess("This is a success");
consoleLogger.logNotify("This is a notification");
consoleLogger.logWarning("This is a warning");
consoleLogger.logError("This is an error");

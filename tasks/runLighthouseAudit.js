const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const ReportGenerator = require("lighthouse/lighthouse-core/report/report-generator");
const mesg = require("mesg-js").service();

const chromeFlags = [
  "--disable-gpu",
  "--headless",
  "--enable-logging",
  "--no-sandbox"
];

const handler = async ({ url }, { success }) => {
  await mesg.emitEvent("audit-start", { target: url });

  const chrome = await chromeLauncher.launch({ chromeFlags });
  const results = await lighthouse(url, { port: chrome.port });
  await chrome.kill();

  const html = ReportGenerator.generateReport(results.lhr, "html");

  await mesg.emitEvent("audit-end", { target: url });
  success({
    message: "Completed Lighouse audit!",
    htmlResults: html,
    rawResults: results.lhr
  });
};

module.exports = handler;

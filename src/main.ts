const core = require("@actions/core");
const plivo = require("plivo");

async function run() {
  const from = core.getInput("fromPhoneNumber");
  const to = core.getInput("toPhoneNumber");
  const message = core.getInput("message");

  core.debug(from, to, message);

  const auth_id = core.getInput("PLIVO_AUTH_ID") || process.env.PLIVO_AUTH_ID;
  const auth_token = core.getInput("PLIVO_AUTH_TOKEN") || process.env.PLIVO_AUTH_TOKEN;

  var client = new plivo.Client(auth_id, auth_token);
  var response = client.messages.create(
    from,
    to,
    message).then(
    function (response: any) {
      console.log(response);
    },
    function (error: any) {
      console.error(error);
    }
  );
  return response;
}

async function execute() {
  try {
    return await run();
  } catch ({ message }) {
    core.error("Failed to send message", message);
    core.setFailed(message);
  }
}

module.exports = execute;

execute();
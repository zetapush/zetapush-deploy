var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
} else {
    shell.echo('Git is installed')
}
shell.echo("sandboxId " + shell.env['sandboxId'])

var hostname = shell.cat("/etc/hostname")
shell.echo("Hostname " + hostname)
var machineName = shell.env['sandboxId'] + '_' + hostname
shell.echo("machineName " + machineName)

// Cleanup
shell.cd("user_code")
shell.exec('pm2-docker start server.js --public s2b6dxpyd8ioa2a --secret yozkh1u1whvmknz --machine-name ' + machineName)

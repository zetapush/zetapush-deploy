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
var pm2Public = shell.env['pm2Public']
var pm2Secret = shell.env['pm2Secret']
shell.echo("pm2 keys ", pm2Secret, pm2Secret)

// Cleanup
shell.cd("user_code")
shell.exec('pm2-docker start server.js --public ' + pm2Public + ' --secret ' + pm2Secret + ' --machine-name ' + machineName)

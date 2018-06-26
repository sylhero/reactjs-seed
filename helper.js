function printInfo(msg) {
    console.log('\x1b[36m%s\x1b[0m', msg);
}

function printError(msg) {
    console.log('\x1b[31m', msg);
}


function checkEnv() {
    let PARTNER = process.env.PARTNER;
    const PARTNER_BRANCH = process.env.PARTNER_BRANCH;

    if (!PARTNER) {
        if (!PARTNER_BRANCH || PARTNER_BRANCH.indexOf('/') === -1) {
            printError('PARTNER is missing, please export/set PARTNER or PARTNER_BRANCH.');
            process.exit(1);
        } else {
            PARTNER = PARTNER_BRANCH.split('/')[0].toLowerCase();
        }
    } else {
        printInfo(`Current [PARTNER] is ${PARTNER}`);
    }
    return {
        PARTNER
    };
}

module.exports = {
    checkEnv
};

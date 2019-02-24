const helper = () => {
    const theme = process.env.theme;
    if(!theme) {
        console.error('please export theme');
        process.exit(1);
    }
    return theme;
};

const theme = helper();

const Helper = {
    theme
};

module.exports = Helper;
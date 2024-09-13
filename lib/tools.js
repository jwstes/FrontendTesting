class Tools{
    constructor(){

    }

    async randomString(){
        return Math.random().toString(36).slice(2);
    }
}

module.exports = new Tools();
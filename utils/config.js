module.exports = {
    v1_basePath: '/api/v1',
    local_server: {
        host: 'localhost',
        port: 8000
    },
    mongoDB: {
        PROTOCOL: "mongodb",
        HOST: "127.0.0.1",
        PORT: 27017,
        NAME: "sampleHapi",
        USER: "",
        PASSWORD: "",
        get URL() {
            return (
                `${this.PROTOCOL}://${this.HOST}:${this.PORT}/${this.NAME}`
            );
        }
    },
    jwt_private_key: '458hjsdfjdsjfjdsfhjs####@$%SWvcjkvkjdfbvjbdfvbdfkv'
}
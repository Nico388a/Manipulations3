new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        outPut: "",
        operation: ""
    },
    methods: {
        sayHello() {
            console.log("Say Hello " + this.name)
            if (this.name == "") {
                this.outPut = "Hello NoName"
            }
            else {
                this.outPut = "Hello " + this.name
            }
        },

        stringManipulation() {
            let name: string = this.name
            let outPut: string = this.outPut
            let operation: string = this.operation

            switch (operation) {
                case "toUpperCase": outPut = name.toUpperCase(); break;
                case "toLowerCase": outPut = name.toLowerCase(); break;


            }

            this.outPut = outPut;
        }










    }
})
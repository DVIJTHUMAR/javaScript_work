class form{
    constructor(){
        console.log(" WELCOME");
    };

    sForm = (n,e,a)=>{
        this.name = n;
        this.email = e;
        this.age = a;    
        
        var a = this.name +" "+ this.email +" "+ this.age;

        return (a);
    }

    xForm = (n,e,a) => {
       let nObj = {
            name : n,
            email : e,
            age : a,
        }
        console.log("nObj ===> ",nObj.name,nObj.email,nObj.age);
        return nObj;
    }
    
};

const nForm = new form();
console.log("sForm ====> ",nForm.sForm("dvij "," dvijpatel222@gmail.com ", 22));

console.log("xForm ====> ",nForm.xForm("dvij "," dvijpatel222@gmail.com ", 22));
nForm.xForm("dvij")

    // js inbuiled function

const dd = Date();
console.log("Date ====> ",dd);
function validateUsername(){
    let uname=document.getElementById('uname')

    let p1=/\s/
    // let p2=/^([A-z]+[0-9]*){8,16}$/
    let p2=/^[A-z_]+[\d]+/
    let data=uname.value

    if(data.length>=8 && data.length<=16){
        if(!p1.test(data) && p2.test(data)){
            validate(true,"usernameValidation")
        }else{
            validate(false,"usernameValidation")
        }
    }
}

function validate(flag,id){
    let obj=document.getElementById(id)
    obj.style.display="block"

    if(flag){
        obj.style.color="green"
        obj.style.fontSize="1.2rem"
        obj.innerHTML="<strong>Valid Username</strong>"
    }else{
        obj.style.color="red"
        obj.style.fontSize="1.2rem"
        obj.innerHTML="<strong>Invalid Username</strong>"
    }
}
module.exports = {
    //Lógica para Calcular a idade
    age: function age(timestamp){
        const today = new Date()
        const birthday = new Date(timestamp)
    
        // 2020 - 2002 = 19
        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()
    
    
        if(month < 0 || month == 0 && today.getDate() < birthday.getDate() ){
            age--
        }
    
        return age
    
    }
    
}
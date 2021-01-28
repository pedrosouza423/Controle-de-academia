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
    
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        //O Mês vai de 0 a 11
        const month = `0${date.getUTCMonth() +1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        // return yy - mm - dd
        return `${year}-${month}-${day}`
    }
    
}
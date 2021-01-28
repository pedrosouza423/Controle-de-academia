const fs = require('fs')
const data = require('./data.json')
const {age,date} = require('./utils')

//show
exports.show = function(req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor){
        return res.send('This instructor is not found!')
    } 



    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(",") ,
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundInstructor.created_at)

    }

    return res.render('instructors/show', {instructor})
}

// create 
exports.post = function(req,res){
    // reqq.query
    // req.body

    const keys = Object.keys(req.body)
    //validação
    for( key of keys ){
        //req.body.key
        if(req.body[key] == ''){
            return res.send('Please, fill all field')
        }
    }

    let {avatar_url, name, birth, gender, services} = req.body


    //Tratamento nos dados
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length +1)


    // {...}
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write file error")

        return res.redirect("instructors")
    } )
    // return res.send(req.body),
}

//edit
exports.edit = function(req,res){
    const {id} = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return instructor.id == id
    })

    if(!foundInstructor){
        return res.send('This instructor is not found!')
    } 

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth) //2002-1-5
    }

    // date(foundInstructor.birth)
    return res.render('instructors/edit', {instructor})
}


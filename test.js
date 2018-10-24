describe(`Функция проверки запроса на сервер для получения списка городов`, () =>{
    
        var result;

        before(async() =>{
            result = await fetch('http://89.108.65.123/cities').then(result =>result.json())
        })

        it(`сервер вернул успешный ответ`, () =>{
            assert.isDefined(result)   
        }) 
        

})
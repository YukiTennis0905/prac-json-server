var faker = require('faker');
 
 var database = { 
        info: []
    };
 
 for (var i = 1; i<= 50; i++) {
   database.info.push({
     id: i,
     name: faker.name.findName(),
     email: faker.internet.email(),
     created_at: faker.date.between('2020-01-01', '2020-12-31'),
     profile_image: faker.image.imageUrl(),
   });
 }
 
 console.log(JSON.stringify(database));
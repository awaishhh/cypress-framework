it('file read',()=>{
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
        
    })
})

it('read file',()=>{
    cy.writeFile('abc.txt','i am awais')
})
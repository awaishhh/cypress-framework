export class login{

    username = '#username'
    password = '#password'
    login = '#Login'

    username_textbox (username){
        cy.get(this.username).type(username)
       

    }

   password_textbox (password){
    cy.get(this.password).type(password)
    


   }

   login_button (){
    cy.get(this.login).click()


   }

}

describe('Login', function(){
    
    it('Sign in', function(){
        
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol').should('eq', 'https:')
        cy.get(':nth-child(1) > .form-control').type('marcusfunctional01@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('Eusoudorio10*')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout: 10000}).should('be.visible')
    })

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include', '#/editor')
        //cy.location('hash').should('include', '#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
    })

    it('Mark-unmak as favorite', function(){
        cy.get(':nth-child(4) > .nav-link').contains('marcusdemo').click()
        cy.contains('My Articles').should('be.visible')
        //cy.get(':nth-child(4) > .nav-link').click
        cy.get(':nth-child(4) > .nav-link').click
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get(':nth-child(4) > .nav-link').click
        cy.reload()

        // cy.contains('No articles are here... yet.').should('be.visible')
        // cy.go('back')



    })

    
})
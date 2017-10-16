import email from 'email-validator'
import bookshelf from '../connection'
import ValidationException from './ValidationException'

export default bookshelf.Model.extend({
    tableName: 'customers',
    
    initialize: function(){
        
    }
})
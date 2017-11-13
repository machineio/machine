import Backbone from 'backbone'

class EmailModel extends Backbone.Model {
  get defaults () {
    return {
      account: ''
    }
  }

  get urlRoot () {
    return 'https://lb.spartanapproach.com/emails/'
  }

  get idAttribute () {
    return 'uuid'
  }
}

export default EmailModel

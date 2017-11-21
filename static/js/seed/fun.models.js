/*
 Seed models configuration
*/

fun.models.User = Backbone.Model.extend({
    idAttribute: 'uuid',
});

fun.models.Users = Backbone.Collection.extend({
    model: fun.models.User,
    parse: function(response) {
        return response.results
    }
});

fun.models.Email = Backbone.Model.extend({
    idAttribute: 'uuid'
});

fun.models.Emails = Backbone.Collection.extend({
    model: fun.models.Email,
    parse: function(response) {
        return response.results
    }
});
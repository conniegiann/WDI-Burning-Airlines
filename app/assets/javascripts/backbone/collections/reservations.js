var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,

  initialize: function(options) {
    for (var option in options) {
      this[option] = options[option];
    }
  },

  // Obviously won't stay like this
  url: function () {
    console.log(this.models.length);
    return '/planes/' + this.models[0].get('plane_id') + '/flights/' + this.models[0].get('flight_id') + '/reservations';
  }
});
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleShowActivityDetails(){
      this.set('showActivityDetails', true);
    }
  },
  showActivityDetails: false,
  day1data: {
    "timeslots":[
      {
        "id":"5531a14a78b45a7b49000009|1433174400",
        "available_spots":5,
        "booked_count":5,
        "max_guests":10,
        "minute_length":60,
        "start":"2015-06-01T09:00:00-07:00",
        "end":"2015-06-01T10:00:00-07:00",
        "activity_name":"Activity 1"
      },
      {
        "id":"5531a15178b45a7b4900000c|1433181600",
        "available_spots":6,
        "booked_count":4,
        "max_guests":10,
        "minute_length":60,
        "start":"2015-06-01T11:00:00-07:00",
        "end":"2015-06-01T12:00:00-07:00",
        "activity_name":"Activity 1"
      },
      {
        "id":"5531a1e478b45a502f00001c",
        "available_spots":0,
        "booked_count":10,
        "max_guests":10,
        "minute_length":180,
        "start":"2015-06-01T12:00:00-07:00",
        "end":"2015-06-01T15:00:00-07:00",
        "activity_name":"Activity 2"
      }
    ]
  }
});

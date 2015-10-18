if (Meteor.isClient) {
  Template.hello.onRendered(function () {
    $('#qrcode').qrcode({
      size: 400,
      text: "http://larsjung.de/qrcode"
    });
  });
}

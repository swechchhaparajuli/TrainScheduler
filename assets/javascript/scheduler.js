/* global moment firebase */

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCM_yGPTRHGw6Zemr-XhGla6jur0SWiMY8",
  authDomain: "trainscheduler-a4980.firebaseapp.com",
  databaseURL: "https://trainscheduler-a4980.firebaseio.com",
  projectId: "trainscheduler-a4980",
  storageBucket: "trainscheduler-a4980.appspot.com",
  messagingSenderId: "13272329614"
};
firebase.initializeApp(config);
  
  // Create a variable to reference the database.
  var database = firebase.database();


  var trainName = "";
  var  destination= "";
  var  firstTrain= 0;
  var  frequency= 0;
  var index = 0;

  // Capture Button Click
  $("#submit").on("click", function(event) {
    event.preventDefault();

  

    index++;

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    trainName = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#frequency").val("");

   // var addRow = $("<tr>")
   // addRow.addClass("schedData");
   /* $(".name").text(trainName);
    $(".destination").text(destination);
    $(".frequency").text(frequency);
    $(".nextArrival").text(firstTrain);
    $(".minutesAway").text("0");*/

    var addRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(firstTrain),
      $("<td>").text(frequency),
      $("<td>").text('100')
    );

    console.log(addRow);
  
    // Append the new row to the table
    $("#trainTable > tbody").append(addRow);
    

    /*
    var nameSpot =  $("<th>");
    nameSpot.addClass("name" + index);
    var destinationSpot = $("<td>");
    destinationSpot.addClass("destination" + index);
    var firstTrainSpot = $("<td>");
    firstTrainSpot.addClass("nextArrival" + index);
    var frequencySpot = $("<td>");
    frequencySpot.addClass("minutesAway" + index);*/






    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

    
  });

  // -----------------------------
  
  // connectionsRef references a specific location in our database.
  // All of our connections will be stored in this directory.
  var connectionsRef = database.ref("/connections");
  
  // '.info/connected' is a special location provided by Firebase that is updated
  // every time the client's connection state changes.
  // '.info/connected' is a boolean value, true if the client is connected and false if they are not.
  var connectedRef = database.ref(".info/connected");
  
  // When the client's connection state changes...
  connectedRef.on("value", function(snap) {
  
    // If they are connected..
    if (snap.val()) {
  
      // Add user to the connections list.
     // var con = connectionsRef.push(true);
      // Remove user from the connection list when they disconnect.
    //  con.onDisconnect().remove();
    }
  });
  


  // When first loaded or when the connections list changes...
  connectionsRef.on("value", function(snap) {
  
    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#connected-viewers").text(snap.numChildren());
  });
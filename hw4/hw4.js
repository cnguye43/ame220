var data_y;

var dialogLib = {
  login:{
    _yCB: function(){},
    _nCB: function(){},
    _yesClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .passInput").val();
      _yCB(val1, val2);
      $(".wrapper").remove();
    },
    _noClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .passInput").val();
      _nCB(val1,val2);
      $(".wrapper").remove();
    },

    show: function(msg1, msg2, msg3, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg1 + "</h1>" + 
            "<h4>" + msg2 + "</h4>" +
            "<input type='text' class='userInput'/>"+
            "<h4>" + msg3 + "</h4>" + 
            "<input type='password' class='passInput'/>" + "<br><br>" +
            "<button class='cancel' onclick='dialogLib.login._noClicked()'>" + noLabel + "</button>" +
            "<button class='ok' onclick='dialogLib.login._yesClicked()'>" + yesLabel + "</button>" +
          "</div>"+
        "</div>";
      $("body").append(outS);
      $(".wrapper .frame .userInput").focus();
    }
  },

  signup:{
    _yCB: function(){},
    _nCB: function(){},
    _yesClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .passInput").val();
      _yCB(val1, val2);
      $(".wrapper").remove();
    },
    _noClicked: function(){
      var val1 = $(".wrapper .frame .userInput").val();
      var val2 = $(".wrapper .frame .passInput").val();
      _nCB(val1,val2);
      $(".wrapper").remove();
    },

    show: function(msg1, msg2, msg3, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};
      var outS = "";
      outS += "<div class='wrapper'>" +
         "<div class='frame'>" +
            "<h1>" + msg1 + "</h1>" + 
            "<h4>" + msg2 + "</h4>" +
            "<input type='text' class='userInput'/>"+
            "<h4>" + msg3 + "</h4>" +  
            "<input type='password' class='passInput'/>" + "<br><br>" + 
            "<button class='cancel' onclick='dialogLib.login._noClicked()'>" + noLabel + "</button>" + 
            "<button class='ok' onclick='dialogLib.login._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    }
  }

}
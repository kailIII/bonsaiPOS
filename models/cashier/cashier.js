var fs = require('fs');


function showAlertMessage(tipeMessage)
{
  $("#alertMessage").removeClass();
  if(tipeMessage=="success"){
    $("#alertMessage").addClass("alert alert-dismissible alert-success");
    $("#alertMessage")[0].innerHTML='<p>El monto en caja fue a&ntilde;adido exitosamente.</p>';
  }
  else if (tipeMessage=="warningAmount"){
    $("#alertMessage").addClass("alert alert-dismissible alert-danger");
    $("#alertMessage")[0].innerHTML='<p>La cantidad debe ser numerica y mayor a cero.</p>';
  }
  $("#alertMessage").show();
}

(function ($) {

  $('#form1').on('submit', function (event) {
    $("#alertMessage").hide();
    event.preventDefault(); 
    var money = $("#money").val();
    
    if(money > 0){
       create_cashier(money);
       showAlertMessage("success");
       $("#money").val("");
    }else {
       showAlertMessage("warningAmount");
    }
  });

})(jQuery);

function getpathproyect(todelete,cant_of_breakbar)
{
  actualdir = __dirname
  /*34 es ascii de '\', la primera comparación ve si pertenece el path a windows,
  si pertenece a windows, no hace nada, caso contrario, lo cambia a '/'
  */
  if(actualdir.search('/') != -1)
  {
    for(i = 0; i < cant_of_breakbar; i++)
    {
      todelete = todelete.replace(String.fromCharCode(92),'/');
    }
  }
  actualdir = actualdir.replace(todelete,'');
  return actualdir;
}

function converpath(toconvert,cant_of_breakbar)
{
  actualdir = __dirname
  /*34 es ascii de '\', la primera comparación ve si pertenece el path a windows,
  si pertenece a windows, no hace nada, caso contrario, lo cambia a '/'
  */
  if(actualdir.search('/') != -1)
  {
    for(i = 0; i < cant_of_breakbar; i++)
    {
      toconvert = toconvert.replace(String.fromCharCode(92),'/');
    }
  }
  return toconvert;
}





function create_cashier(money)
{
  var db = new DataBase();
  var myCashiers = db.getTable("cashier",'\\views\\cashier',2);
  var cashier = {"date_open": new Date().toUTCString(), "money_open": money, "date_close": "...", "money_close": "..."};
  myCashiers.push(cashier);
  db.putTable("cashier", myCashiers,'\\views\\cashier',2);
}

function exist_active_cashier(todelete,cant_of_breakbar)
{
  var db = new DataBase();
  var myCashiers = db.getTable("cashier",todelete,cant_of_breakbar);
  var ultimo = myCashiers.length-1;
  if(ultimo != -1 && myCashiers[ultimo].date_close == "...")
  {
    return true;
  }
  else
  {
    return false;
  }
}

function close_cashier(money)
{
  var db = new DataBase();
  var myCashiers = db.getTable("cashier",'\\views\\cashier',2);
  var ultimo = myCashiers.length-1;
  myCashiers[ultimo].date_close = new Date().toUTCString();
  myCashiers[ultimo].money_close = money;
  db.putTable("cashier", myCashiers,'\\views\\cashier',2);
}

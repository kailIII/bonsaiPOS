window.$ = window.jQuery = require('./libs/jquery.min.js');

$(document).ready(function(){

  $('head').prepend(
    '<meta http-equiv="content-type" content="text/html; charset=utf-8"/>'+
    '<title>BonsaiPOS</title>'+
    '<link href="./node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">'+
    '<script src="./models/nameoffice.js" type="text/javascript"></script>'+
    '<script src="./models/database/database.js" type="text/javascript"></script>'
  );

});

$(document).ready(function () {
  $('body').prepend(
    '<body onload="verify_cashier()">'+
    '<nav class="navbar navbar-default" role="navigation">'+
      '<div class="container-fluid">'+
        '<div class="navbar-header">'+
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
            '<span class="sr-only">Toggle navigation</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
        '</button>'+
          '<a class="navbar-brand" href="index.html">BonsaiPOS</a>'+
        '</div>'+

        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
          '<ul class="nav navbar-nav">'+

            '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Ventas <span class="caret"></span></a>'+
              '<ul class="dropdown-menu" role="menu">'+
                '<li><a href="views/sales/newSale.html">Nueva Venta</a></li>'+
                '<li><a href="views/products/stock.html">Consulta de productos</a></li>'+
                '<li><a href="">Anular Venta</a></li>'+
                '<li><a href="views/reports/daySales.html">Reporte de ventas</a></li>'+
                '<li><a href="views/sales/index.html">Todas Las Ventas</a></li>'+
              '</ul>'+
            '</li>'+

            '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" id="cash_open" data-toggle="dropdown" role="button" aria-expanded="false">Caja<span class="caret"></span></a>'+
               '<ul class="dropdown-menu" role="menu">'+
                 '<li><a href="views/cashier/opencashier.html">Abrir Caja</a></li>'+
                 '<li><a href="views/cashier/closecashier.html">Cerrar Caja</a></li>'+
               '</ul>'+
          '</li>'+

            '<li class="dropdown">'+
            '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Clientes <span class="caret"></span></a>'+
              '<ul class="dropdown-menu" role="menu">'+
                '<li><a href="views/users/newUser.html">Crear Ciente</a></li>'+
              '<li><a href="views/users/listusers.html">Modificar Cliente</a></li>'+
            '</ul>'+
            '</li>'+

            '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> Configuracion <span class="caret"></span></a>'+
              '<ul class="dropdown-menu" role="menu">'+
                '<li><a href="views/connectionERP/new.html">Almacen'+
                //'<script>document.write(get_data_nameoffice("",0));</script></a></li>'+
                '<li><a href="views/synchronization/daily.html">Conexion Diaria</a></li>'+
                '<li><a href="views/synchronization/synchronization.html">Sincronizacion Diaria-Coneccion</a></li>'+
                '<li><a href="views/dosification/dosification.html">Dosificacion</a></li>'+
                '<li role="separator" class="divider"></li>'+
                        '<li><a href="#" id="update">Sincronizar Productos </a></li>'+
                        '<li><a href="#" id="update_employees">Sincronizar Empleados</a></li>'+
                        '<li><a href="#" id="update_incomes">Sincronizar Ventas</a></li>'+
                        '<li><a href="#" id="update_clientes">Sincronizar Clientes</a></li>'+
                        '<li><a href="#" id="update_organisation">Sincronizar Organizacion</a></li>'+
              '</ul>'+
            '</li>'+

          '</ul>'+

        '<ul class="nav navbar-nav navbar-right">'+
          '<li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Usuario</a></li>'+
        '</ul>'+
      '</div>'+
    '</div>'+
  '</nav>'+

  '<div id="progressbardiv" class="progress progress-striped active" hidden="true">'+
    '<div id="progressbar-2" class="progress-bar" style="transition-duration: 1s; -webkit-transition-duration: 1s; width: 45%">Cargando...</div>'+
  '</div>'+
  '<div class="alert alert-dismissible alert-success" id="alertMessage" hidden="true">'+
    '<button type="button" class="close" data-dismiss="alert">×</button>'+
  '</div>'+
 '</div>'+
 '</body>'
);
});

$(document).ready(function () {
    $('footer').prepend(
  '<script src="./models/database/database.js" type="text/javascript"></script>'+
  '<script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>'+
  '<script src="./models/products/products.js"></script>'+
  '<script src="./models/employees/employees.js"></script>'+
  '<script src="./models/organisations/organisations.js"></script>'+
  '<script src="./models/users/clientes.js"></script>'+
  '<script src="./models/incomes/incomes.js"></script>'+
  '<script src="./models/cashier/cashier.js" type="text/javascript"></script>'
  );
});

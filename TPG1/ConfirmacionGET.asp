<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        dim encuentro, ubicacion, cantidad, precio, apellido, nombre, email, tarjeta
        nombre = Request.QueryString("tnombre") 
        response.Write("Bienvenido: "+nombre)
    %>
    <h1>Confirmacion de Form</h1>
    <table stly="border:medium;">
        <tr>
            <td><span>Encuentro:</span></td>
            <td><span>Ubicacion:</span></td>
            <td><span>Cantidad:</span></td>
            <td><span>Precio:</span></td>
        </tr>
        <tr>
            <td><span>Apellido:<% nombre %></span></td>
            <td><span>Nombre:</span></td>
            <td><span>E-mail:</span></td>
            <td><span>Tarjeta:</span></td>
        </tr>
    </table>
</body>
</html>
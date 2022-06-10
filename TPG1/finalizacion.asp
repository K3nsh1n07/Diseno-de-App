<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
		table, th, td {
		  border:solid black;
		  border-collapse: collapse;
          background-color: #CC99FF;
          padding: 10px;
		}
        table, span{
            color:blue;
        }
	</style>
</head>
<body>
    <%response.cookies("cliente").expires= #Apr,23,2021#%>
    <h1>Página de finalización </h1>
    <table>
        <tr>
            <td><span>Encuentro: <% response.Write(Request.Cookies("Encuentro")) %></span></td>
            <td><span>Ubicacion: <% response.Write(Request.Cookies("Ubicacion")) %></span></td>
            <td><span>Cantidad:<% response.Write(Request.Cookies("Cantidad")) %></span></td>
        </tr>
        <tr>
            <td><span>Apellido: <% response.Write(Request.Cookies("Apellido")) %></span></td>
            <td><span>Nombre: <% response.Write(Request.Cookies("Nombre")) %></span></td>
            <td><span>E-mail: <% response.Write(Request.Cookies("Email")) %></span></td>
            
        </tr>
    </table>
</body>
</html>
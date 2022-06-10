<!DOCTYPE html>
<html lang="en">
<head runat="server">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
		<style>
		table, th, td {
		  border: 1px solid black;
		  border-collapse: collapse;
		}
	</style>
</head>
<body>
    <%
        dim encuentro, ubicacion, cantidad, precio, apellido, nombre, email, tarjeta
        encuentro = Request.Form("sEquipo") 
		ubicacion = Request.Form("sUbicacion") 
		cantidad = Request.Form("iCantidad") 
		precio = Request.Form("sPrecio") 
		apellido = Request.Form("tapellido") 
		nombre = Request.Form("tnombre") 
		email = Request.Form("temail") 
		tarjeta = Request.Form("rTarjeta") 
		
		Select Case encuentro
			case 1 
				encuentro = "Barcelona - Ath. Bilbao"
			case 2
				encuentro = "Real Madrid - Sp. Gijón"
			case 3
				encuentro = "Dep. La Coruña – Sevilla"
		End Select
		
		Select Case ubicacion
			case "popular-l" 
				ubicacion = "Popular Local"
			case "popular-v"
				ubicacion = "Popular Visitante"
			case "platea-l"
				ubicacion = "Platea Local"
			case "platea-v"
				ubicacion = "Platea Visitante"
		End Select
		
    %>
	
    <h1>Confirmacion de Form</h1>
    <table stlye="border:1px;">
        <tr>
            <td><span>Encuentro: <% response.Write(encuentro) %></span></td>
            <td><span>Ubicacion: <% response.Write(ubicacion) %></span></td>
            <td><span>Cantidad: <% response.Write(cantidad) %></span></td>
            <td><span>Precio: <% response.Write(precio) %></span></td>
        </tr>
        <tr>
            <td><span>Apellido: <% response.Write(apellido) %></span></td>
            <td><span>Nombre: <% response.Write(nombre) %></span></td>
            <td><span>E-mail: <% response.Write(email) %></span></td>
            <td><span>Tarjeta:<% response.Write(tarjeta) %></span></td>
        </tr>
    </table>
	<img src="imagenes/qr.jpg">
</body>
</html>
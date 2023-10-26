



<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Salario</title>
<body bgcolor="#959595">
<img src="pruebaumg.png"/>
<img src="imagenempresa.jpg"/>
</head>
<body>
    <h1>Calculadora de Salario</h1>
    <form id="salaryForm">
        <label for="name">Nombre del empleado:</label>
        <input type="text" id="name" required><br><br>

        <label for="salary">Salario Mensual:</label>
        <input type="number" id="salary" required><br><br>

        <label for="bonus">Bonificación:</label>
        <input type="number" id="bonus" required><br><br>

        <label for="ornato">Ingresos mensuales para el cálculo del boleto de ornato:</label>
        <input type="number" id="ornato" required><br><br>

        <label for="hours">Horas extras realizadas:</label>
        <input type="number" id="hours" required><br><br>

        <button type="button" onclick="calcularSalario()">Calcular Salario</button><br><br>

        <p>IGSS: <span id="igssValue"></span></p>
        <p>Salario a Recibir: <span id="netSalary"></span></p>
        <p>Boleto de Ornato: <span id="ornatoFee"></span></p>
        <p>Total a pagar (incluyendo horas extras): <span id="totalPayment"></span></p>
    </form>

    <script>
        function calcularSalario() {
            const salary = parseFloat(document.getElementById("salary").value);
            const bonus = parseFloat(document.getElementById("bonus").value);
            const ornatoIncome = parseFloat(document.getElementById("ornato").value);
            const hours = parseFloat(document.getElementById("hours").value);

            // Calcular IGSS (4% del salario)
            const igss = 0.04 * salary;

            // Calcular el salario neto
            const netSalary = salary - igss + bonus;

            // Evaluar el boleto de ornato
            let ornatoFee = 0;
            if (ornatoIncome >= 500 && ornatoIncome < 1000) {
                ornatoFee = 10 + 20;
            } else if (ornatoIncome >= 1000 && ornatoIncome < 3000) {
                ornatoFee = 15 + 30;
            } else if (ornatoIncome >= 3000 && ornatoIncome < 6000) {
                ornatoFee = 50 + 100;
            } else if (ornatoIncome >= 6000 && ornatoIncome < 9000) {
                ornatoFee = 75 + 150;
            } else if (ornatoIncome >= 9000 && ornatoIncome <= 12000) {
                ornatoFee = 150 + 300;
            }

            // Calcular el total a pagar (incluyendo horas extras)
            const totalPayment = netSalary + hours;

            // Mostrar resultados
            document.getElementById("igssValue").textContent = igss.toFixed(2);
            document.getElementById("netSalary").textContent = netSalary.toFixed(2);
            document.getElementById("ornatoFee").textContent = ornatoFee.toFixed(2);
            document.getElementById("totalPayment").textContent = totalPayment.toFixed(2);
        }
    </script>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Background Color Changer</title>
    <style>
        body {
            padding:50px;
        }

        button {
            margin: 5px;
            font-size: 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <button onclick="changeColor('red')">Red</button>
    <button onclick="changeColor('blue')">Blue</button>
    <button onclick="changeColor('green')">Green</button>
    <button onclick="resetColor()">Reset</button>

    <script>
        function changeColor(color) {
            document.body.style.backgroundColor = color;
        }

        function resetColor() {
            document.body.style.backgroundColor = 'white';
        }
    </script>

</body>
</html>
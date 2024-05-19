<?php
session_start();

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] != true) {
    header("location: ./login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-zinc-900 text-white flex flex-col justify-center items-center h-full w-full">
    <nav class="bg-white dark:bg-gray-900  w-full border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Login System</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
                <button type="button" name="logout" class="logout text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
            </div>
        </div>
    </nav>
    <div>
        <h1>Welcome <?= $_SESSION["email"] ?></h1>
    </div>
    <script src="./scripts/main.js"></script>
</body>

</html>
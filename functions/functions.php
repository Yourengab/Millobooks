<?php
// ********************* Database Connection ********************* //
$user = "root";
$pass = "";
$host = "localhost";
$db = "db_millobooks";

// Create connection
$conn = mysqli_connect($host, $user, $pass, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// ********************* Manage Query ********************* //
function query($query)
{
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

// ********************* Functions CRUD ********************* //
function add($data)
{
    global $conn;
    $title = htmlspecialchars($data["judul"]);
    $writer = htmlspecialchars($data["penulis"]);
    $numberOfPages = htmlspecialchars($data["halaman"]);
    $publisher = htmlspecialchars($data["penerbit"]);
    $year = htmlspecialchars($data["tahun"]);
    $category = htmlspecialchars($data["kategori"]);
    $synopsis = htmlspecialchars($data["sinopsis"]);
    $pict = htmlspecialchars($data["gambar"]);

    $query = "INSERT INTO books VALUES (null, '$title', '$writer', '$numberOfPages', '$publisher', '$year', '$synopsis, '$category', '$pict')";

    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}

function uploadPict()
{
    $fileName = $_FILES['gambar']['name'];
    $fileSize = $_FILES['gambar']['size'];
    $error = $_FILES['gambar']['error'];
    $tmpName = $_FILES['gambar']['tmp_name'];

    // Check if there is no picture uploaded
    if ($error === 4) {
        echo "<script>
                alert('Please upload a picture first!');
            </script>";
        return false;
    }

    // Check if the uploaded file is not a picture
    $validImageExtension = ['jpg', 'jpeg', 'png'];
    $imageExtension = explode('.', $fileName); // Explode the file name
    $imageExtension = strtolower(end($imageExtension)); // Get the extension
    if (!in_array($imageExtension, $validImageExtension)) {
        echo "<script>
                alert('Please upload a picture!');
            </script>";
        return false;
    }

    // Check if the picture size is too big
    if ($fileSize > 1000000) {
        echo "<script>
                alert('Picture size is too big!');
            </script>";
        return false;
    }

    // If the picture is valid, upload it
    // Generate a new name for the picture
    $newFileName = uniqid();
    $newFileName .= '.';
    $newFileName .= $imageExtension;

    // Move the picture to the server
    move_uploaded_file($tmpName, 'img/' . $newFileName);

    return $newFileName;
}

function update($data)
{
    global $conn;
    $codeBook = htmlspecialchars($data["kode_buku"]);
    $title = htmlspecialchars($data["judul"]);
    $writer = htmlspecialchars($data["penulis"]);
    $numberOfPages = htmlspecialchars($data["halaman"]);
    $publisher = htmlspecialchars($data["penerbit"]);
    $year = htmlspecialchars($data["tahun"]);
    $category = htmlspecialchars($data["kategori"]);
    $synopsis = htmlspecialchars($data["sinopsis"]);
    $pict = htmlspecialchars($data["gambar"]);

    $query = "UPDATE buku SET
                title = '$title',
                writer = '$writer',
                numberOfPages = '$numberOfPages',
                publisher = '$publisher',
                year = '$year',
                category = '$category',
                synopsis = '$synopsis',
                pict = '$pict'
            WHERE id = $codeBook
            ";

    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}

function delete($data)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM buku WHERE kode_buku = $data");

    return mysqli_affected_rows($conn);
}

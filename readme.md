Tugas Praktikum
Deskripsi Project
terdapat 2 folder yaitu src dan test

src berisi tentang beberapa function sederhana yang akan di test, serta dummy data yang akan digunakan sebagai mocking, diantaranya

data/cart.js & data/product.js -> dummy data berbentuk Json,
dataService.js -> file untuk mengambil data dari API
fetchProductData -> untuk mengambil data product dari API
fetchCartData -> untuk mengambil data cart dari API
dataUtils.js -> file untuk memproses data dari API
setProductsCard -> untuk merekonstruksi data products dari API
convertToRupiah -> untuk mengubah harga dari dollar menjadi format rupiah
countDiscount -> untuk menghitung diskon dari harga product
index.test.js berisikan 3 Test Suite utama sesuai dengan materi yang telah dipelajari, yaitu

Referensi: Mocking, Mocking API
Referensi: Asynchronous
Referensi: Setup & Teardown
Installasi Awal
Clone / Download repository ini
Buka terminal, lalu masuk ke direktori project ini
Pastikan sudah menginstall nodejs dan npm pada komputer anda, jika belum, silahkan install terlebih dahulu melalui link ini
Jalankan perintah npm install atau npm i untuk menginstall dependency yang dibutuhkan
Jalankan perintah npm run test atau npm test untuk menjalankan test
Kerjakan tugas
Kalian dapat menjalankan kembali npm run test sesuai dengan keinginan kalian untuk mengecek apakah pengujian sudah berhasil atau belum.
Tugas
Buatlah 1 Test Suite dengan nama Product API Testing, dengan ketentuan:

Terdapat minimal 3 test case yang berbeda, yaitu:
Test Case 1: should return product data with id 1
Test Case 2: should check products.length with limit
Test Case 3 sampai selanjutnya, silahkan dibuat dengan ketentuan sendiri (don't forget to make it different)
Dengan asumsi bahwa function fetchCartsData belum selesai dibangun, sehingga digunakan data dummy dengan ketentuan minimum terdapat 20 data, Buatlah 1 Test Suite dengan nama Cart API Testing, dengan ketentuan:

menerapkan konsep mocking untuk function fetchCartsData
menerapkan mocking untuk return value function fetchCartsData, dengan menggunakan data dummy yang telah disediakan pada folder src/data/cart.js
Terdapat minimal 1 test case yang membandingkan panjang dari keseluruhan data carts dengan total
Buatlah 1 Test Suite dengan nama Product Utility Testing, dengan ketentuan:

dikarenakan setiap test case membutuhkan data awal untuk data product, maka buatlah sebuah setup untuk mengambil data product dari API, lalu simpan didalam sebuah variabel agar dapat digunakan oleh setiap test case yang ada pada Product Utility Testing.
membuat minimal 2 test case untuk function convertToRupiah,
membuat minimal 2 test case untuk function countDiscount,
membuat minimal 1 test case untuk function setProductsCard, dengan ketentuan test case tersebut mengecek key dari salah satu object di array of object yang di return oleh setProductsCard (array yang di return adalah
[{
   id: ...,
   title: ...,
   price: ...,
   after_discount: ...,
   image: ...,
},
{...}, 
...]
)

jika terdapat pengujian yang tidak sesuai untuk setProductsCard, kalian dapat mengeceknya pada dataUtils.js, dan silahkan diperbaiki sesuai dengan ketentuan tugas.
Jalankan test menggunakan npm run test atau npm test untuk menguji apakah pengujian sudah berhasil atau belum.

NOTE:

Jangan merubah kode program yanng diberikan, kecuali ada instruksi untuk merubahnya / memasukkan kode program tambahan.
Tugas unit testing ini telah dirancang untuk PASS, sehingga jika ada test case yang masih FAIL, silahkan diperbaiki lagi kode program yang dibuat.
Kumpulkan tugas yang telah selesai kalian kerjakan dengan cara push hasil pengerjaan kalian dari install asi awal hingga ke bagian pengerjaan tugas ke repository github kalian masing masing (Pastikan agar Repository kalian Public), lalu kirimkan link repository kalian ke-link ini sebelum Rabu, 10 Januari 2024 Pukul 23.59 WIB.`


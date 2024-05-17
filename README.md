# Instalasi 

Berikut adalah langkah-langkah untuk menjalankan tugasnya

1. **Instal package.json**
2. **Inisiasi Prisma** 
3. **Generate Prisma** 
    ```bash
    npx prisma generate
    ```
4. **Set Environment Database URL** 
    ```env
    DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public"
    PORT=9000
    JWT_SECRET=mysecretkey
    ```
    Ganti `username`, `password`, dan `database` dengan username, password, dan nama database PostgreSQL Anda.

5. **Migrasi Prisma** 
    ```bash
    npx prisma migrate dev --name init
    ```
6. **Generate Prisma lagi** 
    ```bash
    npx prisma generate
    ```


    <h1>DOKUMENTASI API</h1>

<h3>Regist Admin (Dibuat di database/di http request)</h3>
<p>POST http://localhost:9000/api/auth/admin/register</p>
<p>Content-Type: application/json</p>
<pre>
{
    "idAdmin":"string",
    "password":"string>6"
}
</pre>

<h3>Login Admin</h3>
<p>POST http://localhost:9000/api/auth/admin/login</p>
<p>Content-Type: application/json</p>
<pre>
{
    "idAdmin":"string",
    "password":"string>6"
}
</pre>

<h3>Car</h3>
<p>POST http://localhost:9000/api/cars/add</p>
<p>Content-Type:multipart form</p>
<p>Authorization: Bearer Token</p>
<pre>
{
  "name": "string",
  "price": "string",
  "image": "file png,jpg,jpeg"
}
</pre>

<h3>Delete</h3>
<p>DELETE http://localhost:9000/api/cars/delete/{id}</p>
<p>Authorization: Bearer Token</p>

<h3>Update</h3>
<p>PUT http://localhost:9000/api/cars/edit/{id}</p>
<p>Content-Type: multipart form</p>
<p>Authorization: Bearer Token</p>
<pre>
{
  "name": "string",
  "price": "string",
  "image": "file png,jpg,jpeg"
}
</pre>

<h3>GET by type, small, medium, large</h3>
<p>GET http://localhost:9000/api/cars/show/type/{carType}</p>

<h3>Get all</h3>
<p>GET http://localhost:9000/api/cars/show</p>


<h2>AKUN ADMIN YANG SUDAH ADA :</h2>
<p>"idAdmin":"admin1okey",</p>
<p>"password":"admin1231"</p>

<h3>GET BY ID</h3>
<p>GET http://localhost:9000/api/cars/show/{id}</p>


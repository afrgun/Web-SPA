<template>
<div>
    <!-- disini saya menggunakan bootstrap untuk design tabel nya. secara default bootstrap sudah di include di file welcome.blade.php jadi saya tidak perlu lagi untuk import file nya -->
    <div class="row">
      <div class="col-md-12">
        <br>
        <br>
        <div class="row">
          <div class="col-md-10">
            <h4>Persons</h4>
          </div>
          <div class="col-md-2">
            <!-- push router ke form membuat data -->
            <router-link class="btn btn-primary w-100" to="/create">+ Tambah</router-link>
          </div>
        </div>
        <br>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <!-- menampilkan data ke table -->
            <tr v-for="price in prices" :key="price.id">
              <td style="width:40%">{{price.title}}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
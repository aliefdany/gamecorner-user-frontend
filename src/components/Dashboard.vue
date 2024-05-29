<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>FILKOM GameCorner</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-carousel cycle hide-delimiter-background height="400px">
          <v-carousel-item v-for="(item, i) in carouselItems" :key="i">
            <v-img :src="item.src" :alt="item.alt"></v-img>
          </v-carousel-item>
        </v-carousel>
        <v-card class="mt-4">
          <v-card-title>Riwayat Pesanan</v-card-title>
          <v-data-table :headers="headers" :items="orders" class="elevation-1">
            <template v-slot:item.action="{ item }">
              <v-btn
                class="mr-2"
                :color="item.status === 'Menunggu' ? 'primary' : 'grey'"
                @click="confirmOrder(item)"
                :disabled="item.status !== 'Menunggu'"
              >
                Konfirmasi
              </v-btn>
              <v-btn
                :color="item.status === 'Menunggu' ? 'red' : 'grey'"
                @click="cancelOrder(item)"
                :disabled="item.status !== 'Menunggu'"
              >
                Batalkan
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
        <v-card class="mt-4">
          <v-card-title>Mainin game favoritmu GRATIS</v-card-title>
          <v-slide-group show-arrows>
            <template v-slot:prev>
              <v-btn icon>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <template v-slot:next>
              <v-btn icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>
            <v-slide-item
              v-for="(game, i) in games"
              :key="i"
              class="game-slide-item"
            >
              <v-card>
                <v-img :src="game.img" height="150px" class="align-center"></v-img>
                <v-card-title class="text-center">{{ game.title }}</v-card-title>
                <v-card-subtitle class="text-center">{{ game.description }}</v-card-subtitle>
                <v-card-actions class="justify-center">
                  <v-btn :href="game.link" color="primary">PESAN SEKARANG</v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        { src: require('@/assets/gambar/carousel1.png'), alt: 'Image 1' },
        { src: require('@/assets/gambar/carousel2.png'), alt: 'Image 2' },
        // Tambahkan lebih banyak gambar di sini
      ],
      headers: [
        { text: 'Status', value: 'status' },
        { text: 'Jumlah Controller', value: 'jumlahController' },
        { text: 'Nomor Konsol', value: 'nomorKonsol' },
        { text: 'Nama Konsol', value: 'namaKonsol' },
        { text: 'Tanggal', value: 'tanggal' },
        { text: 'Jam Mulai', value: 'jamMulai' },
        { text: 'Jam Berakhir', value: 'jamBerakhir' },
        { text: 'Aksi', value: 'action', sortable: false },
      ],
      orders: [
        { status: 'Menunggu', jumlahController: 2, nomorKonsol: 5, namaKonsol: 'Playstation 5', tanggal: '2024-05-01', jamMulai: '11:30', jamBerakhir: '12:30' },
        { status: 'Batal', jumlahController: 1, nomorKonsol: 1, namaKonsol: 'Xbox One', tanggal: '2024-05-11', jamMulai: '13:30', jamBerakhir: '14:30' },
        { status: 'Selesai', jumlahController: 1, nomorKonsol: 5, namaKonsol: 'Playstation 5', tanggal: '2024-05-09', jamMulai: '10:30', jamBerakhir: '11:30' },
        { status: 'Selesai', jumlahController: 2, nomorKonsol: 1, namaKonsol: 'PC', tanggal: '2024-05-08', jamMulai: '12:30', jamBerakhir: '13:30' },
        { status: 'Batal', jumlahController: 2, nomorKonsol: 2, namaKonsol: 'Playstation', tanggal: '2024-05-04', jamMulai: '14:30', jamBerakhir: '15:30' },
      ],
      games: [
        {
          title: "Marvel's Spider-Man 2",
          description: "Tersedia di eksklusif di Playstation 5",
          img: require('@/assets/gambar/spiderman.png'),
          link: '#'
        },
        {
          title: "FIFA FC 24",
          description: "Tersedia di semua konsol",
          img: require('@/assets/gambar/fifa.png'),
          link: '#'
        },
        {
          title: "Valorant",
          description: "Tersedia di PC",
          img: require('@/assets/gambar/valorant.png'),
          link: '#'
        },
        {
          title: "Tekken 8",
          description: "Tersedia di semua konsol",
          img: require('@/assets/gambar/tekken.png'),
          link: '#'
        },
      ]
    }
  },
  methods: {
    confirmOrder(order) {
      // Logic to confirm order
    },
    cancelOrder(order) {
      // Logic to cancel order
    }
  }
}
</script>

<style scoped>
.mt-4 {
  margin-top: 16px;
}
.text-center {
  text-align: center;
}
.align-center {
  display: flex;
  justify-content: center;
}
.justify-center {
  justify-content: center;
}
.game-slide-item {
  flex: 0 0 auto;
  padding: 8px;
  width: 200px; /* Set a fixed width to ensure multiple items fit within the view */
}
.v-slide-group__wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px; /* Add gap between items */
}
</style>

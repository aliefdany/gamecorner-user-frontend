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
              <v-btn class="mr-2" :color="item.status === 'Menunggu' ? 'primary' : 'grey'"
                @click="showConfirmationDialog(item)" :disabled="item.status !== 'Menunggu'">
                Konfirmasi
              </v-btn>
              <v-btn :color="item.status === 'Menunggu' ? 'red' : 'grey'" @click="showCancelDialog(item)"
                :disabled="item.status !== 'Menunggu'">
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
            <v-slide-item v-for="(game, i) in games" :key="i" class="game-slide-item">
              <v-card>
                <v-img :src="game.img" height="150px" class="align-center"></v-img>
                <v-card-title class="text-center">{{ game.title }}</v-card-title>
                <v-card-subtitle class="text-left">{{ game.description }}</v-card-subtitle>
                <v-card-text class="text-left">{{ game.descgame }}</v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn :href="game.link" color="primary">PESAN SEKARANG</v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-card>
      </v-container>

      <!-- Dialog Konfirmasi -->
      <v-dialog v-model="dialogConfirm" max-width="500">
        <v-card>
          <v-card-title class="headline">Konfirmasi Pesanan</v-card-title>
          <v-card-text>
            Sebelum anda mulai bermain, harap konfirmasi kepada pihak terkait dan tunjukkan KTM Anda, terimakasih!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogConfirm = false">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="confirmOrderConfirmation">Konfirmasi</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog Pembatalan -->
      <v-dialog v-model="dialogCancel" max-width="500">
        <v-card>
          <v-card-title class="headline">Batalkan Pesanan</v-card-title>
          <v-card-text>
            Apakah anda yakin akan membatalkan pesanan? Anda mungkin tidak bisa memesan jadwal ini lagi apabila jadwal
            ini
            dipesan oleh mahasiswa lain.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="dialogCancel = false">Cancel</v-btn>
            <v-btn color="red" text @click="batalPesanan">Batalkan</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from "../axios"

export default {
  data() {
    return {
      carouselItems: [
        { src: "gambarcarousel1.png", alt: 'Image 1' },
        { src: "gambarcarousel2.png", alt: 'Image 2' },
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
        // { status: 'Menunggu', jumlahController: 2, nomorKonsol: 5, namaKonsol: 'Playstation 5', tanggal: '2024-05-01', jamMulai: '11:30', jamBerakhir: '12:30' },
        // { status: 'Batal', jumlahController: 1, nomorKonsol: 1, namaKonsol: 'Xbox One', tanggal: '2024-05-11', jamMulai: '13:30', jamBerakhir: '14:30' },
        // { status: 'Selesai', jumlahController: 1, nomorKonsol: 5, namaKonsol: 'Playstation 5', tanggal: '2024-05-09', jamMulai: '10:30', jamBerakhir: '11:30' },
        // { status: 'Selesai', jumlahController: 2, nomorKonsol: 1, namaKonsol: 'PC', tanggal: '2024-05-08', jamMulai: '12:30', jamBerakhir: '13:30' },
        // { status: 'Batal', jumlahController: 2, nomorKonsol: 2, namaKonsol: 'Playstation', tanggal: '2024-05-04', jamMulai: '14:30', jamBerakhir: '15:30' },
      ],
      games: [
        {
          title: "Marvel's Spider-Man 2",
          description: "Tersedia eksklusif di Playstation 5",
          img: "spiderman.png",
          link: '#'
        },
        {
          title: "FIFA FC 24",
          description: "Tersedia di semua konsol",
          img: "fifa.png",
          link: '#'
        },
        {
          title: "Valorant",
          description: "Tersedia di PC",
          img: "valorant.png",
          link: '#'
        },
        {
          title: "Tekken 8",
          description: "Tersedia di semua konsol",
          img: "tekken.png",
          link: '#'
        },
        {
          title: "Resident Evil",
          description: "Tersedia di semua konsol",
          img: "residentevil.png",
          link: '#'
        },
        {
          title: "Horizon",
          description: "Tersedia di semua konsol",
          img: "horizon.png",
          link: '#'
        },
        {
          title: "God of War",
          description: "Tersedia di semua konsol",
          img: "godofwar.png",
          link: '#'
        },
        {
          title: "Call of Duty",
          description: "Tersedia di semua konsol",
          img: "callofduty.png",
          link: '#'
        },
      ],
      dialogConfirm: false,
      dialogCancel: false,
      selectedOrder: null,
    };
  },
  created() {
    this.fetchHistory()
  },
  methods: {
    showConfirmationDialog(order) {
      this.selectedOrder = order;
      this.dialogConfirm = true;
    },
    confirmOrderConfirmation() {
      if (this.selectedOrder) {
        this.selectedOrder.status = 'Confirmed';
        this.dialogConfirm = false;
      }
    },
    showCancelDialog(order) {
      this.selectedOrder = order;
      this.dialogCancel = true;
    },
    batalPesanan() {
      if (this.selectedOrder) {
        this.selectedOrder.status = 'Batal';
        console.log("Pesanan dibatalkan");
        this.dialogCancel = false;
      }
    },
    async fetchHistory() {
      const { data } = await axios.get("/dashboard")
      console.log(data);

      const histories = data.map((d) => ({ status: d.status, jumlahController: d.controller_amount, namaKonsol: d.name, tanggal: d.date, jamMulai: d.start, jamBerakhir: d.end }))


      // { status: 'Menunggu', jumlahController: 2, nomorKonsol: 5, namaKonsol: 'Playstation 5', tanggal: '2024-05-01', jamMulai: '11:30', jamBerakhir: '12:30' },

      this.orders = histories;
    }
  },
};
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
  width: 200px;
  /* Set a fixed width to ensure multiple items fit within the view */
}

.v-slide-group__wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  /* Add gap between items */
}

.v-btn {
  text-transform: uppercase;
}

.v-btn[color="red"] {
  background-color: red;
  color: white;
}
</style>

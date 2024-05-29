<template>
    <div>
        <v-data-table :headers="headers" :items="orders" sortBy="tanggal">
            <template #item.jumlah_controller="{ item }">
                <td>{{ item.jumlah_controller }}</td>
            </template>
            <template #item.nomor_controller="{ item }">
                <td>{{ item.nomor_controller }}</td>
            </template>
            <template #item.start="{ item }">
                <td>{{ item.start }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                { text: 'jumlah_controller', value: 'jumlah_controller' },
                { text: 'nomor_controller', value: 'nomor_controller' },
                { text: 'name', value: 'name' },
                { text: 'tanggal', value: 'tanggal' },
                { text: 'start', value: 'start' },
                { text: 'end', value: 'end' },
                { text: 'status', value: 'status' },
            ],
            orders: [
                {
                    jumlah_controller: 2,
                    nomor_controller: 5,
                    name: 'Playstation 5',
                    tanggal: '2024-05-01',
                    start: '11:30',
                    end: '12:30',
                    status: 'KONFIRMASI',
                },
                // Omit other order data for brevity
            ],
        };
    },
};
</script>
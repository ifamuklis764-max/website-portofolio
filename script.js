// Menunggu sampai seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Ambil elemen tombol berdasarkan ID-nya
    const tombolTema = document.getElementById('tombol-tema');

    // 2. Tambahkan aksi ketika tombol diklik
    tombolTema.addEventListener('click', function() {
        
        // 3. Tambah atau hapus class 'dark-mode' pada tag <body>
        // Ini akan memicu perubahan warna di file style.css
        document.body.classList.toggle('dark-mode');

        // 4. Ubah teks dan ikon pada tombol
        if (document.body.classList.contains('dark-mode')) {
            tombolTema.textContent = '☀️ Mode Terang';
        } else {
            tombolTema.textContent = '🌙 Mode Gelap';
        }
    });

});
// 1. Ambil data dari localStorage (disimpan oleh survey.js)
const scoreStr = localStorage.getItem('last_score');
const q9Risk = localStorage.getItem('q9_risk'); // Deteksi khusus risiko bunuh diri
const score = parseInt(scoreStr) || 0;

const displaySkor = document.getElementById('displaySkor');
const scoreBox = document.getElementById('scoreBox');
const statusTitle = document.getElementById('statusTitle');
const statusDesc = document.getElementById('statusDesc');

if (displaySkor) {
    // Tampilkan angka skor total
    displaySkor.innerText = score;

    // 2. Logika Penentuan Status Berdasarkan Standar PHQ-9 (0-27)
    let status = "";
    let deskripsi = "";
    let warnaClass = "";

    if (score <= 4) {
        status = "Minimal (Kondisi Stabil)";
        deskripsi = "Hasil menunjukkan Anda dalam kondisi mental yang baik. Tetap jaga pola hidup sehat, istirahat cukup, dan kelola stres dengan baik. Semangat menjaga kesehatanmu!😊";
        warnaClass = "bg-aman"; 
    } 
    else if (score <= 9) {
        status = "Gejala Depresi Ringan";
        deskripsi = "Anda menunjukkan beberapa gejala stres ringan. Cobalah untuk melakukan hobi, relaksasi, atau bercerita kepada orang yang Anda percayai. Salam sehat jiwa dan raga!😊";
        warnaClass = "bg-waspada"; 
    } 
    else if (score <= 14) {
        status = "Gejala Depresi Sedang";
        deskripsi = "Anda mengalami gejala depresi tingkat sedang. Disarankan untuk berkonsultasi dengan keluarga atau konselor kesehatan mental. Kamu tidak sendirian!😊";
        warnaClass = "bg-waspada";
    } 
    else if (score <= 19) {
        status = "Gejala Depresi Sedang Berat";
        deskripsi = "Gejala yang Anda rasakan cukup mengganggu aktivitas. Sangat disarankan untuk segera mencari bantuan profesional (Puskesmas atau psikolog). Kamu tidak sendirian!😊";
        warnaClass = "bg-bahaya"; 
    } 
    else {
        status = "Gejala Depresi Berat";
        deskripsi = "Hasil menunjukkan tingkat depresi yang berat. Segera hubungi tenaga kesehatan atau fasilitas kesehatan terdekat untuk penanganan medis. Kamu tidak sendirian!😊";
        warnaClass = "bg-bahaya";
    }

    // 3. Peringatan Khusus untuk Pertanyaan Nomor 9 (Risiko Menyakiti Diri)
    if (q9Risk === "YES") {
        status = "PERHATIAN KHUSUS";
        deskripsi = "Sistem mendeteksi adanya pikiran untuk menyakiti diri sendiri. <b>Mohon segera hubungi orang terdekat atau tenaga medis sekarang juga.</b> Kamu tidak sendirian!😊";
        warnaClass = "bg-bahaya";
    }

    // 3. Peringatan Khusus untuk Pertanyaan Nomor 9 (Risiko Menyakiti Diri)
    if (q9Risk === "YES") {
        status = "PERHATIAN KHUSUS";
        deskripsi = "Sistem mendeteksi adanya pikiran untuk menyakiti diri sendiri. <b>Mohon segera hubungi orang terdekat atau tenaga medis sekarang juga.</b> Anda tidak sendirian!😊";
        warnaClass = "bg-bahaya";
    }

    // 4. Update Tampilan ke HTML
    statusTitle.innerText = status;
    statusDesc.innerHTML = deskripsi; 
    scoreBox.className = warnaClass;

    // Jalankan Pengisian Data ke Kotak Tiruan Cetak
    const printSkor = document.getElementById('printSkor');
    const printTitle = document.getElementById('printTitle');
    const printDesc = document.getElementById('printDesc');

    if (printSkor) {
        printSkor.innerText = score;
        printTitle.innerText = status;
        printDesc.innerHTML = deskripsi;
    }
}

// Fungsi khusus untuk mengubah elemen HTML menjadi PDF secara langsung
window.cetakPDF = function() {
    const elemen = document.getElementById('print-area');
    
    if (!elemen) {
        alert("Elemen cetak tidak ditemukan!");
        return;
    }

    const klonElemen = elemen.cloneNode(true);
    klonElemen.style.display = 'block'; 
    klonElemen.style.padding = '20px';

    const opsi = {
        margin:       15,
        filename:     'Hasil_Skrining_PHQ9_Remaja.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, logging: false, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opsi).from(klonElemen).save();
};
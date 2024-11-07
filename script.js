// Persentase bobot tetap
const tugasWeight = 0.3;
const utsWeight = 0.3;
const uasWeight = 0.4;
const passingScore = 60;

function calculateGrade() {
    // Ambil nilai input
    let tugas = parseFloat(document.getElementById('tugas').value);
    let uts = parseFloat(document.getElementById('uts').value);
    let uas = parseFloat(document.getElementById('uas').value);

    // Validasi input
    if (isNaN(tugas) || tugas < 0 || tugas > 100 || 
        isNaN(uts) || uts < 0 || uts > 100 || 
        isNaN(uas) || uas < 0 || uas > 100) {
        alert("Semua nilai harus antara 0 dan 100.");
        return;
    }

    // Hitung rata-rata tertimbang
    let finalScore = (tugas * tugasWeight) + (uts * utsWeight) + (uas * uasWeight);

    // Tentukan nilai huruf
    let grade;
    if (finalScore >= 90) grade = 'A';
    else if (finalScore >= 80) grade = 'B';
    else if (finalScore >= 70) grade = 'C';
    else if (finalScore >= 60) grade = 'D';
    else grade = 'E';

    // Tentukan status lulus/gagal
    let passStatus = finalScore >= passingScore ? "Lulus" : "Gagal";
    let resultClass = finalScore >= passingScore ? "result-pass" : "result-fail";

    // Tampilkan hasil
    document.getElementById('result').innerHTML = `
        <p>Kontribusi Tugas: ${(tugas * tugasWeight).toFixed(2)}</p>
        <p>Kontribusi UTS: ${(uts * utsWeight).toFixed(2)}</p>
        <p>Kontribusi UAS: ${(uas * uasWeight).toFixed(2)}</p>
        <p>Rata-rata Tertimbang Akhir: ${finalScore.toFixed(2)}</p>
        <p>Nilai Huruf: ${grade}</p>
        <p class="${resultClass}">Status: ${passStatus}</p>
    `;
}

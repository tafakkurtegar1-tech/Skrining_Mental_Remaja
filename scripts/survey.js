document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('surveyForm');
    const container = document.getElementById('questionContainer');

    // Daftar 9 Pertanyaan PHQ-9 sesuai standar MDCalc
    const questions = [
        "Kurang berminat atau kurang tertarik dalam melakukan sesuatu.",
        "Merasa sedih, murung, putus asa, atau merasa kosong.",
        "Sulit tidur, sering terjaga di malam hari, atau justru tidur terlalu banyak.",
        "Merasa lelah atau kurang bersemangat meskipun tidak melakukan aktivatas apapun.",
        "Kurang nafsu makan, makan berlebihan, atau tidak ada selera makan sama sekali.",
        "Merasa tidak percaya diri sendiri — merasa gagal atau merasa telah mengecewakan diri sendiri maupun keluarga.",
        "Sulit berkonsentrasi pada hal hal tertentu (misal: membaca atau menonton TV).",
        "Bergerak atau berbicara terasa lebih lambat dari biasanya, atau sebaliknya - merasa gelisah dan terus bergerak tanpa henti.",
        "Merasa bahwa hidup tidak berharga, berharap diri atau orang lain lebih baik jika tidak ada, atau berpikir untuk menyakiti diri sendiri."
    ];

    // Skala Penilaian Standar
    const options = [
        { label: "Tidak pernah", value: 0 },
        { label: "Beberapa hari", value: 1 },
        { label: "Lebih dari separuh waktu", value: 2 },
        { label: "Hampir setiap hari", value: 3 }
    ];

    // Render Pertanyaan ke dalam HTML dengan Skala 0-3
    if (container) {
        container.innerHTML = questions.map((q, i) => `
            <div class="survey-item" style="margin-bottom: 25px; background: rgba(255,255,255,0.9); padding: 25px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); text-align: left;">
                
                <p style="font-weight: 700; color: #192a56; margin-bottom: 18px; line-height: 1.5; text-align: left;">
                    ${i + 1}. ${q}
                </p>
                
                <div class="options-group" style="display: flex; flex-direction: column; gap: 10px;">
                    ${options.map(opt => `
                        <label style="display: flex; align-items: center; justify-content: flex-start; cursor: pointer; font-size: 15px; color: #2c3e50; text-align: left; 
                                      width: 100%; padding: 12px 15px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.05); transition: 0.2s; background: rgba(255,255,255,0.5);">
                            
                            <input type="radio" name="q${i}" value="${opt.value}" required 
                                   style="margin-right: 15px; width: 18px; height: 18px; flex-shrink: 0; cursor: pointer;">
                            
                            <span style="flex-grow: 1;">${opt.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Proses Hitung & Simpan Data secara Lokal (LocalStorage)
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let totalSkor = 0;
            let q9Score = 0; 
            const formData = new FormData(surveyForm);

            // Hitung total skor
            for (let [key, value] of formData.entries()) {
                let score = parseInt(value);
                totalSkor += score;
                
                // Cek pertanyaan nomor 9 (index ke-8, name='q8')
                if (key === 'q8') {
                    q9Score = score;
                }
            }

            // Simpan ke localStorage
            localStorage.setItem('last_score', totalSkor);
            localStorage.setItem('q9_risk', q9Score > 0 ? "YES" : "NO");

            // Langsung arahkan ke halaman hasil
            window.location.href = "result.html";
        });
    }
});
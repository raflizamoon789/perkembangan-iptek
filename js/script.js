/* ============================================================
   DAMPAK PENJAJAHAN TERHADAP IPTEK DI INDONESIA • KELOMPOK 5
   CORE JAVASCRIPT: PRELOADER, CUSTOM CURSOR, SLIDER & MOTION
   ============================================================ */

// ─── 1. DATA 10 ERA PERKEMBANGAN IPTEK ───────────────────────
const timelineData = [
    {
        eraTag: "< Abad 16",
        title: "Sebelum Penjajahan (Pra-Abad 16)",
        desc: "Jauh sebelum kedatangan bangsa barat, masyarakat Nusantara telah memiliki peradaban dan penguasaan pengetahuan lokal yang tinggi. Sistem pelayaran dan rancang bangun maritim kapal Pinisi telah mengarungi samudra Hindia. Di bidang agraris, masyarakat mengembangkan sistem irigasi Subak di Bali dan penanggalan astronomi Pranata Mangsa di Jawa. Selain itu, ilmu metalurgi terbukti dari kemahiran menempa logam berpamor (keris) dan gamelan perunggu berskala nada presisi.",
        image: "assets/sebelum abad 16.png"
    },
    {
        eraTag: "Abad 16–17",
        title: "Abad 16–17 (Masuknya Bangsa Eropa)",
        desc: "Kedatangan bangsa Portugis (1511), Spanyol, dan disusul Belanda (1596) membawa gelombang teknologi pelayaran samudra, kompas magnetik, kartografi (pemetaan wilayah), dan persenjataan mesiu (meriam/bedil). Namun, seluruh inovasi teknologi ini dimonopoli secara ketat oleh serikat dagang untuk menguasai jalur perdagangan rempah-rempah di Maluku dan pelabuhan strategis Nusantara.",
        image: "assets/abad 16-17.png"
    },
    {
        eraTag: "Abad 18",
        title: "Abad 18 (Penguatan Kekuasaan VOC)",
        desc: "Vereenigde Oostindische Compagnie (VOC) memperkuat monopoli perdagangan dengan membangun benteng-benteng pertahanan modern, sistem pembukuan dagang terpusat, dan percetakan dokumen administratif. Meskipun teknologi arsitektur militer dan tata kota gaya Eropa mulai diterapkan di Batavia, akses pribumi terhadap ilmu pengetahuan ditutup rapat agar tidak memicu pemberontakan.",
        image: "assets/abad 18.png"
    },
    {
        eraTag: "Abad 19",
        title: "Abad 19 (Tanam Paksa & Infrastruktur)",
        desc: "Pemberlakuan Sistem Tanam Paksa (Cultuurstelsel, 1830) oleh van den Bosch memicu modernisasi infrastruktur secara masif di Pulau Jawa. Belanda membangun jalur rel kereta api (NIS & Staatsspoorwegen) untuk mempercepat angkutan gula, kopi, dan teh ke pelabuhan. Jaringan telegraf elektromagnetik, jalan raya pos, serta pabrik gula bertenaga uap diperkenalkan demi memaksimalkan keuntungan finansial kolonial.",
        image: "assets/abad 19.png"
    },
    {
        eraTag: "Akhir Abad 19",
        title: "Akhir Abad 19 (Awal Pendidikan Modern)",
        desc: "Akibat kebutuhan tenaga terampil berbiaya rendah dan desakan kritik etis, pemerintah kolonial mulai mendirikan sekolah-sekolah kejuruan dan kedokteran dasar seperti Dokter-Djawa School (1851) yang kemudian menjadi cikal bakal STOVIA. Meskipun awalnya terbatas bagi kalangan priyayi dan anak bangsawan, pintu masuk ilmu pengetahuan modern resmi terbuka bagi kaum pribumi.",
        image: "assets/abad 19 akhir.png"
    },
    {
        eraTag: "Awal Abad 20",
        title: "Awal Abad 20 (Perkembangan Ilmu & Kesadaran)",
        desc: "Penerapan Politik Etis (1901) memperluas akses sekolah dasar dan menengah. Di era ini, muncul generasi baru pemuda terpelajar Nusantara yang menguasai bahasa Belanda, ilmu hukum, filsafat, dan kedokteran. Kesadaran kolektif mulai tumbuh bahwa ketertinggalan bangsa disebabkan oleh monopoli pengetahuan dan sains oleh penjajah.",
        image: "assets/awal abad 20.png"
    },
    {
        eraTag: "1908–1945",
        title: "Masa Pergerakan Nasional (1908–1945)",
        desc: "Kelahiran Budi Utomo (1908), Sarekat Islam, dan Indische Partij menandai era baru di mana ilmu pengetahuan, mesin cetak, dan surat kabar modern (pers pribumi) dijadikan senjata perlawanan melawan tirani kolonial. Pada 1920, Technische Hoogeschool te Bandoeng (kini ITB) didirikan dan melahirkan insinyur-insinyur bangsa sendiri, termasuk Ir. Soekarno.",
        image: "assets/masa pergerakan.png"
    },
    {
        eraTag: "1942–1945",
        title: "Masa Pendudukan Jepang (1942–1945)",
        desc: "Pemerintah militer Jepang menghapus sistem pendidikan bahasa Belanda dan mewajibkan penggunaan Bahasa Indonesia. Pemuda Indonesia dilatih teknik mekanik kendaraan perang, navigasi laut, pertahanan sipil (Seinendan), serta struktur militer (PETA). Pelatihan teknis intensif ini secara tidak sengaja menempa keterampilan taktis dan operasional pemuda menjelang proklamasi.",
        image: "assets/masa jepang.png"
    },
    {
        eraTag: "1945–1960-an",
        title: "Awal Kemerdekaan (1945–1960-an)",
        desc: "Setelah proklamasi kemerdekaan, Indonesia bergerak cepat menata kedaulatan sains dan teknologi mandiri. Didirikan perguruan tinggi nasional seperti Universitas Gadjah Mada (1949), Universitas Indonesia, serta lembaga riset nasional MIPI (Majelis Ilmu Pengetahuan Indonesia, 1956) yang menjadi cikal bakal LIPI untuk mencetak ilmuwan berdedikasi bagi tanah air.",
        image: "assets/awal kemerdekaan.png"
    },
    {
        eraTag: "Era Modern",
        title: "Era Modern & Kontemporer",
        desc: "Kemandirian IPTEK Indonesia melesat dengan lahirnya industri dirgantara (IPTN / PT Dirgantara Indonesia oleh B.J. Habibie) yang berhasil menerbangkan pesawat N-250 Gatotkaca (1995). Di era kontemporer, riset sains disatukan di bawah Badan Riset dan Inovasi Nasional (BRIN), energi nuklir damai (BATAN), serta lompatan transformasi ekonomi digital yang dipelopori generasi muda.",
        image: "assets/era modern.png"
    }
];

// ─── 2. DOM ELEMENTS ─────────────────────────────────────────
const mainSlider        = document.getElementById("mainSlider");
const sections          = document.querySelectorAll(".section");
const navLinks          = document.querySelectorAll(".nav-link");
const dockItems         = document.querySelectorAll(".dock-item");
const dockProgressBar   = document.getElementById("dockProgressBar");
const btnPrevSlide      = document.getElementById("btnPrevSlide");
const btnNextSlide      = document.getElementById("btnNextSlide");

// Modal Elements
const modal             = document.getElementById("imageModal");
const modalBody         = document.getElementById("modalBodyContainer");
const modalImg          = document.getElementById("modalImg");
const modalTitle        = document.getElementById("modalTitle");
const modalDesc         = document.getElementById("modalDesc");
const modalEraBadge     = document.getElementById("modalEraBadge");
const modalCounter      = document.getElementById("modalCounter");
const modalClose        = document.getElementById("modalClose");
const modalBtnPrev      = document.getElementById("modalBtnPrev");
const modalBtnNext      = document.getElementById("modalBtnNext");

let currentSlideIndex   = 0;
const totalSlides       = 4;
let currentModalIndex   = 0;

// ─── 3. PRELOADER CONTROLLER ─────────────────────────────────
const preloader         = document.getElementById("preloader");
const preloaderBar      = document.getElementById("preloaderBar");
const preloaderCounter  = document.getElementById("preloaderCounter");
const preloaderStatus   = document.getElementById("preloaderStatus");

function initPreloader() {
    if (!preloader) return;

    let progress = 0;
    const duration = 1100; // 1.1 detik, elegan & cepat
    const startTime = performance.now();

    function updateLoading(currentTime) {
        const elapsed = currentTime - startTime;
        progress = Math.min(100, Math.floor((elapsed / duration) * 100));

        if (preloaderBar) preloaderBar.style.width = progress + "%";
        if (preloaderCounter) preloaderCounter.textContent = progress + "%";

        if (progress > 30 && progress < 75 && preloaderStatus) {
            preloaderStatus.textContent = "Menyiapkan visual peradaban...";
        } else if (progress >= 75 && preloaderStatus) {
            preloaderStatus.textContent = "Arsip siap dieksplorasi";
        }

        if (progress < 100) {
            requestAnimationFrame(updateLoading);
        } else {
            setTimeout(() => {
                preloader.classList.add("is-loaded");
                sections[0].classList.add("is-active");
            }, 180);
        }
    }

    requestAnimationFrame(updateLoading);
}

// ─── 4. EDITORIAL CUSTOM CURSOR ──────────────────────────────
const cursorDot  = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
const cursorText = document.getElementById("cursorText");

let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;

function initCustomCursor() {
    if (!cursorDot || !cursorRing) return;

    let hasMoved = false;

    window.addEventListener("mousemove", (e) => {
        if (!hasMoved) {
            hasMoved = true;
            document.body.classList.add("cursor-initialized");
        }
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Smooth lerp trailing animation for the ring
    function renderCursorRing() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(renderCursorRing);
    }
    requestAnimationFrame(renderCursorRing);

    // Interactive Hover States
    const hoverTargets = document.querySelectorAll("a, button, .timeline-card, .timeline-item, .about-card, .team-card, .magnetic-target");
    hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-active");
            if ((el.classList.contains("timeline-card") || el.classList.contains("timeline-item")) && cursorText) {
                cursorText.textContent = "Lihat";
            } else if (cursorText) {
                cursorText.textContent = "";
            }
        });

        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-active");
            if (cursorText) cursorText.textContent = "";
        });
    });
}

// ─── 5. CARD 3D TILT EFFECT ──────────────────────────────────
function initCardTilt() {
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach((card) => {
        const maxAngle = parseFloat(card.getAttribute("data-tilt-max")) || 5;

        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            const rotateX = (-deltaY * maxAngle).toFixed(2);
            const rotateY = (deltaX * maxAngle).toFixed(2);

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });
}

// ─── 6. SLIDER ENGINE WITH STAGGER REVEAL ────────────────────
function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentSlideIndex = index;
    const targetScroll = index * window.innerWidth;

    mainSlider.scrollTo({
        left: targetScroll,
        behavior: "smooth"
    });

    updateSlideUI(index);
}

function updateSlideUI(index) {
    // 1. Update Active Section Class for Stagger Reveal
    sections.forEach((sec, i) => {
        sec.classList.toggle("is-active", i === index);
    });

    // 2. Update Navbar Links
    navLinks.forEach((link, i) => {
        link.classList.toggle("active", i === index);
    });

    // 3. Update Bottom Dock Items
    dockItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });

    // 4. Update Dock Progress Bar
    if (dockProgressBar) {
        const itemWidthPercent = 100 / totalSlides;
        dockProgressBar.style.width = itemWidthPercent + "%";
        dockProgressBar.style.left = (index * itemWidthPercent) + "%";
    }

    // 5. Update Side Arrow Visibility
    if (btnPrevSlide) {
        btnPrevSlide.style.opacity = index === 0 ? "0.3" : "1";
        btnPrevSlide.style.pointerEvents = index === 0 ? "none" : "auto";
    }
    if (btnNextSlide) {
        btnNextSlide.style.opacity = index === totalSlides - 1 ? "0.3" : "1";
        btnNextSlide.style.pointerEvents = index === totalSlides - 1 ? "none" : "auto";
    }
}

// Attach Nav Clicks
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const slideIdx = parseInt(link.getAttribute("data-slide"), 10);
        goToSlide(slideIdx);
    });
});

dockItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        const slideIdx = parseInt(item.getAttribute("data-slide"), 10);
        goToSlide(slideIdx);
    });
});

if (btnPrevSlide) {
    btnPrevSlide.addEventListener("click", () => goToSlide(currentSlideIndex - 1));
}
if (btnNextSlide) {
    btnNextSlide.addEventListener("click", () => goToSlide(currentSlideIndex + 1));
}

// Sync on Manual Scroll/Touch
let scrollDebounce;
mainSlider.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
        const slideWidth = window.innerWidth;
        const newIndex = Math.round(mainSlider.scrollLeft / slideWidth);
        if (newIndex !== currentSlideIndex && newIndex >= 0 && newIndex < totalSlides) {
            currentSlideIndex = newIndex;
            updateSlideUI(newIndex);
        }
    }, 70);
});

// Wheel Horizontal Scroll Converter
mainSlider.addEventListener("wheel", (e) => {
    const timelineArea = document.getElementById("timelineScrollArea");
    if (timelineArea && timelineArea.contains(e.target)) {
        if (e.deltaY !== 0) {
            timelineArea.scrollLeft += e.deltaY * 1.2;
            e.preventDefault();
        }
        return;
    }

    if (Math.abs(e.deltaY) > 25) {
        e.preventDefault();
        if (e.deltaY > 0) {
            goToSlide(currentSlideIndex + 1);
        } else {
            goToSlide(currentSlideIndex - 1);
        }
    }
}, { passive: false });

// Keyboard Arrow Navigation
window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("active")) {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") navigateModal(-1);
        if (e.key === "ArrowRight") navigateModal(1);
        return;
    }

    if (e.key === "ArrowRight") {
        goToSlide(currentSlideIndex + 1);
    } else if (e.key === "ArrowLeft") {
        goToSlide(currentSlideIndex - 1);
    }
});

// ─── 7. MODAL LOGIC WITH CROSS-FADE TRANSITION ───────────────
function openModal(index) {
    if (index < 0) index = 0;
    if (index >= timelineData.length) index = timelineData.length - 1;

    currentModalIndex = index;
    const data = timelineData[index];

    modalImg.src = data.image || "";
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalEraBadge.textContent = data.eraTag;
    modalCounter.textContent = (index + 1) + " dari " + timelineData.length;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
}

function navigateModal(step) {
    let nextIndex = currentModalIndex + step;
    if (nextIndex < 0) nextIndex = timelineData.length - 1;
    if (nextIndex >= timelineData.length) nextIndex = 0;

    // Cross-fade animation
    if (modalBody) modalBody.classList.add("fading");

    setTimeout(() => {
        openModal(nextIndex);
        if (modalBody) modalBody.classList.remove("fading");
    }, 140);
}

// Bind timeline cards to modal
document.querySelectorAll(".timeline-card, .timeline-item").forEach((card, index) => {
    card.addEventListener("click", () => openModal(index));
});

// Bind modal controls
if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBtnPrev) modalBtnPrev.addEventListener("click", () => navigateModal(-1));
if (modalBtnNext) modalBtnNext.addEventListener("click", () => navigateModal(1));

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// Initialize on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initCustomCursor();
    initCardTilt();
    initTimelineGallery();
    updateSlideUI(0);
});

// ─── 8. TIMELINE GALLERY CONTROLLER ──────────────────────────
function initTimelineGallery() {
    const timelineArea = document.getElementById("timelineScrollArea");
    const btnPrev = document.getElementById("timelineBtnPrev");
    const btnNext = document.getElementById("timelineBtnNext");
    const stepPills = document.querySelectorAll(".step-pill");
    const cards = document.querySelectorAll(".timeline-card");

    if (!timelineArea) return;

    // Arrow Buttons Scrolling
    if (btnPrev) {
        btnPrev.addEventListener("click", () => {
            timelineArea.scrollBy({ left: -340, behavior: "smooth" });
        });
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => {
            timelineArea.scrollBy({ left: 340, behavior: "smooth" });
        });
    }

    // Quick Stepper Pills Jumping
    stepPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            const targetIdx = parseInt(pill.getAttribute("data-jump"), 10);
            if (cards[targetIdx]) {
                const cardLeft = cards[targetIdx].offsetLeft;
                timelineArea.scrollTo({ left: cardLeft - 20, behavior: "smooth" });
                
                stepPills.forEach((p, idx) => p.classList.toggle("active", idx === targetIdx));
            }
        });
    });

    // Sync Stepper on Manual Scroll
    let tScrollDebounce;
    timelineArea.addEventListener("scroll", () => {
        clearTimeout(tScrollDebounce);
        tScrollDebounce = setTimeout(() => {
            const scrollLeft = timelineArea.scrollLeft;
            let currentCardIdx = 0;
            let minDiff = Infinity;

            cards.forEach((card, idx) => {
                const diff = Math.abs(card.offsetLeft - scrollLeft - 20);
                if (diff < minDiff) {
                    minDiff = diff;
                    currentCardIdx = idx;
                }
            });

            stepPills.forEach((p, idx) => p.classList.toggle("active", idx === currentCardIdx));
        }, 60);
    });
}

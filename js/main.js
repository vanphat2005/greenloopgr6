const steps = [
    {
        title: "Bước 1: Cho đất vào chậu",
        description: "Có thể cho phân bón và đất vào chậu cây trước.",
        video: "/videos/buoc1.mp4"
    },
    {
        title: "Bước 2: Gieo Hạt Ươm Mầm",
        description: "Gieo hạt xuống sau đó lắp đất lại.",
        video: "/videos/buoc2.mp4"
    },
    {
        title: "Bước 3: Tưới Cây Chăm Sóc",
        description: "Tưới nước vào chậu, chăm sóc tới khi cây lên mầm.",
        video: "/videos/buoc3.mp4"
    },
    {
        title: "Bước 4: Trồng Chậu Xuống Đất",
        description: "Trồng cả chậu lẫn cây mầm xuống đất.",
        video: "/videos/buoc4.mp4"
    }
];

let currentStep = 0;

const video = document.getElementById("guideVideo");
const title = document.getElementById("stepTitle");
const desc = document.getElementById("description");

function showStep(index){
    title.innerText = steps[index].title;
    desc.innerText = steps[index].description;

    video.src = steps[index].video;
    video.load();

    video.play();

    video.loop = true;
}

document.getElementById("nextBtn").onclick = () => {
    if(currentStep < steps.length - 1){
        currentStep++;
        showStep(currentStep);
    }
};

document.getElementById("prevBtn").onclick = () => {
    if(currentStep > 0){
        currentStep--;
        showStep(currentStep);
    }
};

// Hiển thị ngay bước 1 khi mở trang
showStep(currentStep);
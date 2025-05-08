const giftBox = document.getElementById('giftBox');
const message = document.getElementById('message');
const birthdayText = document.getElementById('birthdayText');
const birthdayMusic = document.getElementById('birthdayMusic');

const texts = [
    "Chào anh Phương 😎✨",
    "Em là Hg- “thực tập sinh chăm chỉ, nói ít làm nhiều” trong bộ phận TE đây ạ. Em luôn cảm thấy may mắn khi được anh chỉ dạy trong suốt thời gian thực tập. Dù anh thích đùa nhưng mọi câu đùa của anh đều có một “hàm ý” sâu sắc khiến em lúc nào cũng phải suy nghĩ và rút kinh nghiệm.",
    "Anh thật sự là một người thẳng tính, nhưng em lại thấy đó là điểm tốt, vì anh không bao giờ giấu giếm sự thật và luôn chỉ dạy đúng lúc, đúng cách. Em biết anh rất quý những người ham học hỏi, và em sẽ cố gắng không làm anh thất vọng.",
    "Cảm ơn anh vì luôn nhẹ nhàng nhắc nhở em mỗi khi có sai sót, giúp em nhìn nhận lại bản thân và học hỏi nhiều hơn. Món quà nhỏ này - gửi tặng anh như một lời cảm ơn vì sự nhiệt tình và tận tâm của anh.",
    "Chúc anh luôn vui vẻ, công việc suôn sẻ, và gia đình hạnh phúc! 📝Note: Ban đầu em cũng định viết thư tay để kèm theo món quà nhỏ, nhưng tiếc là không kịp chuẩn bị thiệp, nên em gửi vài dòng online này thay cho lời cảm ơn chân thành nhất ạ và gọi là một chút kỷ niệm nhỏ…",
    "Mỗi người trong TE đều để lại cho em những ấn tượng rất riêng, nên em viết riêng từng vài dòng cho từng anh/chị - mong mọi người thấy vui và đọc xong không cười em “dài dòng văn tự” là được 😄 Sau này nếu có dịp, em xin mời mọi người lên Sơn La chơi cho biết “vùng đất cao nguyên nắng gió” - có chè, có sữa, có mận, có đào và cả em làm hướng dẫn viên miễn phí luôn ạ!✨"
];

function typeWriter(texts, element, textIndex = 0, i = 0) {
    if (textIndex < texts.length) {
        const text = texts[textIndex];
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(texts, element, textIndex, i + 1), 20);
        } else {
            element.innerHTML += '<br><br>'; // Add spacing between paragraphs
            setTimeout(() => typeWriter(texts, element, textIndex + 1), 2000);
        }
    } else {
        // Append gift image
        setTimeout(() => {
            const imgGift = document.createElement('div');
            imgGift.classList.add('img-gift');
            message.appendChild(imgGift);
        }, 1500);
    }
}

// Single click event listener
giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    message.classList.remove('hidden');
    message.classList.add('show');

    // Play music and create confetti
    birthdayMusic.play();
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(confetti);
    }

    // Start typing text
    setTimeout(() => {
        typeWriter(texts, birthdayText);
    }, 3500);
});
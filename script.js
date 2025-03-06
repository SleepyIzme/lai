
document.getElementById("joinForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var subject = "Tham gia cùng câu lạc bộ";
    var body = "Họ và Tên: " + fullname + "\nSĐT: " + phone + "\nGmail: " + email;

    window.location.href = "mailto:?subject=phamminhhoan02052006@gmail.com" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});

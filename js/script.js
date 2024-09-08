document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // เลือกทุก section
    const navLinks = document.querySelectorAll('.aside .nav li a'); // เลือกทุกเมนูใน navigation

    // ฟังก์ชันที่ทำการเช็คว่าอยู่ใน section ไหน
    const highlightMenu = () => {
        let scrollY = window.pageYOffset; // ตำแหน่งของการเลื่อนหน้า

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight; // ความสูงของแต่ละ section
            const sectionTop = current.offsetTop - 50; // ตำแหน่งบนสุดของแต่ละ section

            // เมื่อเลื่อนมาใน section นั้นๆ
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active'); // ลบคลาส active ออกจากลิงก์ทั้งหมด
                    if (current.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active'); // เพิ่มคลาส active ให้กับลิงก์ที่ตรงกับ section
                    }
                });
            }
        });
    };

    // ฟังก์ชันจะถูกเรียกทุกครั้งที่ทำการเลื่อนหน้า
    window.addEventListener('scroll', highlightMenu);
});

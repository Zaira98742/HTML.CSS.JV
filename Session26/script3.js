function bai3(arr) {
    if (!Array.isArray(arr)) {
        console.log("du lieu khong hop le");
        return;
    }
    if (arr.length === 0) {
        console.log("rong");
        return;
    }
    const validEmails = arr.filter(email => typeof email === "string" && email.includes("@") && !email.includes(" "));
    console.log("Email hop le:", validEmails);
}
let test1 = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2 = [];
let test3 = "abc";
bai3(test1); 
bai3(test2);
bai3(test3);
// let randomString= "hello world";
// console.log("hello world"[0]);
// console.log("hello world"[6]);
// console.log(randomString[randomString.length-1]);

// let randomString= "hello world";
// let result="";
// for(let i= randomString.length-1;i>=0;i-1){
//     result=result+randomString[i];
// }
// console.log(result);

// let n = +prompt("nhập vào số nguyên dương");

// for (let j = 1; j <= n; j = j + 1) {
//   let result = ""; // mỗi lần điền xong 1 hàng thì dòng phải rỗng
//   for (let i = j; i < n + j; i = i + 1) {
//     result = result + ` ${x[i]}`;
//   }
//   console.log(result.trim()); // trim để xóa phần thừa đầu và cuối
// }

// let mon1 = "tiết canh dê";
// let mon2 = "lòng xách dê xào";
// let mon3 = "canh đắng";
// let mon4 = "de xào lăn";
// let mon5 = "dê xào xả ớt";
// //..
// let mon80 = "dê xông hơi";
// let mon81 = "dê chao dầu ";
// //...
// let mon1000 = "nâm dê nướng";

// let menu = [
//   "tiết canh dê",
//   "lòng xách dê xào",
//   "canh đắng",
//   "de xào lăn",
//   "dê xào xả ớt",
//   "dê xông hơi",
//   "dê chao dầu ",
//   "nâm dê nướng",
// ];

// console.log(menu);
// // thêm vào đầu
// menu.unshift("nầm dê");
// console.log(menu);
// // thêm cuối
// menu.push("lẩu dê");
// console.log(menu);
// console.log(`mời Dương xơi ${menu[5]}`);

// for (let i = 0; i <= menu.length - 1; i++) {
//   console.log(`${menu[i]} tăng giá lên 10k`);
// }

// menu[7] = "nầm dê hấp";
// console.log(menu);
// // xóa đầu
// menu.shift(menu)
// // xóa cuối
// menu.pop(menu)

// // . splice(index, number)
// // index là vị trí của phần tử muốn xóa
// // number là số phần tử muốn xóa
// menu.splice(4,1);
// menu.splice(1,0,"đậu lướt ván")

// sắp xếp mảng, tìm kiếm trong mảng,
//lọc phần tử trong mảng, kiểm trả 1 phần tử có tồng tại trong mảng
// đảo ngược mảng.
//=================================================
// bài 1
// let x = [-3, 5, 1, 3, 2, 10];
// let trong = "";
// for (let i = x.length - 1; i >= 0; i = i - 1) {
//   trong = trong + ` ${x[i]}`;
// }
// console.log(trong.trim());
//=================================================
// // bài 2. Mô tả
// // Viết một chương trình JavaScript để tìm một giá tri đ
// // ược nhập vào từ hộp thoại có nằm trong mảng hay không.
// // Nếu có in ra vị trí của phần tử đó.

// let check = +prompt("hãy điền số bất kì");
// let mang = [-3, 5, 1, 3, 2, 10];
// for (i = 0; i <= mang.length - 1; i++) {
//   if (check == mang[i]) {
//     alert(
//       "số bạn điền là " +check +"có nằm trong mảng và ở vị trí" +i +"trong mảng"
//     );
//   }
// }
//=================================================
// bài 3:Mô tả
// Hướng dẫn tạo mảng và sử dụng các phương thức để thêm,
// xóa và thay đổi giá trị phần tử ở trong mảng

// let array = [];
// for (let i = 0; i < 5; i++) {
//   array.push(i); //thêm vào cuối
// }
// console.log("Sử dụng phương thức push()", array);
// let a = 10;
// array.unshift(a); // thêm vào đầu mảng
// console.log("Sử dụng phương thức unshift()", array);

// array.pop(); // xóa cuối mảng
// console.log("sử dụng phương thức pop()", array);

// array.shift(); // xóa đầu mảng
// console.log("sử dụng phương thức shift()", array);

// //splice để xóa 1 hoặc nhiều phần tử trong mảng array ban đầu.
// array.splice(1, 2);
// console.log("Sử dụng phương thức splice()", array); // array =[0,3]

//===================================================
// bài thực hành 4
// Tạo mảng có sẵn với các phẩn tử số. Cho người dùng nhập vào một số bất kỳ, sau đó tiến hành kiểm tra:
// Nếu số đó có trong mảng cho sẵn thì alert(“Bingo”)
// Nếu số đó không có trong mảng cho sẳn thì alert(“Chúc bạn may mắn lần sau”)

// let array = [1, 2, 3, 4, 5, 6];
// let n = +prompt("hãy nhập 1 số bất kì vào ");
// let check = false;
// for (i = 0; i <= array.length - 1; i++) {
//   if (n == array[i]) {
//     check = true;
//   }
// }
// if ((check == true)) {
//   alert("bingo");
// } else {
//   alert("chúc bạn may mắn lần sau");
// }

//=======================================================
// bài thực hành 5
// Cho ngươi dùng nhập vào dãy số bất kỳ. Sử dụng split()
//  để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
//  Tiến hành đảo ngược các phần tử trong mảng
// VD: 1,3,5,12,65,98

// cách 1
// let n = prompt("hãy nhập vào đây dãy số bất kì ");
// let convert = n.split(",");

// console.log("Chuyển đổi string sang array" + convert);
// let array = [];
// for (i = convert.length - 1; i >= 0; i--) {
//   array.push(convert[i]);
// }console.log("Đảo ngược các phần tử" + array);

// //cách 2
// console.log("Chuyển đổi string sang array" + convert);
// let array = "";
// for (i = convert.length - 1; i >= 0; i--) {
//   array = array + `${convert[i]},`;
// }
// console.log(array);

//==========================================================
// // bài thực hành 6
// // Cho người dùng nhập vào dãy số bất kỳ.
// // Sử dụng split() để chuyển đổi kiểu dữ liệu từ string sang kiểu array.
// // Tiến hành duyệt các phần tử và tìm ra phần tử có giá trị lớn nhất trong mảng
// // VD: -89,57,-20,36,24,75

// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log("Chuyển đổi string sang array" + convert);
// let max = Number(convert[0]);
// for (let i = 0; i <= convert.length - 1; i++) {
//   if (max < Number(convert[i])) {
//     max = Number(convert[i]);
//   }
// }
// console.log(max);
//==========================================
//bài 7:= bài 1:
// them code
//bài 7:= bài 2:
// let a = prompt("nhập số bất kì");
// let mang = a.split("");
// console.log(mang);
// for (i = 0; i <= mang.length - 2; i++) {
//   if (mang[i] % 2 == 0 && mang[i + 1] % 2 == 0) {
//     i = i + 1;
//     mang.splice(i, 0, "-");
//   }
// }
// console.log(mang.join("")); // đưa mảng thành chuỗi "" để trống hoặc k

//bài 7:= bài 3:
// let A = "Keep Calm And Code On";
// let B = "";
// for (let i = 0; i <= A.length - 1; i++) {
//   if (A[i].toUpperCase() === A[i]) { // upperCase chữ thường=>hoa
//     B = B + A[i].toLowerCase();      // upperCase chữ thường=>hoa
//   } else {
//     B = B + A[i].toUpperCase();
//   }
// }
// console.log(B);

//===========================================
// bài 8:  Viết một chương trình JavaScript để nối tất cả
// các phần tử trong một mảng chuỗi lại với nhau. Ví dụ có mảng chuỗi như sau:
// let english = ["apple", "lady", "baby", "crazy", "may", "lazy"];
// let viet = ["táo", "quý cô", "em bé", "điên", "tháng năm", "lười"];

// let nhap = prompt("hãy nhập từ bạn muốn tra");
// let check = false;
// let daura = "";
// for (i = 0; i <= english.length - 1; i++) {
//   if (nhap == english[i]) {
//     check = true;
//     daura = viet[i];
//   }
// }
// if ((check = true)) {
//   alert("chữ bạn cần tìm là " + daura);
// } else {
//   alert("không tìm thấy ");
// }

//===============================================

// // bải 9:
// let todoList = ["go to bed at 11pm", "do homework at 8pm"];
// let CRUD = prompt("nhập mã bạn muốn");
// if (CRUD == "C") {
//   let nhap = prompt("NHẬP phần bạn muốn thêm");
//   todoList.push(nhap);
//   console.log(todoList);
// }

// if (CRUD == "R") {
//   console.log(todoList);
// }

// if (CRUD == "U") {
//   let a = +prompt("vị trí phần tử muốn update");
//   let b = prompt("nội dung muốn update ");
//   todoList.splice(a, 1, b);
//   console.log(todoList);
// }

// if (CRUD == "D") {
//   let a = +prompt("vị trí phần tử muốn xóa");
//   todoList.splice(a, 1);
//   console.log(todoList);
// }
// if (CRUD !== "C" || CRUD !== "R" || CRUD !== "U" || CRUD !== "D") {
//   alert("vui lòng nhập lại");
// }

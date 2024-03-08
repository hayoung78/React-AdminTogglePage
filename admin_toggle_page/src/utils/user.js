const createUsers = () => {
    const users = [];
    for (let i = 1; i <= 200; i++) {
        const user = {
            id: i,
            name: createName(),
            birth: createBirth(),
            phone: createPhoneNum(),
            lastLoginDate: createLastLogin(),
        };
        users.push(user);
    }

    return users;
};

export default createUsers;
const firstName = [
    "김",
    "최",
    "이",
    "황",
    "장",
    "조",
    "강",
    "백",
    "박",
    "신",
    "안",
    "권",
    "허",
    "정",
    "윤",
    "은",
    "임",
    "성",
];
const lastName = [
    "하영",
    "진솔",
    "성룡",
    "지영",
    "영록",
    "윤신",
    "채윤",
    "진욱",
    "지한",
    "윤수",
    "은선",
    "정남",
    "석진",
    "가영",
    "은하",
    "로이",
    "이로",
];
const createName = () => {
    const randomFirstName =
        firstName[Math.floor(Math.random() * firstName.length)];
    const randomLastName =
        lastName[Math.floor(Math.random() * lastName.length)];
    return randomFirstName + randomLastName;
};
const createBirth = () => {
    const year = Math.floor(Math.random() * (2002 - 1970 + 1)) + 1980;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
};
const createPhoneNum = () => {
    const phoneNumber =
        "010-" +
        Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0") +
        "-" +
        Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0");
    return phoneNumber;
};
const createLastLogin = () => {
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * 5) + currentYear - 4; // 최근 5년 이내의 랜덤한 연도
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const randomMillisecond = Math.floor(Math.random() * 1000);
    return `${randomYear}.${randomMonth}.${randomDay}. ${randomHour}:${randomMinute}:${randomMillisecond}`;
};

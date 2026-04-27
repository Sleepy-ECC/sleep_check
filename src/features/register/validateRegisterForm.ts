type RegisterFormValues = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export function validateRegisterForm({ displayName, email, password, confirmPassword }: RegisterFormValues) {
    if (!displayName || !email || !password || !confirmPassword) {
        return "すべての項目を入力してください。";
    }

    if (password.length < 8) {
        return "パスワードは8文字以上で入力してください。";
    }

    if (password !== confirmPassword) {
        return "パスワードが一致しません。";
    }

    return "";
}

type LoginFormValues = {
    email: string;
    password: string;
};

export function validateLoginForm({ email, password }: LoginFormValues) {
    if (!email || !password) {
        return "メールアドレスとパスワードを入力してください。";
    }

    return "";
}

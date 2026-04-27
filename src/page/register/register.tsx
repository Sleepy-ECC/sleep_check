import { Link } from "@tanstack/react-router";
import AuthField from "../../components/AuthField/AuthField";
import { AuthForm } from "../../components/AuthForm/AuthForm";

function Register() {
    return (
        <AuthForm
            title="新規登録"
            ariaLabel="新規登録"
            submitText="アカウント作成"
            secondaryAction={
                <Link className="cancel_btn" to="/">
                    キャンセル
                </Link>
            }
        >
            <AuthField label="名前" type="text" placeholder="ひつじぃ" autoComplete="name" />
            <AuthField label="メールアドレス" type="email" placeholder="example@sleep.com" autoComplete="email" />
            <AuthField label="パスワード" type="password" placeholder="8文字以上" autoComplete="new-password" showPasswordToggle />
            <AuthField
                label="パスワード（確認）"
                type="password"
                placeholder="パスワードを再入力"
                autoComplete="new-password"
                showPasswordToggle
            />
        </AuthForm>
    );
}

export default Register;

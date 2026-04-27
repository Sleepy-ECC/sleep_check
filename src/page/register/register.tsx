import { Link } from "@tanstack/react-router";
import AuthField from "../../components/AuthField/AuthField";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useRegisterForm } from "../../hooks/useRegisterForm";

function Register() {
    const { error, handleSubmit, isSubmitting } = useRegisterForm();

    return (
        <AuthForm
            title="新規登録"
            ariaLabel="新規登録"
            submitText="アカウント作成"
            error={error}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            secondaryAction={
                <Link className="cancel_btn" to="/">
                    キャンセル
                </Link>
            }
        >
            <AuthField label="名前" name="displayName" type="text" placeholder="ひつじぃ" autoComplete="name" />
            <AuthField label="メールアドレス" name="email" type="email" placeholder="example@sleep.com" autoComplete="email" />
            <AuthField
                label="パスワード"
                name="password"
                type="password"
                placeholder="8文字以上"
                autoComplete="new-password"
                showPasswordToggle
            />
            <AuthField
                label="パスワード（確認）"
                name="confirmPassword"
                type="password"
                placeholder="パスワードを再入力"
                autoComplete="new-password"
                showPasswordToggle
            />
        </AuthForm>
    );
}

export default Register;

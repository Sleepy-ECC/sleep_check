import { Link } from "@tanstack/react-router";
import AuthField from "../../components/AuthField/AuthField";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useLoginForm } from "../../hooks/useLoginForm";
import "./login.css";

function Login() {
    const { error, handleSubmit, isSubmitting } = useLoginForm();

    return (
        <AuthForm
            title="おかえりなさい"
            ariaLabel="ログイン"
            submitText="ログイン"
            error={error}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            submitClassName="login_submit_btn"
            secondaryAction={
                <Link className="cancel_btn" to="/">
                    キャンセル
                </Link>
            }
            footer={
                <p className="register_guidance">
                    アカウントお持ちでないですか？
                    <Link to="/register">新規登録</Link>
                </p>
            }
        >
            <AuthField label="メールアドレス" name="email" type="email" placeholder="example@sleep.com" autoComplete="email" />
            <AuthField
                label="パスワード"
                name="password"
                type="password"
                placeholder="パスワードを入力"
                autoComplete="current-password"
                className="password_field"
                showPasswordToggle
                after={
                    <Link className="forgot_password_link" to="/">
                        パスワードをお忘れですか？
                    </Link>
                }
            />
        </AuthForm>
    );
}

export default Login;

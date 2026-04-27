import { Link } from "@tanstack/react-router";
import AuthField from "../../components/AuthField/AuthField";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import "./login.css";

function Login() {
    return (
        <AuthForm
            title="おかえりなさい"
            ariaLabel="ログイン"
            submitText="ログイン"
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
            <AuthField label="メールアドレス" type="email" placeholder="example@sleep.com" autoComplete="email" />
            <AuthField
                label="パスワード"
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

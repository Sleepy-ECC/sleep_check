import type { ReactNode } from "react";
import "./AuthForm.css";

type AuthFormProps = {
    title: string;
    ariaLabel: string;
    submitText: string;
    children: ReactNode;
    secondaryAction?: ReactNode;
    footer?: ReactNode;
    submitClassName?: string;
};

export function AuthForm({ title, ariaLabel, submitText, children, secondaryAction, footer, submitClassName = "" }: AuthFormProps) {
    return (
        <main className="auth_page">
            <form className="auth_form" aria-label={ariaLabel}>
                <h1>{title}</h1>
                {children}
                <button className={`auth_submit_btn ${submitClassName}`.trim()} type="submit">
                    {submitText}
                </button>
                {secondaryAction}
                {footer}
            </form>
        </main>
    );
}
